"use strict"



var jade = require('jade');

//Compile a string to html
function compile(data, type){
    //The source jade to compile
    var source = type +' of '+ data;
    var fn = jade.compile( source, {debug:true,pretty:true});
    return fn();
}
// Render the function
var html = compile("div1","div");
console.log("compile: ",html,"\n--------------------------------------------------");


// -------------------


// Compile a jade file to html
function compileFile(){
    var fn = jade.compileFile("./view/compileFile.jade", {debug:true,pretty:true});
    return fn();
}
// Render the function
var html = compileFile();
console.log("compileFile: ",html,"\n--------------------------------------------------");



// -------------------

// Compile some jade source to a string of JavaScript that can be used client side along with the jade runtime.
function compileClient(data, type){
    //The source jade to compile
    var source = type +' of '+ data;
    var fn = jade.compileClient(source, {debug:true,pretty:true});
    return fn; // type: string
}
// Render the function
var fn = compileClient("div1","div");
console.log("compileClient: ",fn,typeof fn, "\n--------------------------------------------------");
//fn look like:
//function template(locals) {
//    var buf = [];
//    var jade_mixins = {};
//    var jade_interp;
//
//    var jade_indent = [];
//    buf.push("\n<div>of div1</div>");;return buf.join("");
//}


// -------------------


//
// Compile a jade template file to a string of Javascript that can be used client side along with the jade runtime.
function compileFileClient(){
    //The source jade to compile
    var fn = jade.compileFileClient("./view/compileFile.jade", {debug:true,pretty:true});
    return eval(fn); // type: string
}
// Render the function
var fn = compileFileClient();
console.log("compileFileClient: ",fn,typeof fn, "\n--------------------------------------------------");
//fn look like:
//function template(locals) {
//    var buf = [];
//    var jade_mixins = {};
//    var jade_interp;
//
//    var jade_indent = [];
//    buf.push("\n<html lang=\"en\">\n  <head>\n    <title>compileFile</title>\n  </head>\n  <body>\n    <h1>Jade - node template engine</h1>\n  </body>\n</html>");;return buf.join("");
//}
//


//render 看起来和compile一样效果,不过不需要再调用一次

////render a string to html
function render(data, type){
    //The source jade to compile
    var source = type +' of '+ data;
    var fn = jade.render( source, {debug:true,pretty:true});
    return fn;
}
// Render the function
var html = render("div1","div");
console.log("render: ",html,"\n--------------------------------------------------");


function renderFile(data, type){
    //The source jade to compile
    var source = type +' of '+ data;
    var fn = jade.renderFile("./view/compileFile.jade", {debug:true,pretty:true});
    return fn;
}
// Render the function
var html = renderFile("div1","div");
console.log("renderFile: ",html,"\n--------------------------------------------------");