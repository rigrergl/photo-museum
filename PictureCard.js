const template = document.createElement('template');
template.innerHTML = `
    <style>
        #mainBody {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        #imageWrapper {
            background: white;
            height: 90%;
            width: 90%;
            padding: 4%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        img {
            max-height: 100%;
            max-width: 100%;
        }
    </style>
    <div id="mainBody">
        <h2></h2>
        <div id="imageWrapper">
            <img alt="image">
        </div>
    </div>
`;

class PictureCard extends HTMLElement {
    /**
     * Attributes
     * title: picture title
     * src: source for the picture
     */

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('img').src = this.getAttribute('src');
    }
}

window.customElements.define('picture-card', PictureCard);