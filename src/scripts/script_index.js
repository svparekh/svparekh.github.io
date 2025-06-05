export function toggleMenu() {
    const menu = document.querySelector(".mini-nav-menu-items");
    const icon = document.querySelector(".mini-nav-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

export function createPopupSideMenuLinksForPortfolio() {
    // get all h2, h3, and h4 tags from html and create a list of their ids
    const sideMenuPopup = document.querySelector('.side-menu-popup');
    const allHeadingIds = ['', 'about', 'experience', 'projects', 'contact'];

    for (let i = 0; i < allHeadingIds.length; i++) {
        const heading = allHeadingIds[i];

        const div = document.createElement('div'); // this is the one with margin left
        div.textContent = heading == '' ? 'home' : heading;
        div.style.paddingRight = '35px';

        const link = document.createElement('a');
        link.style.textDecoration = 'none';
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

export function createSideMenuBarsForPortfolio() {
    // get all h2, h3, and h4 tags from html and create a list of their ids
    const barList = document.querySelector('.side-menu-bars');
    const allHeadingIds = ['', 'about', 'experience', 'projects', 'contact'];

    for (let i = 0; i < allHeadingIds.length; i++) {
        // Create a list item
        const listItem = document.createElement('li');
        listItem.style.alignSelf = 'flex-end';

        // Create a horizontal line instead of text for headings
        const line = document.createElement('hr');
        line.style.border = '1px solid gray';  // Set line style
        line.style.margin = '5px 0px';  // Add some margin for spacing
        line.style.borderRadius = '5px';
        if (allHeadingIds[i] == 'experience') {
            line.style.width = '13.5px';
        }
        else {
            line.style.width = '20px';
        }

        listItem.appendChild(line);
        barList.appendChild(listItem);
    }
}

export function runTextMorphScript() {
    /*
        This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
    */

    const elts = {
        text1: document.getElementById("morph-text1"),
        text2: document.getElementById("morph-text2")
    };

    // The strings to morph between. You can change these to anything you want!
    const texts = [
        "Developer.",
        "Enthusiast.",
        "Engineer.",
        "Programmer.",
        "Backend.",
        // "Designer.",
        // "Architect.",
    ];

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    // A lot of the magic happens here, this is what applies the blur filter to the text.
    function setMorph(fraction) {
        // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
        morph = 0;

        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";

        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    // Animation loop, which is called every frame.
    function animate() {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    }

    // Start the animation.
    animate();
}