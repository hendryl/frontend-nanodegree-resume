var formattedName = HTMLheaderName.replace("%data%", "Hendry");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
