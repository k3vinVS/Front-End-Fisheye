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
    const title = document.querySelector('.title'),
        previewBox = document.querySelector('.preview-box'),
        // previewImg = previewBox.querySelector('img'),
        // previewVideo = previewBox.querySelector('video'),
        closeIcon = previewBox.querySelector('.icon'),
        shadow = document.querySelector('.shadow');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const picture = document.querySelector('.picture');
    const modalLightbox = document.getElementById("body-container");

    // OPEN MODAL
    function displayModalLightbox() {
        modalLightbox.style.display = "block";
        shadow.style.display = 'block';
        previewBox.focus();
        previewBox.style.outline = 'none';
    }

    // CLOSE MODAL
    function closeModalLightbox() {
        modalLightbox.style.display = "none";
        shadow.style.display = 'none';
    }

    closeIcon.onclick = () => {
        closeModalLightbox();
        mediaLightbox();
    };


    function showLightbox(type, url) {
        picture.innerHTML = type == 'img'
            ? `<img src="${url}" alt="" />`
            : `<video preload="auto" controls>
        <source src="${url}" type="video/webm" alt="" />
        <source src="${url}" type="video/mp4" alt="" />
        </video>`;
        // console.log(url);
    };


    // picture.addEventListener('keydown', (e) => {
    //     console.log(e);
    //     let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

    //     // if (!isTabPressed) {
    //     //     return;
    //     // }

    //     if (document.activeElement === closeIcon) {
    //         e.preventDefault();
    //     }
    // });

    function mediaLightbox() {
        const gallery = document.querySelectorAll('.mediaCard');
        const pictureGallery = document.querySelectorAll('.mediaCard img');
        // console.log(pictureGallery);

        if(document.activeElement === gallery){
            console.log('test lightbox');
        }

        // pictureGallery.forEach(image => {
        //     console.log(image);
        // });

        // for (item of pictureGallery){
        //     console.log(item);
        // }

        previewBox.addEventListener('keydown', (e) => {
            let isLeftPressed = e.key === 'ArrowLeft' || e.keyCode == 37;
            let isRightPressed = e.key === 'ArrowRight' || e.keyCode == 39;
            let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
            let isTabPressed = e.key === 'Tab' || e.keyCode == 9;
            // console.log(e);

            if (isLeftPressed) {
                prevBtn.onclick();
            } else if (isRightPressed) {
                nextBtn.onclick();
            } else if (isEscapePressed) {
                closeModalLightbox();
            }
        });


        for (let i = 0; i < gallery.length; i++) {
            let newIndex = i;

            gallery[newIndex].onclick = (e) => {
                displayModalLightbox();
                // console.log(e.target);

                if (e.target.localName == 'img') {
                    showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                } else {
                    showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                };
                title.textContent = media[newIndex].title;

                nextBtn.onclick = () => {
                    newIndex++; // Increment newIndex value
                    let keyImage = "image" in media[newIndex];

                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
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
                    let keyImage = "image" in media[newIndex];

                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                    };
                    title.textContent = media[newIndex].title;

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


    // MODAL PROFIL
    document.getElementById('modal-profil').innerHTML = `${photographer.name}`;


    // DROPDOWN
    // const dropdownPopularity = document.querySelector('.menu-deroulant a');
    // const dropdownDate = document.querySelector('.dropdown-list-date a');
    // const dropdownTitle = document.querySelector('.dropdown-list-titre a');
    // const numberOfLike = document.querySelectorAll('.numberOfLike');
    // const selection = document.querySelector('select');
    // const dropdownPopularity = document.querySelector('option[value="popularite"]');
    // const dropdownDate = document.querySelector('option[value="date"]');
    // const dropdownTitle = document.querySelector('option[value="titre"]');



    // selection.addEventListener('change', () => {

    //     if (selection.value == 'popularite') {
    //         media.sort((a, b) => {
    //             return b.likes - a.likes;
    //         });
    //         showMedia(media);
    //         mediaLightbox();
    //     }

    //     if (selection.value == 'date') {
    //         media.sort((a, b) => {
    //             return new Date(a.date) - new Date(b.date);
    //         });
    //         showMedia(media);
    //         mediaLightbox();
    //     }

    //     if (selection.value == 'titre') {
    //         media.sort((a, b) => a.title.localeCompare(b.title));
    //         showMedia(media);
    //         mediaLightbox();
    //     }
    // })

    // --------------dropdown autre méthode-----------------
    // dropdownPopularity.addEventListener('click', () => {
    //     console.log('clic');
    //     media.sort((a, b) => {
    //         return b.likes - a.likes;
    //     });
    //     dropdownPopularity.innerHTML = 'Popularité';
    //     dropdownDate.innerHTML = 'Date';
    //     dropdownTitle.innerHTML = 'Titre';
    //     showMedia(media);
    //     mediaLightbox();
    // });


    // dropdownDate.addEventListener('click', () => {
    //     console.log('clic');
    //     media.sort((a, b) => {
    //         return new Date(a.date) - new Date(b.date);
    //     });
    //     dropdownPopularity.innerHTML = 'Date';
    //     dropdownDate.innerHTML = 'Popularité';
    //     dropdownTitle.innerHTML = 'Titre';
    //     showMedia(media);
    //     mediaLightbox();
    // });

    // dropdownTitle.addEventListener('click', () => {
    //     media.sort((a, b) => a.title.localeCompare(b.title));
    //     dropdownPopularity.innerHTML = 'Titre';
    //     dropdownDate.innerHTML = 'Popularité';
    //     dropdownTitle.innerHTML = 'Date';
    //     showMedia(media);
    //     mediaLightbox();
    // });

};



const categories = document.querySelectorAll('.category');
const menuItem = document.querySelector('.menu-item');
let isOpen = false;

function openDropdown() {
    if (isOpen) {
        document.querySelector('.dropdown').style.display = 'none';
        isOpen = false;
        document.querySelector('.fa-chevron-down').style.display = 'block';
        document.querySelector('.fa-chevron-up').style.display = 'none';
    } else {
        document.querySelector('.dropdown').style.display = 'block';
        isOpen = true;
        document.querySelector('.fa-chevron-up').style.display = 'block';
        document.querySelector('.fa-chevron-down').style.display = 'none';
    };
}

menuItem.addEventListener('click', openDropdown);

categories.forEach(category => {
    category.addEventListener('click', (e) => {
        let menuItemText = menuItem.textContent;
        menuItem.textContent = e.currentTarget.textContent;
        e.currentTarget.textContent = menuItemText;
        openDropdown();
    })
})


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