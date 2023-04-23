import * as Model from "../data/data.js"

function initURLListener(){
  $(window).on("hashchange", Model.changeRoute);
  Model.changeRoute();
}

$(document).ready(function() {

    initURLListener();
    
})