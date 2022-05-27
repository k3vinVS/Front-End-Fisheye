function photographerMediaFactory(data, name) {
    // const usersInfo = data.filter((md) => md.photographerId == userId);
    // console.log(usersInfo);

    const { id, photographerId, title, image, video, likes, date, price } = data;
    
    const mediaPicture = `assets/images/Sample_Photos/${name}/${image}`;
    const mediaVideo = `assets/images/Sample_Photos/${name}/${video}`;

    function getUserMediaDOM() {
        
        let articleHtml = `
        <div class="media-card">
            <a href="photographer.html?id=${photographerId}" class="media-photograph">
                <img src="${mediaPicture}" alt="${title}">                
            </a>            
            <div class="info">
                <p class="info-title">${title}</i></p>
                <p class="info-like">${likes}
                    <button class="likes"></button>
                </p>
            </div>
        </div>             
            `;
        let articleVideoHtml = `
        <div class="media-card">
            <a href="photographer.html?id=${photographerId}" class="media-photograph">
                <video preload="auto" controls>
                    <source src="${mediaVideo}" type="video/webm" />
                    <source src="${mediaVideo}" type="video/mp4" />
                </video>
            </a>  
            <div class="info">
                <p class="info-title">${title}</p>
                <p class="info-like">${likes}
                    <button class="likes"></button>
                </p>
            </div>                
        </div>          
            `;

        if(data.image){
            return articleHtml;
        } else {
            return articleVideoHtml;
        }
        // return (articleHtml, articleVideoHtml);
    }
    
    return { id, photographerId, title, image, video, likes, date, price, getUserMediaDOM };
};



// BLOC CARD_MEDIA

/* <a href="#" class="media-photograph">
    <div class="media-picture">
    <img src="./assets/images/Sample_Photos/Mimi/Animals_Rainbow.jpg" alt="">
        <div class="info">
            <p class="info-title">Arc-en-cie</p>
            <p class="info-like"><i class="fa fa-solid fa-heart"></i></p>
        </div>
    </div>
</a> */