const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const errBox = document.getElementById("errBox");


  $.post(
    "/login",
    {
      email: email,
      password: pass,
    },
    function (data, status) {
      if (data.loggedIn) {
        errBox.style.color = "green";
        errBox.innerHTML = data.message;
      } else {
        errBox.style.color = "red";
        errBox.innerHTML = data.message;
      }
    }
  );
});

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

const validateEmail = () => {
  const errBox = document.getElementById("errBox");
  const emailField = document.getElementById("email").value;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = re.test(String(emailField).toLowerCase());
  if (valid) {
    errBox.innerHTML = "";
  } else {
    errBox.innerHTML = "Please Enter a Valid Email Format!";
  }
};

const verifyFields = () => {
  const emailField = document.getElementById("email").value;
  const passField = document.getElementById("pass").value;
  const submit = document.getElementById("submit");

  if (emailField && passField) {
    submit.disabled = false;
    submit.className = "submit";
  } else {
    submit.disabled = true;
    submit.className = "disabledButton";
  }
};
