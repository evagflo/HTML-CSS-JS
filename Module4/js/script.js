/*var message="in global";
console.log("global: message = " + message);

var a= function(){
    var message ="inside a";
    console.log("a: message = " + message);
    function b()
    {
        console.log("b: message = "+ message);
    }
    b();
}

a();


console.log(x);

 if (x== undefined)
{
    console.log("x is undefined");
}
else
{
    console.log("x is defined");
}
var x;
x=4;
console.log(x);

if (x== undefined)
{
    console.log("x is undefined");
}
else
{
    console.log("x is defined");
}


var string ="hello";
string += " world";
console.log(string + "!");


console.log((5+4)/3);
console.log(5+4/3);
console.log(undefined/5);

function test1 (a){
    console.log(a/5);
}
test1();
test1(4);

var x=4,y=4;
if (x==y)
{
    console.log("FIRST IF x=4 is equal to y=4");
}
x="4";
if (x==y)
{
    console.log("SECOND IF x=4 is equal to y=4");
}

if (x===y)
{
    console.log("x='4' is equal to y=4");
}
else
{
    console.log("x='4' is NOT equal to y=4");
}


if (false || null || undefined || "" || 0 || NaN)
{
    console.log("this line won't ever be execute");
}
else
{
    console.log("all false");
}

if (true && "hello" && 1 && -1 && "false")
{
    console.log("all true");
}


function a()
{
    return
    {
        name: "EVA"
    };
}
function b(){
    return{
        name: "EVA"
    };
}

console.log(a());
console.log(b()); 

var sum =0;
for (var i = 0; i<10; i++){
    console.log(i);
    sum=sum+i;
    console.log(sum);
}
console.log("sum of 0 trhough 9 is : " + sum);


function orderChickenWith(sideDish){
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();

function orderChickenWith(sideDish){
    if (sideDish === undefined){
        sideDish= "whatever!!!";
    }
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();

function orderChickenWith(sideDish){
   sideDish = sideDish || "whatever!!!";
   console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();

var x = 10;
if ( (null) || (console.log("jjj")) || x > 5 ) {
  console.log("Hello");
}


var company= new Object();
company.name="Facebook";

company.ceo= new Object();
company.ceo.firstName="Mark";
company.ceo.favColor="blue";
company["stock of company"]=110;

var stockPropName="whatever";
company[stockPropName]=220;

console.log(company);

console.log("Company CEO name is : " + company.ceo.firstName);

console.log(company["name"]);

console.log("Stock of company is : " + company.whatever);

var facebook={
    name: "Facebook",
    ceo:{
        firstName: "Mark",
        favColor:"blue"
    },
    "stock of company":110

};

console.log(facebook);
console.log(typeof "stock of company");

function multiply(x,y){
    return x * y;
}

multiply.version="v.1.0.0";
console.log(multiply.version);

//function factory
function makeMultiplier (multiplier){
    var myFunc= function(x){
        return multiplier * x;
    };

    return myFunc;
}

var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll=makeMultiplier(2);
console.log(doubleAll(100));

//passing functions as arguments

function doOperationOn(x,operation){
    return operation(x);
}

var result=doOperationOn(5,multiplyBy3);
console.log(result);

var result=doOperationOn(20,doubleAll);
console.log(result);



var a=7;
var b =a;
console.log("a: " + a);
console.log("b: " + b);

b=5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

var a={x:7};
var b = a;
console.log(a.x);
console.log(b.x);

b.x=5;
console.log("after b.x update:");
console.log(a.x);
console.log(b.x);

function changePrimitive(primValue){
    console.log("in changePrimitive...");
    console.log("before: ");
    console.log(primValue);

    primValue=5;
    console.log("after: ");
    console.log(primValue);

}

var value=7;
console.log("initially our value is: ");
console.log(value);
changePrimitive(value);
console.log("after changePrimitive, orig value: ");
console.log(value);


function changeObject(objValue){
    console.log("in changeObject...");
    console.log("before :");
    console.log(objValue);

    objValue.x=5;
    console.log("after :");
    console.log(objValue);
}

value={x:7};
console.log("the initial value is:")
console.log(value);

changeObject(value);
console.log("after changeObject, original value is: ")
console.log(value);

function test(){
    
    this.myName="Eva";
    console.log(this);
    
}
test();
console.log(window.myName);

//CONSTRUCT
function Circle (radius){
    this.radius=radius;
   // this.perim= 2*radius*Math.PI;
}

Circle.prototype.getArea=
    function (){
        return Math.PI * Math.pow(this.radius,2);
    };

var myCircle = new Circle(10); //new object with the name of the function
console.log(myCircle);
console.log(myCircle.getArea());

var myCircle2 = new Circle(40); //new object with the name of the function
console.log(myCircle2);


var literalCircle={
    radius:10,
    
    getArea: function(){
        console.log(this.radius);
        var increaseRadius=function(){
            this.radius=20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI *Math.pow(this.radius,2);
    }
};

console.log(literalCircle.getArea());



var array = new Array();
array[0]="Eva";
array[1]=2;
array[2]= function(name){
    console.log("Hello " + name + "!")
};
array[3]={course:"HTML, CSS & JS"};

console.log(array);

console.log(array[0]);
console.log(array[1]);
(array[2](array[0]));
console.log(array[3].course);


var names={
    name:"Eva",
    surname:"Gonzalez",
    secondSurname:"Flo"};

console.log(names);
var names2=[   "Eva",    "Gonzalez",    "Flo"];
console.log(names2.length);


names2[100] ="EEE";
console.log(names2.length);

for (var i=0; i< names2.length; i ++){
    console.log("Hello " + names2[i]);
}

var names3=[   "Eva",    "Gonzalez",    "Flo"];
//console.log(names3.length);

var myObj={
    name:"EVA",
    course:"HTML/CSS&JS",
    platform:"coursera"
};
console.log(myObj);
for ( var prop in myObj){
    console.log(prop + ": " + myObj[prop] );
}

names3.greeting = "Hi!";

var names3=[   "Eva",    "Gonzalez",    "Flo"];
for (name in names3){
    console.log("Hello " + names3[name]);
}



function makeMultiplier (multiplier) {
    function b(){
        //multiplier=0;
        console.log("Multiplier is :" + multiplier);
    }
    b();
    return (
        function (x) {
            return multiplier * x
        }
    );
}

var doubleAll = makeMultiplier (3);
console.log(doubleAll(1));
*/