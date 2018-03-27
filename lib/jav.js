$(document).ready(function(){
    $('.log').hide();
    $('.sgup').hide();
    
    $('a').css({'color' :"black",
    'text-decoration':"none"});
    $('.r1 a').click( function(){
        $('#bd').show();
        $('.log').hide();
        $('.sgup').hide();
    });
    $('#sgn').click(function (){
        $('.log').hide();
         $('#bd').hide(); 
         $('.sgup').show();
     });
$('#logi').click(function (){
    $('.sgup').hide();
    $('#bd').hide(); 
    $('.log').show();
});
$('a').on("mouseover",function(){
    $(this).css("color","white");
});
$('a').on("mouseout",function(){
    $(this).css("color","black");
});

});