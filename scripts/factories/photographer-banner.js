function photographerBannerFactory(data) {
    const { id, name, portrait, city, country, price, tagline, alttext } = data; // Download data in API
    // console.log(data);

    const pictureBanner = `assets/photographers/ID_Photos/${portrait}`; // Download profil image in directory

    function getUserBannerDOM() {

        // Profil card
        let divHtml = `
            <div id="photograph-description">
                <header role="Header">
                    <h1>${name}</h1>
                </header>
                <div class="description" role="Text">
                    <p class="location">${city}, ${country}</p>
                    <p class="citation">${tagline}</p>
                </div>
            </div>
            <div id="button" role="Button">
                <button class="contact_button" onclick="displayModal()" alt="Contact Me" aria-label="Contactez moi">Contactez-moi</button>
            </div>
            <div class="profil-photographers" role="Image">
                <img src="${pictureBanner}" alt="${alttext}" aria-label="Photo de profil" />
            </div>          
            `;
        return divHtml;
    }
    return { id, name, portrait, city, country, price, tagline, alttext, getUserBannerDOM }; // Return data and card
};
