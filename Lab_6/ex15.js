let people = '{ "person" : [' +
    '{ "name":"Renso" , "age":19 , "address":"Dublin" },' +
    '{ "name":"John" , "age":20 , "address":"Cork" },' +
    '{ "name":"Mark" , "age":21 , "address":"Galway" } ]}';

const obj = JSON.parse(people);

for(let i = 0; i < obj.person.length; i++) {
    console.log(obj.person[i].name);
}