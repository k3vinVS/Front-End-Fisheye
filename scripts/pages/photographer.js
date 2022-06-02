const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get('id');
const userName = new URLSearchParams(queryString).get('name');



// console.log(userId);


async function displayData(media, name, photographers) {
    const photographerBanner = document.querySelector(".photograph-header");
    const photographersMedia = document.querySelector(".media");
    const photographersBannerLike = document.getElementById('like');
    const photographersBannerPrice = document.getElementById('price');


    // BANNER PROFIL
    for (photographer of photographers) {
        photographerBanner.innerHTML = photographerBannerFactory(photographer)
            .getUserBannerDOM();
    };



    // DROPDOWN
    const dropdownDate = document.querySelector('.dropdown-list-date');
    const dropdownTitre = document.querySelector('.dropdown-list-titre');

    dropdownDate.addEventListener('click', () => {
        media.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        showMedia(media);
    });

    dropdownTitre.addEventListener('click', () => {
        media.sort((a, b) => a.title.localeCompare(b.title));
        showMedia(media);
    });

    function showMedia(mediaArray) {
        photographersMedia.innerHTML = '';
        mediaArray.forEach((data) => {
            photographersMedia.innerHTML += photographerMediaFactory(data, name).getUserMediaDOM();
        });
    };


    // SECTION MEDIA
    showMedia(media);


    // BANNER LIKE / PRICE

    // LIKE
    let sumLike = media.reduce((a, b) => a + b.likes, 0);
    photographersBannerLike.innerHTML = photographerLikeBannerFactory(sumLike)
        .getUserLikeBannerDOM();

    // COUNT LIKES

    function countLike() {
        const displayLike = document.querySelectorAll('.info-like');
        // console.log(displayLike[0].textContent);
        const likes = document.querySelectorAll('.likes');

        likes.forEach((like) => {
            like.addEventListener('click', () => {
                // console.log(like);
                if (like.classList.contains('dislikes')) {
                    for (i = 0; i < displayLike.length; i++) {
                        downLikeMedia = (displayLike[i].innerText) - 1;
                        // console.log(downLikeMedia);
                        displayLike.textContent = downLikeMedia;
                        // downLikeMedia.textContent = photographerMediaFactory(downLikeMedia).getUserMediaDOM();
                        console.log(displayLike);
                    }
                    let downLikeBanner = sumLike -= 1;
                    photographersBannerLike.innerHTML = photographerLikeBannerFactory(downLikeBanner).getUserLikeBannerDOM();
                    // console.log(downLikeBanner);

                } else if (like.classList.contains('likes')) {
                    let upLike = sumLike += 1;
                    photographersBannerLike.innerHTML = photographerLikeBannerFactory(upLike).getUserLikeBannerDOM();
                    // console.log(upLike);
                }
            })
        });
    }
    countLike();


    // PRICE
    for (data of photographers) {
        photographersBannerPrice.innerHTML = photographerPriceBannerFactory(data)
            .getUserPriceBannerDOM();
    };

};


// MEDIA LIKES
function updateLike(e) {
    // console.log(e.currentTarget);
    if (e.currentTarget.classList.contains('likes')) {
        e.currentTarget.classList.remove('likes');
        e.currentTarget.classList.add('dislikes');
        // console.log('dislike');
    } else if (e.currentTarget.classList.contains('dislikes')) {
        e.currentTarget.classList.remove('dislikes');
        e.currentTarget.classList.add('likes');
        // console.log('like');
    }
}



async function initMedia() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographDatas(); // API
    const usersInfo = media.filter((md) => md.photographerId == userId);
    const userProfil = photographers.filter((photographer) => photographer.id == userId);
    displayData(usersInfo, userName, userProfil, photographers, media);
};

initMedia();