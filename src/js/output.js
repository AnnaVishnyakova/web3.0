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


export const renderAudio = (item) => {
   
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

}
