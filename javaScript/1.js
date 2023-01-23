
// function in JavaScript 
function msg(){  
document.write("call msg function");  
} 

// 1) JavaScript Object by object literal
emp1={id:102,name:"Indranil Mondol",salary:40000}  
document.write(emp1.id+" "+emp1.name+" "+emp1.salary); 

// 2) By creating instance of Object  
var emp2=new Object();  
emp2.id=101;  
emp2.name="Saikat Bag";  
emp2.salary=50000;  
document.write(", "+emp2.id+" "+emp2.name+" "+emp2.salary);

// 3) By using an Object constructor
function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"sambhu mahato",30000);  
  
document.write(e.id+" "+e.name+" "+e.salary+"<br/>"); 

 var stringname=new String("hello javascript string");
 var upperstring = stringname.toUpperCase();
 document.write(upperstring);

