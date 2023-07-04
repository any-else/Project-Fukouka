let users = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "vuvanbui",
  },
];

const formElement = document.querySelector("#form-login");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElement);
  // //get
  // console.log("email", formData.get("email"));
  // console.log("password", formData.get("password"));

  const isCheck = users.findIndex(
    (user) => user.email === formData.get("email")
  );

  if (isCheck != -1) {
    window.location.href = "home.html";
  } else {
    console.log("validate");
  }
});
