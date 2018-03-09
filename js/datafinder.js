
 //---------------------------------------------------Variable Declarations-------------------------------------------------------

//This array is used in the count function to get the appropriate info for the pie chart
var speedRange = [0,20,40,60,80,100,120,140];

//This array is used in the count function to get the appropriate info for the pie chart
var lengthRange = [0,1000,2000,3000,4000,5000,6000,7000,8000];

//This array is used in the count function to get the appropriate info for the pie chart
var heightRange = [0,90,180,270,360,480];

var woodOrSteel = ["wood","steel"];

var continents = ["australia","north america","south america","europe","asia","africa","antartica"]

//This is the array that will contain the data for length pie chart.
var pieData = []; 

//The number of items that will populate the table.
var height = ride.length;


//--------------------------------Function for finding the number of coasters in specific numerical ranges-------------------------------


//This function will find the info for the pie charts that display the number of coasters between given ranges.
function count()
{
    //This gets rid of anything that is in the array that will hold the results.
    pieData.splice(0,pieData.length);
    
    //The switch statement makes sure that the appropriate range list is being evaluated in the loops.
    switch (datafocus)
    {
        case 1: targetlist= lengthRange; break;
        case 2: targetlist= heightRange; break;
        case 3: targetlist= speedRange; break;
    }
                    
    //for i = 0 and i is less than the length of the range array being used, increment i by 1
    for(i = 0; i < targetlist.length-1; i += 1)
    {
        //intializes an empty index to store the total number of coasters in the given range 
        pieData.push(0);

        //for j = o and is less than the total number of coasters in the js file, incement j by 1
        for (j = 0; j < height; j += 1)
        {
            //if i is not equal to the last number in the range do the code below. This prevents it from returning undefined
            if (i < targetlist.length)
            {
                //if the current coaster datafocus being assesed is between the two selected ranges
                if ((arr[j][datafocus] > targetlist[i]) && (arr[j][datafocus] < targetlist[i + 1])) 
                {
                    //add it to the index that was initialized above
                    pieData[i] = pieData[i] + 1;
                }
            }
            else
            {
                //if i is equal to the index of the last range
                if(arr[j][datafocus] > targetlist[i]) 
                {
                    //add it to the index that was initialized above
                    pieData[i] = pieData[i] + 1;   
                }
            }
        }

        if (i != targetlist.length)
        {
        //console.log(pieData[i] + " coasters are between " + targetlist[i] + " and " + targetlist[i+1]);
        }
    }
}


//---------------------------------Function finding the amount of speed or wood coasters above a certain threshhold-------------------------


function woodVsSteel()
{
    //This gets rid of anything that is in the array that will hold the results.
    pieData.splice(0,pieData.length);

    //use the data focus to set the targetlist to the appropriate measuremet.
    switch (datafocus)
    {
        //These target lists are the ranges.
        case 1: targetlist= 400; break;
        case 2: targetlist= 50; break;
        case 3: targetlist= 30; break;
    }

    for(i = 0; i < 2; i ++ )
    {
        //create an empty index;
        pieData.push(0);

        for(j = 0; j < height; j ++)
        {
            //If the (length,height, or speed) is greater than the targetlist range, and the type of the coaster is equal to wood or steel
            if ((arr[j][datafocus] > targetlist) && (arr[j][4] == woodOrSteel[i]))
            {
                //add to the pie data
                pieData[i] = pieData[i] + 1;
            }    
        }
        //console.log(pieData[i] + " rollercoasters are made from " + woodOrSteel[i]);
    }
}


//-------------------------This function takes the top 200 in any of the catagories and counts how many are from each continent-------------------
function topContinent()
{
    //This gets rid of anything that is in the array that will hold the results.
    pieData.splice(0,pieData.length);

    //makes sure that the sorting algorithm puts the largest numbers in the lowest list indexes
    document.getElementById('descending').checked = true;
    
    //chooses which numerifal figue to sort the list by
    //datafocus = 3;

    //Call the sorting function
    insertionSort();

    for(i = 0; i < continents.length; i += 1)
    {

        //create an empty index;
        pieData.push(0);

        //iterate through the top 50 or whatever datafocus is chosen
        for(j = 0; j < 200; j += 1)
        {
            if (arr[j][6] === continents[i])
            {
                pieData[i] = pieData[i] + 1;
            }
        }
    }

}

function mostCoasters()
{
    //This gets rid of anything that is in the array that will hold the results.
    pieData.splice(0,pieData.length);

    for (i = 0; i < continents.length; i += 1)
    {
        //initialize the empty list
        pieData.push(0);

            for (j = 0; j < 508; j += 1)
            {
                if (arr[j][6] === continents[i])
                {
                    pieData[i] = pieData[i] + 1;
                }
            }
            console.log(continents[i] + " has " + pieData[i] + "coasters");

    }

}




