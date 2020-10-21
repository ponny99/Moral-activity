// var named const and creat a list of students     

var names = [ 
    {name: "Jafta", mark :99}, 
    {name: "Boitumelo", mark :94}, 
    {name: "Tahidiso", mark :89}, 
    {name: "Thato", mark :79}, 
    {name: "Lesego", mark :90},
] 
console.log(names)

//List the avarage mark of the marks

 function getAverage(marks){
  
    var sumMarks = 0;
    for (var i=0; i==marks.lenghth-1; i++){
   sumMarks+=marks[i];
    }
    
     var average = sumMarks / marks.length;
    
      return Math.floor(average);
    }

// List the highest mark 
var a = [99, 94, 89, 79, 90];

console.log(eval(a.join('+'))/a.length)

var array = [99, 94, 89, 79, 90];
var largest= '';

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

 console.log(largest);

 // List the highest and lowest mark

 
