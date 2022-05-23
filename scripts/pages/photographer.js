const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get('id');
const userName = new URLSearchParams(queryString).get('name');

// console.log(userId);


async function displayData(media, name, photographers) {
    const photographerBanner = document.querySelector(".photograph-header");
    const photographersMedia = document.querySelector(".media");
    const photographersBannerLike = document.getElementById('like');
    const photographersBannerPrice = document.getElementById('price');
    // const sumLike = (media.likes).reduce((a, b) => a + b);

   
    
    // BANNER PROFIL
    for (photographer of photographers) {
        photographerBanner.innerHTML = photographerBannerFactory(photographer)
        .getUserBannerDOM();
    };
    
    // SECTION MEDIA
    media.forEach((data) => {
        photographersMedia.innerHTML += photographerMediaFactory(data, name)
        .getUserMediaDOM();
    });
    
    // BANNER LIKE / PRICE
    for(data of media) {
        photographersBannerLike.innerHTML = photographerLikeBannerFactory(data)
        .getUserLikeBannerDOM();
    };

    for(data of photographers) {
        photographersBannerPrice.innerHTML = photographerPriceBannerFactory(data)
        .getUserPriceBannerDOM();
    };
};


async function initMedia() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographDatas(); // API
    const usersInfo = media.filter((md) => md.photographerId == userId);
    const userProfil = photographers.filter((photographer) => photographer.id == userId);
    displayData(usersInfo, userName, userProfil, photographers, media);
};

initMedia();



// PHOTOGRAPHERS BANNER PROFIL

// async function displayDataBannerProfil(photographers) {    
//     const photographerBanner = document.querySelector(".photograph-header");
    
//     for (photographer of photographers) {
//         console.log(photographer);
//         // const photographerBannerModel = photographerBannerFactory(photographer);
//         // const userBannerDOM = photographerBannerModel.getUserBannerDOM();
//         // photographerBanner.innerHTML = (userBannerDOM);
//         photographerBanner.innerHTML = photographerBannerFactory(photographer)
//         .getUserBannerDOM();
//     };
// };

// async function initBanner() {
//     // Récupère les datas des photographes
//     async function getPhotographers() {
//         const {photographers} = await getPhotographDatas();
//         return ({
//             photographers: [...photographers]});
//         };
//     const { photographers } = await getPhotographers();
//     // const usersInfo = photographers.filter((ph) => ph.Id == userId);
//     displayDataBannerProfil(photographers);
// };

// initBanner();

// PRICE BANNER

// async function displayPriceBanner(media) {
//     const photographersPriceBanner = document.querySelector(".price");

//     for(data of media) {
//     // const photographerPriceBannerModel = photographerPriceBannerFactory(data);
//     // const userPriceBannerDOM = photographerPriceBannerModel.getUserPriceBannerDOM();
//     // photographersPriceBanner.innerHTML = (userPriceBannerDOM);
//     photographersPriceBanner.innerHTML = photographerPriceBannerFactory(data)
//     .getUserPriceBannerDOM();
//     };
// };


// async function initPriceBanner() {
//     // Récupère les datas des photographes
//     const { media } = await getPhotographDatas();
//     displayPriceBanner(media);
// };

// initPriceBanner();