window.addEventListener("load", function () {
    const pads = document.querySelectorAll(".pads div");
    const sounds = document.querySelectorAll(".sound");
    const flyingArea = document.querySelector(".flying-area");
    const colours = [
        "lightblue",
        "lightcoral",
        "lightpink",
        "lightyellow",
        "lightgreen",
        "lightslategray"
    ];

    // for (var i = 0; i < numberOfPads; i++) {
    //     pads[i].addEventListener("click", function () {
    //         sounds[i].play();
    //     });

    // }

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createFlyinObject(index);


        });
    });

    function createFlyinObject(index) {
        const flyingObject = document.createElement("div");
        flyingArea.appendChild(flyingObject);
        flyingObject.style.backgroundColor = colours[index];



    }

});



