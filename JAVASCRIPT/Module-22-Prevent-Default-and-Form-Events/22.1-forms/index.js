const fName = document.querySelector("#name");
const fAge = document.querySelector("#age");
const fEmail = document.querySelector("#email");
const form = document.getElementById("formID");

//! get form data live update
const formData = {};
for (let input of [fName, fAge, fEmail]) {
  input.addEventListener("input", ({ target }) => {
    const { name, value } = target;
    formData[name] = value;
  });
}

//! form submit listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newWindow = openWin();
  const changeBtn = newWindow.document.querySelector("#change");
  const confirmBtn = newWindow.document.querySelector("#confirm");

  //! new window buttons event listeners
  changeBtn.addEventListener("click", () => {
    newWindow.close();
  });
  confirmBtn.addEventListener("click", () => {
    newWindow.close();
    form.remove();
    document.querySelector("h1").style.display = "block";
  });
});

//! func to open text msg window
function openWin() {
  const myWindow = window.open(
    "",
    "myWindow",
    "width=400,height=250,top=300,left=750"
  );
  myWindow.document.body.innerHTML = "";
  myWindow.document.write(
    `<h1>Your Current Info is: </h1><p>Name: ${
      formData.name || ""
    }<br><br>Age: ${formData.age || ""}<br><br>Email: ${
      formData.email || ""
    }</p><br><button id="confirm">Confirm</button><button id="change">Change</button>`
  );
  return myWindow;
}