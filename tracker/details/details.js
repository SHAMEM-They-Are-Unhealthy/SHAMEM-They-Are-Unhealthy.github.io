const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');

function getAverage(data, windowSize) {
    var low = Math.max(0, data.length - windowSize);
    var total = data.slice(low, data.length).filter(function(item) {return item != -1});
    var size = total.length;
    return total.reduce((a, b) => a + b) / size;
}

function getTarget(start, target, timePeriod, currentDay) {
    return start + (((target - start) / (timePeriod * 7)) * currentDay);
}

function dateDiff(start, end) {
    var diffTime = Math.abs(end - start);
    return (diffTime / (1000 * 60 * 60 * 24));
}

function getWeekDates(date) {
    return Array(7).fill(new Date(date)).map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)));
}

$(document).ready(function() {
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            $.get("https://shamem.glitch.me/get_plan", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
                var dataJSON = JSON.parse(data);
                document.cookie = "session-id=" + dataJSON["uuid"] + "; path=/";
                var target = dataJSON["result"];
                var start = Number(dataJSON["data"][0]) * 100;
                var timePeriod = dataJSON["time"];
                var startDate = new Date(dataJSON["start"]);
                var endDate = new Date((new Date(dataJSON["start"])).getTime()+(timePeriod*7*24*60*60*1000));;
                var now = new Date();
                document.getElementById("startDate").innerHTML = "Start: " + startDate.toLocaleDateString();
                document.getElementById("endDate").innerHTML = "End: " + endDate.toLocaleDateString();
                document.getElementById("today").innerHTML = "You should do " + (Math.round(getTarget(start, target, timePeriod, dateDiff(startDate, now)) / 10) * 10) + " steps today";
                document.getElementById("tomorrow").innerHTML = "You should do " + (Math.round(getTarget(start, target, timePeriod, dateDiff(startDate, now.setDate(now.getDate() + 1))) / 10) * 10) + " steps tomorrow";
                var stepData = [];
                now = new Date();
                var week = getWeekDates(now);
                for (var day = 0; day < 7; day++) {
                    if (week[day] >= startDate) {
                        stepData.push(Math.round(getTarget(start, target, timePeriod, dateDiff(startDate, week[day])) / 10) * 10);
                    } else {
                        stepData.push(0);
                    }
                }
                var backgroundColor = ["lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "lightblue", "lightblue"];
                backgroundColor[now.getDay()] = "blue";
                new Chart(document.getElementById("day-chart"), {
                    type: 'bar',
                    data: {
                        labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
                        datasets: [{
                            label: "Steps Required this today",
                            data: stepData,
                            backgroundColor: backgroundColor
                        }]
                    },
                    options: {
                        legend: {display: false},
                        title: {
                            display: true,
                            text: "Steps Required this week"
                        },
                        animation: false
                    }
                });
            }).fail(function(data, status) {
                window.location = "/tracker/";
            });
        }).fail(function(data, status) {
            console.log(data);
            window.location = "/login/?tracker=true";
        });
    } else {
        window.location = "/login/?tracker=true";
    }
});