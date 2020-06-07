// Question 1


var favoriteMovie = "inception";




// Question 2


var person = {
    name: "Aous",
    age: 31
};



// Question 3


var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}else{
    console.log("In Stock");
}



// Question 4


var count = [84, 85, 86, 87, 88];

for (var count = 84; count <= 88; count++) {
  console.log(count);
}



// Question 5


for(var nr = 15; nr <=25; nr++){
    console.log(nr);   
}




// Question 6


for(var nr = 15; nr <=25; nr++){
    if(nr === 20){
        console.log(nr);   
    }
}



// Question 7


var myCar = [
    {
      car: "Mazda",
      model: 2013,
      nice: false
    },

    {
      car: "Mazda",
      model: 2014,
      nice: true
    }
        
    ];

for(var c = 0; c < myCar.length; c++){

    console.log(myCar[c].model);
    console.log(myCar[c].nice);
}




// Question 8


function whatIDontLike(sushi){
    console.log("I dont like " + sushi);
}

whatIDontLike ("sushi");





// Question 9



function logic(nr1, nr2) {
var result = nr1-nr2;
console.log (result);
}

logic(100, 25);




// Question 10



var anyThing = [];
function pushAnything(somThing) {
  anyThing.push (somThing);
}

pushAnything ("somThing")

console.log(anyThing);























