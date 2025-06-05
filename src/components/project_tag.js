// Project Tag Component

// Usage: <project-tag text="Docker" color="blue"></project-tag>
// Example:
// <project-tags-container>
//   <project-tag>
//   <project-tag>
//   ...
// </project-tags-container>
class ProjectTag extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const text = this.getAttribute('text') || 'Tag';
        const color = this.getAttribute('color');
        const size = this.getAttribute('size') || 'small'; // small and large
        var fontSize = 12;
        var fontWeight = 'bold';
        if (size == 'large') {
            fontSize = 16;
            fontWeight = 'normal';
        }
        var textColor;
        var bgColor;

        switch (color) {
            case 'red':
                textColor = 'rgb(208, 50, 50';
                bgColor = 'rgba(208, 25, 25, 0.25)';
                break;
            case 'blue':
                textColor = '#1a41cd';
                bgColor = 'rgba(178, 178, 253, 0.25)';
                break;
            case 'green':
                textColor = '#4d7334';
                bgColor = 'rgba(191, 227, 114, 0.25)';
                break;
            case 'yellow':
                textColor = '#ff0000';
                bgColor = '#e0e0e0';
                break;
            case 'magenta':
                textColor = 'rgb(85, 27, 177)';
                bgColor = 'rgba(165, 96, 247, 0.25)';
                break;
            case 'cyan':
                textColor = '#ff0000';
                bgColor = '#e0e0e0';
                break;
            case 'white':
                textColor = '#ff0000';
                bgColor = '#e0e0e0';
                break;
            case 'black':
                textColor = '#ff0000';
                bgColor = '#e0e0e0';
                break;
            default: // gray
                textColor = '#ff0000';
                bgColor = '#e0e0e0';
                break;
        }

        const tagElement = document.createElement('span');
        tagElement.textContent = text;
        tagElement.style.padding = '0.4em 1.4em'; // /2
        tagElement.style.borderRadius = '15px';
        tagElement.style.fontWeight = fontWeight;
        tagElement.style.fontSize = fontSize.toString() + 'px';
        tagElement.style.letterSpacing = '-0.6px';
        tagElement.style.backgroundColor = bgColor;
        tagElement.style.color = textColor;
        tagElement.style.display = 'inline-block';

        this.shadowRoot.appendChild(tagElement);
    }
}

customElements.define('project-tag', ProjectTag);