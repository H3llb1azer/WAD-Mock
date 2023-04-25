$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("employee");
  let employeeObj = JSON.parse(localStorageData);
  $("#firstName").text(employeeObj.firstName);
  $("#lastName").text(employeeObj.lastName);
  $("#gender").text(employeeObj.gender);
  $("#email").text(employeeObj.email);
  $("#contactNo").text(employeeObj.contactNo);
  $("#desig1").text(employeeObj.desig);
  $("#date1").text(employeeObj.dtbr);
  $("#e_id").text(employeeObj.empid);
}
