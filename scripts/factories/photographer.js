function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    function getUserCardDOM() {
        let articleHtml = `
        <article>
        <a href="photographer.html?id=${id}" class="profil">
        <img src="${picture}" />
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


    // function getUserCardDOMBis() {
    //     const article = document.createElement('article');
    //     const lien = document.createElement('a');

    //     const img = document.createElement('img');
    //     img.setAttribute("src", picture);

    //     const h2 = document.createElement('h2');
    //     h2.textContent = name;

    //     const spanLocation = document.createElement('span');
    //     spanLocation.textContent = `${city}, ${country}`;
    //     spanLocation.setAttribute('id', 'location');

    //     const spanTagline = document.createElement('span');
    //     spanTagline.textContent = tagline;
    //     spanTagline.setAttribute('id', 'tagline');

    //     const spanPrice = document.createElement('span');
    //     spanPrice.textContent = `${price}€/jour`;
    //     spanPrice.setAttribute('id', 'price');

    //     article.appendChild(img);
    //     article.appendChild(h2);
    //     article.appendChild(spanLocation);
    //     article.appendChild(spanTagline);
    //     article.appendChild(spanPrice);
    //     return (article);
    // }
};

