var userName=document.querySelector("#username");
var dateOfBirth=document.querySelector("#dob");
var btnSubmit=document.querySelector("#btn-submit");
let outputDiv=document.querySelector("#output-username");
var isLeap = document.querySelector("#output-right");
var isNotLeap = document.querySelector("#output-wrong");
var userNameTwo = document.querySelector("#op-username");



btnSubmit.addEventListener("click",clickHandler);
function clickHandler(){
    let date=dateOfBirth.value;
    if(date==""){
        alert("Please enter the date.");
    }
    else{
        let d = new Date(dateOfBirth.value);
        let year = d.getFullYear();
        console.log("The year is ",year);
        checkLeapYear(year);
    }

}

function checkLeapYear(year){
    if(year%4===0){
        if(year%100){
            if(year%400){
                console.log("Leap year it is");
                isLeap.style.display="block";
                outputDiv.innerText=userName.value;
               
                
            }
            else{
                console.log("not a leap year");
                isNotLeap.style.display="block";
               userNameTwo.innerText=userName.value;
                
            }
        }
        else{
            console.log("Leap year it is");
            isLeap.style.display="block";
            outputDiv.innerText=userName.value;
            
        }
    }
    else{
        console.log("not a leap year");
        isNotLeap.style.display="block";
        userNameTwo.innerText=userName.value;
       
    }


}




