
//CPSC 1520 Week7-Activity 4

let carArray=[];
let counter=0;

function car(number,carMake,carColor){
    this.registrationNumber= number;
    this.make= carMake;
    this.color= carColor;
}

const addToArrayBtn= document.querySelector('#addToArrayBtn');
const carForm= document.querySelector('#carForm');
addToArrayBtn.addEventListener('click',(event)=>{
    let car1= new car(document.querySelector('#regNo').value,document.querySelector('#make').value, document.querySelector('#color').value)
    carArray.push(car1);
    carForm.reset;
})

document.querySelector('#displayCarsBtn').addEventListener('click',()=>{
    let count=0;
    carArray.forEach((element)=>{
        let str = `<p>Registration Number: ${element.registrationNumber}, Make: ${element.make}, Color:  ${element.color}`;
        document.querySelector('#placeHolder').innerHTML+=  str;
        count++
    })
})