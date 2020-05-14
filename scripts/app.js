var x = 0;
function rec(x) {
    if( x == 1)
    {
        //document.getElementById("text").innerHTML = " przepis 1 ";
        document.getElementById("text").innerHTML = ' <div> <img src="./assets/dumplings.jpg"> przepis 1</div> ';
    }
    else
    if( x == 2)
    {
        //document.getElementById("text").innerHTML = " przepis 2 ";
        document.getElementById("text").innerHTML = ' <div> <img src="./assets/rest.jpg"> przepis 2</div> ';
    }
    else
    if( x == 3)
    {
        //document.getElementById("text").innerHTML = " przepis 3 ";
        document.getElementById("text").innerHTML = ' <div> <img src="./assets/salad.jpg"> przepis 3</div> ';
    }
    else
    document.getElementById("text").innerHTML = " nieobsługiwany warunek, zgłoś go. ";

};
var v = document.getElementsByTagName('video')[0];
      
      v.addEventListener('timeupdate', function()
      {
        var p = document.getElementsByTagName('progress')[0];
        p.value = 100*this.currentTime/this.duration;
      });