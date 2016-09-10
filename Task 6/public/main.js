$('#submit').on('click',function(e){
    
    e.preventDefault();
    
    var name = $('#name').val();
    var email = $('#email').val();
    
     $.ajax({
	    url: '/', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: {
            'name' : name,
            'email' : email
        },
	    success:function(res){console.log(res);},
        error: function(res){console.log(res);}
	});
});


