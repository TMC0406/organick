let btnBack = $("#back");
let btnNext = $("#next");
let count = 0;
const listBg = [
    "./img/Image2.png",
    "./img/food/1.jfif",
    "./img/food/2.jfif",
    "./img/food/3.jfif",
    "./img/food/4.jfif"
]
function time(){
    $('#next').click();
}
window.setInterval(function() {
    time();
}, 3200);
btnBack.on('click',function(){
    if(count <=0){
        count =listBg.length;
    }else{
   $("#bg-img").attr('src',listBg[count--]);
    }
})
btnNext.on('click',function(){
    if(count >= listBg.length){
        count =0;
    }else{
   $("#bg-img").attr('src',listBg[count++]);
    }
})
// function changeBg(){
//    $("#bg-img").attr('src',);
//    console.log(vb);

// }
// changeBg()

