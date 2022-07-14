function photographerMediaFactory(data, name, index) {

    const { id, photographerId, title, image, video, likes, date, price } = data; // Download data in API

    const mediaPicture = `./assets/images/Sample_Photos/${name}/${image}`; // Download images in directory
    const mediaVideo = `./assets/images/Sample_Photos/${name}/${video}`; // Download videos in directory

    function getUserMediaDOM() {

        // Image card
        let articleImageHtml = `
        <div class="media-card">
        <span class="mediaCard"><img src="${mediaPicture}" alt="${title}" type="image" role='img' aria-label="Image" tabindex='0' /></span>                 
            <div class="info" role="Text">
                <p class="info-title">${title}</p>
                <span class="info-like">
                    <p class="numberOfLike">${likes}</p>
                    <button class="dislikes" onclick="updateLike(${'event'})" role="Image" aria-label="likes"></button>
                </span>
            </div>
        </div>             
            `;

        // Video card
        let articleVideoHtml = `
        <div class="media-card">
                <span class="mediaCard">
                    <video tabindex='0' preload="auto" role='application' controls muted controlslist="nodownload, nofullscreen" aria-label='Vidéo'>
                        <source src="${mediaVideo}" type="video/webm"/>
                        <source src="${mediaVideo}" type="video/mp4"/>
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

        // Choose image or video cards
        if (data.image) {
            return articleImageHtml;
        } else {
            return articleVideoHtml;
        }
    }

    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM }; // Return data and card
};