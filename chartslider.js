//----------------------------------------------VARIABLE DECLARATIONS---------------------------------------------------------


//width of the screen
var screenWidth; 

//The right position of the slidingBox container
var posX = [0,0,0];

//The different thresholds for how far to move the slidingBox container
var measurement = [0,320,640,960,1280];

// How far to move the box to when you move it left or right.
var target;

//The timer that calls the move function.
var moveTimer;

//Determines whether or not to move the box left or right.
var RoL

//Index of the slide that you should be on.
var index = [0,0,0]

//This is how it is decided whether or not to clear the moveTimer.
var distance = 0;

var lastclicked;



//------------------------------------------------------FUNCTIONS----------------------------------------------------------------------               
/*This function makes sure that the size of the slider will respond to the resizing of the browser/ viewing window. It 
takes the measurements for the width and centers the displayed chart accordingly.*/
function widthCheck()
{
    //Takes the value for the screen
    screenWidth = window.innerWidth;

    //X because whatever percentage of the screen you choose. CHANGING WHAT X IS MULTIPLIED BY WILL ALTER THE WIDTH OF THE SLIDER.
    var x = screenWidth * .9;

    //this changes the pie chart container to the width defined by X.
    document.getElementsByClassName('pieChartContainer')[0].style.width = x + 'px';

    document.getElementsByClassName('pieChartContainer')[1].style.width = x + 'px';

    document.getElementsByClassName('pieChartContainer')[2].style.width = x + 'px';
    //This makes sure that the sliding box that will contain the graphs is x multiplied by 4 because we will need 4 charts.
    document.getElementsByClassName('slidingBox')[0].style.width = (x * 4) + 'px';  

    document.getElementsByClassName('slidingBox')[1].style.width = (x * 4) + 'px';  

    document.getElementsByClassName('slidingBox')[2].style.width = (x * 4) + 'px'; 
        

    for (i = 0; i < 4; i += 1)
    {

        //This determines the stopping values for all of the different chart boxes. These are the measurements for the 
        //pixel numbers for 
        measurement[i] = x * i;
    }
    
    //This makes sure that the chart will stay centered in the middle of the box rather than getting messed up if you resize the 
    //window.
    posX[0] = measurement[index[0]] * -1;

    posX[1] = measurement[index[1]] * -1;

    posX[2] = measurement[index[2]] * -1;

    document.getElementsByClassName('slidingBox')[0].style.left = posX[0] + 'px';

    document.getElementsByClassName('slidingBox')[1].style.left = posX[1] + 'px';

    document.getElementsByClassName('slidingBox')[2].style.left = posX[2] + 'px';
}


//This function provides a smooth transition from 1 graph to another.
function move()
{
    //Measures how far the far left side of the sliding box is from the measurement[index] of the slide to be currently displayed.
    distance = posX[lastclicked] + target;

    //If the far left side of the sliding box is not equal to the measurement[index], than add 2 * RoL.
    if (posX[lastclicked] != (target * RoL))  
    {
        //RoL is either 1 or -1 and determines whether the slidingBox moves left or right.
        posX[lastclicked] += (4*RoL);
    }
    
    //When the sliding box reaches its target clear the moveTimer and start the adjust timer again.
    if ((distance > -5) && (distance < 5)) 
    {
        clearInterval(moveTimer);
        adjustTimer = setInterval(widthCheck,50);
    }

    //This just makes sure that the slidingBox moves when it is supposed to.
    document.getElementsByClassName('slidingBox')[lastclicked].style.left = posX[lastclicked] + 'px';

}

function rbuttonPress()
{

    //if the current slide displayed is not the 3rd graph than
    if (index[lastclicked] != 3)
    {
        //increase the index by 1
        index[lastclicked] += 1;
        //the sliding box will move to the left
        RoL = -1;
        //assign the target for the move() function
        target = measurement[index[lastclicked]];
    }
    //otherwise
    else 
    {
        //if the 3rd slide is the current slide displayed than change the index to 1.
        index[lastclicked] = 1;
        //snap the position to the leftmost slide.
        posX[lastclicked] = 0;
        //the next target is the second slide.
        target = measurement[1];
    }
    //This makes sure that the widthCheck function is not running when the move function is working. If it is, there will be glitches.
    clearInterval(adjustTimer);
    //This sets the interval for how often the move function will be called. switching the number will change the speed.
    moveTimer = setInterval(move,5);
}

function lbuttonPress()
{
    //if the current slide displayed is not the 1st graph than
    if (index[lastclicked] != 0)
    {
        //subtract 1 from the index
        index[lastclicked] -= 1;
        //the sliding box will move to the right.
        RoL = 1;
        //assign the target for the move() function
        target = measurement[index[lastclicked]];
    }
    else
    {
        //switch the position of the sliding box so that the 4th graph is displayed and slides towards the 3rd graph.
        posX[lastclicked] = measurement[3] * -1;
        //index is equal to 2.
        index[lastclicked] = 2;
        RoL = 1;
        target = measurement[2];
    }
    //clear the appropriate timers.
    clearInterval(adjustTimer);
    moveTimer = setInterval(move,5);                    
}




//-----------------------------------------------------LEFT AND RIGHT BUTTONS-----------------------------------------------------------


//RIGHT BUTTON FOR 1ST SET OF CHARTS----------------------------------------------------------
//This is an anonymous function that runs when you click on the right button on the slider.
document.getElementsByClassName('Rbutton')[0].addEventListener('click', function()
{
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 0;
        rbuttonPress();
    }
});

//LEFT BUTTON FOR 1ST SET OF CHARTS------------------------------------------------------------
//This is the anonymous function for the left button press. 
document.getElementsByClassName('Lbutton')[0].addEventListener('click', function()
{
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 0;
        lbuttonPress();
    }
});

//RIGHT BUTTON FOR 2ND SET OF CHARTS----------------------------------------------------------
//This is an anonymous function that runs when you click on the right button on the slider.
document.getElementsByClassName('Rbutton')[1].addEventListener('click', function()
{    
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 1;
        rbuttonPress();
    }
});

//LEFT BUTTON FOR 2ND SET OF CHARTS------------------------------------------------------------
//This is the anonymous function for the left button press. 
document.getElementsByClassName('Lbutton')[1].addEventListener('click', function()
{
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 1;
        lbuttonPress();
    }
});

//RIGHT BUTTON FOR 3RD SET OF CHARTS----------------------------------------------------------
//This is an anonymous function that runs when you click on the right button on the slider.
document.getElementsByClassName('Rbutton')[2].addEventListener('click', function()
{
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 2;
        rbuttonPress();
    }
});

//LEFT BUTTON FOR 3RD SET OF CHARTS------------------------------------------------------------
//This is the anonymous function for the left button press. 
document.getElementsByClassName('Lbutton')[2].addEventListener('click', function()
{
    if ((distance > -5) && (distance < 5)) 
    {
        lastclicked = 2;
        lbuttonPress();
    }
});

adjustTimer = setInterval(widthCheck,50);
