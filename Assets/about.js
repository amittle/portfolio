
//Scroll down on load to show portrait and name together
$("html, body").animate({ scrollTop: $(document).height() }, "slow");



//When the sound icon inline is clicked play audio of name pronunciation
function playName(){
    var audio = document.getElementById("alana");
    audio.play();
}