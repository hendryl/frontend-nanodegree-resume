var bio = {
  name: "Hendry",
  role: "Web developer",
  welcomeMessage: "Welcome to my page",
  skills: ["HTML", "CSS", "Javascript", "Objective-C"],

  contacts: {
    mobile: "08888888",
    email: "hendrylee_1993@yahoo.com",
    github: "hendryl"
  },
  blog: "-",
  location: "Jakarta",
  picture: "http://placehold.it/200x200"
};

var work = {
  "jobs": [
    {
      "employer": "Ice House",
      "title": "Intern Engineer",
      "location": "Jakarta",
      "dates": "2015 - now"
    },
    {
      "employer": "Nippon Club",
      "title": "Coordinator",
      "location": "Jakarta",
      "dates": "2014 - now"
    }  
  ]
};

var education = {
  "schools": [
    {
      "name": "Binus University",
      "city": "Jakarta",
      "major": "Computer Science",
      "graduate": "2016"
    }
  ],
  "onlineCourses": [
    {
      "title":"Javascript",
      "school":"Udacity",
      "dates":"2015",
      "url":"------"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title":"WORLD DOMINATION",
      "dates":"EVERYDAY",
      "description":"LALALA LILILI LOLOLOLOLO"
    },
    {
      "title":"Test",
      "dates":"Every week",
      "description":"This is a test project"
    }
  ]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedImage = HTMLbioPic.replace("%data%", bio.picture);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedImage);

//contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  for(var skill in bio.skills){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }
}

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  console.log(job);
  var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var location = HTMLworkTitle.replace("%data%", work.jobs[job].title);

  var result = employer + title;

  $(".work-entry:last").append(result);
  $(".work-entry:last").append(dates);
  $(".work-entry:last").append(location);
}
