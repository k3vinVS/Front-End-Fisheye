function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const lien = document.createElement ( 'a' );

        const img = document.createElement('img');
        img.setAttribute("src", picture);

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const spanLocation = document.createElement ( 'span' );
        spanLocation.textContent = `${city}, ${country}`;
        spanLocation.setAttribute('id', 'location');
        
        const spanTagline = document.createElement ( 'span' );
        spanTagline.textContent = tagline;
        spanTagline.setAttribute('id', 'tagline');
        
        const spanPrice = document.createElement ( 'span' );
        spanPrice.textContent = `${price}€/jour`;
        spanPrice.setAttribute('id', 'price');

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(spanLocation);
        article.appendChild(spanTagline);
        article.appendChild(spanPrice);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
};