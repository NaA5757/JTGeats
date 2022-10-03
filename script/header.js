const header=`<header>
         <div id="nav">
            <div>
                <img id="icon" src="Assets\\icons\\Logo.svg" />
            </div>
            <div id="nav-item" style="text-align:center">
                <a id="url" href="#home">home</a>
                <a id="url" href="#about">about</a>
                <a id="url" href="#menu">menu</a>
                <a id="url" href="#Blog">Blog</a>
                <a id="url" href="#Contact">Contact</a>
            </div>
            <div style="text-align:right ">
                <img style="width: 10%;"  src="Assets\\icons\\Search.svg" />
                <a href="#" id="cart-pop" >
                   <img style="width: 10% ;margin-left:10%;" src="Assets\\icons\\Cart.svg" />
               </a>
            </div>
        </div>
        <div id="subheader">
               <div id="left-head" style="text-align:left">
                <div style="font-size:2.5vw">Authentic Home food in India</div>
                <p style="padding-right: 30%; font-size: 1.2vw;">JTGeats is a courier service in which authentic home cook food is delivered to a customer.</p>
                <div class="wrap">
                    <div class="search">
                       <input type="text" class="searchTerm" placeholder="Search food you love" name="search">
                       <button type="submit" class="searchButton">Search</button>
                    </div>
                </div>
               </div>
               <div style="text-align:right">
                <img src="Assets\\icons\\cooking.svg" alt="" id="cook"/>
               </div>
        </div>
    </header>
    `
    export default header;