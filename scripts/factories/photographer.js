function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    // console.log(data);

    const picture = `./assets/photographers/ID_Photos/${portrait}`;

    function getUserCardDOM() {
        let articleHtml = `
        <article>
        <a href="photographer.html?id=${id}&name=${name}" class="profil">
        <img src="${picture}" alt="${name}"/>
            <h2>${name}</h2>
        </a>
        <p id="location">${city}, ${country}</p>
        <p id="tagline">${tagline}</p>
        <p id="price">${price}€/jour</p>
        </article>
        `;
        return articleHtml;
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
};

