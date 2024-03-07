let miles
let gallons
let mpg
let again = "y"

do{
    miles = parseFloat(prompt('Enter the miles driven'));
    gallons = parseFloat(prompt('Enter the number of gallons that your car\'s tank hold'));

    if(!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0){
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallons.`);

    }
    else{
        alert("One or both entries are invalid.");
    }

    again = prompt('Run application again? (y or n)', 'y');

    while (again !== "y" && again !== "n"){
        again = prompt('Run application again? (y or n)', 'y');
    }




}while(again === "y");
console.log('Application has exited.');