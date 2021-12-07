import Pic1 from "../img/1.jpg"
import Pic2 from "../img/2.jpg" 
import Audio1 from "../audio/1.mp3"
import Audio2 from "../audio/2.mp3"
import {playAudio} from "./playAudio.js"

import {renderAudio, renderImage} from "./output.js";
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
         title: "Pitter",
         pic: Audio1,
         type: 'audio',
        
     },
     {
         title: "Parker",
         pic: Audio2,
         type: 'audio',
        
     }
]



blocks.forEach(function (item){
    if(item.type=="images"){
        renderImage(item)
    }else if (item.type == "audio") {
        renderAudio(item)
        playAudio(item)

    }
     
})




