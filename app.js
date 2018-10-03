var express=require("express")
var bodyParser = require('body-parser')
var fs=require("fs")
var path=require("path")
var router = require('./router')
var app=express()

app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')))
app.use('/public/', express.static(path.join(__dirname, 'public')))
app.use('/views/', express.static(path.join(__dirname, 'views')))

app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.use(router)

app.listen(3000,function(){
	console.log("running....")
})