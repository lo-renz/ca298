let people = '{ "person" : [' +
    '{ "name":"Renso" , "age":"19" , "address":"Dublin" } ]}';

const obj = JSON.parse(people);

console.log(obj.person[0].name)
console.log(obj.person[0].age)
console.log(obj.person[0].address)