var DATA = [];
var username;
load();

$(document).ready(function(){
        username = prompt("Enter your Username");
    }
);

$('#submit').on('click',function(){
    var mssg = $('#input').val();

    DATA.push(username + ': ' + mssg); //sumair: hello
    renderJson(DATA);
    save();

    $('#input').val('');
});

function renderJson(data){
    $('#container').empty();

    for(var i in data){
        $('#container').append(data[i] + '</br>');
    }
}

function save(){
  /////////// TO SAVE DATA ON THE SERVER ///////////
$.ajax({
	    url: 'http://nodedatastore.herokuapp.com/sana' ,
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(DATA),
	    success:function(res){console.log(res);}
	});
}

function load(){

   
    $.get('http://nodedatastore.herokuapp.com/sana',function(res){
        
        if (res.length) //cuz array has a length variable
            
            DATA = res;
        
        else
            
            DATA = [];

       
        RenderJSON(DATA);

   
    
    });

} 


$('#clear').on('click',function (){
	 $('#container').empty();
	 DATA=new Array();
	 

});