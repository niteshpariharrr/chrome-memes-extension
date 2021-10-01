
function newMeme(){

    const imageElement = document.getElementById("image")
    imageElement.src = "#"
    fetch("https://meme-api.herokuapp.com/gimme")
    .then(res => res.json())
    .then(data => {
                img_url = data.url 
                imageElement.src=img_url
            })
}
newMeme()
// Chrome Extentions Dose Not Support Inline JS So I Use This One

const button = document.getElementById("btn").addEventListener("click",newMeme);
