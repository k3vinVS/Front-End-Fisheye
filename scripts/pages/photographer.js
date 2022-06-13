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


    // LIGHTBOX
    //Selecting all required elements
    const gallery = document.querySelectorAll('.mediaCard'),
        title = document.querySelector('.title'),
        previewBox = document.querySelector('.preview-box'),
        // previewImg = previewBox.querySelector('img'),
        // previewVideo = previewBox.querySelector('video'),
        closeIcon = previewBox.querySelector('.icon'),
        shadow = document.querySelector('.shadow');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const picture = document.querySelector('.picture');
    const modalLightbox = document.getElementById("body-container");


    function displayModalLightbox() {
        modalLightbox.style.display = "block";
        shadow.style.display = 'block';
    }

    function closeModalLightbox() {
        modalLightbox.style.display = "none";
        shadow.style.display = 'none';
    }

    closeIcon.onclick = () => {
        closeModalLightbox();
        mediaLightbox();
    };



    function showLightbox(type, url) {
        picture.innerHTML = (type == 'img')
            ? `<img src="${url}" alt="" />`
            : `<video preload="auto" controls>
        <source src="${url}" type="video/webm" />
        <source src="${url}" type="video/mp4" />
        </video>`;
        console.log(url);
    };


    function mediaLightbox() {
        for (let i = 0; i < gallery.length; i++) {
            let newIndex = i;

            gallery[newIndex].onclick = (e) => {
                displayModalLightbox();
                if (e.target.localName == 'img') {
                    showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                } else {
                    showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                };
                title.textContent = media[newIndex].title;
                // showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                // showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);


                nextBtn.onclick = () => {
                    newIndex++; // Increment newIndex value

                    if (e.target.localName == 'img') {
                        console.log('NEXT IMAGE');
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
                        console.log('NEXT VIDEO');
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                    };
                    title.textContent = media[newIndex].title;

                    // showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    // showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);

                    if (newIndex >= gallery.length - 1) {
                        nextBtn.style.display = 'none';
                    } else {
                        prevBtn.style.display = 'block';
                    };
                };

                prevBtn.onclick = () => {
                    newIndex--; // Decrement newIndex value
                    // console.log(newIndex);
                    // console.log(e.target.localName);

                    if (e.target.localName == 'img') {
                        console.log('PREVIOUS IMAGE');
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
                        console.log(e.target.localName);
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                    };
                    title.textContent = media[newIndex].title;

                    // showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    // showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);

                    if (newIndex == 0) {
                        prevBtn.style.display = 'none';
                    } else {
                        nextBtn.style.display = 'block';
                    };
                };

                // MOVE/REMOVE PREVIOUS_BUTTON
                if (newIndex == 0) {
                    prevBtn.style.display = 'none';
                } else {
                    prevBtn.style.display = 'block';
                };

                // MOVE/REMOVE NEXT_BUTTON
                if (newIndex >= gallery.length - 1) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'block';
                }
            }
            // console.log(newIndex);         
        }
    };
    mediaLightbox();


    // gallery.forEach((item) => {
    //     item.addEventListener('click', (e) => {
    //         mediaLightbox();
    //         title.textContent = media[newIndex].title;
    //         // displayModalLightbox();
    //         // console.log(e.target.localName);

    //         if (e.target.localName == 'img') {
    //             showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //             displayModalLightbox();
    //         } else {
    //             showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //             displayModalLightbox();
    //         };
    //     });
    // });

    // nextBtn.onclick = () => {
    //     mediaLightbox();
    //     newIndex++; // Increment newIndex value
    //     showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //     showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     title.textContent = media[newIndex].title;

    //     if (newIndex >= gallery.length - 1) {
    //         nextBtn.style.display = 'none';
    //         showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //         showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     } else {
    //         prevBtn.style.display = 'block';
    //         showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //         showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     };
    // };

    // prevBtn.onclick = () => {
    //     newIndex--; // Decrement newIndex value
    //     showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //     showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     title.textContent = media[newIndex].title;
    //     if (newIndex == 0) {
    //         prevBtn.style.display = 'none';
    //         showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //         showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     } else {
    //         nextBtn.style.display = 'block';
    //         showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
    //         showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
    //     }
    // };







    // BANNER LIKE / PRICE

    // LIKE
    let sumLike = media.reduce((a, b) => a + b.likes, 0);
    photographersBannerLike.innerHTML = photographerLikeBannerFactory(sumLike)
        .getUserLikeBannerDOM();

    // COUNT LIKES

    function countLike() {
        const displayLike = document.querySelectorAll('.info-like');
        const numberOfLike = document.querySelectorAll('.numberOfLike');
        const likes = document.querySelectorAll('.dislikes');

        likes.forEach((like, index) => {
            like.addEventListener('click', () => {
                let nbl = numberOfLike[index].textContent;
                if (like.classList.contains('dislikes')) {
                    numberOfLike[index].textContent = parseInt(nbl) - 1;
                    let downLikeBanner = sumLike -= 1;
                    photographersBannerLike.innerHTML = photographerLikeBannerFactory(downLikeBanner).getUserLikeBannerDOM();
                    // console.log(downLikeBanner);

                } else if (like.classList.contains('likes')) {
                    numberOfLike[index].textContent = parseInt(nbl) + 1;
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
    const { photographers, media } = await getPhotographDatas(); // API
    const usersInfo = media.filter((md) => md.photographerId == userId);
    const userProfil = photographers.filter((photographer) => photographer.id == userId);
    displayData(usersInfo, userName, userProfil, photographers, media);
};

initMedia();


