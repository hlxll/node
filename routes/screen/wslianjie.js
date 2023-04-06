const childProcess = require('child_process');
const exec = childProcess.exec;
const wslianjie = function(){
    let cmd = process.platform === 'win32' ? 'tasklist' : 'ps aux'
    exec(cmd, function (err, stdout, stderr) {
        if (err) {
          return console.error(err)
        }
        console.log(stdout);
    })
}
module.exports = wslianjie;

