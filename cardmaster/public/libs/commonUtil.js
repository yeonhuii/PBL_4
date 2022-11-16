(function(){
    Kakao.init('7f33923b37a7f559291b8e7f1aedd6b8');
}());

function writeLog(msg, i) {
    if (i === undefined)
        i = currentAccount;
    if (logs[i] === undefined)
        logs[i] = "";

    logs[i] = logs[i] + "[" + new Date().toLocaleString() + "] " + msg + "\n";

    if (i == currentAccount)
        document.getElementById("result").textContent = logs[i];
}

function errorChk(msg, error) {
    if (error != null) {
        writeLog(msg + " : " + error.toString());
        return true;
    } else {
        return false;
    }
}

function txLog(option) {

    var logText = "[" + new Date().toLocaleString() + "]" + option.msg + "\n";

    document.getElementById(option.targetEl).innerHTML = logText;
}

function loginStatus() {
    return new Promise((ok, fail) => {
        Kakao.Auth.getStatus((result) => {
            ok(result);
        })
    });
}