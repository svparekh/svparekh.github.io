window.onload = function () {
    const transitionElement = document.querySelector('.transition-1');


    setTimeout(function () {
        transitionElement.classList.remove('is-active');
    }, 300);


    let projectCards = document.querySelectorAll(".project-card-container");
    let backButton = document.querySelector('.back-button');
    let backButtonSmall = document.querySelector('.back-button-small');

    for (let i = 0; i < projectCards.length; i++) {
        const projectCard = projectCards[i];

        projectCard.addEventListener('click', element => {
            element.preventDefault();
            let target = projectCard.getAttribute('href');

            transitionElement.classList.add('is-active');

            setTimeout(function () {
                window.location.href = target;
            }, 300);
        });
    }
    if (backButton) {
        backButton.addEventListener('click', element => {
            element.preventDefault();
            let target = element.target.getAttribute('href');

            transitionElement.classList.add('is-active');

            setTimeout(function () {
                window.location.href = target;
            }, 300);
        });
    }
    if (backButtonSmall) {
        backButtonSmall.addEventListener('click', element => {
            element.preventDefault();
            let target = element.target.getAttribute('href');

            transitionElement.classList.add('is-active');

            setTimeout(function () {
                window.location.href = target;
            }, 300);
        });
    }
}