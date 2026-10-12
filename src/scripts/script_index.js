export function toggleMenu() {
    const menu = document.querySelector(".mini-nav-menu-items");
    const icon = document.querySelector(".mini-nav-menu-icon");
    const btn = document.querySelector(".mini-nav-menu-icon-container");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    if (!isOpen) {
        const launcher = document.querySelector(".mini-nav-menu-launcher-button");
        const submenu = document.querySelector(".mini-nav-menu-launcher-submenu");
        launcher?.classList.remove("open");
        launcher?.setAttribute("aria-expanded", "false");
        submenu?.classList.remove("open");
    }
    if (btn) {
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        btn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    }
}

const liveDemos = [
    { name: 'Short URL', url: 'https://shorturl.setulp.com' },
    { name: 'Trackify', url: 'https://trackify.setulp.com' },
];

function appendDemoLinks(submenu) {
    for (const demo of liveDemos) {
        const link = document.createElement('a');
        link.href = demo.url;
        link.textContent = demo.name;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        submenu.appendChild(link);
    }
}

export function createPopupSideMenuLinksForPortfolio() {
    // get all h2, h3, and h4 tags from html and create a list of their ids
    const sideMenuPopup = document.querySelector('.side-menu-popup');
    const menuLinks = ['/', '#about', '#experience', '#projects', '#contact'];

    for (let i = 0; i < menuLinks.length; i++) {
        const link = document.createElement('a');
        link.href = `${menuLinks[i]}`;
        link.classList.add('clickable');
        link.textContent = menuLinks[i] === '/' ? 'home' : menuLinks[i].slice(1);
        sideMenuPopup.appendChild(link);
    }

    const launcherItem = document.createElement('div');
    launcherItem.classList.add('side-menu-launcher');

    const quickLauncher = document.createElement('button');
    quickLauncher.type = 'button';
    quickLauncher.textContent = 'launcher';
    quickLauncher.classList.add('clickable', 'side-menu-launcher-button');
    quickLauncher.setAttribute('aria-controls', 'side-menu-launcher-submenu');
    quickLauncher.setAttribute('aria-expanded', 'false');

    const launcherSubmenu = document.createElement('div');
    launcherSubmenu.classList.add('side-menu-launcher-submenu');
    launcherSubmenu.id = 'side-menu-launcher-submenu';

    appendDemoLinks(launcherSubmenu);

    const updateLauncherExpanded = (isExpanded) => {
        quickLauncher.setAttribute('aria-expanded', String(isExpanded));
    };
    quickLauncher.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse') {
            event.preventDefault();
        }
    });
    launcherItem.addEventListener('pointerenter', () => updateLauncherExpanded(true));
    launcherItem.addEventListener('pointerleave', () => {
        if (!launcherItem.contains(document.activeElement)) {
            updateLauncherExpanded(false);
        }
    });
    launcherItem.addEventListener('focusin', () => updateLauncherExpanded(true));
    launcherItem.addEventListener('focusout', (event) => {
        if (!launcherItem.contains(event.relatedTarget)) {
            updateLauncherExpanded(false);
        }
    });

    launcherItem.append(quickLauncher, launcherSubmenu);
    sideMenuPopup.appendChild(launcherItem);

    const mobileMenu = document.querySelector('.mini-nav-menu-items');
    if (mobileMenu) {
        const mobileLauncherItem = document.createElement('li');
        mobileLauncherItem.classList.add('mini-nav-menu-launcher-item');

        const mobileLauncher = document.createElement('button');
        mobileLauncher.type = 'button';
        mobileLauncher.textContent = 'Launcher';
        mobileLauncher.classList.add('mini-nav-menu-launcher-button');
        mobileLauncher.setAttribute('aria-controls', 'mini-nav-menu-launcher-submenu');
        mobileLauncher.setAttribute('aria-expanded', 'false');

        const mobileSubmenu = document.createElement('ul');
        mobileSubmenu.id = 'mini-nav-menu-launcher-submenu';
        mobileSubmenu.classList.add('mini-nav-menu-launcher-submenu');

        for (const demo of liveDemos) {
            const demoItem = document.createElement('li');
            const demoLink = document.createElement('a');
            demoLink.href = demo.url;
            demoLink.textContent = demo.name;
            demoLink.target = '_blank';
            demoLink.rel = 'noopener noreferrer';
            demoItem.appendChild(demoLink);
            mobileSubmenu.appendChild(demoItem);
        }

        mobileLauncher.addEventListener('click', () => {
            const isExpanded = mobileLauncher.getAttribute('aria-expanded') === 'true';
            mobileLauncher.setAttribute('aria-expanded', String(!isExpanded));
            mobileLauncher.classList.toggle('open', !isExpanded);
            mobileSubmenu.classList.toggle('open', !isExpanded);
        });

        mobileMenu.appendChild(mobileLauncherItem);
        mobileLauncherItem.append(mobileLauncher, mobileSubmenu);
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

    const texts = [
        "Developer.",
        "Enthusiast.",
        "Engineer.",
        "Programmer.",
        "Backend.",
    ];

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let morph = 0;
    let cooldown = cooldownTime;
    let lastTime = null; // use performance.now() timestamps
    let rafId = null;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    // Respect prefers-reduced-motion: skip blur animation, just show static text
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        elts.text1.style.display = 'none';
        elts.text2.textContent = texts[0];
        elts.text2.style.opacity = '1';
        elts.text2.style.filter = '';
        return; // No animation loop needed
    }

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
    function animate(timestamp) {
        // Pause animation when the tab is not visible to save CPU/battery
        if (document.hidden) {
            lastTime = null; // Reset so we don't jump on resume
            rafId = requestAnimationFrame(animate);
            return;
        }

        if (lastTime === null) {
            lastTime = timestamp;
        }

        const dt = Math.min((timestamp - lastTime) / 1000, 0.1); // cap dt at 100ms to avoid jumps after tab switch
        lastTime = timestamp;

        let shouldIncrementIndex = cooldown > 0;
        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }

        rafId = requestAnimationFrame(animate);
    }

    // Start the animation.
    rafId = requestAnimationFrame(animate);
}