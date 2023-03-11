

function outputMessage(message, shouldBreak) {
    document.write(message);
    if(shouldBreak){
        document.write("<br \>");
    }
}


function theController() {
    var welcomeMessage1 = "It works";
    var welcomeMessage2 = "It worked again";
    var welcomeMessage3 = "It worked 3rd times";
    var welcomeMessage4 = "DONE";
    outputMessage(welcomeMessage1, true);
    outputMessage(welcomeMessage2, true);
    outputMessage(welcomeMessage3, true);
    outputMessage(welcomeMessage4, false);


}