var mode=false;
var action;
var second=0;
var minute=0;
var count=1;
hide("stop");
hide("resume");
hide("reset");
document.getElementById("start").onclick=function(){
    if(mode==false)
    {
        hide("start");
        show("stop");
        time_start(minute,second);
    }
}
function time_start(minute,second)
{
    action=setInterval(function(){
        second++;
        if(second<10)
        {
            document.getElementById("second").innerHTML="0"+second;
        }
        else{
            document.getElementById("second").innerHTML=second;
        }
        if(second==59)
        {
            minute++;
            if(minute<10)
            {
                document.getElementById("minute").innerHTML="0"+minute+":";
            }
            else{
                document.getElementById("minute").innerHTML=minute+":";
            }
            second=0;
        }
        document.getElementById("stop").onclick=function(){
            time_stop(minute,second);
        }
        document.getElementById("lap").onclick=function(){
            if(minute<10 && second<10)
            {
                document.getElementById("show").innerHTML+="<h3>Lap " + count + "- 0" + minute + ":0" + second + "</h3>";
            }
            else if(minute<10 && second>9)
            {
                document.getElementById("show").innerHTML+="<h3>Lap " + count + "- 0" + minute + ":" + second + "</h3>";
            }
            else if(minute>9 && second<10)
            {
                document.getElementById("show").innerHTML+="<h3>Lap " + count + "- " + minute + ":0" + second + "</h3>";
            }
            else if(minute>9 && second>9)
            {
                document.getElementById("show").innerHTML+="<h3>Lap " + count + "- " + minute + ":" + second + "</h3>";
            }
            count++;
        }
    },1000);
}
function time_stop(minute,second){
    var x=minute;
    var y=second;
    hide("stop");
    show("resume");
    hide("lap");
    show("reset");
    clearInterval(action);
    document.getElementById("resume").onclick=function(){
        hide("resume");
        show("stop");
        hide("reset");
        show("lap");
        time_start(x,y);
    }
    document.getElementById("reset").onclick=function(){
        location.reload();
    }
}
function show(id)
{
    document.getElementById(id).style.display="inline";
}
function hide(id)
{
    document.getElementById(id).style.display="none";
}