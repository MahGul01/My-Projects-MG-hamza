var DATA = [];
var username;
load();

$(document).ready(
    function(){
        username = prompt("Enter your Username");
    }
);

$('#submit').on('click',function(){
    var sg = $('#input').val();
    
    DATA.push(username + ': ' + sg); //sumair: hello
    renderJson(DATA);
    save();
    
    $('#input').val('');
});

$('#clear').on('click',function(){
    DATA = [];
    localStorage.msg = [];
    renderJson(DATA);
});

function renderJson(data){
    $('#container').empty();
    
    for(var i in data){
        $('#container').append(data[i] + '</br>');
    }
}

function save(){
    localStorage.msg = JSON.stringify(DATA);
}

function load(){
    if(localStorage.msg != null){
        DATA = JSON.parse(localStorage.msg);
        renderJson(DATA);
    }
    
}