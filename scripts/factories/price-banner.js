function photographerLikeBannerFactory(data) {
    const { likes } = data;
    // console.log(data);
        
    function getUserLikeBannerDOM() {
        let likeBannerHtml = 
        `<p>${likes}<i class="fa fa-solid fa-heart"></i></p>`;
        return likeBannerHtml;
    }  
    return { likes, getUserLikeBannerDOM };
};


function photographerPriceBannerFactory(data) {
    const { price } = data; 
    // console.log(data);

    function getUserPriceBannerDOM() {        
        let priceBannerHtml = 
        `<p>${price}€ / jour</p>`;
        return priceBannerHtml;
    }  
    return { price, getUserPriceBannerDOM };
};
