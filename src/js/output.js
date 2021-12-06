const blockElem = document.querySelector(".items");

export const renderImage = (item) => {
    blockElem.innerHTML += `
     <div class="main__item">
                 <div class="main__item-pic">
                     <img class="main__item-img" src="${item.pic}">
                 </div>
                 <div class="main__item-title title">
                 ${item.title}
                 </div>
            </div>
     `;
}

// export const renderAudio = (item) => {
//     blockElem.innerHTML += `
//      <div class="main__item">
//                  <div class="main__item-pic">
//                      <img class="main__item-img" src="${item.pic}">
//                  </div>
//                  <div class="main__item-title title">
//                  ${item.title}
//                  </div>
//             </div>
//      `;
// }



export const renderAudio = (item) => {
    // let volume =document.getElementById('volmin')
    blockElem.innerHTML += `
                <div class = "main__item" id="${item.title}">
                 <div class="main__item-pic">
                    <button class= "play"> Play </button>
                    <button class = "pause"> Pause </button> 
                    <button class= "volmax"> Vol + </button>
                    <button class= "volmin" > Vol - </button>
                 </div>
                 <div class="main__item-title title">
                 ${item.title}
                 </div>
            </div>
     `;

     var sound = new Howl({
         src: [item.pic]
     });
     
    // blockElem.childNodes = function func(id) {
    //     var elem = document.getElementById(id);
    //     console.log(123);
    // }
    //  blockElem.classList.add('item')
     let id =item.title
     let parent =document.getElementById(id)
     console.log(parent)

    parent.querySelector(".play").onclick = function () {
        console.log (id)
           
    }
     
    document.querySelector(".volmin").onclick = function () {
        console.log("Вы нажали на volmin");
        Howler.volume(0.5);
    }
    
    document.querySelector(".volmax").onclick = function () {
        console.log("Вы нажали на volmax");
        Howler.volume(1.5);
     }

    document.querySelector(".pause").onclick = function () {
        console.log("Вы нажали на pause");
        sound.pause();
    }
}
