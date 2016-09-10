function addData(){
var input = document.getElementById('input').value;
var div = document.getElementById('container');
div.innerHTML = div.innerHTML + "<div id='"+ counter++ +"' onclick='removeItem(this.id)'> <input  type='checkbox' id='"+ counter++ +"'  onclick='removeItem(this.id)' > <label>"+input+"</label></div>";
listarr.push(input);
saveItem();
}

function removeItem(id){
  var div = document.getElementById(id);
  div.parentNode.removeChild(div);
}
function saveItem(){
       document.getElementById("result").innerHTML = "start";
//storing items
   localStorage.setItem("array", JSON.stringify(listarr));


array = JSON.parse(localStorage.getItem("array"));

       document.getElementById("result").innerHTML = array;
   
}