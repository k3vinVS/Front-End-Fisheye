const getPhotographDatas = () => fetch('./data/photographers.json')
    .then((res) => res.json())
    .catch((err) => console.log(err))

