class TimelinePoint {
    constructor(date, is_small = false) {
        this.is_small = is_small;
        if (date) {
            this.date = date;
            this.text = date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear().toString();
        }
        else {
            this.date = Date.now();
            this.text = 'Now';
        }
    }
}

class TimelineSection {
    constructor({ startDate, endDate, color = "#363636", tooltip = 'Job', icon, title, description }) {
        this.start = new TimelinePoint(startDate);
        this.end = new TimelinePoint(endDate);
        this.color = color;
        this.tooltip = tooltip;
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}


function generateTimeline(sections) {
    // create a list of all timelinepoints  within the sections
    // the list of timelinepoints should not have duplicate dates.
    let timelinePoints = [];
    for (const section of sections) {
        const existsStart = timelinePoints.find(point => point.date.toLocaleString() === section.start.date.toLocaleString());
        const existsEnd = timelinePoints.find(point => point.date.toLocaleString() === section.end.date.toLocaleString());
        if (!existsStart) { timelinePoints.push(section.start); }
        if (!existsEnd) { timelinePoints.push(section.end); }
    }
    // sort the list of timelinepoints
    timelinePoints.sort((a, b) => a.date - b.date);
    // create the points on the timeline
    generateTimelinePoints(timelinePoints);

    // create the sections
    for (const section of sections) {
        const timelineContainer = document.querySelector(".timeline-data-container");
        // create the section and add properties
        const sectionElement = document.createElement("div");
        sectionElement.style.backgroundColor = section.color;
        sectionElement.style.cursor = "pointer";
        sectionElement.classList.add("timeline-section");
        // see if the section needs to be up a level
        let isTop = false;
        for (const testSection of sections) {
            if (testSection.start.date < section.start.date && testSection.end.date > section.end.date) {
                sectionElement.style.top = "calc(-1 * 15px - 5px)";
                isTop = true;
            }
        }
        // calculate the start and end positions of the section
        const timeRange = timelinePoints[timelinePoints.length - 1].date - timelinePoints[0].date;
        const startpos = ((section.start.date - timelinePoints[0].date) / timeRange * 100);
        const endpos = ((section.end.date - timelinePoints[0].date) / timeRange * 100);
        // set the position and size of the section
        sectionElement.style.left = "calc(" + startpos + "% + " + 1 + "px)";
        sectionElement.style.width = "calc(" + (endpos - startpos) + "% - " + 1 + "px)";
        // add section to the timeline
        timelineContainer.appendChild(sectionElement);

        // create the hover tooltip for the section
        const tooltip = document.createElement("div");
        tooltip.classList.add("timeline-tooltip");
        tooltip.style.transition = "all 300ms ease 0s";
        tooltip.style.display = "flex";
        tooltip.style.gap = "0.5rem";
        tooltip.style.alignItems = "center";
        // add icon to the tooltip
        const tooltipIcon = document.createElement("img");
        tooltipIcon.src = section.icon;
        tooltipIcon.style.height = "25px";
        tooltipIcon.style.width = "25px";
        tooltip.appendChild(tooltipIcon);
        // add text to the tooltip
        const tooltipText = document.createElement("p");
        tooltipText.textContent = section.tooltip;
        tooltip.appendChild(tooltipText);
        // add tooltip to the timeline (so we can calculate the location)
        timelineContainer.appendChild(tooltip);
        // set position of the tooltip to the center above the section
        tooltip.style.left = "calc(" + (startpos + (endpos - startpos) / 2) + "% - " + (tooltip.offsetWidth / 2) + "px)";
        tooltip.style.top = "-60px";
        if (isTop) {
            tooltip.style.top = "-75px";
        }

        // on hover section, scale it and show the tooltip
        sectionElement.addEventListener("mouseover", () => {
            sectionElement.style.transform = "scaleY(1.5)";
            tooltip.style.opacity = "1";
        });
        sectionElement.addEventListener("mouseout", () => {
            sectionElement.style.transform = "";
            tooltip.style.opacity = "0";
        });

        // add arrow to the section
        const arrowContainer = document.querySelector(".timeline-arrow-container");
        const svgArrowImageContainer = document.createElement("div");
        svgArrowImageContainer.classList.add("svg-timeline-arrow-container");
        const svgArrowImage = document.createElement("img");
        svgArrowImage.style.alt = "Arrow to timeline section";
        svgArrowImage.classList.add("svg-timeline-arrow");
        svgArrowImageContainer.appendChild(svgArrowImage);
        arrowContainer.appendChild(svgArrowImageContainer);
        svgArrowImageContainer.style.left = "calc(" + (startpos + (endpos - startpos) / 2) + "% - " + (svgArrowImageContainer.offsetWidth / 2) + "px)";
        const timelineWidth = document.querySelector(".timeline-line").offsetWidth;
        const base = ((startpos + (endpos - startpos) / 2) / 100) * timelineWidth;
        const deadZoneLeft = (timelineWidth / 2) - svgArrowImageContainer.offsetWidth;
        const deadZoneRight = (timelineWidth / 2) + svgArrowImageContainer.offsetWidth;
        if (base < deadZoneLeft || base > deadZoneRight) {
            svgArrowImage.src = "assets/svg_scribbles/curved_arrow.svg";
            if (base < timelineWidth / 2) {
                svgArrowImageContainer.style.left = "calc(" + (startpos + (endpos - startpos) / 2) + "% - " + (svgArrowImageContainer.offsetWidth / 2) + "px + " + 52 + "px)";
            }
            if (base > timelineWidth / 2) {
                svgArrowImageContainer.style.left = "calc(" + (startpos + (endpos - startpos) / 2) + "% - " + (svgArrowImageContainer.offsetWidth / 2) + "px - " + 52 + "px)";
            }
        }
        else {
            svgArrowImage.src = "assets/svg_scribbles/straight_arrow.svg";
        }
        if (base < timelineWidth / 2) {
            svgArrowImageContainer.style.transform = "scaleX(-1)";
        }

        // if last section, set to be clicked
        if (section === sections[sections.length - 1]) {
            sectionElement.classList.add("active-section");
            svgArrowImage.classList.add("active-arrow");
            // set logo
            const timelineInfoLogo = document.querySelector(".timeline-info-logo");
            timelineInfoLogo.src = section.icon;
            // set title
            const timelineInfoTitle = document.querySelector(".timeline-info-title");
            timelineInfoTitle.textContent = section.title;
            // set description
            const timelineInfoDescription = document.querySelector(".timeline-info-description");
            timelineInfoDescription.textContent = section.description;
        }

        // add click to show description and change opacity to show clicked section
        sectionElement.addEventListener("click", () => {
            // run text disapear anim
            const timelineInfoTextContainer = document.querySelector(".timeline-info-text-container");
            const timelineInfoLogo = document.querySelector(".timeline-info-logo");
            timelineInfoTextContainer.style.transform = "translateY(200%)";
            timelineInfoLogo.style.transform = "translateY(200%)";
            // set selected section
            currentActiveSection = document.querySelector(".active-section");
            if (currentActiveSection) {
                currentActiveSection.classList.remove("active-section");
            }
            sectionElement.classList.add("active-section");
            // set arrow
            currentActiveArrow = document.querySelector(".active-arrow");
            if (currentActiveArrow) {
                currentActiveArrow.classList.remove("active-arrow");
            }

            setTimeout(function () {
                // set logo
                timelineInfoLogo.src = section.icon;
                // set title
                const timelineInfoTitle = document.querySelector(".timeline-info-title");
                timelineInfoTitle.textContent = section.title;
                // set description
                const timelineInfoDescription = document.querySelector(".timeline-info-description");
                timelineInfoDescription.textContent = section.description;
            }, 150);
            setTimeout(function () {
                timelineInfoTextContainer.style.transform = "";
                timelineInfoLogo.style.transform = "";
                svgArrowImage.classList.add("active-arrow");
            }, 300);


        });



    }
}

function generateTimelinePoints(timelinePoints) {
    const timeRange = timelinePoints[timelinePoints.length - 1].date - timelinePoints[0].date;

    let isTop = false;
    for (const timelinePoint of timelinePoints) {
        const point = document.createElement("div");
        point.classList.add("timeline-point");
        const pos = ((timelinePoint.date - timelinePoints[0].date) / timeRange * 100);
        point.style.left = pos + "%";

        const label = document.createElement("div");
        label.textContent = timelinePoint.text;
        if (isTop) {
            if (label.textContent == 'Now') {
                label.style.bottom = '-55px';
            }
            else {
                label.style.bottom = '-75px';
            }
        }
        else {
            if (label.textContent == 'Now') {
                label.style.top = '-55px';
            }
            else {
                label.style.top = '-80px';
            }
        }
        isTop = !isTop;
        label.classList.add("timeline-label");

        const dot = document.createElement("div");
        const line = document.createElement("div");
        if (timelinePoint.is_small) {
            dot.classList.add("timeline-dot-small");
            line.classList.add("timeline-point-line-small");
        }
        else {
            dot.classList.add("timeline-dot-large");
            line.classList.add("timeline-point-line");
        }

        point.appendChild(dot);
        point.appendChild(line);
        point.appendChild(label);
        document.querySelector(".timeline-data-container").appendChild(point);
    }
}