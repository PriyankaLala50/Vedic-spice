document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('form');
    const username=document.getElementById('name');
    const email=document.getElementById('email');
    const Pass=document.getElementById('phone');
    
    
    function Showerror(input,message){
        const formcontrol=input.parentElement;
        formcontrol.className='form-Control error';
        const small=formcontrol.querySelector('small');
        small.innerText=message;
    }
    function Showsuccess(input){
       const formcontrol=input.parentElement;
        formcontrol.className='form-Control success';
    }
    
    //Email is valid
    function checkEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validatePhoneNumber (phone) {
        // Regular expression for validating phone numbers
        const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phonePattern.test(phone);
    }
    
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value===''){
        Showerror(username,'Name is required');
    }
    
    else{
        Showsuccess(username);
    }
    //Email
    if(email.value===''){
        Showerror(email,'Email is required');
    }
    else if(!checkEmail(email.value)){
        Showerror(email,'Email is not valid');
        console.log("error");
    }
    else{
        Showsuccess(email);
    }
    if(phone.value===''){
        Showerror(phone,'Phone-Number is required');
    }
    else if(!validatePhoneNumber(phone.value)){
        Showerror(phone ,'phone-number is not valid');
    }
    else{
        Showsuccess(phone);
    }
});
});
