$("#submit").on("click", function(event) {
 location.href = "/tripOverview";

  // make a newTrip obj
  var newTrip = {
   
    name: $("#name").val().trim(),
   
    date: $("#date").val().trim(),

    destination: $("#destination").val().trim(),
    
    email: $("#email").val().trim(),
    
    password: $("#password").val().trim()

  date format validator function. Checks if the date is entered as date, month, then year.
  function validatedate(inputText)  
    {  
    var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;  
    // Match the date format through regular expression  
    if(inputText.value.match(dateformat))  
    {  
    document.form1.text1.focus();  
    //Test which seperator is used '/' or '-'  
    var opera1 = inputText.value.split('/');  
    var opera2 = inputText.value.split('-');  
    lopera1 = opera1.length;  
    lopera2 = opera2.length;  
    // Extract the string into month, date and year  
    if (lopera1>1)  
    {  
    var pdate = inputText.value.split('/');  
    }  
    else if (lopera2>1)  
    {  
    var pdate = inputText.value.split('-');  
    }  
    var mm  = parseInt(pdate[0]);  
    var dd = parseInt(pdate[1]);  
    var yy = parseInt(pdate[2]);  
    // Create list of days of a month [assume there is no leap year by default]  
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
    if (mm==1 || mm>2)  
    {  
    if (dd>ListofDays[mm-1])  
    {  
    alert('Invalid date format!');  
    return false;  
    }  
    }  
    if (mm==2)  
    {  
    var lyear = false;  
    if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
    {  
    lyear = true;  
    }  
    if ((lyear==false) && (dd>=29))  
    {  
    alert('Invalid date format!');  
    return false;  
    }  
    if ((lyear==true) && (dd>29))  
    {  
    alert('Invalid date format!');  
    return false;  
    }  
    }  
    }  
    else  
    {  
    alert("Invalid date format!");  
    document.form1.text1.focus();  
    return false;  
    }  
    }  
    // checks to ensure the email is valid
  function ValidateEmail(inputText)  
    {  
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.value.match(mailFormat))  
    {  
    document.form1.text1.focus();  
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    document.form1.text1.focus();  
    return false;  
    }  
    }

  // checks to ensure a password between 7 to 16 characters contains only characters, numeric digits, underscore and first character must be a letter.
  // function CheckPassword(inputtxt)   
  //   {   
  //   var passw=  /^[A-Za-z]\w{7,14}$/;  
  //   if(inputtxt.value.match(passw))   
  //   {   
  //   alert('Correct, try another...')  
  //   return true;  
  //   }  
  //   else  
  //   {   
  //   alert('Wrong...!')  
  //   return false;  
  //   }  
  //   }    

  };

  // send an AJAX POST-request with jQuery
  $.post("/api/trips", newTrip)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
     location.href = "/tripOverview";
     this.date= new Date(this.date)
    date.tolocalestring();
    });
    
    this.date= new Date(this.date)
    date.tolocalestring();
  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#date").val("");
  $("#destination").val("");
  $("#email").val("");
  $("#password").val("");

  
});