export function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    // function urlCheck (){
    //     if(window.location.pathname=="#home"){
    //         console.log("Home")
    //     } else {
    //         console.log("Not Home")
    //     }
    // }

    if(pageID != ""){

        $.get(`pages/${pageID}.html`, function (data) {

            // $(".navigation").remove();
            // $(".navigation2").append();
            $(".navigationApp").append(<div class="navigation">
            <nav>
              <a href="#home" class="travelFly"
                ><img src="images/logo/logo-white.png" alt=""
              /></a>
              <a href="#home">home</a>
              <h2>|</h2>
              <a href="#about">about</a>
              <h2>|</h2>
              <a href="#tours">tours</a>
              <h2>|</h2>
              <a href="#specialOffers">special offers</a>
              <h2>|</h2>
              <a href="#blog">blog</a>
              <h2>|</h2>
              <a href="#contact" class="lastLink">contact</a>
              <ul>
                <i class="fa-solid fa-bars"></i>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#tours">tours</a></li>
                <li><a href="#specialOffers">special offers</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#contact">contact</a></li>
              </ul>
            </nav>
            <div class="heroCaption">
              <h1>travel-fly</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                Dolorum perferendis provident commodi. Iusto, dicta.
              </p>
              <div class="readMore"><a href="#about">READ MORE</a></div>
            </div>
          </div>)

            $("#app").html(data)

        })

    } else {
        $.get(`pages/home.html`, function (data) {

            // $(".navigation2").remove();
            // $(".navigation").append();
            // urlCheck();

            $("#app").html(data);
        })
    }
}

