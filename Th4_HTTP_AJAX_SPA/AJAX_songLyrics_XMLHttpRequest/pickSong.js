const dom = {
    lyricsOfTheSongs: document.querySelector(".lyrics"),
    adele_cover: document.querySelector("#adele"),
    ed_cover: document.querySelector("#ed"),
    man_cover: document.querySelector("#man"),
}

let dataURL = ["./adele_hello.txt", "./edSheeran_badHabits.txt", "./ragNboneMan_human.txt"];

let AJAXcall = function (data) {
    // create a XMLHttpRequest object
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
        new ActiveXObject("Microsoft.XMLHTTP");

    // initializes the request:
    xhr.open("GET", data, true);

    // EventHandler, that will be fired each time when the xhr state changes
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // finally do something with content:
            dom.lyricsOfTheSongs.innerHTML = `<pre>${this.responseText}</pre>`;
        };
    };

    // sends the request:
    xhr.send();
};

dom.adele_cover.addEventListener('click', function () {
    AJAXcall(dataURL[0]);
});

dom.ed_cover.addEventListener('click', function () {
    AJAXcall(dataURL[1]);
});

dom.man_cover.addEventListener('click', function () {
    AJAXcall(dataURL[2]);
});
