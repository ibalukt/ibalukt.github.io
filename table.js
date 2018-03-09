//--------------------------------------------------Variable Declarations----------------------------------------------------------- 

//The names for the headings of the table
var headings = ["name","length","height","speed","type","park","continent"]

//Variable used to add rows and cells to the table.
var table = document.getElementById('info');

//Variable used to build the table.
var index1 = 0;


//----------------------------------------------------BUILD TABLE-------------------------------------------------------------------


function build()
{ 
    while (index1 < height)
    {                    
        //If it is the first row, create the headers for the table
        if (index1 == 0)
        {
            var header = table.createTHead(0);
            var row = header.insertRow(0);
        }
        else
        {
            var row = table.insertRow(-1);
        }
        //this loop adds all the object content areas to the current row.
        for (i=0; i <= 6; i += 1)
        {                                          
            var cell = row.insertCell(-1);

            //if i is equal to the dataset that you are sorting by, you can manipulate the css properties. (change color, font-weight)
            if (i == datafocus)
            {
                //changes color of the selected dataset.
                cell.style.backgroundColor = "#1E2940";
            }                                            
            //If it is the first row, fill the inner html with the headings from the headings array.
            if (index1 == 0)
            {
                //fill the first line of tds with headings from the headings array
                cell.innerHTML = headings[i];
            }
            else
            {
                //Fill the inner html of the td with the contents from arr
                cell.innerHTML = arr[index1-1][i];
            }                 
        }
        //increment the index1 so the next row will be built.
        index1 += 1;
    }
    //Index has to be set back to zero to allow for the header to be written again.
    index1 = 0;
}


//----------------------------------------------------TABLE RESET-----------------------------------------------------------------


//This function will get rid of all the content in the currently displayed table. 
function destroy()
{
    //While index1 is less than height (all the items in the table), delete next row.
    while (index1 < height)
    {                    
        //delete each row till they are all gone.
        var row = table.deleteRow(-1);

        index1 += 1;
    }
    //Index is set back to zero to all allow for the table header to be written again.
    index1 = 0;
}


//--------------------------------------------------BUILD BUTTON ----------------------------------------------------------------


document.getElementById('buildButton').addEventListener('click', function()
{
    //First Destroy any table content that is already there. This way we can create a brand new one.
    destroy();
    //Identify which parameter we are sorting the list by
    sortBy();
    //Use the sorting algorithm to put things into the appropriate order.
    insertionSort();
    //Build the table.
    build();
});

build();