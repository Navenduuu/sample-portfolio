
var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});


document.addEventListener("scroll", function() {
  const bar= document.querySelectorAll('.progress-bar');
  for(let i=0;i<bar.length;i++){
    let len=bar[i].getAttribute("data-skill");
    bar[i].style.width = len + '%';
  }

 const skillLevel= document.querySelectorAll('.number');   
   for(let j=0;j<skillLevel.length;j++){
    let count = 0;
    let num=skillLevel[j].getAttribute('value');
    setInterval(( ) =>{
      if(count < skillLevel[j].getAttribute('value')){
      count += 1;
      skillLevel[j].innerText = count + "%";
      }
    },20);
    
  }

});
 


var bttn = document.querySelectorAll('.filter-btn');
for(let i = 0; i < bttn.length; i++) {

  bttn[i].addEventListener("click", function() {
    var filter = this.getAttribute('data-filter');
    var projects = document.querySelectorAll('.project');
    for(var j= 0; j < projects.length; j++) {      
      if(filter === "all" || projects[j].classList.contains(filter)) {
        projects[j].style.display = "block";
      } else {
        projects[j].style.display = "none";
      }
    }
  });
}


var form= document.getElementById('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('e-mail').value;
  var printMessage = document.querySelector('.form-message');

  if(!name || !email){
    printMessage.innerHTML = "Please fill in all fields.";
    return;
  }

  var emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(email)) {
  printMessage.innerHTML = "Enter a valid email.";
    return;
  }
  printMessage.innerHTML = `Thank you ${name}, your message has been sent successfully!`;
});



