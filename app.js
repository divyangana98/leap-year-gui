var userName=document.querySelector("#username");
var dateOfBirth=document.querySelector("#dob");
var btnSubmit=document.querySelector("#btn-submit");
let outputDiv=document.querySelector("#output-username");
var isLeap = document.querySelector("#output-right");
var isNotLeap = document.querySelector("#output-wrong");
var userNameTwo = document.querySelector("#op-username");
var flag=0;


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
        var bool=checkLeapYear(year,flag);
        if(bool==1){
            console.log("flag is 1");
            isNotLeap.style.display="none";
            isLeap.style.display="block";
            outputDiv.innerText=userName.value;
        }
        else{
            console.log("flag is 0");
            isLeap.style.display="none";
            isNotLeap.style.display="block";
            userNameTwo.innerText=userName.value;
        }
    }

}

function checkLeapYear(year,flag){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                console.log("Leap year it is");
                flag=1;
            }
            else{
                console.log("not a leap year");
                flag=0;
            }
        }
        else{
            console.log("Leap year it is");
            flag=1;
        }
    }
    else{
        console.log("not a leap year");
        flag=0;
    }
    return flag;

}




