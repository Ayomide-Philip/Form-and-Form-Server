document.getElementById("btn").addEventListener("click", (event) => {
  console.log(event);

  if (document.getElementById("name").value == "") {
    event.preventDefault();
    // This first If statement is used to check if the value of our name is empty if its empty it should return an error message and prevent the form from submiting
    document.getElementById("name-error").style.display = "block";
  } else {
    if (document.getElementById("name").value.indexOf(" ") > -1) {
      document.getElementById("name-error").style.display = "none";
    } else {
      // This Part Check if there is a Space between our form to know if the user input both of their name, if not it returns an error message
      event.preventDefault();
      document.getElementById("name-error").style.display = "block";
      document.getElementById("name-error").innerText =
        "You only inputed your First name Or Surname, Both are Required";
    }
  }
  if (document.getElementById("address").value == "") {
    event.preventDefault();
    document.getElementById("error-address").style.display = "block";
  } else {
    if (document.getElementById("address").value.indexOf(",") > -1) {
      document.getElementById("error-address").style.display = "none";
    } else {
      event.preventDefault();
      document.getElementById("error-address").style.display = "block";
      document.getElementById("error-address").innerText =
        "You need to input your full Home address starting from your Street to your City";
    }
  }
  if (document.getElementById("occupation").value === "") {
    event.preventDefault();
    document.getElementById("cccupation-error").style.display = "block";
    document.getElementById("cccupation-error").innerText =
      "Input what you do for a living.";
  } else {
    document.getElementById("cccupation-error").style.display = "none";
  }

  if (document.getElementById("telephone").value === "") {
    event.preventDefault();
    document.getElementById("telephone-error").style.display = "block";
    document.getElementById("telephone-error").innerText =
      "Input your active phone Number";
  } else {
    if (document.getElementById("telephone").value.length === 11) {
      document.getElementById("telephone-error").style.display = "none";
    } else {
      event.preventDefault();
      document.getElementById("telephone-error").style.display = "block";
      document.getElementById(
        "telephone-error"
      ).innerText = `Your Phone number Should you be 11 Number you have ${
        11 - document.getElementById("telephone").value.length
      } Numbers left `;
    }
  }

  if (document.getElementById("emailAddress").value === "") {
    event.preventDefault();
    document.getElementById("email-error").style.display = "block";
    document.getElementById("email-error").innerText =
      "You didnt Input any Email Addresss";
  } else {
    if (document.getElementById("emailAddress").value.indexOf("@") <= -1) {
      event.preventDefault();
      document.getElementById("email-error").style.display = "block";
      document.getElementById("email-error").innerText =
        "You didnt input the @ symbol";
    } else {
      document.getElementById("email-error").style.display = "none";
    }
  }
});
