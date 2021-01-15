var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ', fullName, '.');

person.job = 'Data Scientist';
console.log('The person\'s current job is: ', person.job, '.');

person.previousJob = 'Accountant';
console.log('The person\'s previous job is: ', person.previousJob, '.');

console.log('The complete person object: ', person);

var myCar = {
  make: 'Mazda',
  model: 'Miata',
  year: '2018'
};
console.log('Car information: ', myCar);

myCar['owner'] = fullName;
var fullInfo = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(fullInfo);
myCar['color'] = 'grey';
console.log('My full car info: ', myCar);
