const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get('id');
const userName = new URLSearchParams(queryString).get('name');
// console.log(userId);
// console.log(userName);






// PHOTOGRAPHERS BANNER PROFIL

async function displayDataBannerProfil(photographers) {    
    const photographerBanner = document.querySelector(".photograph-header");
    
    for (photographer of photographers) {
        // const photographerBannerModel = photographerBannerFactory(photographer);
        // const userBannerDOM = photographerBannerModel.getUserBannerDOM();
        // photographerBanner.innerHTML = (userBannerDOM);
        photographerBanner.innerHTML = photographerBannerFactory(photographer)
        .getUserBannerDOM();
    };
};

async function initBanner() {
    // Récupère les datas des photographes
    async function getPhotographers() {
        const {photographers} = await getPhotographDatas();
        return ({
            photographers: [...photographers]});
        };
    const { photographers } = await getPhotographers();
    displayDataBannerProfil(photographers);
};

initBanner();





// PHOTOGRAPHERS MEDIA

async function displayData(media, name) {
    const photographersMedia = document.querySelector(".media");
    
    
    media.forEach((data) => {
        // const photographerMediaModel = photographerMediaFactory(data, name);
        // const userMediaDOM = photographerMediaModel.getUserMediaDOM();
        // photographersMedia.innerHTML += (userMediaDOM);
        photographersMedia.innerHTML += photographerMediaFactory(data, name)
        .getUserMediaDOM();
    });
};


async function initMedia() {
    // Récupère les datas des photographes
    const { media } = await getPhotographDatas();
    const usersInfo = media.filter((md) => md.photographerId == userId);
    displayData(usersInfo, userName);
};

initMedia();




// PRICE BANNER

async function displayPriceBanner(media) {
    const photographersPriceBanner = document.querySelector(".price");

    for(data of media) {
    // const photographerPriceBannerModel = photographerPriceBannerFactory(data);
    // const userPriceBannerDOM = photographerPriceBannerModel.getUserPriceBannerDOM();
    // photographersPriceBanner.innerHTML = (userPriceBannerDOM);
    photographersPriceBanner.innerHTML = photographerPriceBannerFactory(data)
    .getUserPriceBannerDOM();
    };
};


async function initPriceBanner() {
    // Récupère les datas des photographes
    const { media } = await getPhotographDatas();
    displayPriceBanner(media);
};

initPriceBanner();