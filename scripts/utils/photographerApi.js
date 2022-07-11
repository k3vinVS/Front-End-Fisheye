// Download datas of "photographers.json" file
const getPhotographDatas = () => fetch('./photographers.json')
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err))