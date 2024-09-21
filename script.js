// Single Product page 
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementById("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[4].onclick = function(){
    MainImg.src = smallimg[3].src;
}



// Search
const search =() =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".pro");
    const pname = storeitems.getElementsByTagName("span");

    for(var i=l; i<pname.length; i++){
        let match = product[i].getElementsByTagName("span")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}