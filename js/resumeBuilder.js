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
  location: "Jakarta"
};

var work = {
  "jobs": [
    {
      "employer": "Ice House",
      "title": "Intern Engineer",
      "location": "Jakarta",
      "dates": "2015 - now"
    }  
  ]
}

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
}

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

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  for(var skills in bio.skills){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
    $("#skills").append(formattedSkills);
  }
}
