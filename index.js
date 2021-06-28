function popUpMenu () {
    document.querySelector("#mobile-container").classList.toggle("hide-mobile-content");
    document.querySelector("#mobile-menu").classList.toggle("show-mobile-menu");
    //document.querySelector('header').classList.toggle()
}

function removeMenu () { 
    document.querySelector("#mobile-container").classList.toggle("hide-mobile-menu");
    document.querySelector("#mobile-menu").classList.toggle("show-mobile-menu");
    // ["mobile-backgrond-image-1","mobile-backgrond-image-2"].map( className => 
    //     document.querySelector("#image2").classList.toggle(className));
}