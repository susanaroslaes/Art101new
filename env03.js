let environmentTitle = "The Neverbeast";

let environmentElements = ["paws", "tail", "horns", "eyes"];

let mainEntity = {
    name: "Gruff",
    type: "soft border",
    mood: "intimidating",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#needy-button").click( function(){
    
    $("#needy-button").append(":" + " Gruff is lage and with big paws. He has short legs and dark grey and white strip fur. Gruff paws are big and furry used for diging "  );
    
    $("#needy-button").append("<img src = 'paws.webp'>");
 
});  

$("#needy-button-eyes").click( function(){

    $("#needy-button-eyes").append(":" + "Gruff has big green eye and has less pupil. You can tell how Gruff feels base on his tail and ears just like a dog Gruff expresses his mood in other ways" );
   
    $("#needy-button-eyes").append("<img src = 'eyes.jpeg'>");

});

$("#needy-button-tail").click( function(){
   
    $("#needy-button-tail").append(":" + "Has a tail very similar to a opossum. Just like a opssum can hang from trees with his tail. He can also use his tail to move things around" );

    $("#needy-button-tail").append("<img src = 'tail.jpeg'>");
});

$("#needy-button-transformation").click( function(){
    
    $("#needy-button-transformation").append(":" + "During a lightning storm Gruff Transforms. Gruff grows lage bat wings and lage horn that can collect lightning");

    $("#needy-button-transformation").append("<img src = 'transformation.jpeg'>");

});
