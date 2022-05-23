async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
            photographersSection.innerHTML += photographerFactory(photographer).getUserCardDOM();
        });
    };
    
    async function init() {
        // Récupère les datas des photographes
        async function getPhotographers() {
            const {photographers} = await getPhotographDatas();
            return ({
                photographers: [...photographers]});
            };
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    




    // async function getPhotographers() {
    //     // Penser à remplacer par les données récupérées dans le json
    //     const {photographers} = await getPhotographDatas();
    //     console.log(photographers);
        
    //     // et bien retourner le tableau photographers seulement une fois
    //     return ({
    //         photographers: [...photographers]});        
    // };

    // DISPLAY
    // const photographerModel = photographerFactory(photographer);
    // const userCardDOM = photographerModel.getUserCardDOM();
    // photographersSection.innerHTML += (userCardDOM);