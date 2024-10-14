function displayCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 시간을 2자리로 만들기 위해 추가적인 처리
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('current-time').textContent = timeString;
}

// 매초마다 시간을 업데이트
setInterval(displayCurrentTime, 1000);