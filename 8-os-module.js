// os module
// note you can also destructure your log method from console 
const { log } = require('console');
const os = require('os')

// get info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
 name:os.type(),
 release:os.release(),
 totalMem:os.totalmem(),
 freeMem:os.freemem(),
}
console.log(currentOS)