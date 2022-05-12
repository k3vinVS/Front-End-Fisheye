async function getMediaPhotographers() {
    const {media} = await getPhotographDatas();
        console.log(media);

        return ({
            media: [...media]});
}


async function displayData(media) {
    const photographersMedia = document.querySelector(".media");

    photographers.forEach((media) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        // photographersSection.appendChild(userCardDOM);
        photographersSection.innerHTML += (userCardDOM);
    });
};