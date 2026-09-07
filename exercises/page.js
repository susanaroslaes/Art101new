

$("#needy-button").click( function(){

    count= count +1;

    colorCount=count-1;

    $("#needy-button").html("You clicked me " + count + " and your favourite color today is: " + colors[colorCount] );
    
    $("#needy-button").css("background-color", colors[colorCount]);

    
    $("html").css("background-color", colors[colorCount+1]);
    
    console.log (pencil.color);

});