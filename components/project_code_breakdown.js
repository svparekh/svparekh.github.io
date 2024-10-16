// Project Tag Component

// Usage: <project-code-breakdown project="trackify"><project-code-breakdown>



class ProjectCodeBreakdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    ocac
    connectedCallback() {
        const values = JSON.parse(this.getAttribute('values') || '[100]');
        const names = JSON.parse(this.getAttribute('names') || '["Python"]');
        const colors = JSON.parse(this.getAttribute('colors') || '["#000000bb"]');
        const size = this.getAttribute('size') || 'small'; // small and large
        var barHeight = 8;
        var svgWidth = 16;
        var pathStr = 'M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z';
        var fontSize = 12;
        if (size == 'large') {
            barHeight = 10;
            svgWidth = 24;
            pathStr = 'M8 4a5 5 0 1 1 0 8 5 5 0 0 1 0-8Z';
            fontSize = 14;
        }

        // Create the code split bar
        const mainBar = document.createElement('span');
        mainBar.style.width = '100%';
        mainBar.style.height = barHeight.toString() + 'px';
        mainBar.style.display = 'flex';
        mainBar.style.outline = '1px solid #0000';
        mainBar.style.overflow = 'hidden';
        mainBar.style.borderRadius = (barHeight / 2).toString() + 'px';
        mainBar.style.backgroundColor = '#b3b3b3';
        mainBar.style.color = 'white';
        mainBar.style.textAlign = 'center';

        for (let i = 0; i < values.length; i++) {
            const fraction = document.createElement('span');
            fraction.style.width = values[i] + '%';
            fraction.style.height = '100%';
            fraction.style.backgroundColor = colors[i];
            fraction.style.float = 'left';
            mainBar.appendChild(fraction);
        }

        // Create the bar holding div
        const barDiv = document.createElement('div');
        barDiv.style.display = 'flex';
        barDiv.style.marginTop = '1rem';
        barDiv.style.marginBottom = '0.5rem';
        barDiv.style.justifyContent = 'center';
        barDiv.appendChild(mainBar);

        // Create the legend
        const legendList = document.createElement('ul');
        legendList.style.paddingLeft = '0';
        legendList.style.marginBottom = '0.5rem';
        legendList.style.marginTop = '0.25rem';
        legendList.style.fontFamily = 'Charmonman';

        for (let i = 0; i < values.length; i++) {
            const legendListItem = document.createElement('li');
            legendListItem.style.display = 'inline';  // !important
            const span = document.createElement('span');
            span.style.alignItems = 'center';  // !important
            span.style.display = 'inline-flex';  // !important
            span.style.fontSize = '12px';
            const coloredDotSvg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            coloredDotSvg.setAttributeNS(null, 'style', 'color: ' + colors[i] + '; display: inline-block; overflow: visible; vertical-align: text-bottom; fill: ' + colors[i] + ';');
            coloredDotSvg.setAttributeNS(null, 'aria-hidden', 'true');
            coloredDotSvg.setAttributeNS(null, 'height', '16');
            coloredDotSvg.setAttributeNS(null, 'viewBox', '0 0 16 16');
            coloredDotSvg.setAttributeNS(null, 'version', '1.1');
            coloredDotSvg.setAttributeNS(null, 'width', svgWidth.toString());
            coloredDotSvg.setAttributeNS(null, 'data-view-component', 'true');
            coloredDotSvg.classList.add('octicon', 'octicon-dot-fill', 'mr-2');
            const coloredDotPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            coloredDotPath.setAttribute('d', pathStr);
            coloredDotSvg.appendChild(coloredDotPath);
            span.appendChild(coloredDotSvg);
            const text = document.createElement('span');
            text.classList.add('color-fg-default', 'text-bold', 'mr-1');
            text.style.fontSize = fontSize.toString() + 'px';
            text.textContent = names[i] + ' ' + values[i].toFixed(1) + '%';
            span.appendChild(text);
            // const percent = document.createElement('span');
            // percent.textContent = values[i] + '%';
            // span.appendChild(percent);
            legendListItem.appendChild(span);
            legendList.appendChild(legendListItem);
        }

        const mainElement = document.createElement('div');
        mainElement.style.marginBottom = '1.5rem';
        mainElement.appendChild(barDiv);
        mainElement.appendChild(legendList);
        this.shadowRoot.appendChild(mainElement);
    }
}

customElements.define('project-code-breakdown', ProjectCodeBreakdown);