let form = document.querySelector("#form");
let delform = document.querySelector("#delform");
let form1 = document.querySelector("#form1");
let studentName = document.querySelector("#name");
let studentId = document.querySelector("#std_id");
let studentEmail = document.querySelector("#email");
let studentCourses = document.querySelector("#courses");
let view = document.querySelector("#view");
let body1 = document.querySelector("#body1");
let deltext = document.querySelector("#deltext");
let delbtn = document.querySelector("#delbtn");
let main = document.querySelector("#main");
let main1 = document.querySelector("#main1");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    course: std_courses,
  };
  let url = "http://localhost:5000/api/students";
  let body = await window.fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});

view.addEventListener("click", async (e) => {
  e.preventDefault();
  let url = "http://localhost:5000/api/students";

  let data = (await fetch(url)).json().then((user) => {
    let data1 = user.payload;
    console.log(data1);
    console.log(data1[0]._id);
    for (let i = 0; i < data1.length; i++) {
      main1.innerHTML += `<h1>STUDENT:${i + 1}</h1><h2>student name: ${
        data1[i].name
      } <br>student id: ${data1[i].std_id} <br>student email: ${
        data1[i].email
      }<br>student course: ${data1[i].courses}</h2> <br>`;
    }
  });
});

delform.addEventListener("submit", async (e) => {
  e.preventDefault();
  let userid = e.target[0].value;
  console.log(userid);
  var url = `http://localhost:5000/api/students/${userid}`;
  let data = await fetch(url, { method: "DELETE" }).then((user) => {
    console.log(user);
    let data1 = user.payload;
    console.log(data1);
  });
});

form1.addEventListener("submit", async (e) => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let userid = e.target[4].value;

  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    course: std_courses,
  };

  let url = `http://localhost:5000/api/students/${userid}`;
  let body = await window.fetch(url, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});
