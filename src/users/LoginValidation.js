function validation(user) {
    let errors = {};
  
    if (user.email === "") {
      errors.email = "Email is required";
    } // Add more specific validations for email if needed
    else{
      errors.email="";
    }
    if (user.password==="") {
      errors.password = "Password is required";
    } // Add more specific validations for password if needed
    else{
      errors.password="";
    }
    return errors;
  }
  
  export default validation;