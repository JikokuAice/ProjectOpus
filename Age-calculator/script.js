function linktogit(){
window.location='https://github.com/JikokuAice/ProjectOpus';
}

function linktolinkidin(){
    window.location='https://www.linkedin.com/in/ayush-karki-2541b0282/';
}

let submissionbutton=document.querySelector('#submit');

let years = document.querySelector('#yearinput');
let months = document.querySelector('#monthinput');
let days = document.querySelector('#dayinput');

let yearerr = document.querySelector('.year-err')
let montherr = document.querySelector('.month-err');
let dayerr = document.querySelector('.days-err');

years.addEventListener('input',inputevent);
months.addEventListener('input',inputevent);
days.addEventListener('input',inputevent);

function datevalid(){
    let valid=true;
    if(days.value>31||days.value<1) {
        days.style.outline='2px solid red';
        dayerr.style.display='block';
        dayerr.innerText=`${days.value} days in months?`;
        return valid=false;
    }else{
        days.style.outline='';
        dayerr.style.display='none';
        dayerr.innerText=''  ;
       
    }
    if(months.value>12||months.value<1) {
        months.style.outline='2px solid red';
        montherr.style.display='block';
        montherr.innerText=`*invalid ${months.value} month in year?`;
        return valid=false; 
    }else{
        months.style.outline='';
        montherr.style.display='none'
        montherr.innerText='';  
        
    }
    
    if(years.value<1900) {
        years.style.outline='2px solid red';
        yearerr.style.display='block';
        yearerr.innerText= `*year ${years.value} you ghost?*`;   
        return valid=false;
    }else{
        years.style.outline='';
        yearerr.style.display='none'
        yearerr.innerText='' 
       
    }
return valid;
    }
























function valida(){
if(days.value===''){
        days.style.outline='2px solid red';
        dayerr.style.display='block'
        dayerr.innerText='*no input*'
    
}
else{
 
 
    days.style.outline='';
    dayerr.style.display='';
    dayerr.innerText='';
}


 if(months.value===''){
    montherr.style.display='block'
    months.style.outline='2px solid red';
    montherr.innerText='*no input*';
}
else{
 
 
    months.style.outline='';
    montherr.style.display=''
    montherr.innerText=''
}


 if(years.value==''){
    years.style.outline='2px solid red';
    yearerr.style.display='block';
    yearerr.innerText='*no input*'; 

}
else{
 
 yearerr.innerText=''
    years.style.outline='';
    yearerr.style.display='';
}



}

function inputevent(){
    valida();
}
let birthdate;
let currenttime;
submissionbutton.addEventListener('click',()=>{
   if(datevalid()&&dayinMonth()){
birthdate=new Date(`${years.value}-${months.value}-${days.value}`).getTime();
currenttime = Date.now();
let calculations = currenttime-birthdate;
bdatecalc(calculations)
   }

   
  
})

function bdatecalc(ms){
let year=Math.floor((ms)/31556952000);
let month = Math.floor((ms%31556952000)/2629746000);
let day=Math.floor((ms%2629746000)/86400000);

let displayYear=document.querySelector('#yeardata');
let displayMonth=document.querySelector('#monthdata');
let displayDay=document.querySelector('#daydata');

let YEAR = year.toString();
displayYear.innerText=YEAR;
let MONTH = month.toString();
displayMonth.innerText=MONTH;
 let DAY =day.toString();
 displayDay.innerText=DAY;
}

function dayinMonth(){
    let valid1 = true;
    if(days.value==31&&(months.value==1||months.value==3||months.value==5||months.value==7||months.value==8||months.value==9||months.value==7||months.value==8||months.value==12)){
        valid1=true;
    }
    if(days.value==31&&(months.value==2||months.value==4||months.value==6||months.value==9||months.value==10||months.value==11)){
valid1=false;
days.style.outline='2px solid red';
dayerr.style.display='block'
dayerr.innerText=`31 day in month ${months.value}?`
    }else{
        days.style.outline='';
        dayerr.style.display='';
        dayerr.innerText='';    
    }
    return valid1;
}