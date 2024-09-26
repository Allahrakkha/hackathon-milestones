var form = document.getElementById("form");
var display = document.getElementById('display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collection of values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cell = document.getElementById('cell').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // resume generator
    var htmlResume = "\n<h2><b>Resume</b></h2>\n<h3<b>Profile</b></h3>\n<p>Name:".concat(name, "</p>\n<p>Email:").concat(email, "</p>\n<p>cell:").concat(cell, "</p>\n<h3>Education </h3>\n<p><b>").concat(education, "</p>\n\n<h3>Experience </h3>\n<p><b>").concat(experience, "</p>\n\n<h3>Education </h3>\n<p><b>").concat(education, "</p>\n\n\n<h3>Skills </h3>\n<p><b>").concat(skills, "</p>\n");
    // display resume
    if (display) {
        display.innerHTML = htmlResume;
    }
    else {
        console.error('error');
    }
});
