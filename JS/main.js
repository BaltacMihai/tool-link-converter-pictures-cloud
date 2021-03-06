function getUrl()
{
    let url = document.getElementById("toConvert").value;
    const newUrl =  document.getElementById("converted");
    newUrl.value = convert(url);
    document.getElementById("toConvert").value = '';
    copyToClipboard();
}

function copyToClipboard()
{
    const url = document.getElementById("converted");
    //select the field 
    url.select();
    url.setSelectionRange(0, 99999);  //for mobile devices
    document.execCommand("copy"); //copy the text from the text field
   // alert("Copied the text: " + url.value);
    test(url.value);

    let popUp = document.getElementById("pop_up");
    popUp.style.display="block";
    setTimeout( ()=>popUp.style.display="none", 4000 );

}

function test(url){
    document.body.style.backgroundImage = "url('" + url + "')";
}