function photographerLikeBannerFactory(numLike) {
    // console.log(numLike);
        
    function getUserLikeBannerDOM() {
        let likeBannerHtml = 
        `<p>${numLike}<i class="fa fa-solid fa-heart"></i></p>`;
        return likeBannerHtml;
    }  
    return { numLike, getUserLikeBannerDOM };
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
