const loginButton = document.getElementById("submit");
const secondButton = document.getElementById("secondNext");

$("#second").hide();

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  const email1 = document.getElementById("email").value;
  const email = validateEmail(email1);

  $("#first").fadeOut();
  $("#second").delay(500).fadeIn();

  if (email) {
  }

  /*$.post(
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
  );*/ 
});

const validateEmail = () => {
  const errBox = document.getElementById("errBox");
  const emailField = document.getElementById("email").value;
  const nextBtn = document.getElementById('submit')
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = re.test(String(emailField).toLowerCase());
  if (valid) {
    errBox.innerHTML = "";
    nextBtn.disabled = false
    nextBtn.className = "submit"
  } else {
    errBox.innerHTML = "Please Enter a Valid Email Format!";
    nextBtn.disabled = true
    nextBtn.className = "disabledButton"

  }
};

/**************** SECOND PAGE *****************/
$(".digit-group")
  .find("input")
  .each(function () {
    $(this).attr("maxlength", 1);
    $(this).on("keyup", function (e) {
      var parent = $($(this).parent());

      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find("input#" + $(this).data("previous"));

        if (prev.length) {
          $(prev).select();
        }
      } else if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 39
      ) {
        var next = parent.find("input#" + $(this).data("next"));

        if (next.length) {
          $(next).select();
        } else {
          if (parent.data("autosubmit")) {
            parent.submit();
          }
        }
      }
    });
  });

secondButton.addEventListener("click", function (event) {
  event.preventDefault();
  $("#second").fadeOut();
});

const goToFirst = () => {
  $("#second").fadeOut();
  $("#first").delay(500).fadeIn();
}
