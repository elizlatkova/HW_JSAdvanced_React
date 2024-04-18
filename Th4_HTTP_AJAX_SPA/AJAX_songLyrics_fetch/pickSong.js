const dom = {
    lyricsOfTheSongs: document.querySelector(".lyrics"),
    adele_cover: document.querySelector("#adele"),
    ed_cover: document.querySelector("#ed"),
    man_cover: document.querySelector("#man"),
}

//adele click event
dom.adele_cover.addEventListener("click", function () {
    const responce = fetch("./adele_hello.txt")
    .then(resp => resp.text())
    .then(data => {
        dom.lyricsOfTheSongs.innerHTML = `<pre>${data}</pre>`;
    })
    .catch(err => console.log(`Something went wrong: ${err}`))
})

//ed click event
dom.ed_cover.addEventListener("click", function () {
    const responce = fetch("./edSheeran_badHabits.txt")
    .then(resp => resp.text())
    .then(data => {
        dom.lyricsOfTheSongs.innerHTML = `<pre>${data}</pre>`;
    })
    .catch(err => console.log(`Something went wrong: ${err}`))
})

//rag'N'bone man click event
dom.man_cover.addEventListener("click", function () {
    const responce = fetch("./ragNboneMan_human.txt")
    .then(resp => resp.text())
    .then(data => {
        dom.lyricsOfTheSongs.innerHTML = `<pre>${data}</pre>`;
    })
    .catch(err => console.log(`Something went wrong: ${err}`))
})
