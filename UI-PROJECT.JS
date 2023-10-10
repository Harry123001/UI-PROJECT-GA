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

    const fetchImage = document.getElementById('acc1')
    fetchImage.src = data[0].image

    const fetchImage1 = document.getElementById('acc2')
    fetchImage1.src = data[1].image

    const fetchImage2 = document.getElementById('acc3')
    fetchImage2.src = data[2].image

    const fetchImage3 = document.getElementById('acc4')
    fetchImage3.src = data[3].image

    const fetchImage4 = document.getElementById('acc5')
    fetchImage4.src = data[4].image

    console.log('fetching API Data', data[1].name)

    const title = document.getElementById('title')
    title.innerText = data[0].name

    const title1 = document.getElementById('title1')
    title1.innerText = data[1].name

    const title2 = document.getElementById('title2')
    title2.innerText = data[2].name

    const title3 = document.getElementById('title3')
    title3.innerText = data[3].name

    const title4 = document.getElementById('title4')
    title4.innerText = data[4].name
}

