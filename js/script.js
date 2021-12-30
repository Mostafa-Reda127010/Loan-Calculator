
/* When Clickin on submit button it  waits 2 seconds 
and triggeres the calc calculateResults
prevenetDefault() function MAYBE prevents the default form action

*/


document.getElementById("loan-form").addEventListener("submit", function (e) {
  

    setTimeout(calculate, 1000);

    e.preventDefault();
});



const loanAmount= document.querySelector("#loan-amount");
const rate = document.querySelector("#interest");
const salary = document.querySelector("#salary");
const years = document.querySelector("#years");
const resultsSection = document.querySelector(".results-section")


const interestResult = document.querySelector("#interest-result")
const totalPayment = document.querySelector("#total-payment");
const monthlyPayment = document.querySelector("#monthly-payment");



function calculate(){
    const loanValue = parseFloat(loanAmount.value);
    const rate= parseFloat(interest.value);
    const salaryValue= parseFloat(salary.value);
    const yearsValue= parseFloat(years.value);
    resultsSection.style.display="flex";
    interestResult.textContent= loanValue*(rate/100);
    totalPayment.textContent= loanValue*(rate/100)+loanValue;
    monthlyPayment.textContent= loanValue*(rate/100)+loanValue/(yearsValue*12);

}






/*const inputElements = document.querySelectorAll(".inputElements");

function calculateResults(){
    
    calculate()


    inputElements.forEach((inputElement)=>{
        inputElement.addEventListener("change",calculate)
    })
} */
