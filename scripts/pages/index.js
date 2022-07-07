async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        photographersSection.innerHTML += photographerFactory(photographer).getUserCardDOM();
    });
};

async function init() {
    // Récupère les datas des photographes
    async function getPhotographers() {
        const { photographers } = await getPhotographDatas();
        return ({
            photographers: [...photographers]
        });
    };
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();