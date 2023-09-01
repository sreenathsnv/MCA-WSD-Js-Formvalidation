let username = document.getElementById('inputUsername');
let password = document.getElementById('inputPassword4');
let confirmPassword = document.getElementById('inputPasswordConfirm');
let date = document.getElementById('inputDate')
let Email = document.getElementById('inputEmail4')
const submitBtn = document.getElementById('submitBtn')
const after = document.getElementsByClassName('after')
console.log(after)


username.addEventListener('keyup', ()=>
{
    if(username.value.trim() !== '')
    {
        
        if((username.value.trim().match(/\d/g)))
        {
            {after[0].innerHTML = "<p class = 'after-text-invalid'>invalid Username!!</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
        }
        else{
            {after[0].innerHTML = "<p class = 'after-text-valid'>valid Username</p> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";}    
        }
        

        
    }
    else
    {after[0].innerHTML = "<p class = 'after-text-invalid'>invalid Username!!</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
    
    
});
Email.addEventListener('keyup', ()=>
{
    if(Email.value.trim().match(/^[A-Za-z0-9@]+[a-z]\.(in|com|org|us)$/g))
    {after[1].innerHTML = "<p class = 'after-text-valid'>valid Email!!.</p> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";}
else
{after[1].innerHTML = "<p class = 'after-text-invalid'>invalid Email!!.</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>"}
});

password.addEventListener('keyup',()=>

{
    if(password.value.trim().length>=8)
    {
        if(password.value.trim().match(/[a-zA-z0-9][\@!#$%\^&*\.\,]/))
        {
            {after[2].innerHTML = "<p class = 'after-text-valid'>valid password</p> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";}
        }
        else{after[2].innerHTML = "<p class = 'after-text-invalid'>Password must contain special characters and numbers!!</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
    }
    else{after[2].innerHTML = "<p class = 'after-text-invalid'>Password must contain 8 characters!!</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
});


confirmPassword.addEventListener('keyup',()=>

{
    if((confirmPassword.value.trim()  !== '')){
        if(confirmPassword.value.trim() === password.value.trim())
        {
        after[3].innerHTML = "<p class = 'after-text-valid'>valid password</p> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";
        }
        else
        {after[3].innerHTML = "<p class = 'after-text-invalid'>Password doesn't match!</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
    }

    else{after[3].innerHTML = "<p class = 'after-text-invalid'>Invalid</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
});

date.addEventListener('keyup',
    ()=>{

        if(date.value.trim()!== '')
        {
            let date_obj = date.value.trim().split('-').map(Number);
            const currentYear = new Date().getFullYear();
            if(date_obj.length==3)
            {
                if(date_obj[0]<=currentYear && date_obj[1]<=12 && date_obj[2]<31){

                    if((currentYear - date_obj[0])>18 && (currentYear - date_obj[0])<120 )
                    {
                        after[4].innerHTML =    "<p class = 'after-text-valid'>valid</p> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>";
                        if(submitBtn.disabled){submitBtn.disabled = false;}
                    }
                    else
                    {after[4].innerHTML = "<p class = 'after-text-invalid'>Age should be valid (above 18)</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";
                    submitBtn.disabled = true;
                     }

                }
                else{after[4].innerHTML = "<p class = 'after-text-invalid'>Invalid date</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>"}
            }
            else{after[4].innerHTML = "<p class = 'after-text-invalid'>Invalid date</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";}
        }
    else{
        after[4].innerHTML = "<p class = 'after-text-invalid'>Invalid date</p><i class=\"fa fa-times\" aria-hidden=\"true\" style = \"color:red\"></i>";
    }
    
});


// -------------------------------------------------------------------
submitBtn.addEventListener("click", ()=>{
    
        let usr = username.value,pass = password.value.trim()
        let cpass = confirmPassword.value.trim(),dob = date.value,email = Email.value.trim()
       
        if( validate_name(usr)){alert('Invalid username');return false}
        
        if((pass.length<8)){alert('Password must contain atleat 8 characters');return false}
        if(!(password.value.trim().match(/[a-zA-z0-9][\@!#$%\^&*\.\,]/))){ alert('Password should have mixed characters');return false}        
        if(pass !== cpass)
        {alert('Invalid!!Password does not match'); return false}
        if(validate_date(dob)){alert('Enter a valid date'); return false}
        else{alert('Thank you!! Succesfully submitted')}
})

function validate_name(name){
    if( name.length >3){
        if(/\d/.test(name))
        {
            return true
        }else{return false}
    }
    else{return true}
    
}

function validate_date(date)
{
    let date_obj = date.split('-');
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear()
    if(date_obj.length<3 || date_obj.length>3)
    {
        return true
    }
   
    if(Number(date_obj[1])>12){return true}
    if(Number(date_obj[2])>31){return true}

    if((currentYear - Number(date_obj[0]))<0)
    {
        return true
    }
}