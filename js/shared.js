$(".menu-item").on('click',function(){
    let val = $(this);
    $(".menu-item").removeClass("active");
    val.addClass("active");
})
// import { useState } from 'react'
// const [color,setColor] = useState("#274C5B");
$(".btn-color").on('click',function(){
    let btn = $(this);
    $(".home-page").css("background-color", btn.attr("data-color") )
    console.log();
})
let count2 = 16;
$(".font").on('click',function(){
    let typeFont = $(this);
    let typeId = typeFont.attr("id");
    if( typeId === "down"){
        if(count2 < 10 ){
            $("#show-font").text(10);
        }else{
            $("#show-font").text(count2--);
        }

    }else if(typeId === "up"){
        if(count2 > 20){
            $("#show-font").text(20);
        }else{
            $("#show-font").text(count2++);
        }
    }
    $("body").css("font-size", count2);
})
// $(".f-family").on('click',function(){
//     console.log($(this).text());

//     $("body").css("font-family","'" + $(this).text() + "'")
// })