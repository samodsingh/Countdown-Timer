let months = [
    "Janruary",
    "february",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuober",
    "November",
    "December",
];

let weekdays =[ 
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Firday",
    "Saturday",
];

let giveway = document.querySelector('.giveway');
let deadline = document.querySelector('.deadline');
let items = document.querySelectorAll('.deadline-formet h2');

let futurDate = new Date( 2022,12 , 1, 12, 0, 0);
let year = futurDate.getFullYear();
let hours = futurDate.getHours();
let minute = futurDate.getMinutes();
let month = futurDate.getMonth();
// console.log(months[month])
month = months[month]
let date = futurDate.getDate();
// console.log(date,'==============date')

let weekday = weekdays[futurDate.getDay()]
 
giveway.textContent = `Giveway ends on ${weekday} ${date} ${month}  ${year} ${hours}: ${minute} am`

//future time in ms
let futureTime = futurDate.getTime();
// console.log(futureTime,'========= future time')

function getRemainigTime(){
    let today = new Date().getTime();
    // console.log(today,'----------------today')
    let t = futureTime - today;
    // console.log(t)

    //1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    let oneDay = 24*60*60*1000;
    let oneHour =60*60*1000;
    let oneMinute = 60*1000;
    let days = t/oneDay;
    days = Math.floor(days)

    let hours = Math.floor((t % oneDay )/ oneHour);
    let minutes = Math.floor((t % oneHour )/ oneMinute );
    let seconds = Math.floor((t % oneMinute )/ 1000 );

    // console.log(hours)

    // set values array -------------
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }
    let values = [days, hours, minutes, seconds];
    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });
    if(t < 0 ){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class= "expired "> HAPPY NEW YEAR 2023 </h4>`

    }

};
//countdown---------------
let countdown = setInterval(getRemainigTime, 1000);
getRemainigTime();