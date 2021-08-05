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
}

function test(url){
    document.body.style.background = "url('" + url + "')";
}