function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

    var count_urlprotected = 19468;
	var count_clickserved = 916423;
    if (readCookie("timer1") != undefined) count_urlprotected = readCookie("timer1");
	if (readCookie("timer2") != undefined) count_clickserved = readCookie("timer2");
    
    var counter1 = setInterval(timer1, 800);
	var counter2 = setInterval(timer2, 150);

    function timer1() {
        createCookie("timer1", count_urlprotected, 19468);
        count_urlprotected++;
        if (count_urlprotected <= 0) {
            eraseCookie("timer1");
            return;
        }
        $('#url-protected').html(count_urlprotected);
    }
	function timer2(){
		createCookie("timer2", count_clickserved, 19468);
		count_clickserved++;
		if (count_clickserved <= 0) {
			eraseCookie("timer2");
			return;
		}
		$('#click-served').html(count_clickserved);
	}
