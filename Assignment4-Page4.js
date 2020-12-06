var groups = {};

//Learned from: https://www.codebrainer.com/blog/contact-form-in-javascript//

document.addEventListener("DOMContentLoaded", function(){
  groups.nameinput = document.getElementById('nameinput');
  groups.emailinput = document.getElementById('emailinput');});

function notEmpty(value){
  if (value === null || typeof value == 'undefined') return false;
  return (value.length > 0);}

function groupsValidation(groups, notEmpty){
  if (groups === null) return false;
  let isGroupsValid = notEmpty(groups.value);
  if (!isGroupsValid){
    groups.className = 'placeholderRed';
  } else{
    groups.className = '';}
  return isGroupsValid;}

function isValid(){
  var valid = true;
  valid &= groupsValidation(groups.nameinput, notEmpty);
  valid &= groupsValidation(groups.emailinput, notEmpty);
  return valid;}

class User {constructor (name, email)
{this.nameinput = name;
this.emailinput = email;}}

document.getElementById("nameinput").placeholder = "Name";
document.getElementById("emailinput").placeholder = "E-mail";
document.getElementById("concernsinput").placeholder = "Questions/Comments";

function send() {
  if (isValid()){
    let usr = new User(nameinput.value, emailinput.value);
    alert('Thank you for the response!');
  } else{
    alert("Your response did not go through. Please Try Again.");}}
