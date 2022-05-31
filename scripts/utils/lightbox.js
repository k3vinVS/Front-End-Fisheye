// window.onload = () => {
//   const lightboxModal = document.querySelector('.lightbox-modal');
//   const closeButton = document.querySelector('.lightbox-close').addEventListener('click', () => {
//     console.log('test')
//   });

//   const links = document.querySelectorAll('.media a');
//   console.log(links);

//   for(let link of links) {
//     link.addEvenListener('click', (e) => {
//       e.preventDefault()

//       const image = lightboxModal.querySelector('.lightbox-modal_content img');
//       image.src = this.href;
//       console.log(image);

//       lightboxModal.classList.add('lightbox-modal_show');
//     });
//   }

//   closeButton.addEvenListener('click', () => {
//     console.log('test');
//     // modale.classList.remove('.lightbox-modal');
//   })
// }