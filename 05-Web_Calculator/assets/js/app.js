function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function cleardisplay(){
    document.getElementById("screen").value=""
}

function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function back_space() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substr(0, screen.length - 1);
}