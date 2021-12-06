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