// Copy Button Component

// Usage: <copy-button copy-id="id"></copy-button>


class CopyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const copyContent = this.getAttribute('copy-content');

        // Create a button with an image that is the copy icon. Rounded corners and a white background.
        // When clicked, it copies the text from the <code> element that has the copy-id.

        const button = document.createElement('button');
        button.classList.add('copy-button');
        button.style.marginTop = '2px';
        button.style.paddingTop = '7px';
        button.style.paddingBottom = '2px';
        button.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '5px';
        button.style.transition = '0.25s ease-in-out';

        // Add hover effect to change background color opacity
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgba(150, 150, 150, 0.5)';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        });

        const image = document.createElement('img');
        image.src = new URL('../assets/copy.png?as=webp', import.meta.url);
        image.alt = 'Copy Icon';
        image.style.width = '20px';
        image.style.height = '20px';
        image.style.filter = 'opacity(0.75) invert(1)';
        button.appendChild(image);

        button.addEventListener('click', () => {
            if (copyContent) {
                navigator.clipboard.writeText(copyContent);
                // Change icon to checkmark on click
                image.src = new URL('../assets/checkmark.png?as=webp', import.meta.url);
                image.alt = 'Checkmark Icon';

                // Change icon back to copy image after 2 seconds
                setTimeout(() => {
                    image.src = new URL('../assets/copy.png?as=webp', import.meta.url);
                    image.alt = 'Copy Icon';
                }, 1000);
            }
        });

        this.shadowRoot.appendChild(button);

    }
}

customElements.define('copy-button', CopyButton);