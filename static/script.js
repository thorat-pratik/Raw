var totalYears;
var startYear;
var endYear;
var difference;
var divTag;
var inputOfCars = [];
var values;

function createNewElement() {
    
    // totalYears=difference;
    startYear = parseInt(document.getElementById('Starting_Year').value);
    endYear = parseInt(document.getElementById('Ending_Year').value);
    difference = parseInt(endYear) - parseInt(startYear);
    console.log("Starting Year is"+startYear);
    console.log("Ending Year is"+endYear);

    if(startYear<2021) {
        alert('Start year and End Year should not be less than 2021')
    }

    if(startYear == endYear){
        alert('Start year and End Year should not be same')
    }

    if( endYear  <=  startYear ) {
        alert("Start year should be less than End Year");
    } else {
        console.log("Total Number of Column is"+difference);
        totalYears = difference;
        if(difference>10) { 
            alert('The difference of year must not be greater than 10');
        }   
        else{
        for(var i=0;i<difference;i++) {

            divTag = document.createElement('div');
  
            console.log("Total NO Of Years is "+totalYears);
    
            $('#data').append('<input type="number"  placeholder=" Enter No Of Vehicle Here "  name="value'+ i +'"   pattern="[1-9]{1}[0-9]{7}"  id="carinput'+ i +'" />  ');
   
            document.getElementById("data").appendChild(divTag);

            carinput = parseInt(document.getElementById('data').value);
            
        }
        }
    }

    document.getElementById("newCarsBox").disabled = true;
}

function TotalYears() {
    for(var i=0;i<difference;i++  ){
        values = 'carinput' + i;
        inputOfCars[i] = parseInt(document.getElementById(values).value);
        if(inputOfCars[i]<700000){
            alert('The values Entered should not be less than 700000');
        }
        else continue;
    }
    for(var j=0;j<i;j++) {
    console.log(inputOfCars[j]);
    }
    document.getElementById('predict').removeAttribute('disabled');
}