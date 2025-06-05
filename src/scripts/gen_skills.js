export const ExpLevels = {
    high: "Experienced",
    med: "Intermediate",
    low: "Basic",
    none: ""
}

export class Skill {
    constructor({ name, experience, description, icon }) {
        this.name = name;
        this.experience = experience;
        this.description = description;
        this.icon = icon;
    }
};

export function generateSkills(skills) {
    const container = document.getElementById('skills-container');

    for (let i = 0; i < 20; i++) {
        for (const skill of skills) {
            const name = skill.name;
            const exerpience = skill.experience;
            const description = skill.description;
            const icon = skill.icon;

            const tagElement = document.createElement('div');
            tagElement.style.cursor = 'pointer';
            tagElement.style.display = 'flex';
            tagElement.style.alignItems = 'center';
            tagElement.style.flexDirection = 'column';
            tagElement.style.transition = 'all 300ms ease 0s';


            const iconElement = document.createElement('img');
            iconElement.src = icon;
            iconElement.alt = name;
            iconElement.style.width = '64px';
            iconElement.style.height = '64px';
            iconElement.style.verticalAlign = 'middle';
            // iconElement.style.position = 'relative';
            iconElement.style.transition = 'all 300ms ease 0s';
            tagElement.appendChild(iconElement);

            const nameText = document.createElement('p');
            nameText.textContent = name;
            nameText.style.display = 'inline-block';
            nameText.style.opacity = '0';
            nameText.classList.add('skill-name-text');
            nameText.style.textWrap = 'nowrap';
            nameText.style.textAlign = 'center';
            nameText.style.margin = '0px';
            nameText.style.fontSize = '14px';
            // nameText.style.fontWeight = 'bold';
            nameText.style.fontFamily = 'PP Eiko';
            nameText.style.position = 'absolute';
            nameText.style.bottom = '-24pt';
            nameText.style.transition = 'all 300ms ease 0s';
            tagElement.appendChild(nameText);

            // on hover, show name and experience as well as make the icon larger
            tagElement.addEventListener('mouseover', () => {
                iconElement.style.transition = 'all 300ms ease 0s';
                nameText.style.opacity = '1';
            });
            tagElement.addEventListener('mouseout', () => {
                iconElement.style.transition = 'all 300ms ease 0s';
                nameText.style.opacity = '0';
            });

            tagElement.addEventListener('mousedown', () => {
                iconElement.style.transition = 'all 100ms ease 0s';
                iconElement.style.transform = 'scale(0.8)';
            });
            tagElement.addEventListener('mouseup', () => {
                iconElement.style.transition = 'all 300ms ease 0s';
                iconElement.style.transform = 'scale(1)';
            });

            tagElement.addEventListener('click', () => {
                const skillPopup = document.getElementById('skill-popup');
                // opacity: 0;
                // pointer-events: none;
                // -webkit-user-select: none;
                // user-select: none;
                // z-index: -1;
                skillPopup.style.opacity = '1';
                skillPopup.style.pointerEvents = 'auto';
                skillPopup.style.zIndex = '101';
                skillPopup.style.userSelect = 'auto';

                const skillPopupCardTitle = document.getElementById('skill-popup-card-title');
                const skillPopupCardExperience = document.getElementById('skill-popup-card-experience');
                const skillPopupCardDescription = document.getElementById('skill-popup-card-description');
                const skillPopupCardIconTop = document.getElementById('svg-skill-popup-card-icon-top');
                const skillPopupCardIconBottom = document.getElementById('svg-skill-popup-card-icon-bottom');
                skillPopupCardIconTop.src = icon;
                skillPopupCardIconBottom.src = icon;
                skillPopupCardTitle.textContent = name;
                skillPopupCardExperience.textContent = exerpience;
                skillPopupCardDescription.textContent = description;

                setTimeout(() => {
                    const skillPopupCard = document.getElementById('skill-popup-card');
                    skillPopupCard.style.transform = 'rotateY(180deg)';
                }, 100);
            });

            // Add event listener to the tag element
            tagElement.addEventListener('mouseover', () => {
                tagElement.style.transition = 'all 300ms ease 0s';
                // Scale the current tag by 1.3 and translate it by -20px
                tagElement.style.transform = 'scale(1.3) translateY(-20px)';

                // Get the next sibling tag
                const nextTag = tagElement.nextElementSibling;

                // If the next tag exists, scale it by 1.1 and translate it by -10px
                if (nextTag) {
                    nextTag.style.transition = 'all 300ms ease 0s';
                    nextTag.style.transform = 'scale(1.15) translateY(-9px)';

                    const next2Tag = nextTag.nextElementSibling;
                    if (next2Tag) {
                        next2Tag.style.transition = 'all 300ms ease 0s';
                        next2Tag.style.transform = 'scale(1.1)';
                    }
                }

                // Get the previous sibling tag
                const prevTag = tagElement.previousElementSibling;

                // If the next tag exists, scale it by 1.1 and translate it by -10px
                if (prevTag) {
                    prevTag.style.transition = 'all 300ms ease 0s';
                    prevTag.style.transform = 'scale(1.15) translateY(-9px)';

                    const prev2Tag = prevTag.previousElementSibling;
                    if (prev2Tag) {
                        prev2Tag.style.transition = 'all 300ms ease 0s';
                        prev2Tag.style.transform = 'scale(1.1)';
                    }
                }
            });

            tagElement.addEventListener('mouseout', () => {
                // Reset the styles when the mouse leaves the tag
                tagElement.style.transform = '';
                const nextTag = tagElement.nextElementSibling;
                if (nextTag) {
                    nextTag.style.transform = '';

                    const next2Tag = nextTag.nextElementSibling;
                    if (next2Tag) {
                        next2Tag.style.transform = '';
                    }
                }
                // Reset the styles when the mouse leaves the tag
                tagElement.style.transform = '';
                const prevTag = tagElement.previousElementSibling;
                if (prevTag) {
                    prevTag.style.transform = '';

                    const prev2Tag = prevTag.previousElementSibling;
                    if (prev2Tag) {
                        prev2Tag.style.transform = '';
                    }
                }
            });

            tagElement.classList.add('swiper-slide');
            container.appendChild(tagElement);
            // const skill_tag = createSkillTag(skill);
            // skill_tag.classList.add('swiper-slide');
            // container.appendChild(skill_tag);
        }
    }
}