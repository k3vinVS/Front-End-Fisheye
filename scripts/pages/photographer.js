const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get('id');
const userName = new URLSearchParams(queryString).get('name');
// console.log(userId);
// console.log(userName);


// PHOTOGRAPHERS BANNER PROFIL

async function displayDataBannerProfil(photographers) {    
    const photographerBanner = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerBannerModel = photographerBannerFactory(photographer);
        const userBannerDOM = photographerBannerModel.getUserBannerDOM();
        photographerBanner.innerHTML += (userBannerDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    async function getPhotographers() {
        const {photographers} = await getPhotographDatas();
        return ({
            photographers: [...photographers]});
        };
    const { photographers } = await getPhotographers();
    displayDataBannerProfil(photographers);
};

init();


// PHOTOGRAPHERS MEDIA

async function displayData(media, name) {
    const photographersMedia = document.querySelector(".media");
    
    
    media.forEach((data) => {
        const photographerMediaModel = photographerMediaFactory(data, name);
        const userMediaDOM = photographerMediaModel.getUserMediaDOM();
        photographersMedia.innerHTML += (userMediaDOM);
    });
};


async function initMedia() {
    // Récupère les datas des photographes
    const { media, photographers } = await getPhotographDatas();
    const usersInfo = media.filter((md) => md.photographerId == userId);
    displayData(usersInfo, userName);
};

initMedia();


// async function getBannerPhotographers() {
//     const { photographers } = await getPhotographDatas();    
//         console.log( photographers );

//         return ({
//             photographers: [...photographers]});    
// };


// async function displayData(photographers) {
//     const photographersBanner = document.querySelector(".photograph-header");    
        
//     photographers.forEach((photographer) => {
//             const photographerBannerModel = photographerBannerFactory(photographer);    
//             const userBannerDOM = photographerBannerModel.getUserBannerDOM();
//             photographersBanner.innerHTML = (userBannerDOM);
//         });
//     };


// async function initBanner() {
//     // Récupère les datas des photographes    
//     const { photographers } = await getBannerPhotographers();
//     displayData(photographers);
// };

// initBanner();

