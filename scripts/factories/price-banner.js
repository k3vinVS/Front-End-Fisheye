function photographerLikeBannerFactory(numLike) {

    function getUserLikeBannerDOM() {

        // Number of likes
        let likeBannerHtml =
            `<p>${numLike}<i class="fa fa-solid fa-heart"></i></p>`;
        return likeBannerHtml;
    }
    return { numLike, getUserLikeBannerDOM }; // Return data and card
};


function photographerPriceBannerFactory(data) {
    const { price } = data; // Download data in API

    function getUserPriceBannerDOM() {

        // Price of photographers
        let priceBannerHtml =
            `<p>${price}€ / jour</p>`;
        return priceBannerHtml;
    }
    return { price, getUserPriceBannerDOM }; // Return data and card
};
