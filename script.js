/* ================================================================
   G(url)Hood — Sienna Suarez, 2026: script.js 
   ================================================================ */

// ── CLOCK CLOCK CLOCK ──────────────────────────────────────────────
function updateClock() {
  const clock = document.getElementById('taskbarClock');
  if (!clock) return;
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  clock.textContent = h + ':' + m;
}
setInterval(updateClock, 1000);
updateClock();

// ── SPLASH REMOVAL─
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    if (splash) splash.style.display = 'none';
  }, 3900);
});

// ─drag window optionn
let highestZ = 200;

function makeDraggable(win) {
  const titleBar = win.querySelector('.windowTitleBar');
  if (!titleBar) return;
  let dragging = false, offX = 0, offY = 0;

  titleBar.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('winBtn')) return;
    dragging = true;
    offX = e.clientX - win.offsetLeft;
    offY = e.clientY - win.offsetTop;
    bringToFront(win);
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    let nx = e.clientX - offX;
    let ny = e.clientY - offY;
    nx = Math.max(0, Math.min(nx, window.innerWidth - 60));
    ny = Math.max(0, Math.min(ny, window.innerHeight - 60));
    win.style.left = nx + 'px';
    win.style.top  = ny + 'px';
  });

  document.addEventListener('mouseup', () => { dragging = false; });
  win.addEventListener('mousedown', () => bringToFront(win));
}

function bringToFront(win) {
  highestZ++;
  win.style.zIndex = highestZ;
}

document.querySelectorAll('.window').forEach(makeDraggable);

// ── window contrls
document.querySelectorAll('.winBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const winId = btn.getAttribute('data-window');
    const win   = document.getElementById(winId);
    if (!win) return;

    if (btn.classList.contains('close')) {
      win.style.display = 'none';
    } else if (btn.classList.contains('minimize')) {
      win.style.display = 'none';
    } else if (btn.classList.contains('maximize')) {
      if (win.dataset.maximized === 'true') {
        win.style.width  = win.dataset.prevW;
        win.style.height = win.dataset.prevH;
        win.style.top    = win.dataset.prevTop;
        win.style.left   = win.dataset.prevLeft;
        win.dataset.maximized = 'false';
      } else {
        win.dataset.prevW    = win.style.width;
        win.dataset.prevH    = win.style.height;
        win.dataset.prevTop  = win.style.top;
        win.dataset.prevLeft = win.style.left;
        win.style.width  = '96vw';
        win.style.height = '88vh';
        win.style.top    = '10px';
        win.style.left   = '2vw';
        win.dataset.maximized = 'true';
      }
    }
  });
});

// ──icons to open ───────────────────────────────
document.querySelectorAll('.desktopIcon').forEach(icon => {
  icon.addEventListener('dblclick', () => {
    const winId = icon.getAttribute('data-window');
    if (!winId) return;
    const win = document.getElementById(winId);
    if (!win) return;
    win.style.display = 'flex';
    win.style.flexDirection = 'column';
    bringToFront(win);
  });
});

// ── clicks that do nothing (intentional) ────
document.querySelectorAll('.falseAffordance').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // nothing. that's the point.
  });
});

// ── comment section  
const comments = [
  { text: "user1: beauty 101: hor(moan)e speedrun has me giggling already.", cls: "" },
  { text: "user2: not the glow-up tutorial calling me a brick 😭", cls: "" },
  { text: "user3: okay but the skincare tips are eating. my face is entering its soft era.", cls: "" },
  { text: "user4: i came for trans beauty advice and stayed for the chaos.", cls: "" },
  { text: "user5: the confidence section is cute. i fear my dysphoria needed this.", cls: "" },
  { text: "user6: wait, are we talking hormones, skincare, voice, surgery, or all of the above?", cls: "" },
  { text: "user7: this feels like a makeover video made by a sleep-deprived dolls group chat.", cls: "" },
  { text: "user8: becoming prettier sounds fun until the algorithm starts yelling at me.", cls: "" },
  { text: "user9: why does every feminizing tip somehow become a full-time job?", cls: "" },
  { text: "user10: trying to stay positive, but passing culture is doing too much.", cls: "" },

  { text: "user11: the title is funny, but being called a brick kinda hurt my feelings.", cls: "dark" },
  { text: "user12: why does trans self-improvement always start with making us feel clocky first?", cls: "dark" },
  { text: "user13: some of this advice feels helpful, but some of it feels like dysphoria in a cute outfit.", cls: "dark" },
  { text: "user14: the surgery part is making me question every feature on my face.", cls: "dark" },
  { text: "user15: i laughed at first, but now i’m comparing myself to every girl on my feed again.", cls: "dark" },

  { text: "user16: this is giving positivity with a side of dysphoria.", cls: "darker" },
  { text: "user17: calling trans girls bricks and then selling beauty advice is wild.", cls: "darker" },
  { text: "user18: these videos always act like womanhood is a checklist you have to complete.", cls: "darker" },
  { text: "user19: the hormone jokes are funny until people start treating our bodies like projects to fix.", cls: "darker" },
  { text: "user20: i hate how fast this went from silly to making me feel behind in my transition.", cls: "darker" },

  { text: "user21: why do i feel like i need a new face after watching this?", cls: "darkest" },
  { text: "user22: this whole passing culture is exhausting. there’s always another thing to change.", cls: "darkest" },
  { text: "user23: i want to feel pretty, but content like this makes me feel unfinished.", cls: "darkest" },
  { text: "user24: the more i scroll, the more i feel like my natural face is a problem.", cls: "darkest" },
  { text: "user25: surgery being framed like a casual beauty hack is making me uncomfortable.", cls: "darkest" },
  { text: "user26: this is funny, but also kinda cruel. trans girls are already insecure.", cls: "darkest" },
  { text: "user27: why does passing have to feel like a competition?", cls: "darkest" },
  { text: "user28: the internet turned gender euphoria into self-surveillance.", cls: "darkest" },
  { text: "user29: i miss when femininity felt playful instead of mandatory.", cls: "darkest" },
  { text: "user30: this is the kind of content that makes dolls laugh while quietly feeling worse.", cls: "darkest" },
  { text: "user31: i know it’s a joke, but it still makes me check the mirror differently.", cls: "darkest" },
  { text: "user32: every tip feels like a reminder that i’m not feminine enough yet.", cls: "darkest" },
  { text: "user33: trans beauty advice should help, not make everyone feel like a before picture.", cls: "darkest" },
  { text: "user34: the positive tone makes the negative message hit even harder.", cls: "darkest" },
  { text: "user35: i’m tired of pretending this content is harmless because it’s funny.", cls: "darkest" },
  { text: "user36: the joke is cute, but the pressure behind it is heavy.", cls: "darkest" },
  { text: "user37: this speedrun feels like a crash course in hating yourself politely.", cls: "darkest" },
  { text: "user38: i want beauty content that makes me feel like a girl, not like a project.", cls: "darkest" },
  { text: "user39: feeling trapped, but i keep watching because the chaos is addictive.", cls: "darkest" },
  { text: "user40: beauty 101 ended up feeling more like dysphoria 101.", cls: "darkest" },
];

let commentIndex = 0;
function dropNextComment() {
  const feed = document.getElementById('commentFeed');
  if (!feed || commentIndex >= comments.length) return;
  const c = comments[commentIndex];
  const p = document.createElement('p');
  p.textContent = c.text;
  if (c.cls) p.classList.add(c.cls);
  feed.appendChild(p);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { p.classList.add('visible'); });
  });
  feed.scrollTop = feed.scrollHeight;
  commentIndex++;
}
setTimeout(() => {
  setInterval(dropNextComment, 1200);
}, 4500);

// ── INTRUSIVE THOUGHTS POP-UPS </3 ──────────────────────────────────

const MAX_POPUPS = 50;
let popupCount = 0;
let popupIntervalId = null;


const orderedPopups = [
  { type: 'text', title: 'just a thought',  body: 'Do they know? Can they tell?' },
  { type: 'image', content: '<img src="./medias/IMG_7784.jpg" alt="">' },
  { type: 'text', title: 'just a thought',  body: 'Someone is looking at you. What do they see?' },
  { type: 'image', content: '<img src="./medias/testpretty.jpg" alt="">' },
  { type: 'text', title: 'REMINDER',        body: 'Are you passing right now? Be honest.' },
  { type: 'image', content: '<img src="./medias/IMG_7785.jpg" alt="">' },
  { type: 'text', title: 'just a thought',  body: 'If you looked more feminine, would people be kinder?' },
  { type: 'image', content: '<img src="./medias/IMG_7782.jpg" alt="">' },
  { type: 'text', title: 'REMINDER',        body: 'Dating: do you tell them before? During? What if they react badly?' },
  { type: 'image', content: '<img src="./medias/IMG_7781.jpg" alt="">' },
  { type: 'text', title: 'just a thought',  body: 'You are extremely visible right now. You are also completely invisible.' },
  { type: 'image', content: '<img src="./medias/IMG_7778.jpg" alt="">' },
  { type: 'text', title: 'REMINDER',        body: 'Insurance denied the procedure. Again. There is nothing to do but wait.' },
  { type: 'image', content: '<img src="./medias/IMG_7779.jpg" alt="">' },
  { type: 'text', title: '⚠️ ALERT',        body: 'New executive order signed. This affects you. Read it when you can emotionally afford to.' },
  { type: 'image', content: '<img src="./medias/IMG_7777.jpg" alt="">' },
  { type: 'text', title: 'just a thought',  body: 'How much of your brain power is spent on just existing safely? How much is left for everything else?' },
  { type: 'image', content: '<img src="./medias/IMG_7776.jpg" alt="">' },
  { type: 'text', title: '⚠️ ALERT',        body: 'The federal government has introduced another bill targeting trans healthcare. Your rights are not permanent.' },
  { type: 'image', content: '<img src="./medias/IMG_7775.jpg" alt="">' },
  { type: 'text', title: 'REMINDER',        body: 'Dysphoria check-in. Look in the mirror. What do you see? Be honest.' },
  { type: 'image', content: '<img src="./medias/IMG_7773.jpg" alt="">' },
  { type: 'text', title: 'just a thought',  body: 'What if they find out at work. What do you do then.' },
  { type: 'image', content: '<img src="./medias/IMG_7770.jpg" alt="">' },
  { type: 'text', title: '⚠️ ALERT',        body: 'Another trans woman was attacked last week. Her name was—' },
  { type: 'text', title: 'REMINDER',        body: 'Your parents still haven\'t called. It has been 14 months.' },
  { type: 'text', title: 'just a thought',  body: 'What if the meds stop working. What if the meds stop working. What if—' },
  { type: 'text', title: '⚠️ ALERT',        body: 'When is the surgery? When is the surgery? When is the surgery? When is—' },
  { type: 'text', title: 'REMINDER',        body: 'You burned out again. Rest. But also you can\'t rest. Rent is due. Keep going.' },
  { type: 'text', title: 'just a thought',  body: 'Is this body ever going to feel like mine. Fully. Not just sometimes.' },
  { type: 'text', title: '⚠️ ALERT',        body: 'There is a red bullseye on your back and you cannot take it off.' },
  { type: 'text', title: 'REMINDER',        body: 'You have been financially independent since you were 16. No one is coming to save you. You know that.' },
  { type: 'text', title: 'just a thought',  body: 'What does it cost to just exist as yourself every single day.' },
  { type: 'text', title: '⚠️ ALERT',        body: 'Another state just banned gender-affirming care. That\'s 26 now.' },
  { type: 'text', title: 'REMINDER',        body: 'You are on the verge of burning out. You have been for a while. You keep going anyway.' },
  { type: 'text', title: 'just a thought',  body: 'Romance. The fear of being loved and then not. Of being seen and then not.' },
  { type: 'text', title: '⚠️ ALERT',        body: 'You are not allowed to just be a girl. You have to be a trans girl. Everywhere. Always.' },
  { text: 'REMINDER',        body: 'The little girl standing inside your brain is still looking through your eyes.' },
  { type: 'text', title: 'just a thought',  body: 'You spread yourself so thin. What would it feel like to not be surviving.' },
  { type: 'text', title: 'REMINDER',        body: 'There are two of you: the skin others see, and the girl they don\'t.' },
  { type: 'text', title: 'just a thought',  body: 'Time moves differently for you. You know that. You\'ve always known that.' },
  { type: 'text', title: '⚠️ ALERT',        body: 'They are trying to erase your history. Write it yourself. Keep writing.' },
  { type: 'text', title: 'REMINDER',        body: 'It is not easy to live when you are a trans person.' },
  { type: 'text', title: 'just a thought',  body: 'You have to do the manual labor of closing the negative thoughts. Every day. Every single one.' },
  { type: 'text', title: '⚠️ ALERT',        body: 'Visibility is not safety. You already know this.' },
  { type: 'text', title: 'REMINDER',        body: 'Making this was a kind of self-care. Slow down. Sit with it.' },
  { type: 'text', title: 'just a thought',  body: 'You are still here. That is not nothing. That is everything.' },
  { type: 'text', title: 'REMINDER',        body: 'Transitioning saved your life. Your life has never been better.' },
  { type: 'text', title: '✦',               body: 'I am choosing to write my own history. My own record of existence.' },
  { type: 'text', title: '✦',               body: 'I am grateful for this opportunity to live my truth.' },
];

// ── POPUP TIMING SCHEDULE ─────────────────────────────────────
function getDelayForCount(n) {
  const startMs = 8000;  // first popup: 8 seconds
  const endMs   = 800;   // last popup:  0.8 seconds
  // Exponential decay from startMs to endMs over MAX_POPUPS steps
  const t = n / MAX_POPUPS; // 0 → 1
  return Math.round(startMs * Math.pow(endMs / startMs, t));
}

// ── REAL OS-LEVEL WINDOW POPUPS ────────────────────────────────
function openOSPopup() {
  if (popupCount >= MAX_POPUPS) {
    clearTimeout(popupIntervalId);
    return;
  }

  const screenW = window.screen.width;
  const screenH = window.screen.height;
  const popupW  = 320;
  const popupH  = 220;
  const left    = Math.floor(Math.random() * Math.max(0, screenW - popupW));
  const top     = Math.floor(Math.random() * Math.max(0, screenH - popupH));

  const data      = orderedPopups[popupCount];
  const isImage   = data.type === 'image';
  const titleText = isImage ? '✦ reminder ✦' : data.title;
  const bodyHTML  = isImage
    ? data.content
    : `<p style="font-size:0.88rem;line-height:1.6;">${data.body}</p>`;

  const popup = window.open(
    '',
    '_blank',
    `width=${popupW},height=${popupH},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );

  if (!popup) {
    spawnInPagePopup(data);
  } else {
    popup.document.write(`<!DOCTYPE html><html><head>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Times New Roman', serif; background: white; overflow: auto; }
        .popup-header {
          background: #CFF8F8;
          padding: 5px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #aaa;
          font-size: 0.75rem;
        }
        .close-btn {
          background: red; color: white; border: none;
          padding: 2px 6px; cursor: pointer; font-weight: bold; font-size: 0.7rem;
        }
        .popup-body { padding: 12px; font-size: 0.85rem; line-height: 1.5; }
        .popup-body img { max-width: 100%; height: auto; display: block; }
      </style>
    </head><body>
      <div class="popup-header">
        <span>${titleText}</span>
        <button class="close-btn" onclick="window.close()">X</button>
      </div>
      <div class="popup-body">${bodyHTML}</div>
    </body></html>`);
    popup.document.close();
  }

  popupCount++;

  // Schedule next popup with accelerating delay
  const nextDelay = getDelayForCount(popupCount);
  popupIntervalId = setTimeout(openOSPopup, nextDelay);
}

// Fallback in-page popup if OS popups are blocked
function spawnInPagePopup(data) {
  const overlay = document.getElementById('popupOverlay');
  if (!overlay) return;
  const isImage   = data.type === 'image';
  const titleText = isImage ? '✦ reminder ✦' : data.title;
  const bodyHTML  = isImage ? data.content : `<p>${data.body}</p>`;
  const popup     = document.createElement('div');
  popup.classList.add('thoughtPopup');
  if (isImage) popup.classList.add('imagePopup');
  const maxX = window.innerWidth  - 300;
  const maxY = window.innerHeight - 240;
  popup.style.left = Math.max(10, Math.floor(Math.random() * maxX)) + 'px';
  popup.style.top  = Math.max(10, Math.floor(Math.random() * maxY)) + 'px';
  popup.innerHTML = `
    <div class="popupHeader">
      <span>${titleText}</span>
      <button class="popupClose">X</button>
    </div>
    <div class="popupBody">${bodyHTML}</div>
  `;
  popup.querySelector('.popupClose').addEventListener('click', () => popup.remove());
  overlay.appendChild(popup);
}

function startPopupSequence() {
  if (popupIntervalId) return;
  // First popup fires after initial delay
  popupIntervalId = setTimeout(openOSPopup, getDelayForCount(0));
}

// ── TRIGGER LINKS → start popup chaos ──────────────────────────
setTimeout(() => {
  document.querySelectorAll('.triggerLink').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      startPopupSequence();
    });
  });
  document.querySelectorAll('.mediaThumb.triggerLink').forEach(thumb => {
    thumb.addEventListener('click', () => startPopupSequence());
  });
}, 4000);

// ── AUTO-START after delay — thoughts come whether you invite them or not
setTimeout(() => {
  startPopupSequence();
}, 12000);
