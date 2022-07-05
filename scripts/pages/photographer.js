const queryString = window.location.search;
const userId = new URLSearchParams(queryString).get('id');
const userName = new URLSearchParams(queryString).get('name');
// let isUpPressed = e.key === 'ArrowUp' || e.keyCode == 38;
// let isDownPressed = e.key === 'ArrowDown' || e.keyCode == 40;
// let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
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

    // media.forEach((item) => {
    //     // console.log(item);
    // })

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

    // OPEN LIGHTBOX_MODAL
    function displayModalLightbox() {
        modalLightbox.style.display = "block";
        shadow.style.display = 'block';
        previewBox.focus();
        previewBox.style.outline = 'none';
    }

    // CLOSE LIGHTBOX_MODAL
    function closeModalLightbox() {
        modalLightbox.style.display = "none";
        shadow.style.display = 'none';
    }

    closeIcon.onclick = () => {
        closeModalLightbox();
        mediaLightboxControls();
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


    //LIGHTBOX KEYBOARD CONTROLS
    function mediaLightboxControls() {
        const galleryMedia = document.querySelectorAll('.mediaCard img');
        previewBox.addEventListener('keydown', (e) => {
            let isLeftPressed = e.key === 'ArrowLeft' || e.keyCode == 37;
            let isRightPressed = e.key === 'ArrowRight' || e.keyCode == 39;
            let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
            // let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

            // console.log(e);

            if (isLeftPressed && prevBtn.style.display == 'block') {
                prevBtn.onclick(e);
            } else if (isRightPressed && nextBtn.style.display == 'block') {
                nextBtn.onclick(e);
            } else if (isEscapePressed) {
                closeModalLightbox();
                // galleryMedia[0].focus();
            }
        });

        for (let i = 0; i < galleryMedia.length; i++) {
            let newIndexControls = i;

            galleryMedia[newIndexControls].onfocus = (e) => {
                // let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;
                // console.log(e.target);

                e.target.addEventListener('keydown', (e) => {
                    let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;
                    console.log(e.target);

                    if (isEnterPressed) {
                        displayModalLightbox();
                        console.log(e.target);
                    }
                })

                if (e.target.localName == 'img') {
                    showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].image);
                } else {
                    showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].video);
                };
                title.textContent = media[newIndexControls].title;

                nextBtn.onclick = () => {
                    newIndexControls++; // Increment newIndexControls value
                    let keyImage = "image" in media[newIndexControls];

                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].image);
                    } else {
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].video);
                    };
                    title.textContent = media[newIndexControls].title;

                    if (newIndexControls >= galleryMedia.length - 1) {
                        nextBtn.style.display = 'none';
                    } else {
                        prevBtn.style.display = 'block';
                    };
                };

                prevBtn.onclick = () => {
                    newIndexControls--; // Decrement newIndexControls value
                    let keyImage = "image" in media[newIndexControls];

                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].image);
                    } else {
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].video);
                    };
                    title.textContent = media[newIndexControls].title;

                    if (newIndexControls == 0) {
                        prevBtn.style.display = 'none';
                    } else {
                        nextBtn.style.display = 'block';
                    };
                };

                // MOVE/REMOVE PREVIOUS_BUTTON
                if (newIndexControls == 0) {
                    prevBtn.style.display = 'none';
                } else {
                    prevBtn.style.display = 'block';
                };

                // MOVE/REMOVE NEXT_BUTTON
                if (newIndexControls >= galleryMedia.length - 1) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'block';
                }
            }
        }
    };
    mediaLightboxControls();


    // LIGHTBOX CLICK
    function mediaLightbox() {
        const gallery = document.querySelectorAll('.mediaCard');
        // console.log(gallery[0]);

        previewBox.addEventListener('keydown', (e) => {
            let isLeftPressed = e.key === 'ArrowLeft' || e.keyCode == 37;
            let isRightPressed = e.key === 'ArrowRight' || e.keyCode == 39;
            let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
            let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

            // console.log(e);

            if (isLeftPressed && prevBtn.style.display == 'block') {
                prevBtn.onclick(e);
            } else if (isRightPressed && nextBtn.style.display == 'block') {
                nextBtn.onclick(e);
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
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelector('.menu-item');
    const menuItemString = document.querySelector('.menu-item p');
    const dropdownMenu = document.querySelector('.dropdown');
    const arrowUp = document.querySelector('.fa-chevron-up');
    const arrowDown = document.querySelector('.fa-chevron-down');
    const categories = document.querySelectorAll('.category');
    const dateCategory = document.querySelector('.date');
    const titreCategory = document.querySelector('.titre');
    const popularityCategory = document.querySelector('.popularity');
    let isOpen = false;


    // OPEN DROPDOWN
    function openDropdown() {

        if (isOpen) {
            isOpen = false;
            dropdownMenu.style.display = 'none';
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
            menuItem.focus();
        } else {
            isOpen = true;
            dropdownMenu.style.display = 'block';
            arrowUp.style.display = 'block';
            arrowDown.style.display = 'none';
        };
    }

    // DROPDOWN KEYBOARD CONTROLS
    menuItem.onfocus = function () {
        menuItem.addEventListener('keydown', (e) => {
            let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

            if (isEnterPressed) {
                openDropdown();
                dateCategory.focus();
            }
        })

        titreCategory.onblur = function () {
            dropdownMenu.style.display = 'none';
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
        }

        if (menuItemString.textContent == "Popularite") {
            media.sort((a, b) => {
                return b.likes - a.likes;
            });
            showMedia(media);
            mediaLightbox();
        }
        if (menuItemString.textContent == "Date") {
            media.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
            showMedia(media);
            mediaLightbox();
        }
        if (menuItemString.textContent == "Titre") {
            media.sort((a, b) => a.title.localeCompare(b.title));
            showMedia(media);
            mediaLightbox();
        }
    }

    categories.forEach(category => {
        category.addEventListener('keydown', (e) => {
            let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

            if (isEnterPressed) {
                let menuItemText = menuItemString.textContent;
                menuItemString.textContent = e.currentTarget.textContent;
                e.currentTarget.textContent = menuItemText;
                openDropdown();
            }
        })
    })

    
    // DROPDOWN CLICK
    menuItem.addEventListener('click', () => {
        openDropdown();

        popularityCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Popularite") {
                media.sort((a, b) => {
                    return b.likes - a.likes;
                });
                showMedia(media);
                mediaLightbox();
            }
        })

        dateCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Date") {
                media.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                showMedia(media);
                mediaLightbox();
            }
        })

        titreCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Titre") {
                media.sort((a, b) => a.title.localeCompare(b.title));
                showMedia(media);
                mediaLightbox();
            }
        })
    });

    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            let menuItemText = menuItemString.textContent;
            menuItemString.textContent = e.currentTarget.textContent;
            e.currentTarget.textContent = menuItemText;
            openDropdown();
        })
    })
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