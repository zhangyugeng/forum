

	function submitForm(){
		var parm=$("form").serializeArray();
    $.ajax({
    	url:"login",
    	type:"post",
    	data:parm,
    	dataType:"json",
    	success:function(data){
    		console.log(data)
    	}
    })
    }
    function goback(num){

    	if(num==-1){
    		location.href="index.html"
    	}

    }

