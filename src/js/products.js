import Pic1 from "../img/1.jpg"
import Pic2 from "../img/2.jpg" 
import Audio1 from "../audio/1.mp3"
import Audio2 from "../audio/2.mp3"

import {renderImage} from "./output.js";
import {
    Howl,
    Howler
} from 'howler';


let blocks = [{
        title: "John",
        pic: Pic1,
        type: 'images'
    },
    {
        title: "John",
        pic: Pic2,
        type: 'images'
    },
    {
        title: "John",
        pic: Pic2,
        type: 'images'
    },
     {
         title: "John",
         pic: Audio1,
         type: 'audio'
     },
     {
         title: "John",
         pic: Audio2,
         type: 'audio'
     }
]

blocks.forEach(function (item){
    if(item.type=="images"){
        renderImage(item)
    }else if (item.type == "audio") {
        console.log(item)
        var sound = new Howl({
            src: [item.pic]
        });

        sound.play();


    } 
})

