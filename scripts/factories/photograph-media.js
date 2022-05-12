async function getPhotographersMedia() {
    const {media} = await getPhotographDatas();
    console.log(media);
};

function photographerMedia(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const picture = `assets/photographers/ID_Photos/${image}`;

    function getMediaCardDOM() {
        let articleHtml = 
        `
        <a href="#" class="media-photograph">
            <div class="media-picture">
                <img src="${picture}" alt="${title}">
                <div class="info">
                    <p class="info-title">${title}</p>
                    <p class="info-like">${likes}<i class="fa fa-solid fa-heart"></i></p>
                </div>
            </div>
        </a>
        
        `;
        return articleHtml;
    }
    return { id, photographerId, title, image, likes, date, price, getMediaCardDOM };
};


