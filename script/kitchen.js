const Items = [["Assets\\images\\pexels-mumma-oyens-8799602_1.png" , 44] , 
              ["Assets\\images\\pexels-omar-mahmood-106343_1.png" , 4] ,
              ["Assets\\images\\unsplash_33GPuoFI7v8.png" ,32] ,
              ["Assets\\images\\unsplash_Y6OgisiGBjM.png",120],
              ["Assets\\images\\unsplash_60nzTP7_hMQ.png",77],
              ["Assets\\images\\unsplash_CbNAuxSZTFo.png",89],
              ["Assets\\images\\unsplash_MqT0asuoIcU.png",90],
              ["Assets\\images\\unsplash_nP11TkjxJ7s.png",90],
              ["Assets\\images\\unsplash_sejqj6Eaqe8.png",78],
              ["Assets\\images\\unsplash_UxRhrU8fPHQ.png",78],
              ["Assets\\images\\unsplash_Y6OgisiGBjM.png",120],
              ["Assets\\images\\unsplash_CbNAuxSZTFo.png",89]];

/* use map to show image in kitchen section 
 because we do not nedd to write fro each item mannually.
 */

const imgArr = Items.map((Item) =>{
   return `
         <div id="item">
            <div> 
               <img src = ${Item[0]}  id="image" />
            </div>
            <div id = "details">
               <div id="left">
                  <div id="pizza-name">Home made pizza</div>
                  <div id="rate-time">
                     <div id="star">
                        <img src="Assets\\icons\\star.svg" id="star-img"/> <div id="text"> &nbsp 4.7
                     </div>
                     </div>
                  <div id="time">
                     50-79 min
                  </div>
                  </div>
               </div>
               <div  id="right">
                  <div id="price"> 
                     $${Item[1]}
                  </div>
                  <img src="Assets\\icons\\plus.svg" id="plus-img" />
               </div>
            </div>
         </div>`;
});





const imgstr=imgArr.join('');

export default imgstr;