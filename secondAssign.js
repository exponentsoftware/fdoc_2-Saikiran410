//const users = [
    var users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];

    let highScoreUsers = [];
    for (let i = 0; i < users.length; i++) {
    if (users[i].scores > 85) {
        highScoreUsers.push(users[i]);
    }
}
console.log(highScoreUsers);

var newUser = {
    name:'sai', 
    scores:81,
    skills:['HTM', 'CSS', 'JS'],
    age:21
}
users.indexOf( newUser) === -1 ? users.push(newUser) :
 console.log("This User already exists");
console.log(users);

function addUserSkill(item) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === item.name) {
          //users[i].skills = item.skills // modify whatever property you need
        return;
      }
    }
    users.push(item);
  }
  var item = {name:"sai", skills:['React']};
addUserSkill(item);
console.log(users)


function editUser(name, age)
{    
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            users[i].age = age; 
            break;
        }
    }
}






















// function myFunction(a, b) {
//     return a * b;  
//   }