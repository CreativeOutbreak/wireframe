var debug = true;
function dbug(msg) {
    if(debug) {
        console.log('============ Debug Message =============');
        console.log(msg);
        console.log('Called by '+arguments.callee.caller.name+' Function');
        console.log('============= End Message ==============');
    }
}
