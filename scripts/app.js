var x = 0;
function rec(x) {
    if( x == 1)
    document.getElementById("text").innerHTML = " przepis 1 ";
    else
    if( x == 2)
    document.getElementById("text").innerHTML = " przepis 2 ";
    else
    if( x == 3)
    document.getElementById("text").innerHTML = " przepis 3 ";
    else
    document.getElementById("text").innerHTML = " nieobsługiwany warunek, zgłoś go. ";

};