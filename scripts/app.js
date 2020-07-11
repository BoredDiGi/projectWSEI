var x = 0;
function rec(x) {
    if( x == 1)
    {
        //document.getElementById("text").innerHTML = " przepis 1 ";
        document.getElementById("text").innerHTML = ' <div>przepis 1</div> ';
    }
    else
    if( x == 2)
    {
        //document.getElementById("text").innerHTML = " przepis 2 ";
        document.getElementById("text").innerHTML = ' <div> przepis 2</div> ';
    }
    else
    document.getElementById("text").innerHTML = " nieobsługiwany wyjątek, zgłoś go. ";

};
var i = 0;
var words = new Array();

function add() {
    i++;
    const tk = prompt("Napisz swoje zadanie:");
    if (!tk) display = none;
    let addnew = document.createElement('div');
    document.getElementById("todoli").appendChild(addnew);
    addnew.id = "task"+i;
    addnew.innerHTML = tk + '<div id="edit" onclick="editNew(' + i +')">Edytuj</div><div id="delete" onclick="delNew('+i+')">Usuń</div>';
}

function delNew(z) {
    var d = document.getElementById("todoli");
    var zd = document.getElementById("task" + z)
    let delElement = d.removeChild(zd);
}

function editNew(z) {
    const editit = prompt("Wprowadź zmianę:");
    if (!editit) display = none;
    var nt = document.getElementById("task"+z).innerHTML;
    var it = nt.replace(nt, editit);
    document.getElementById("task" + z).innerHTML = it + '<div id="edit" onclick="editNew(' + z + ')">Edytuj</div><div id="delete" onclick="delNew(' + z +')">Usuń</div>';


}




var video = document.getElementsByTagName('video')[0];
      
      video.addEventListener('timeupdate', function()
      {
        var p = document.getElementsByTagName('progress')[0];
        p.value = 100*this.currentTime/this.duration;
      });