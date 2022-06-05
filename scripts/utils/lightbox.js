// const lightboxModal = document.querySelector('.lightbox-modal');

// function openLightboxModal(data, name) {
//     const { id, photographerId, title, image, video, likes, date, price } = data;
//     const lastImage = document.querySelector('.prev');
//     const nextImage = document.querySelector('.next');
//     const links = document.querySelectorAll('img');
//     console.log(links);


//     const mediaPicture = `assets/images/Sample_Photos/${name}/${image}`;
//     const mediaVideo = `assets/images/Sample_Photos/${name}/${video}`;
//     console.log(mediaPicture);

//     function getLightboxDOM() {
//         let lightboxContainerHtml =`
//         <div class="lightbox-container">
//             <span class="lightbox-close" onclick="closeLighbox()">&times;</span>
//             <span class="prev"></span>
//             <span class="next"></span>
//             <div class="lightbox-modal_content">
//                 <img src="${mediaPicture}" alt="${title}" />
//                 <video preload="auto" controls>
//                     <source src="${mediaVideo}" type="video/webm" />
//                     <source src="${mediaVideo}" type="video/mp4" />
//                 </video>
//             </div>
//             <div class="info">
//                 <p class="info-title">${title}</p>
//             </div>
//         </div> 
//         `;
//         return lightboxContainerHtml;
//     };
//     return { id, photographerId, title, image, video, likes, date, price, getLightboxDOM};



//     // for (let link of links) {
//     //     link.addEvenListener('click', (e) => {
//     //         e.preventDefault()

//     //         const image = lightboxModal.querySelector('.lightbox-modal_content img');
//     //         image.src = this.href;
//     //         console.log(image);

//     //         lightboxModal.classList.add('lightbox-modal_show');
//     //     });
//     // }

// };
// openLightboxModal();

// function closeLighbox() {
//     lightboxModal.remove('lightbox-modal');
// };


//Selecting all required elements
const gallery = document.querySelectorAll('.gallery .image'),
    previewBox = document.querySelector('.preview-box'),
    previewImg = previewBox.querySelector('img'),
    closeIcon = previewBox.querySelector('.icon'),
    currentImg = previewBox.querySelector('.current-img'),
    totalImg = previewBox.querySelector('.total-img'),
    shadow = document.querySelector('.shadow');

window.onload = () => { // Once window loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; // Passing gallery images length to totalling
        let newIndex = i; // Passing i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = () => {
            clickImgIndex = newIndex; // Passing clicked img index to clickImgIndex avriable
            console.log(i);
            function preview() {
                currentImg.textContent = newIndex + 1; // Passing newIndex value to currentImg by adding +1
                let selectedImgUrl = gallery[newIndex].querySelector('img').src; // Getting user clicked image url
                previewImg.src = selectedImgUrl; // Passing user clicked img url to previewImg source
            }

            // Let's work on previous and next button
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            if (newIndex == 0) {
                prevBtn.style.display = 'none';
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = 'none';
            }
            prevBtn.onclick = () => {
                newIndex--; // Decrement newIndex value
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = 'none';
                } else {
                    preview(); //Calling again above function to update image
                    nextBtn.style.display = 'block';
                }
            }
            nextBtn.onclick = () => {
                newIndex++; // Increment newIndex value
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = 'none';
                } else {
                    preview(); //Calling again above function to update image
                    prevBtn.style.display = 'block';
                }
            }
            preview(); // Calling above function
            previewBox.classList.add('show');
            shadow.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';

            closeIcon.onclick = () => {
                newIndex = clickImgIndex; // Assigning user first click img index to newIndex variable
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
                previewBox.classList.remove('show');
                shadow.style.display = 'none';
                document.querySelector('body').style.overflow = 'auto';

            }
        }
    }
}