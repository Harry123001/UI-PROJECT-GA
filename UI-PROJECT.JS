const url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5';

fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log("success!", res);
        fetchApi(res)
    })
    .catch(err => {
        console.log("something went wrong...", err);
    });

function fetchApi(data) {
    console.log('fetching API Data', data)

    console.log(data[0].image)






}