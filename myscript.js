$(document).ready(function () {
  // getData();

  $("#btnShow").click(function () {
    window.location.href="display-data.html"
  });

  $("#btnAdd").click(function () {

    function getemployeeData() {
      let date = new Date($("#dob").val());
      day = date.getDate();
      month = date.getMonth() + 1; //jan - 0, feb-1, ...dec-11
      year = date.getFullYear();
      let dob = [day, month, year].join("/"); //28/01/2022
      console.log(dob);

      let employee = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        gender: $("input[name='gender']:checked").val(),
        email: $("#email").val(),
        contactNo: $("#contactNo").val(),
        desig: $("#desig1").val(),
        empid: $("#e_id").val(),
        dtbr: dob,
      };
      return employee;
    }

    //store employee data to localStorage
    function storeDataToLocalStorage() {
      if (localStorage.getItem('student')){
        localStorage.removeItem('student');
      }
      if (!localStorage.getItem("employee")) {
        localStorage.setItem("employee", JSON.stringify(getemployeeData()));
      } else {
        localStorage.removeItem("employee");
        localStorage.setItem("employee", JSON.stringify(getemployeeData()));
      }
    }

    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    // sendData();


      let xhr = new XMLHttpRequest();
      let data = localStorage.getItem("employee");
      let employeeObj = JSON.parse(data);
      xhr.open("GET", "welcome.txt", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
      xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
          document.getElementById('Cont').innerText=xhr.responseText;
          document.getElementById('btnAdd').style.visibility="hidden";
          document.getElementById('btnShow').style.visibility="visible";
        }
      }
  })
});
// function getData() {
//   let localStorageData = localStorage.getItem("employee");
//   let employeeObj = JSON.parse(localStorageData);
//   console.log(employeeObj);
//   $("#rollno").text(employeeObj.rollno);
//   $("#firstName").text(employeeObj.firstName);
//   $("#lastName").text(employeeObj.lastName);
//   $("#dob").text(employeeObj.dob);
//   $("#gender").text(employeeObj.gender);
//   $("#email").text(employeeObj.email);
//   $("#contactNo").text(employeeObj.contactNo);
//   $("#branch").text(employeeObj.branch);
//   $("#registrationDate").text(employeeObj.registrationDate);
//   $("#parentName").text(employeeObj.parentName);
//   $("#parentContactNo").text(employeeObj.parentMobileNo);
// }