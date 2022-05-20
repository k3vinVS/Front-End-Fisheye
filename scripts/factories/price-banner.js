function photographerPriceBannerFactory(data) {

    const { likes, price } = data;

    function getUserPriceBannerDOM() {
        
        let priceBannerHtml = `
        <p>${likes}<i class="fa fa-solid fa-heart"></i></p>
        <p>${price}€ / jour</p>            
        `;
        return priceBannerHtml;
    }  
    return { likes, price, getUserPriceBannerDOM };
};