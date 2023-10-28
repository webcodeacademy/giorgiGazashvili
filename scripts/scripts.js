{
    const headernav = ["მთავარი", "სერვისი", "კონტაქტი", "ავტორიზაცია", "კომპიუტერები"];
    const headernavlinks =["index.html", "#", "#", "login.html", "computerspage.html"];

    let headernavsigrdze = headernav.length;
    let headernavtext = '<ul>';

    for(let i = 0; i<headernavsigrdze;i++){
        headernavtext += '<a href='+'' + headernavlinks[i] +">" + headernav[i] + "<a/>";
    }
    headernavtext += "</ul>";
    document.getElementById("nav").innerHTML = headernavtext;

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length;
    for(let i = 0;i<menuLength;i++){
        if(menuItem[i].href === currentLocation){
            menuItem[i].className = "active"
        }
    }

}

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

let showchat = () => {
    document.getElementById("messagebox").style.display = "block";
    document.getElementById("chatopenerbutton").style.display = "none";
}
let closechat = () => {
    document.getElementById("messagebox").style.display = "none";
    document.getElementById("chatopenerbutton").style.display = "flex";
}

let openclosecategories = () => {
    document.getElementById("openedcategories").style.display = "flex";
}
let closecategories = () => {
    document.getElementById("openedcategories").style.display = "none";
}