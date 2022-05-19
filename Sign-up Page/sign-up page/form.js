function allfill(){
    var error = document.getElementById("error").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("DOB").value;
    var age= document.getElementById("Age").value;
    var Address = document.getElementById("Address").value;
    var email = document.getElementById("Email").value;
    var uname = document.getElementById("Uname").value;
    var pswd = document.getElementById("pswd").value;
    var conpass = document.getElementById("Conpass").value;
    var agree = document.getElementById("agree").checked;

    if(fname == "" || lname == "" || dob == "" ||age == "" ||email == "" ||uname == "" || pswd == "" ||conpass == "" ||agree == false)

    {
        error.innerHTML ="plaese fill the required fields";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } 
    else 
    {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }

    


}

function calAge()
{
    var dob = document.getElementById("DOB");
    var InputAge = document.getElementById("Age");

    var today = new Date();
    var birthDate = new Date(DOB.value);
    var Age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        Age--;
    }
    InputAge.value = Age;
}

function maxchar()
{
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var error = document.getElementById("error-name");
    if (fname.value.length > 30 || lname.value.length > 30) {
        error.innerHTML = "Please enter less than 30 characters for first name and last name";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } 
    else 
    {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}
function validateform(){
    if (!allfill() ||
        !maxchar() ||
        !validemail() ||
        !validusername() ||
        !validpassword() ||
        !matchpassword() ||
        !condition()
    ) 
    {
        return false;
    } 
    else
     {
        return true;
    }
}
function validemail()
{
    var error = document.getElementById("error-email");
    var email = document.getElementById("email").value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var stat = re.test(String(email).toLowerCase());
    if (!stat) {
        error.innerHTML = "Please Enter Valid Email";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

function validusername()
{
    var error = document.getElementById("error-uname");
    var uname = document.getElementById("Uname");
    val = uname.value;
    if (!/^[a-z]+$/.test(val) || val.length > 10) {
        error.innerHTML = "Username should only contain simple case letters and Max length should be 10 characters";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } 
    else 
    {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}
function validpassword()
{
    var error = document.getElementById("error-password");
    var pswd = document.getElementById("pswd");
    var val = pswd.value;
    if (val.length > 15 || val.length < 6 || !val.match(/[0-9]/g)) {
        error.innerHTML = "Password length should be in between 6-15 characters along with atleast one number";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } 
    else
    {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

function matchpassword()
{
    var error = document.getElementById("error-matchpassword");
    var pswd = document.getElementById("pswd");
    var conpass = document.getElementById("Conpass");
    if (pswd.value.localeCompare(conpass.value) != 0)
    {
        error.innerHTML = "Password don't match";
        error.classList.remove("hide");
        error.classList.add("error");
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        return true;
    }
}

    


function condition() {
    var error = document.getElementById("error");
    var agree = document.getElementById("agree");
    var btn = document.getElementById("subbtn");
    console.log(agree.checked);
    if (!agree.checked) {
        error.innerHTML = "Please agree Conditions.";
        error.classList.remove("hide");
        error.classList.add("error");
        btn.disabled = true;
        return false;
    } else {
        error.innerHTML = "";
        error.classList.add("hide");
        error.classList.remove("error");
        btn.disabled = false;
        return true;
    }
}










