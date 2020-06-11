function selectSection(sectionButtonID)
{
    var sectionButtons = ["AboutButton", "ProgrammingButton", "AnimationButton", "ContactButton"];
    sectionButtons.forEach(dimButton);
    document.getElementById(sectionButtonID).style.backgroundColor = 'lightblue';
    document.getElementById(sectionButtonID).parentElement.style.width = '190px';
    document.getElementById(sectionButtonID.substring(0, sectionButtonID.length -6)).scrollIntoView(true);
}

function dimButton(sectionButtonID)
{
    document.getElementById(sectionButtonID).style.backgroundColor = 'rgb(55, 55, 55)';
    document.getElementById(sectionButtonID).parentElement.style.width = '170px';
}