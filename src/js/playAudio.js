

export const playAudio = (item) => {
    console.log(item.pic)
    var sound = new Howl({
       src: [item.pic]
    });
    // sounds.push(sound)
    // console.log(sounds)
 let blockItem = document.getElementById(item.title);
 
    blockItem.querySelector(".play").onclick = function () {
        sound.play();
        console.log("Вы нажали на play",item.title);
    }

    blockItem.querySelector(".volmin").onclick = function () {
        console.log("Вы нажали на volmin");
        Howler.volume(0.5);
    }

    blockItem.querySelector(".volmax").onclick = function () {
        console.log("Вы нажали на volmax");
        Howler.volume(1.5);
     }

    blockItem.querySelector(".pause").onclick = function () {
        console.log("Вы нажали на pause");
        sound.pause();
    }
}