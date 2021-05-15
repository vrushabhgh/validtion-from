var sub=document.getElementById("submit");
sub.addEventListener("click",displaydetails,);
var row=1;

function displaydetails(){
    var fname=document.getElementById("frist").value;
  
   var lname=document.getElementById("last").value;
   var gender=document.querySelector('input[type="radio"]:checked').value;
  var add=document.getElementById("inputAddress").value;
   var city=document.getElementById("inputCity").value;
   var state=document.getElementById("inputState").value;
   var code=document.getElementById("code").value;
   var food=document.querySelector('input[type="checkbox"]:checked').value;
  
  if(!fname || !lname || !gender ||  !add || !city || !state || !code || !food){
       alert("please fill all the details")
       return;
   }

   var display=document.getElementById("disp");
   var newRow=display.insertRow(row);

   var cell1=newRow.insertCell(0)
   var box2=newRow.insertCell(1);
   var box3=newRow.insertCell(2);
  
   var box4=newRow.insertCell(3);
   var box5=newRow.insertCell(4);
   var box6=newRow.insertCell(5);
   var box7=newRow.insertCell(6);
   var box8=newRow.insertCell(7);
   var box9=newRow.insertCell(8);

   cell1.innerHTML=fname;
   box2.innerHTML=lname;
   box3.innerHTML=gender;
  
   box4.innerHTML=add;
   box5.innerHTML=city;
   box6.innerHTML=state;
   box7.innerHTML=code;
   box8.innerHTML=food;
  
   row++;
  
  
  
}


