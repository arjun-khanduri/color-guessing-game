var numSq=6;
var colors = generateRandomColors(numSq);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var colorDisplay=document.getElementById("colorDisplay");
var resetButton=document.getElementById("reset");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
hardBtn.disabled=true;
easyBtn.disabled=false;
colorDisplay.textContent=pickedColor;
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent="";
    numSq=3;
    colors = generateRandomColors(numSq);
    hardBtn.disabled=false;
    easyBtn.disabled=true;
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.background="steelblue";
    for(let i = 0;i<squares.length;i++){
        if(colors[i])
            squares[i].style.backgroundColor=colors[i];
        else
            squares[i].style.display="none";
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    messageDisplay.textContent="";
    hardBtn.disabled=true;
    easyBtn.disabled=false;
    numSq=6;
    colors = generateRandomColors(numSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.background="steelblue";
    for(let i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});
for(let i = 0;i<squares.length;i++)
{
   squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor=this.style.backgroundColor;
        if(clickedColor==pickedColor){ 
            changeColors(clickedColor);
            messageDisplay.textContent="Correct!";
            h1.style.backgroundColor=pickedColor;
            resetButton.textContent="Play Again?";
        }
        else{
            this.style.background="#232323";    
            messageDisplay.textContent="Try Again";
        }
    });
}
resetButton.addEventListener("click", function(){
    resetButton.textContent="New Colors";
    colors = generateRandomColors(numSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
     messageDisplay.textContent="";
    h1.style.background="steelblue";
    for(let i = 0;i<squares.length;i++)
        squares[i].style.backgroundColor=colors[i];
});
function changeColors(color){
    for(var i=0;i<colors.length;i++)
        squares[i].style.background=color;
}
function pickColor(){
    var a=Math.floor(Math.random()*colors.length);
    return colors[a];
}
function generateRandomColors(n){
    var arr=[];
    for(var i=0;i<n;i++)
        arr.push(randomColor());
    return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+ g + ", "+b+")";
}