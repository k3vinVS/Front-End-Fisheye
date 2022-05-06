// function photographerFactory(data) {
//     const { name, portrait, city, country, tagline, price } = data;

//     const picture = `assets/photographers/ID_Photos/${portrait}`;

//     function getUserBannerDOM() {
//         let userBanner = `<div class="photograph-header">
//         <div id="photograph-description">
//           <header>
//             <h1>${name}</h1>
//           </header>
//           <div class="description">
//             <p class="location">${city}, ${country}</p>
//             <p class="citation">${tagline}</p>
//           </div>
//         </div>
//         <div id="button">
//           <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
//         </div>
//         <div class="profil">
//           <img src="${picture}" alt="" />
//         </div>
//       </div>`;
//       return userBanner;
//     }
//     return { name, picture, city, country, tagline, price, getUserBannerDOM }
// };