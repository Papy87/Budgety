class ValidateRegisterForm {
    constructor(props) {

    }

    checkEmail = (data) => {
        const email = data.email;
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email)) {
            alert('Please provide a valid email address');
            return false;
        }
        else
            return true;
    }

    checkNameAndPassword = (data) => {
        {
            if (data.name == "") {
                alert("Error: Username cannot be blank!");
                // form.username.focus();
                return false;
            }
            else if (data.name.length < 6) {
                alert("Error:  Username must contain at least six characters!");
                // form.username.focus();
                return false;
            }

            const re = /^\w+$/;

            if (!data.name.includes(' ')) {
                alert("Error: Name must contain First and Last name!");
                // data.name();
                return false;
            }

            if (data.pass != "" && data.pass == data.confirmPass) {
                if (data.pass.length < 6) {
                    alert("Error: Password must contain at least six characters!");
                    // data.pass.focus();
                    return false;
                }
                if (data.pass == data.name) {
                    alert("Error: Password must be different from Username!");
                    // data.pass.focus();
                    return false;
                }
                let re = /[0-9]/;
                if (!re.test(data.pass)) {
                    alert("Error: password must contain at least one number (0-9)!");
                    // data.pass.focus();
                    return false;
                }
                re = /[a-z]/;
                if (!re.test(data.pass)) {
                    alert("Error: password must contain at least one lowercase letter (a-z)!");
                    // data.pass.focus();
                    return false;
                }
                re = /[A-Z]/;
                if (!re.test(data.pass)) {
                    alert("Error: password must contain at least one uppercase letter (A-Z)!");
                    // data.pass.focus();
                    return false;
                }
            } else {
                alert("Error: Please check that you've entered and confirmed your password!");
                // data.pass.focus();
                return false;
            }

            // alert("You entered a valid password: " + data.pass);
            return true;
        }
    }
}

export const Validation = new ValidateRegisterForm()