const date=new Date();
const week=date.getDay();
const weekItems=["日","月","火","水","木","金","土"];
const dayOfWeek=weekItems[week];
    if(week===1||week===3||week===5){
     document.getElementById("result").innerHTML="今日は"+dayOfWeek+"曜日なので活動しています！ぜひ見学きてね！";
    }else{
     document.getElementById("result").innerHTML="今日は"+dayOfWeek+"曜日なので活動していません...次回の活動日に見学きてね！";
        }

function gonta1(){
     document.getElementById("gonta").src="CrazyGonta.gif";
     document.getElementById("clubname").innerHTML="NT Gonta Club";
    }
function gonta0(){
     document.getElementById("gonta").src="Gonta.jpg";
     document.getElementById("clubname").innerHTML="NT Information Club"
    }

 var i=0;
function game(){
     i++;
  if(i==1){
     alert("にゃ");
    }else if(i==3){
     alert("にゃにゃ？");
    }else if(i==10){
      alert("にゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃにゃ");
      i=0;
      }
 }