let count = 0;

let buttonCreature = {
    name: "Silvermist",
    species: " Water Fairy", 
    talent: "water bending",
    moods: ["gentle", "whimsical", "calm", "quiet", "hopeful", "serene"]
   
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>I can be " + currentMood + ".</p>";

    message = message + "<p>My name is " + buttonCreature.name + ".</p>";

    message = message + "<p>I am an " + buttonCreature.species + ".</p>";

    message = message + "<p>My talent is " + buttonCreature.talent + ".</p>";

    $("#output").html(message);

    console.log(count);

    console.log(arrayPosition);

    console.log(currentMood);

});
