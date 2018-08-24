var readline = require('readline-sync');
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
var id = readline.question("input owner id ");
var d = readline.question("input floating point data for this genisis node: ");
x.data=""+d+":"+id+":"+n+":"+sha1(""+d+id+n);
x.node_number = 0; 
var i = new Date().getTime();
x.node_id = i & 0xffffffff;  // 32-bit Will be unique for all nodes
x.ref_id= "";
x.child_ref_id  = [];
x.gen_id = x.node_id;
x.hash = ""+x.timestamp+":"+d+":"+x.node_number+":"+x.node_id+":"+x.ref_id+":"+x.gen_id+":"+sha1(""+x.timestamp+d+x.node_number+x.node_id+x.ref_id+x.gen_id);
//CREATED GENisis NODE

