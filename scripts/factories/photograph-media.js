function photographerMediaFactory(data, name, index) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const mediaPicture = `./assets/images/Sample_Photos/${name}/${image}`;
    const mediaVideo = `./assets/images/Sample_Photos/${name}/${video}`;

    function getUserMediaDOM() {

        let articleHtml = `
        <div class="media-card">
        <span class="mediaCard"><img src="${mediaPicture}" alt="${title}" type="image" role='img' aria-label="Image" tabindex='0' /></span>                 
            <div class="info">
                <p class="info-title">${title}</p>
                <span class="info-like">
                    <p class="numberOfLike">${likes}</p>
                    <button class="dislikes" onclick="updateLike(${'event'})" aria-label="likes"></button>
                </span>
            </div>
        </div>             
            `;
        let articleVideoHtml = `
        <div class="media-card">
                <span class="mediaCard">
                    <video tabindex='0' preload="auto" role='application' controls muted controlslist="nodownload, nofullscreen" aria-label='Vidéo'>
                        <source src="${mediaVideo}" type="video/webm" aria-label="Vidéo"/>
                        <source src="${mediaVideo}" type="video/mp4" aria-label="Vidéo"/>
                    </video>
                </span>
            <div class="info">
                <p class="info-title">${title}</p>
                <span class="info-like">
                    <p class="numberOfLike">${likes}</p>
                    <button class="dislikes" onclick="updateLike(${'event'})" aria-label="likes"></button>
                </span>
            </div>                
        </div>          
            `;

        if (data.image) {
            return articleHtml;
        } else {
            return articleVideoHtml;
        }

        // return (articleHtml, articleVideoHtml);
    }

    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM };
};