const form=document.getElementById("forms");
const name=document.getElementById('username');
const email=document.getElementById("email");
const password=document.getElementById('password');
const pass=document.getElementById("password2");

form.addEventListener('submit',function (e){
  e.preventDefault();
  validateform();
});

function validateform(){
  const username=name.value.trim();
  const emailvar=email.value.trim();
  const pass1=password.value.trim();
  const pass2=pass.value.trim();
  
  if (username== ''){
    setError(name, "Username must be entered");
  }
  else{
    setSuccess(name);
  }
  
  if (emailvar== ''){
    setError(email,"Email field must not be empty");
  }
  else if (!isValidEmail(emailvar)){
    setError(email,"Enter a valid Email Address");
    
  }
  else{
    setSuccess(email);
  }
  
  if (pass1==''){
    setError(password,"Enter password");
  }
  else if (pass1.length < 6){
    setError(password,"The password must have more than 6 characters");
  }
  else{
    setSuccess(password)
  }
  if (pass2==''){
    setError(pass,"Please confirm password");
  }
  else if(pass2 != pass1){
    setError(pass,"Passwords do not match");
  }
  else{
    setSuccess(pass)
  }
}
function setError(input,message){
  inputControl=input.parentElement;
  const errorDiv=inputControl.querySelector('.error');
  errorDiv.innerText= message;
  errorDiv.style.color='darkgreen';
}

function setSuccess(input,message){
  inputControl=input.parentElement;
  const errorDiv=inputControl.querySelector('.error');
  errorDiv.innerText=' ';
  
}

function isValidEmail(emailvar){
  return email.includes('@') && email.includes('.');
}
