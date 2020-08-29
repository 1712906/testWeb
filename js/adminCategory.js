$(function()
{

});
var onclickDelete=(event)=>
{
    var node =event.target.parentNode.parentNode.parentNode.parentNode;
    console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    node.remove();
}
var onclickEdit=(event)=>
{
    var node =event.target.parentNode.parentNode.parentNode.parentNode;
    var desc=$(node).find("#descCategory")
    var name=$(node).find("#nameCategory")
    
 
    localStorage.setItem("nameCategory", name.text());
    localStorage.setItem("descCategory", desc.text());
    window.location.href="admin-edit-category.html";
}