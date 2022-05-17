function photographerMediaFactory(data, name) {
    // const usersInfo = data.filter((md) => md.photographerId == userId);
    // console.log(usersInfo);

    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const mediaPicture = `assets/images/Sample_Photos/${name}/${image}`;

    function getUserMediaDOM() {
        let articleHtml = `
            <a href="photographer.html?id=${photographerId}" class="media-photograph">
                <div class="media-picture">
                <img src="${mediaPicture}" alt="oiseau">
                    <div class="info">
                        <p class="info-title">${title}</p>
                        <p class="info-like">${likes}<i class="fa fa-solid fa-heart"></i></p>
                    </div>
                </div>
            </a>            
            `;
            return articleHtml;
    }
    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM };
};