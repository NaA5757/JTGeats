const row = [["Assets\\images\\pexels-mumma-oyens-8799602_1.png" , 44] , 
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
var couresel = row.map((Item) =>{
    return `
    <div  id="item" style="max-width:80vw">
    <div>
    <img src = ${Item[0]}  id="image" style="max-width:277px"/>
    </div>
    <div id = "details" style="max-width:80vw">
               <div id="left">
                  <div id="pizza-name" style="padding-left:-10px">Home made pizza</div>
                  <div id="rate-time" style="margin-left:12px">
                     <div id="star" style="min-width:50px;max-height:25px;">
                        <img src="Assets\\icons\\star.svg" id="star-img"/> <div id="text" style="margin-top:4px"> 4.7
                     </div>
                     </div>
                  <div id="time" style="margin-top:4px">
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
    </div>
    `
 });
 const popularItems=couresel.join('');

 export default popularItems;