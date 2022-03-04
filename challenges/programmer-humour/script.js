
function programmerHumor(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) =>{
        let image=document.createElement("img");
        image.src=data.img;
        document.body.appendChild(image);
        console.log(data);
    })

    .catch((error) => console.log("Error"));

}

programmerHumor();