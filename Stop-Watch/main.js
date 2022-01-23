var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn = document.querySelector('.lap');
var lap_box = document.querySelector('.lap_box');

var watch = new stopwatch(timer);

function start()
{
    toggleBtn.textContent = "Stop";
    toggleBtn.classList.toggle("on");
    watch.start();
}

function stop()
{
    toggleBtn.textContent = "Start";
    toggleBtn.classList.toggle("on");
    watch.stop();
}

function stopWatchOn()
{
    toggleBtn.textContent = "Start";
    toggleBtn.classList.toggle("on");
    watch.stop();
    watch.reset();
}

toggleBtn.addEventListener("click",function (){
    //stop
    watch.isOn ? watch.lapOn() : watch.reset();
});

lapBtn.addEventListener("click",function (){
    //stop
    watch.isOn ? watch.lapOn() : watch.lapOff();
})
