console.log("Welcome  to data  transmission");
document.getElementById("message").innerHTML = "Welcome spring";

var sum = 10;
var name = " Alexandru ";
var isActive = true;
var user = {
    id: 1,
    name: " Andrei ",
    age: 21
};

var user2 = {
    "id": 1,
    "name": "Alexandru Cristea",
    "username": "acristea",
    "email": "acristea@test.com",
    "address": {
        "street": "Padin",
        "number": "Ap. 10",
        "city": "Cluj-Napoca",
        "zipcode": "123456",
        "geo": {
            "lat": "46.783364",
            "lng": "23.546472"
        }
    },
    "phone": "004 -07 xx -123456" ,
    "company": {
        "name": "XYZ",
        "domain": "Air Traffic Management",
        "cities": ["Cluj-Napoca", "Vienna", "Paris"]
    }
}
console.log (user2.name);
console.log (user2.address.geo.lat);
console.log (user2.company.name);
console.dir (user2.company.cities);
console.log (user2.company.cities[0]) ;

function print (message) {
    console.log (message);
}
print("Hi! Welcome!");

var password ="123456";
console . log ( password =="123456"?" ALLOW ":" DENY ") ;

var password ="123476";
if( password == "123456") {
console.log (" permission accepted ") ;
} else {
console.log (" permission denied ") ;
}
