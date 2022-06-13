// async function lightboxMediaModal() {
// const { photographers, media } = await getPhotographDatas();
// const usersInfo = media.filter((md) => md.photographerId == userId);
// console.log();

// const gallery = document.querySelectorAll('.media-card .mediaCard'),
//     title = document.querySelector('.title'),
//     previewBox = document.querySelector('.preview-box'),
//     previewImg = previewBox.querySelector('img'),
//     previewVideo = previewBox.querySelector('video'),
//     closeIcon = previewBox.querySelector('.icon'),
//     shadow = document.querySelector('.shadow');
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');
// const modalLightbox = document.getElementById("body-container");


// // OPEN LIGHTBOX MODAL
// function displayModalLightbox() {
//     modalLightbox.style.display = "block";
//     shadowModal.style.display = 'block';
// }

// // CLOSE LIGHTBOX MODAL
// function closeModalLightbox() {
//     modalLightbox.style.display = "none";
//     shadowModal.style.display = 'none';
// };

// closeIcon.addEventListener('click', () => {
//     closeModalLightbox();
//     console.log('test');
// });


// // let newIndex = 1;
// // showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
// // showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
// // title.textContent = media[newIndex].title;

// console.log(media);




// // -------------------------------------------------------------------------------------------------




// // function showLightbox(type, url, name) {
// //     let lightboxHtml =
// //     document.querySelector('.picture').innerHTML = type == 'img'
// //     ? `<img src="${url}" alt="" onclick="displayModalLightbox()">`
// //     : `<video preload="auto" onclick="displayModalLightbox()" controls>
// //     <source src="${url}" type="video/webm" />
// //     <source src="${url}" type="video/mp4" />
// //     </video>`;
    
// //     let newIndex = 1;
// //     showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
// //     showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
// //     title.textContent = media[newIndex].title;


// //     return (lightboxHtml);
// // };
// // showLightbox();

// // nextBtn.onclick = () => {
// //     newIndex++; // Increment newIndex value
// //     showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
// //     showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
// //     title.textContent = media[newIndex].title;
// //     if (newIndex >= gallery.length - 1) {
// //         // preview();
// //         showLightbox();
// //         nextBtn.style.display = 'none';
// //     } else {
// //         preview(); //Calling again above function to update image
// //         prevBtn.style.display = 'block';
// //     }
// // }
// // };
// // lightboxMediaModal();




// // ------------------------------------------------------------------------------------------------



// function showLightbox(type, url) {
//     document.querySelector('.picture').innerHTML = type == 'img' ? `
//         <img src="${url}" alt="" onclick="displayModalLightbox()">` : `
//         <video preload="auto" onclick="displayModalLightbox()" controls>
//             <source src="${url}" type="video/webm" />
//             <source src="${url}" type="video/mp4" />
//         </video>
//         `
// };

// let newIndex = 1;
// showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
// showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
// title.textContent = media[newIndex].title;

// prevBtn.onclick = () => {
//     newIndex--; // Decrement newIndex value
//     showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
//     showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
//     title.textContent = media[newIndex].title;
//     if (newIndex == 0) {
//         preview();
//         prevBtn.style.display = 'none';
//     } else {
//         preview(); //Calling again above function to update image
//         nextBtn.style.display = 'block';
//     }
// }

// preview(); // Calling above function
// previewBox.classList.add('show');
// shadow.style.display = 'block';
// document.querySelector('body').style.overflow = 'hidden';

// closeIcon.onclick = () => {
//     newIndex = clickImgIndex; // Assigning user first click img index to newIndex variable
//     prevBtn.style.display = 'block';
//     nextBtn.style.display = 'block';
//     previewBox.classList.remove('show');
//     shadow.style.display = 'none';
//     document.querySelector('body').style.overflow = 'auto';
// }


// // ----------------------------------------------------------------------------------------------------

// function preview() {
//     title.textContent = media[i].title;
//     if (previewImg) {
//         previewVideo.style.display = 'none';
//         let selectedImgUrl = gallery[newIndex].querySelector('img').src; // Getting user clicked image url
//         previewImg.src = selectedImgUrl; // Passing user clicked img url to previewImg source
//     } else if (previewVideo) {
//         previewImg.style.display = 'none';
//         let selectedVideoUrl = gallery[newIndex].querySelector('video').src; // Getting user clicked video url

//         previewVideo.src = selectedVideoUrl; // Passing user clicked vide url to previewVideo source
//     }
// };

// if (newIndex == 0) {
//     prevBtn.style.display = 'none';
// }
// if (newIndex >= gallery.length - 1) {
//     nextBtn.style.display = 'none';
// }
// prevBtn.onclick = () => {
//     newIndex--; // Decrement newIndex value
//     if (newIndex == 0) {
//         preview();
//         prevBtn.style.display = 'none';
//     } else {
//         preview(); //Calling again above function to update image
//         nextBtn.style.display = 'block';
//     }
// }
// nextBtn.onclick = () => {
//     newIndex++; // Increment newIndex value
//     if (newIndex >= gallery.length - 1) {
//         preview();
//         nextBtn.style.display = 'none';
//     } else {
//         preview(); //Calling again above function to update image
//         prevBtn.style.display = 'block';
//     }
// }

// function lightboxOnload() { // Once window loaded
//     for (let i = 0; i < gallery.length; i++) {
//         let newIndex = i; // Passing i value to newIndex variable
//         let clickImgIndex;
//         gallery[i].onclick = () => {
//             clickImgIndex = newIndex; // Passing clicked img index to clickImgIndex avriable
//             console.log(i);

//             function preview() {
//                 document.querySelector('.picture').innerHTML = type == 'img'
//                     ? `<img src="${url}" alt="" onclick="displayModalLightbox()">`
//                     : `<video preload="auto" onclick="displayModalLightbox()" controls>
//                 <source src="${url}" type="video/webm" />
//                 <source src="${url}" type="video/mp4" />
//                 </video>`
//                 title.textContent = media[i].title;
//                 // if (previewImg) {
//                 //     previewVideo.style.display = 'none';
//                 //     let selectedImgUrl = gallery[newIndex].querySelector('img').src; // Getting user clicked image url
//                 //     previewImg.src = selectedImgUrl; // Passing user clicked img url to previewImg source
//                 // } else if (previewVideo) {
//                 //     previewImg.style.display = 'none';
//                 //     let selectedVideoUrl = gallery[newIndex].querySelector('video').src; // Getting user clicked video url

//                 //     previewVideo.src = selectedVideoUrl; // Passing user clicked vide url to previewVideo source
//                 // }
//             };

//             let newIndex = 1;
//             showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
//             showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
//             title.textContent = media[newIndex].title;

//             // Let's work on previous and next button


//             if (newIndex == 0) {
//                 prevBtn.style.display = 'none';
//             }
//             if (newIndex >= gallery.length - 1) {
//                 nextBtn.style.display = 'none';
//             }

//             preview(); // Calling above function
//             previewBox.classList.add('show');
//             shadow.style.display = 'block';
//             document.querySelector('body').style.overflow = 'hidden';

//             closeIcon.onclick = () => {
//                 newIndex = clickImgIndex; // Assigning user first click img index to newIndex variable
//                 prevBtn.style.display = 'block';
//                 nextBtn.style.display = 'block';
//                 previewBox.classList.remove('show');
//                 shadow.style.display = 'none';
//                 document.querySelector('body').style.overflow = 'auto';
//             }
//         }
//     }
// };





// // -------------------------- Partie enlevée en dernier...(09/06/2022 - 10H53) -------------------------

// // function displayModalLightbox() {
//     //     const modalLightbox = document.querySelector(".wrapper");
//     //     modalLightbox.style.display = "block";
//     //     shadowModal.style.display = 'block';
//     // }

//     // function closeModalLightbox() {
//     //     const modalLightbox = document.querySelector(".wrapper");
//     //     modalLightbox.style.display = "none";
//     //     shadowModal.style.display = 'none';
//     // }


//     // function lightboxOnload() { // Once window loaded
//     //     for (let i = 0; i < gallery.length; i++) {
//     //         let newIndex = i; // Passing i value to newIndex variable
//     //         let clickImgIndex;
//     //         gallery[i].onclick = () => {

//     //             function preview() {
//     //                 document.querySelector('.picture').innerHTML = type == 'img'
//     //                     ? `<img src="${url}" alt="" onclick="displayModalLightbox()">`
//     //                     : `<video preload="auto" onclick="displayModalLightbox()" controls>
//     //                 <source src="${url}" type="video/webm" />
//     //                 <source src="${url}" type="video/mp4" />
//     //                 </video>`
//     //                 title.textContent = media[i].title;
//     //                 // if (previewImg) {
//     //                 //     previewVideo.style.display = 'none';
//     //                 //     let selectedImgUrl = gallery[newIndex].querySelector('img').src; // Getting user clicked image url
//     //                 //     previewImg.src = selectedImgUrl; // Passing user clicked img url to previewImg source
//     //                 // } else if (previewVideo) {
//     //                 //     previewImg.style.display = 'none';
//     //                 //     let selectedVideoUrl = gallery[newIndex].querySelector('video').src; // Getting user clicked video url

//     //                 //     previewVideo.src = selectedVideoUrl; // Passing user clicked vide url to previewVideo source
//     //                 // }
//     //             };

//     //             let newIndex = 1;
//     //             showLightbox('img', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].image);
//     //             showLightbox('video', 'assets/images/Sample_Photos/' + name + '/' + media[newIndex].video);
//     //             title.textContent = media[newIndex].title;

//     //             // Let's work on previous and next button


//     //             if (newIndex == 0) {
//     //                 prevBtn.style.display = 'none';
//     //             }
//     //             if (newIndex >= gallery.length - 1) {
//     //                 nextBtn.style.display = 'none';
//     //             }

//     //             preview(); // Calling above function
//     //             previewBox.classList.add('show');
//     //             shadow.style.display = 'block';
//     //             document.querySelector('body').style.overflow = 'hidden';

//     //             closeIcon.onclick = () => {
//     //                 newIndex = clickImgIndex; // Assigning user first click img index to newIndex variable
//     //                 prevBtn.style.display = 'block';
//     //                 nextBtn.style.display = 'block';
//     //                 previewBox.classList.remove('show');
//     //                 shadow.style.display = 'none';
//     //                 document.querySelector('body').style.overflow = 'auto';
//     //             }
//     //         }
//     //     }
//     // };
//     // lightboxOnload();