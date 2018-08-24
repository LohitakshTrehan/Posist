var readline = require('readline-sync');
var Total_Sys_Val;
var sha1 = require('sha1');
function get_timestamp(){
    var d = new Date();
    var timestamp = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    return timestamp;
}
var x = new Object();
//Create Genisis Nodes
x.timestamp = get_timestamp();
// using sha1 hash
var n = readline.question("input owner name: ");
var id = readline.question("input owner id: ");
var d = readline.question("input floating point data for this genisis node: ");
Total_Sys_Val = d;
x.data=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
x.node_number = 0; 
var i = new Date().getTime();
x.node_id = i & 0xffffffff;  // 32-bit Will be unique for all nodes
x.ref_id= "";
x.child_ref_id  = [];
x.gen_id = x.node_id;
x.hash = ""+x.timestamp+":"+d+":"+x.node_number+":"+x.node_id+":"+x.ref_id+":"+x.gen_id+":"+sha1(""+x.timestamp+d+x.node_number+x.node_id+x.ref_id+x.gen_id);
//CREATED GENisis NODE
console.log("The genisis node is created!!!");
console.log("");
console.log("*****************************************************");
console.log("");
console.log("Values are:");
console.log(x);
console.log("in it the data is serated by columns i.e. ':'");
//VErifying Ownership of DATA
console.log("");
console.log("*****************************************************");
console.log("");
console.log("Lets see how to verify the ownership of data");
console.log("i will be using genisis node to do it");
n = readline.question("input owner name: ");
id = readline.question("input owner id: ");
d = readline.question("input floating point data for this genisis node: ");
console.log("if you inputed same info then ans will be yes");
var calculated_hash=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
if(calculated_hash===x.data){
    console.log("yes! you are the owner");
}
else{
    console.log("No! you are not the owner of record you are accessing");
}
//Changing Ownership
console.log("");
console.log("*****************************************************");
console.log("");
console.log("Now lets see how to transfer ownership");
console.log("first we will verify the owner, so previous code same");
console.log("after that we change the ownership")
n = readline.question("input owner name: ");
id = readline.question("input owner id: ");
d = readline.question("input floating point data for this genisis node: ");
console.log("if you inputed same info then ans will be yes");
calculated_hash=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
if(calculated_hash===x.data){
    console.log("yes! you are verified owner");
    console.log("");
    console.log("*****************************************************");
    console.log("");
    console.log("now lets change the node owner")
    n = readline.question("input new owner name: ");
    id = readline.question("input new owner id: ");
    console.log(" i am supposing changing owner doesnt change data value inside")
    calculated_hash=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
    x.data = calculated_hash;
}
else{
    console.log("No! you are not verified owner of record you are accessing");
}
console.log("");
console.log("*****************************************************");
console.log("");
console.log("Now if you were successful changing the owner, then you can verify the same too")
n = readline.question("input owner name: ");
id = readline.question("input owner id: ");
d = readline.question("input floating point data for this genisis node: ");
console.log("if you inputed correct info then ans will be yes");
console.log("");
console.log("*****************************************************");
console.log("");
calculated_hash=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
if(calculated_hash===x.data){
    console.log("yes! you are verified owner");
}
else{
    console.log("No! you are not verified owner of record you are accessing");
}
//
console.log("");
console.log("*****************************************************");
console.log("");
console.log("so i completed  1, 5, 6 problem statement");
console.log("");
console.log("*****************************************************");
console.log("");