import header  from './header.js';/*import header section*/
import contact from './contactus.js';/*import contact us section*/
import kitchen from './kitchen.js';/*import kitchen section*/
import popularItem from './popularItem.js';/*import popular items section*/
import service from './service.js';/*import service section*/
import footer from './footer.js';/*import footer section*/


/*   header section */
document.getElementById("header-section").innerHTML=`${header}`;

/*  non header section */
document.getElementById("non-header").innerHTML = `
               <div id="item-popular"> 
               <div id="kitchen"> ${kitchen} </div> 
               <div id="popular-item">Popular Items</div>
               <div id="fav" >
               <div id="scroll">
               <div class="owl_wrapper">
               <div class="prev no_select"><img src="Assets\\icons\\play.svg" class="play" style="width:3vw;min-width:50px;position:absolute;z-index:8;"/></div>
               <div class="owl_content">
               ${popularItem}
               </div>
              <div class="next no_select"><img src="Assets\\icons\\play2.svg"  class="play" style="width:3vw;min-width:50px;position:absolute;z-index:8;"/></div>
             </div>
               
               </div>
               </div> 
              <input type="button" value="Request a Dish" id="request-dish"/>
              
               ${service}
               
               ${contact}
               
               ${footer}`;




$(".carousel").owlCarousel({
    loop:true,
    margin: 20,
    responsiveClass:true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });

//when click on requested a dush then open a pop 
document.getElementById("request-dish").addEventListener("click", function(){
        
   document.querySelector(".requested-dish-pop").style.display = "flex";
});
//when click on  then cancle then pop up will be disappear
document.getElementById("cancle").addEventListener("click", function(){
   document.querySelector(".requested-dish-pop").style.display="none";});


   //   card pop up section ,when click on the cart then a new pop shown 
document.getElementById("cart-pop").addEventListener("click", function(){
        
        document.querySelector(".popup").style.display = "flex";
     });
//when click on back to menu then pop up will be disappear
document.getElementById("close").addEventListener("click", function(){
        document.querySelector(".popup").style.display="none";});

   
        var container = $("#carousel_wrapper");
    
        var runner = container.find('ul');
        var liWidth = runner.find('li:first').outerWidth();
        var itemsPerPage = 3;
        var noofitems = runner.find('li').length;
        
        runner.width(noofitems * liWidth);
        // container.width(itemsPerPage*liWidth);
    
        $('#right').click(function() {
            $( runner ).animate({ "left": "-=100px" }, "slow" );
        });
        
        
        $('#left').click(function() {
            console.log(runner.position)
            $( runner ).animate({ "left": "+=100px" }, "slow" );
});



