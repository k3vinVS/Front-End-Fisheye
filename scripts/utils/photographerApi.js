const getPhotographDatas = () => fetch('./photographers.json')
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err))

// let requestURL = './data/photographers.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// console.log(request);
// console.log(fetch('./data/photographers.json'));