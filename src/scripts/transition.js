// Grab elements that lead to another page and run page transition when clicked

window.onpageshow = function () {
    const transitionElement = document.querySelector('.slide-transition');

    transitionElement.classList.remove('is-active');
    // setTimeout(function () {
    //     transitionElement.classList.remove('is-active');
    // }, 300);


    const projectCards = document.querySelectorAll(".project-card-container");
    const backButton = document.querySelector('.back-button');
    const backButtonSmall = document.querySelector('.back-button-small');

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
            let target = backButton.getAttribute('href');

            transitionElement.classList.add('is-active');

            setTimeout(function () {
                window.location.href = target;
            }, 300);
        });
    }
    if (backButtonSmall) {
        backButtonSmall.addEventListener('click', element => {
            element.preventDefault();
            let target = backButtonSmall.getAttribute('href');

            transitionElement.classList.add('is-active');

            setTimeout(function () {
                window.location.href = target;
            }, 300);
        });
    }
}