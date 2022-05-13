async function getMediaPhotographers() {
    const { media } = await getPhotographDatas();
        // console.log( media );

        return ({
            media: [...media]});
};


async function displayData(media) {
    const photographersMedia = document.querySelector(".media");
    
    media.forEach((dataMedia) => {
            const photographerMediaModel = photographerMediaFactory(dataMedia);
            const userMediaDOM = photographerMediaModel.getUserMediaDOM();
            photographersMedia.innerHTML += (userMediaDOM);
            
        });
    };


async function initMedia() {
    // Récupère les datas des photographes
    const { media } = await getMediaPhotographers();
    displayData(media);
};

initMedia();






// async function getPhotographersMedia() {
//     const {media} = await getPhotographDatas();
//     console.log(media);
// };




// async function fetchPhotographerData(){
//     await fetch ('./data/photographers.json')
//         .then((res) => res.json())
//         .then((data) => {
//             const photographerDatas = data.media;
            
//             console.log(photographerDatas);
//         });
        
// };

// fetchPhotographerData();



// fetch ('./data/photographers.json')
// .then((res)=>res.json())
// .then((data)=>console.log(data.media));

