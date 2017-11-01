/**
 * Created by lenovo on 2017/10/30.
 */
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use('/a',express.static('src'));
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.set('views engine','ejs');
//首页
app.get('/',function (req,res) {
    res.render('index.ejs');
});
//列表
app.get('/list',function (req,res) {
    res.render('list.ejs');
});
//演说家
app.get('/speak2',function (req,res) {
    res.render('speak2.ejs');
});
app.get('/speak1',function (req,res) {
    res.render('speak1.ejs');
});
app.get('/speak3',function (req,res) {
    res.render('speak3.ejs');
});
//表单
app.get('/form',function (req,res) {
    res.render('form.ejs');
});

//用户
app.get('/user',function (req,res) {
    res.render('user.ejs');
});

app.post("/",bodyParser.urlencoded({extended:true}),function (req, res) {
    res.header('Access-Control-Allow-Origin','*');
    console.log(req.body);
    //提交数据
    res.send({data:req.body})
});

app.listen(3000,function () {
    console.log('成功了')
});
