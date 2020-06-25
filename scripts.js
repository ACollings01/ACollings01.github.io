// Called when a button is selected, dims the other buttons and sets the selected one to lightblue, as well as scrolling the associated section of the page into view
function selectSection(sectionButtonID)
{
    var sectionButtons = ["AboutButton", "ProgrammingButton", "AnimationButton", "ContactButton"];
    sectionButtons.forEach(dimButton);
    document.getElementById(sectionButtonID).style.backgroundColor = 'lightblue';
    document.getElementById(sectionButtonID).parentElement.style.width = '190px';
    document.getElementById(sectionButtonID.substring(0, sectionButtonID.length -6)).scrollIntoView(true);
}

// Sets the background colour for a button back to the default
function dimButton(sectionButtonID)
{
    document.getElementById(sectionButtonID).style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById(sectionButtonID).parentElement.style.width = '170px';
}

// Used as a reset since page didn't want to scroll back to ABOUT when page loads
function startup()
{
    // Had to delay this slightly for the page to load, I should find a better way since this might not work for slower connections
    setTimeout( function() {
        selectSection("AboutButton");
    }, 10);
}