var i=1;
var n=2;
function next(){
    if(i<n){
        i=i+1;
    }
    else{
        i=2;
    }
    document.getElementById("slidevd").setAttribute("src",""+i+".mp4");
}
function back(){
    if(i>1){
        i=i-1;
    }
    else{
        i=n;
    }
    document.getElementById("slidevd").setAttribute("src","video/"+i+".mp4");
}