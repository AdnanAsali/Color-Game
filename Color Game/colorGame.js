var numSqares = 6;
var colors = generateRandomColors(numSqares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var hardBtn = document.querySelector("#hard");
var easyBtn = document.querySelector("#easy");


easyBtn.addEventListener("click", function()
{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSqares = 3;
    colors = generateRandomColors(numSqares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) 
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
});

hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSqares = 6;
    colors = generateRandomColors(numSqares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) 
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function()
{
    //generate new colors
    colors = generateRandomColors(numSqares);
    // pick new rand color
    pickedColor = pickColor();
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    // and change colors of the squares
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) 
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) 
{
    squares[i].style.backgroundColor = colors[i]; 
    
    squares[i].addEventListener("click", function()
    {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            reset.textContent = "Play Again!";
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color)
{
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    //Make an array
    var arr = [];
    //add num randomcolors to array
    for(var i = 0; i < num ; i++ )
    {
        //get random color and push it into the array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}


function randomColor()
{
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}








//DONE