var victimNumbers = prompt("How many disaster victims do you wish to enter?");
var victims = [];
var vicNames = [];

  for(var i = 0; i < victimNumbers; i++){
    var vicName = prompt('Name');
    var phone = prompt('Phone:');
    var address = prompt('Address:');
    var victim = {
      vicName: vicName,
      // phone: phone
    };
      victims.push(victim)
  }


  // console.log(victims);
  for(var i = 0; i < victims.length; i++){
    var vic = victims[i].vicName
    vicNames.push(victims[i].vicName)
  }

var volunteerNumbers = prompt("How many volunteers are available to help");
var volunteers = [];
var volunteerNames = [];

  for(var i = 0; i < volunteerNumbers; i++){
    var volunteerName = prompt('Name:');
    var phone = prompt('Phone:');
    var address = prompt('Address');
    var volunteer = {
      volunteerName: volunteerName,
    };
      volunteers.push(volunteer)
  }

  for(var i = 0; i < volunteers.length; i++){
    var vol = volunteers[i].volunteerName
    volunteerNames.push(volunteers[i].volunteerName)
  }


// console.log(vicNames)
var summary = alert('Persons in need:' + victimNumbers + '\nNames:' + vicNames.toString() + '\n\nVolunteers:' + volunteerNumbers + '\nNames:' + volunteerNames.toString());
