const queryString = window.location.search; // retrieves information from the search bar
const userId = new URLSearchParams(queryString).get('id'); // retrieves the "id" in the search bar
const userName = new URLSearchParams(queryString).get('name'); // retrieves the name from the search bar


async function displayData(media, name, photographers) {
    // DOWNLOAD ELEMENTS API -------------------------------

    // DOM ELEMENTS
    const photographerBanner = document.querySelector(".photograph-header");
    const photographersMedia = document.querySelector(".media");
    const photographersBannerLike = document.getElementById('like');
    const photographersBannerPrice = document.getElementById('price');

    // BANNER PROFIL
    for (photographer of photographers) {
        photographerBanner.innerHTML = photographerBannerFactory(photographer)
            .getUserBannerDOM();
    };

    // SECTION MEDIAS OF PHOTOGRAPHERS
    function showMedia(mediaArray) {
        photographersMedia.innerHTML = '';
        mediaArray.forEach((data) => {
            photographersMedia.innerHTML += photographerMediaFactory(data, name).getUserMediaDOM();
        });
    };


    // SECTION MEDIA -------------------------------
    showMedia(media);



    // LIGHTBOX -------------------------------

    // DOM ELEMENTS
    const title = document.querySelector('.title'),
        previewBox = document.querySelector('.preview-box'),
        closeIcon = previewBox.querySelector('.icon'),
        shadow = document.querySelector('.shadow'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        picture = document.querySelector('.picture'),
        modalLightbox = document.getElementById("body-container");
    const videoPlay = document.querySelector('video');

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
        mediaLightbox();
        mediaLightboxControls();
    };

    // LIGHTBOX LOAD ELEMENTS
    function showLightbox(type, url) {
        picture.innerHTML = type == 'img'
            ? `<img src="${url}" alt="" />`
            : `<video preload="auto" autoplay>
        <source src="${url}" type="video/webm" alt="" />
        <source src="${url}" type="video/mp4" alt="" />
        </video>`;
    };


    // LIGHTBOX MODAL KEYBOARD CONTROLS
    previewBox.addEventListener('keydown', (e) => {
        let isLeftPressed = e.key === 'ArrowLeft' || e.keyCode == 37;
        let isRightPressed = e.key === 'ArrowRight' || e.keyCode == 39;
        let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
        let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;

        if (isLeftPressed && prevBtn.style.display == 'block') {
            prevBtn.onclick();
        } else if (isRightPressed && nextBtn.style.display == 'block') {
            nextBtn.onclick();
        } else if (isEscapePressed) {
            closeModalLightbox();
            mediaLightbox();
            mediaLightboxControls();
            menuItem.focus();
        }
    });

    // LIGHTBOX KEYBOARD CONTROLS
    function mediaLightboxControls() {
        const gallery = document.querySelectorAll('.mediaCard');

        for (let i = 0; i < gallery.length; i++) {
            let newIndexControls = i;

            gallery[newIndexControls].addEventListener('keydown', (e) => {
                let isEnterPressed = e.key === 'Enter' || e.keyCode == 13;
                let isEscapePressed = e.key === 'escape' || e.keyCode == 27;
                let isLeftPressed = e.key === 'ArrowLeft' || e.keyCode == 37;
                let isRightPressed = e.key === 'ArrowRight' || e.keyCode == 39;

                // Open lightbox
                if (isEnterPressed) {
                    displayModalLightbox();
                }

                // Choice of media: Image or Video
                if (e.target.localName == 'img') {
                    showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].image);
                } else {
                    showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndexControls].video);
                };
                // Title of media
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

                    // if it's the last media, the right arrow disappears
                    if (newIndexControls >= gallery.length - 1) {
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

                    // If it's the first media, the left arrow disappears
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
                if (newIndexControls >= gallery.length - 1) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'block';
                }
            })
        }
    };
    mediaLightboxControls(); // CALL FUNCTION


    // LIGHTBOX CLICK
    function mediaLightbox() {
        const gallery = document.querySelectorAll('.mediaCard');
        const videoPlay = document.querySelector(' video');
        const videoSource = document.querySelector('source');
        const videoFocus = document.querySelector('.picture video');

        for (let i = 0; i < gallery.length; i++) {
            let newIndex = i;

            gallery[newIndex].onclick = (e) => {
                displayModalLightbox();

                // Choice of media: Image or Video
                if (e.target.localName == 'img') {
                    showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                } else {
                    showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                };
                // // Title of media
                title.textContent = media[newIndex].title;

                nextBtn.onclick = () => {
                    newIndex++; // Increment newIndex value
                    let keyImage = "image" in media[newIndex];

                    // Choice of media: Image or Video
                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                    };
                    title.textContent = media[newIndex].title;

                    // if it's the last media, the right arrow disappears
                    if (newIndex >= gallery.length - 1) {
                        nextBtn.style.display = 'none';
                    } else {
                        prevBtn.style.display = 'block';
                    };
                };

                prevBtn.onclick = () => {
                    newIndex--; // Decrement newIndex value
                    let keyImage = "image" in media[newIndex];

                    // Choice of media: Image or Video
                    if (keyImage) {
                        showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
                    } else {
                        showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
                    };
                    title.textContent = media[newIndex].title;

                    // If it's the first media, the left arrow disappears
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
    mediaLightbox(); // CALL FUNCTION


    // BANNER LIKE / PRICE -------------------------------

    // LIKE
    // displays the sum of likes
    let sumLike = media.reduce((a, b) => a + b.likes, 0);
    photographersBannerLike.innerHTML = photographerLikeBannerFactory(sumLike)
        .getUserLikeBannerDOM();


    // COUNT LIKES
    function countLike() {
        // DOM ELEMENTS
        const displayLike = document.querySelectorAll('.info-like');
        const numberOfLike = document.querySelectorAll('.numberOfLike');
        const likes = document.querySelectorAll('.dislikes');

        // displays likes and dislikes in the media
        likes.forEach((like, index) => {
            like.addEventListener('click', () => {
                let nbl = numberOfLike[index].textContent;
                if (like.classList.contains('dislikes')) {
                    numberOfLike[index].textContent = parseInt(nbl) - 1;
                    let downLikeBanner = sumLike -= 1;
                    photographersBannerLike.innerHTML = photographerLikeBannerFactory(downLikeBanner).getUserLikeBannerDOM();

                } else if (like.classList.contains('likes')) {
                    numberOfLike[index].textContent = parseInt(nbl) + 1;
                    let upLike = sumLike += 1;
                    photographersBannerLike.innerHTML = photographerLikeBannerFactory(upLike).getUserLikeBannerDOM();
                }
            })
        });
    }
    countLike();


    // PRICE
    // displays the photographer's rate
    for (data of photographers) {
        photographersBannerPrice.innerHTML = photographerPriceBannerFactory(data)
            .getUserPriceBannerDOM();
    };


    // MODAL CONTACT PROFIL -------------------------------
    // Displays the photographer's name
    photographers.forEach((photographer) => {
        document.getElementById('modal-profil').innerHTML = `${photographer.name}`;
    })


    // DROPDOWN -------------------------------
    // DOM ELEMENTS
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

            // Open dropdown
            if (isEnterPressed) {
                openDropdown();
                dateCategory.focus();
            }
        })

        // disappearance of the dropdown
        titreCategory.onblur = function () {
            dropdownMenu.style.display = 'none';
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
        }

        // media sorting
        if (menuItemString.textContent == "Popularité") {
            media.sort((a, b) => {
                return b.likes - a.likes;
            });
            showMedia(media);
            mediaLightbox();
            mediaLightboxControls();
        }
        if (menuItemString.textContent == "Date") {
            media.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
            showMedia(media);
            mediaLightbox();
            mediaLightboxControls();
        }
        if (menuItemString.textContent == "Titre") {
            media.sort((a, b) => a.title.localeCompare(b.title));
            showMedia(media);
            mediaLightbox();
            mediaLightboxControls();
        }
    }

    // swapping categories in the menuItem
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

        // media sorting
        popularityCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Popularité") {
                media.sort((a, b) => {
                    return b.likes - a.likes;
                });
                showMedia(media);
                mediaLightbox();
                mediaLightboxControls();
            }
        })

        dateCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Date") {
                media.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                showMedia(media);
                mediaLightbox();
                mediaLightboxControls();
            }
        })

        titreCategory.addEventListener('click', () => {
            if (menuItemString.textContent == "Titre") {
                media.sort((a, b) => a.title.localeCompare(b.title));
                showMedia(media);
                mediaLightbox();
                mediaLightboxControls();
            }
        })
    });

    // swapping categories in the menuItem
    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            let menuItemText = menuItemString.textContent;
            menuItemString.textContent = e.currentTarget.textContent;
            e.currentTarget.textContent = menuItemText;
            openDropdown();
        })
    })
};


// MEDIA LIKES -------------------------------
// Update the likes and dislikes heart
function updateLike(e) {
    if (e.currentTarget.classList.contains('likes')) {
        e.currentTarget.classList.remove('likes');
        e.currentTarget.classList.add('dislikes');
    } else if (e.currentTarget.classList.contains('dislikes')) {
        e.currentTarget.classList.remove('dislikes');
        e.currentTarget.classList.add('likes');
    }
}


// initializing the content of the photographers' page
async function initMedia() {
    const { photographers, media } = await getPhotographDatas(); // API
    const usersInfo = media.filter((md) => md.photographerId == userId); // filters each photographer's media
    const userProfil = photographers.filter((photographer) => photographer.id == userId); // filters the photographer's data
    displayData(usersInfo, userName, userProfil, photographers, media); // displays the photographer's data
};

initMedia();
