import express from "express";
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
var label=[];
var htmll;
var i=1;
app.post("/submit", (req, res)=>{
    
    htmll = '<input type="checkbox" id="task'+ i +'" name="task'+ i +'" value="task'+i+'">'+'<label class="" for="task'+ i +'" id="task'+ i++ +'">'+ req.body["task"] +'</label>';
    console.log(htmll);
    label.push(htmll);
    res.redirect("/");
});
app.post("/delete",(req,res)=>{
    var a = Number(req.body["num"]);
    var firsthalf = label.slice(0, a);
    var secondhalf = label.slice(a+1);
    label = firsthalf.concat(secondhalf);
    console.log(firsthalf,secondhalf);
    console.log(label);
    res.redirect("/");

})
app.get("/", (req, res)=>{
    res.render("index.ejs",{
        labelname: label,
    });
});
app.listen(port, ()=>{
    console.log("listening on port 3000");
});