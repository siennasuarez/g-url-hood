document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.display = 'none';
        attachLinkEventListeners();
    }, 3000);
});

function attachLinkEventListeners() {
    const iframe = document.getElementById('UserView');
    if (iframe.contentWindow.document.readyState === 'complete') {
        setEventListeners(iframe);
    } else {
        iframe.onload = () => setEventListeners(iframe);
    }
}

function setEventListeners(iframe) {
    const links = iframe.contentWindow.document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            if (!window.popupInterval) {
                openPopup();
                startPopupSequence();
            }
        });
    });
}

const popupContent = [
    {
        type: 'image',
        content: '<img src="./medias/IMG_7784.jpg" alt="prettyscale"'
    },
    {
        type: 'image',
        content: '<img src="./medias/testpretty.jpg" alt="prettyscale"'
    },
    {
        type: 'image',
        content: '<img src="./medias/IMG_7785.jpg" alt="skincare"'
    },
    {
        type: 'image',
        content: '<img src="./medias/IMG_7782.jpg" alt="twitter"'
    },
    {
        type: 'image',
        content: '<img src="./medias/IMG_7781.jpg" alt="twitter"'
    },
    {
        type: 'image',
        content: '<img src="./medias/IMG_7778.jpg" alt="twitter"'
    },
    {
        type: 'image',
        content: '<img src="./medias/IMG_7779.jpg" alt="twitter"'
    },
    {
        type: 'image',
        content: '<img src="./medias//IMG_7777.jpg" alt="twitter"'
    },
     {
        type: 'image',
        content: '<img src="./medias//IMG_7776.jpg" alt="twitter"'
    },
    {
        type: 'image',
        content: '<img src="./medias//IMG_7775.jpg" alt="twitter"'
    },
     {
        type: 'image',
        content: '<img src="./medias//IMG_7773.jpg" alt="twitter"'
    },
     {
        type: 'image',
        content: '<img src="./medias//IMG_7770.jpg" alt="twitter"'
    },

];

function randomize() {
    const randomIndex = Math.floor(Math.random() * popupContent.length);
    return popupContent[randomIndex].content;
}

function startPopupSequence() {
    window.popupInterval = setInterval(() => {
        openPopup();
    }, 3000); 
}

function openPopup() {
    const screenW = window.screen.width;
    const screenH = window.screen.height;
    const popupWidth = 300;
    const popupHeight = 200;
    const left = Math.floor(Math.random() * (screenW - popupWidth));
    const top = Math.floor(Math.random() * (screenH - popupHeight));

    const popup = window.open("", "_blank", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    if (!popup) {
        console.log('currently pop-ups are blocked! please enable pop-ups for the site to work :)');
        clearInterval(window.popupInterval);  
        return;
    }

    popup.document.write(`
        <style>
            body { 
                font-family: Times New Roman; 
                margin: 0; 
                background: white; 
                overflow: auto; 
            }
            .popup-header { 
                background: #CFF8F8; 
                color: white; 
                padding: 5px; 
                cursor: move; 
            }
            .popup-content { 
                padding: 10px; 
            }
            .popup-content img {
                max-width: 100%; /* Ensure images do not exceed the width of the popup */
                height: auto; /* Maintain aspect ratio */
            }
            .close-btn { 
                background: red; 
                color: white; 
                padding: 3px 5px; 
                cursor: pointer; 
            }
        </style>
        <div class="popup-header">
            <span class="close-btn" onclick="window.open('about:blank','_self').close();">X</span>
        </div>
        <div class="popup-content">
            ${randomize()}
        </div>
    `);

    popup.onbeforeunload = function() {
    };
}


