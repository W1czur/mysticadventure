function copyToClipboard() {
    const textToCopy = "mysticadventure.fugy.pl";
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Adres serwera skopiowany!");
}