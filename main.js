// let giphyForm = document.querySelector("form");
// let giphyArea = document.querySelector("giphyArea");

// const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';

// // Global constants
// let url = 'https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=9&q= ';

// // TODO: Add event listener


// // Function to get gifs
// async function getGiphy(){

// }

function sendApiRequestgetGiphy(){
    var userInput = document.getElementById("giphySearch").value
    console.log(userInput)
    

    const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H'
    var url = 'https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${API_KEY}&limit=9';

    fetch(url).then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        var imgPath = json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
    evt.preventDefault();
}

