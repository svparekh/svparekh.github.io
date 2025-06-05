// Project Link Component

// Usage: <project-link url="https://"></project-link>

class ProjectLink extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const url = this.getAttribute('url') || 'Tag';

        // div (hor)
        //   div (hor)
        //     img
        //     div (vert)
        //       text
        //       text
        //   img
        const mainDiv = document.createElement('a');
        mainDiv.href = url;
        mainDiv.target = '_blank';
        mainDiv.rel = 'noopener noreferrer';
        mainDiv.style.textDecoration = 'none';
        mainDiv.style.display = 'flex';
        mainDiv.style.transition = 'all 300ms ease 0s';
        mainDiv.style.justifyContent = 'space-between';
        mainDiv.style.alignItems = 'center';
        mainDiv.style.cursor = 'pointer';
        mainDiv.style.borderRadius = '1rem';
        mainDiv.style.backgroundColor = 'var(--c-project-secondary)';
        mainDiv.style.color = '#444';
        // mainDiv.style.border = 'var(--b-outline)';

        const leftDiv = document.createElement('div');
        leftDiv.style.display = 'flex';
        leftDiv.style.alignItems = 'center';

        const linkImg = document.createElement('img');
        linkImg.src = url + '/favicon.ico';
        linkImg.style.marginLeft = '10px';
        linkImg.style.height = '50px';
        linkImg.style.transition = 'all 300ms ease 0s';

        const textDiv = document.createElement('div');
        textDiv.display = 'flex';
        textDiv.style.marginLeft = '1rem';
        textDiv.style.justifyContent = 'space-around';
        textDiv.style.fontFamily = 'Charmonman';
        textDiv.style.transition = 'all 300ms ease 0s';

        const title = document.createElement('p');
        title.textContent = "Live Demo";
        title.style.fontWeight = 'bold';
        title.style.fontSize = '17px';
        title.style.textAlign = 'left';
        title.style.margin = '16px 0 0 0';

        const link = document.createElement('p');
        link.textContent = url;
        link.style.fontSize = '13px';
        link.style.textAlign = 'left';
        link.style.overflow = 'hidden';
        link.style.textOverflow = 'ellipsis';
        link.style.margin = '0 0 16px 0';

        const linkIcon = document.createElement('img');
        linkIcon.src = new URL('../assets/link.png?as=webp', import.meta.url);
        linkIcon.style.height = '30px';
        linkIcon.style.marginRight = '25px';
        linkIcon.style.filter = 'opacity(0.5)';
        linkIcon.style.transition = 'all 300ms ease 0s';

        // hover functionality
        mainDiv.addEventListener('mouseover', () => {
            mainDiv.style.backgroundColor = 'rgb(221, 215, 200)';
            // mainDiv.style.border = 'rgb(221, 215, 200) 1px solid';
            // linkIcon.style.filter = 'invert(1)';
            // linkImg.style.filter = 'brightness(0.4);';
            // textDiv.style.color = 'var(--c-text-light)';
        });
        mainDiv.addEventListener('mouseout', () => {
            mainDiv.style.backgroundColor = 'var(--c-project-secondary)';
            // mainDiv.style.border = 'var(--b-outline)';
            // linkIcon.style.filter = 'invert(0)';
            // linkImg.style.filter = 'invert(0)';
            // textDiv.style.color = 'var(--c-text-dark)';
        });

        textDiv.appendChild(title);
        textDiv.appendChild(link);

        leftDiv.appendChild(linkImg);
        leftDiv.appendChild(textDiv);

        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(linkIcon);

        // // Get the translate container element
        // const translateContainer = mainDiv;

        // // Define the styles
        // const styles = {
        //     border: 'var(--b-outline)',
        //     background: 'var(--c-bg-op)',
        //     transition: 'all 150ms ease-in-out',
        //     borderRadius: '2rem',
        //     textAlign: 'center',
        //     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        //     backdropFilter: 'blur(20px)',
        //     transform: 'translate(0, 0)',
        // };

        // // Apply the styles to the translate container
        // Object.assign(translateContainer.style, styles);

        // // Define the hover styles
        // const hoverStyles = {
        //     cursor: 'pointer',
        //     boxShadow: '5px 5px 0 var(--c-primary), 10px 10px 0 var(--c-primary-dark)',
        //     border: 'var(--c-primary-light) 0.25rem solid',
        //     transform: 'translate(-10px, -10px)',
        // };

        // // Define the active styles
        // const activeStyles = {
        //     boxShadow: 'none',
        //     transform: 'translate(0, 0)',
        // };

        // // Add event listeners for hover and active states
        // translateContainer.addEventListener('mouseover', () => {
        //     Object.assign(translateContainer.style, hoverStyles);
        // });

        // translateContainer.addEventListener('mouseout', () => {
        //     Object.assign(translateContainer.style, styles);
        // });

        // translateContainer.addEventListener('mousedown', () => {
        //     Object.assign(translateContainer.style, activeStyles);
        // });

        // translateContainer.addEventListener('mouseup', () => {
        //     Object.assign(translateContainer.style, hoverStyles);
        // });


        this.shadowRoot.appendChild(mainDiv);
    }
}

customElements.define('project-link', ProjectLink);