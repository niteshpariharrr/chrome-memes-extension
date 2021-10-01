

function newJoke(){
    fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json() )
.then(jokeData =>{
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokeText;

})
}

newJoke()

// Chrome Extentions Dose Not Support Inline JS So I Use This One
const button = document.getElementById("btn").addEventListener("click",newJoke);