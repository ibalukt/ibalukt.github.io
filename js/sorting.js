//Total number of cells in the table
var total = 0;

//The master array that holds everything
var arr = [];

//Controls which data point is being sorted through
var datafocus = 0;

//----------------------------------------------------2D ARRAY BUILDER---------------------------------------------------------

for(i = 0; i < ride.length; i += 1)
{                
    
    //For Array[i], create an array within that array;
    arr[i] = [];

    for (j = 0; j <= 6; j += 1)
    {  
        //This puts the appropiate value in the appropriate index within the inner array.
        switch (j) {
            case 0:arr[i][j] = ride[i].name; break;
            case 1:arr[i][j] = ride[i].length; break;  
            case 2:arr[i][j] = ride[i].height; break;    
            case 3:arr[i][j] = ride[i].speed; break;
            case 4:arr[i][j] = ride[i].type; break;
            case 5:arr[i][j] = ride[i].park; break;  
            case 6:arr[i][j] = ride[i].continent; break; 
        }  
    }
}

//--------------------------------------------------------SORT BY--------------------------------------------------------------- 

function sortBy()
{
    for (i = 0; i < 3; i ++)
    {
        //This checks the radio buttons to see which one is checked
        if (document.getElementsByName('datafocus')[i].checked)
        {
            //sets datafocus to a 1, 2, or 3.
            datafocus = document.getElementsByName('datafocus')[i].value;
        }
    }
}


//----------------------------------------------------INSERTION SORT-----------------------------------------------------------

function insertionSort()
{ 
    for (var i = 0; i < arr.length; i+=1){
    
        //Assigns the current item to be shifted if the right conditions are met.
        var key = arr[i];

        //Key 2 assigns the numerical data type to be sorted by.
        var key2 = key[datafocus];

        var j = i - 1;

        //Puts numerical data focus in order from smallest to largest.
        if (document.getElementById('ascending').checked) 
        {
            while (j >= 0 && arr[j][datafocus] > key2) // <--- You can flip the "<" to change ascending/descending order
            { 
                arr[j+1] = arr[j];
                j -=1;
            }
        }   
        //Puts numerical data focus in order from largest to smallest.
        else if (document.getElementById('descending').checked)
        {
            while (j >= 0 && arr[j][datafocus] < key2) // <--- You can flip the "<" to change ascending/descending order
            { 
                arr[j+1] = arr[j];
                j -=1;
            }
        }
        //increment the key until all of the keys have been sorted through.
        arr[j+1] = key;
    }

}
