const express = require("express");
const app =  express();
const port = 8080;
const path = require("path");
const {v4: uuidv4}=require('uuid');
const methodOverride = require('method-override')
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id : uuidv4(),
        username: "praimz",
        content: "My brain is hurting",
        img: "https://a.pinatafarm.com/590x443/9e595b81c3/galaxy-brain-a66e42b82ef6d947a10f240ef578ea73-meme.jpeg"
    },
    {
        id : uuidv4(),
        username: "Google",
        content: "Hire me please",
        img: "https://assets.techrepublic.com/uploads/2017/05/google-big-bang-theory.jpg"
    },
    {
        id : uuidv4(),
        username: "Microsoft",
        content: "You too!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDU7eZ-wiDa7YiQu9VRuYS688WY6lD24RWQ&s"

    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content,img}=req.body;
    let id = uuidv4();
    posts.push({id,username,content,img});
    res.redirect("/posts")
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id === p.id);
  
    res.render("show.ejs",{post})
})
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let newImg = req.body.img;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    post.img = newImg;
    console.log(newContent)
    res.redirect("/posts");
    
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts")
})
app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})