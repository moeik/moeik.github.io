function music() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
    }
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        document.getElementById("bgAudio").volume = 0.5;
    } else if (/(Android)/i.test(navigator.userAgent)) {
        document.getElementById("bgAudio").volume = 0.5;
    } else {
        document.getElementById("bgAudio").volume = 0.1;
}

