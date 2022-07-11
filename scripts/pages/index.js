// Download datas of every photographers in API
async function getPhotographers() {
    const { photographers } = await getPhotographDatas();
    return ({
        photographers: [...photographers]
    });
};

// Setting up photographers cards
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        photographersSection.innerHTML += photographerFactory(photographer).getUserCardDOM();
    });
};

// Setting up datas and cards of every photographers
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();