function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price, alttext } = data; // Download data in API

    const picture = `./assets/photographers/ID_Photos/${portrait}`; // Download profil image in directory

    function getUserCardDOM() {

        // Profil photographer card
        let articleHtml = `
        <article>
        <a href="photographer.html?id=${id}&name=${name}" class="profil" role="Link + image">
        <img src="${picture}" alt="${alttext}"/>
            <h2>${name}</h2>
        </a>
        <p id="location" role="Text paragraph">${city}, ${country}</p>
        <p id="tagline" role="Text paragraph">${tagline}</p>
        <p id="price" role="Text paragraph">${price}€/jour</p>
        </article>
        `;
        return articleHtml;
    }
    return { name, picture, city, country, tagline, price, alttext, getUserCardDOM } // Return data and card
};

