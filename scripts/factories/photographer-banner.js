function photographerBannerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
        
    const pictureBanner = `assets/photographers/ID_Photos/${portrait}`;

    function getUserBannerDOM() {
        let divHtml = `
        <div class="photograph-header">
            <div id="photograph-description">
                <header>
                    <h1>${name}</h1>
                </header>
                <div class="description">
                    <p class="location">${city}, ${country}</p>
                    <p class="citation">${tagline}</p>
                </div>
            </div>
            <div id="button">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div class="profil-photographers">
                <img src="${pictureBanner}" alt="photo de profil" />
            </div>
      </div>           
            `;
            return divHtml;
    }
    return { id, name, portrait, city, country, tagline, price, getUserBannerDOM };
};