var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var personSchema = new mongoose.Schema({
  name: String,
  password: Number,
  age: Number

});

var person = mongoose.model('person', personSchema);

// 增加
// var person1=new person({name:"李四",password:123456,age:22});

// person1.save(function (err, fluffy) {
//     if (err) return console.error(err);
 
//    });

// 删除
// person.deleteOne({name:123},function(err){
// 	if (err) return handleError(err);
// 	console.log("delete success")
// })

// 更新
// person.updateOne({ name: '李四' }, { age: 100 }, function(err, res) {
//   // Updated at most one doc, `res.modifiedCount` contains the number
//   // of docs that MongoDB updated
//   console.log(res);
// });


// 查询
person.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})