
function fetchDogImage(){
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then ((response) => response.json())
    .then((data) => {
let img = document.createElement("img");
img.src = data.message;
let listEl = document.createElement("li");
listEl.appendChild(img);
let ul = document.getElementById("dogImages");
ul.appendChild(listEl)
    })
    .catch(error => {
        console.log("This link seems broken");
    })
}

    let button = document.getElementById("btnImage");
    button.addEventListener("click", () =>{
        fetchDogImage();
    })

console.log(fetchDogImage());