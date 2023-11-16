const clickevent=()=>
{
    var first=parseInt(document.getElementById("firstNum").value);
    var second=parseInt(document.getElementById("secondNum").value);
    if(first>second)
    {
        document.write(first+" is larger than "+second);
    }
    else
    {
        document.write(second+" is larger than "+first);
    }
};
clickevent();
function clickevent1()
{
    var name=document.getElementById("name").value;
    document.write("Welcome "+name);
}