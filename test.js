var initials = document.querySelector("#initials");
var age = document.querySelector("#age");
var saveButton = document.querySelector("#save-button");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var score= {
      YourInitials: initials,
      YourAge: age.value.trim(),
    };
  
    // set new submission to local storage 
    localStorage.setItem("score", JSON.stringify(score));
    
  });