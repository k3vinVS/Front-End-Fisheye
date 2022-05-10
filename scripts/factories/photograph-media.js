async function getPhotographersMedia {
    const {media} = await getPhotographDatas();
    console.log(media);
}