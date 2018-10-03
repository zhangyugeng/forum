var express=require("express")
var router = express.Router()
var person=require("./models/user.js")


router.get("/",function(request,response){
	
		response.render("index.html")
		
})

router.get("/login",function(request,response){
	
		response.render("login.html")
		
})

router.get("/register",function(request,response){
	
		response.render("register.html")
		
})

router.post("/login",function(request,response){
	console.log(request.body)
	
		response.json({success:"true"})
		
})

router.post("/register",function(request,response){
	console.log(request.body)
	person.findOne({name:request.body.name},function(err,data){
		if(err) return response.send("server error");
		if(data){
				response.json({error:true,message:"账户已存在"})
		}else {
			var person1=new person({
				name:request.body.name,
				nickname:request.body.nickname,
				password1:request.body.password1,
				password2:request.body.password2,
				phone:request.body.phone
			});

				person1.save(function (err, fluffy) {

    			if (err) return console.error(err);
 
   				});
   			response.json({error:false,message:"注册成功"})	
		}
	})
		
		
})

router.get("/new",function(request,response){
	
		response.render("detail/new.html")
		
})
router.get("/show",function(request,response){
	
		response.render("detail/show.html")
		
})
module.exports = router