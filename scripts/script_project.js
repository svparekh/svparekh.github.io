function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function createReadmeHtml(url) {
    const readmeContainer = document.querySelector(".readme-container");
    const projectTitle = document.querySelector(".project-title");
    const markdownContent = httpGet(url);
    const converter = new Markdown.Converter();

    var html = converter.makeHtml(markdownContent);
    // Get title
    const title = html.slice(0, html.indexOf("\n"));
    // Remove title from readme
    var lines = html.split('\n');
    lines.splice(0, 1);
    var html = lines.join('\n')
    // Add readme and title
    readmeContainer.innerHTML += html;
    projectTitle.innerHTML = title;
}

function createPopupSideMenuLinks() {
    // get all h2, h3, and h4 tags from html and create a list of their ids
    const sideMenuMain = document.querySelector('.side-menu-main');
    const sideMenuPopup = document.querySelector('.side-menu-popup');
    const readmeContainer = document.querySelector(".readme-container");
    const allHeadings = readmeContainer.querySelectorAll('h2, h3, h4');
    const allHeadingIds = Array.from(allHeadings).map(heading => heading.id).filter(id => id);

    for (let i = 0; i < allHeadings.length; i++) {
        const heading = allHeadings[i];
        const headingLevel = parseInt(heading.nodeName.charAt(1));


        const div = document.createElement('div'); // this is the one with margin left
        div.textContent = heading.textContent;
        div.style.paddingRight = '35px';

        if (headingLevel === 2) {
            div.style.marginLeft = '0px';  // Longest line for h2
        } else if (headingLevel === 3) {
            div.style.marginLeft = '10px';   // Shorter line for h3
        } else if (headingLevel === 4) {
            div.style.marginLeft = '20px';   // Shortest line for h4
        }

        const link = document.createElement('a');
        link.href = `#${allHeadingIds[i]}`;
        link.classList.add('clickable');
        //add hover to the link's div
        link.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#00000015';
        });
        link.addEventListener('mouseout', () => {
            div.style.backgroundColor = '#00000000';
        });

        link.appendChild(div);
        sideMenuPopup.appendChild(link);
    }
}

function createSideMenuBars() {
    // get all h2, h3, and h4 tags from html and create a list of their ids
    const barList = document.querySelector('.side-menu-bars');
    const readmeContainer = document.querySelector(".readme-container");
    const allHeadings = readmeContainer.querySelectorAll('h2, h3, h4');

    for (let i = 0; i < allHeadings.length; i++) {
        const heading = allHeadings[i];
        const headingLevel = parseInt(heading.nodeName.charAt(1));

        // Create a list item
        const listItem = document.createElement('li');
        listItem.style.alignSelf = 'flex-end';

        // Create a horizontal line instead of text for headings
        const line = document.createElement('hr');
        line.style.border = '1px solid gray';  // Set line style
        line.style.margin = '5px 0px';  // Add some margin for spacing
        line.style.borderRadius = '5px';

        // Adjust the line width based on heading level
        if (headingLevel === 2) {
            line.style.width = '20px';  // Longest line for h2
        } else if (headingLevel === 3) {
            line.style.width = '13.5px';   // Shorter line for h3
        } else if (headingLevel === 4) {
            line.style.width = '7px';   // Shortest line for h4
        }

        listItem.appendChild(line);
        barList.appendChild(listItem);
    }
}

window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash;
    const headings = document.querySelectorAll('h2, h3, h4');

    headings.forEach(heading => {
        const headingId = `#${heading.id}`;
        if (headingId.toLowerCase() === currentHash) {
            heading.classList.add('side-menu-bar-active');
        } else {
            heading.classList.remove('side-menu-bar-active');
        }
    });
});