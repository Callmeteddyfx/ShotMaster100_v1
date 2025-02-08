
/* Create an FG% progressbar */
var fgpercent = document.getElementById("livefgpercent");


var bar1 = new ProgressBar.Circle(fgpercent, {
    strokeWidth: 4,
    color: '#10af38',
    trailColor: '#ddd',
    duration: 1400,
    easing: 'easeInOut',
});

function updatefgpercent(bar,value) {
    setTimeout(() => {
        value = parseFloat(value); 
        value = Number((value).toFixed(2));
        bar.setText(Math.round(value * 100) + '%');    
        bar.animate(value);
    }, 100);
}

updatefgpercent(bar1, 0);

/* Get today's date */
function todaysDate(){
    const date = new Date().toLocaleDateString();
    const text = document.getElementById('todaysdate');
    text.textContent = date;
}

/*Load today's birthday */
window.onload = todaysDate;

let points = 0; /* This value stores your points temporarily to calculate your FG% */
const layupsvalue = document.getElementById('layupsvalue');
const midrangevalue = document.getElementById('midrangevalue');
const threepointervalue = document.getElementById('threepointervalue');
const cornerthreevalue = document.getElementById('cornerthreevalue');
const freethrowvalue = document.getElementById('freethrowvalue');
const freestylevalue = document.getElementById('freestylevalue');

/* Function to add and subtract values to stats */
function addandsubtractnumbers (Id,addbtnId,minbtnId,max){
    minbtnId.addEventListener( 'click', function(){
        if(Id.textContent == 0){

        } else {
            Id.textContent--;
            points--;
            updatefgpercent(bar1,(points/100));
        }
        }
    )
    addbtnId.addEventListener( 'click', function(){
        if(Id.textContent == max){

        } else {
            Id.textContent++;
            points++;
            updatefgpercent(bar1,(points/100));
        }
        }
    )    
}

addandsubtractnumbers(layupsvalue,addlayups,minuslayups,15);
addandsubtractnumbers(midrangevalue,addmidrange,minusmidrange,15);
addandsubtractnumbers(threepointervalue,addthreepointer,minusthreepointer,20);
addandsubtractnumbers(cornerthreevalue,addcornerthree,minuscornerthree,15);
addandsubtractnumbers(freethrowvalue,addfreethrows,minusfreethrows,15);
addandsubtractnumbers(freestylevalue,addfreestylevalue,minusfreestyle,20);



/* Reset Session */
document.getElementById('resetbtn').addEventListener( 'click', function(){
    let resetdiv = document.getElementById('resetwrapper');
    resetdiv.style.display = 'block';
    }
)
document.getElementById('cancel-reset').addEventListener( 'click', function(){
    let resetdiv = document.getElementById('resetwrapper');
    resetdiv.style.display = 'none';
    }
)
document.getElementById('proceed-reset').addEventListener( 'click', function(){
    let resetdiv = document.getElementById('resetwrapper');
    resetdiv.style.display = 'none';

    points = 0;
    updatefgpercent(bar1, 0);
    layupsvalue.textContent = 0;
    midrangevalue.textContent = 0;
    threepointervalue.textContent = 0;
    cornerthreevalue.textContent = 0;
    freethrowvalue.textContent = 0;
    freestylevalue.textContent = 0;
    }
)


/* Save Session */
document.getElementById('Endbtn').addEventListener('click', function(){
    const date = new Date();

    const todayShots = {
        fg: points / 100,
        layup: layupsvalue.textContent,
        midrange: midrangevalue.textContent,
        threepointer: threepointervalue.textContent,
        cornerthree: cornerthreevalue.textContent,
        freethrows: freethrowvalue.textContent,
        freestyle: freestylevalue.textContent,
    }

    //get saved stats
    let stats = JSON.parse(localStorage.getItem("stats")) || [];

    //Add the new objects to the array
    stats.push({
        date: date,
        shots: todayShots
    });

    //Save the updated array to localStorage
    localStorage.setItem('stats', JSON.stringify(stats));

    /* Open achiements */
    location.href = 'history.html';
});