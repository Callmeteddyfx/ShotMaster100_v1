var fgpercent = document.getElementById("livefgpercent");


var bar1 = new ProgressBar.Circle(fgpercent, {
    strokeWidth: 4,
    color: '#10af38',
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut',
});

function updatefgpercent(bar,value) {
    bar.animate(value);
    bar.setText((value*100) + '%');
}

updatefgpercent(bar1, 0);

function todaysDate(){
    const date = new Date().toLocaleDateString();
    const text = document.getElementById('todaysdate');
    text.textContent = date;
}


window.onload = todaysDate;

const layupsvalue = null;
const midrangevalue = null;
const threepointervalue = null;
const cornerthreevalue = null;
const freethrowvalue = null;
const freestylevalue = null;