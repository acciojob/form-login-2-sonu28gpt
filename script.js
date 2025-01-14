//your JS code here. If required.
let form=document.getElementsByTagName('form')[0];
// alert(form)
let first=document.getElementById('first')
let last=document.getElementById('last')
let phone=document.getElementById('phone')
let email=document.getElementById('email')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
	// alert("hii")
	// alert(first.innerText);
	
  // console.log(first);
  alert(`First Name: ${first.value} Last Name: ${last.value} Phone Number: ${phone.value} Email ID: ${email.value}`)
})
