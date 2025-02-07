/* Variables to get the Id of the divs to create the percentage bars */
    var layuppercent = document.getElementById("layuppercent");
    var midrangepercent = document.getElementById("midrangepercent");
    var threepointerpercent = document.getElementById("threepointerpercent");
    var cornerthreepercent = document.getElementById("cornerthreepercent");
    var freethrowpercent = document.getElementById("freethrowpercent");
    var freestylepercent = document.getElementById("freestylepercent");
    var fgPercent = document.getElementById('fgpercent');
    var titleText = document.getElementById('statstext');
    
    /* Creating Prog Bars using ProgressBar.js */
        var bar1 = new ProgressBar.Circle(layuppercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
        var bar2 = new ProgressBar.Circle(midrangepercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
        var bar3 = new ProgressBar.Circle(threepointerpercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
        var bar4 = new ProgressBar.Circle(cornerthreepercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
        var bar5 = new ProgressBar.Circle(freethrowpercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
        var bar6 = new ProgressBar.Circle(freestylepercent, {
            strokeWidth: 8,
            color: '#10af38',
            trailColor: '#ddd',
            duration: 1400,
            easing: 'easeInOut',
        });
    

/* Function to update the values and text of the progress bars */
function updatepercent(bar,value,statstext) {
    bar.animate(value);
    bar.setText(Math.round(value*100) + '%' + ' ' + `${statstext}`);
}

function noStatsAvailable(){
    titleText.textContent = 'No Stats Available!';
    fgPercent.textContent = '0%';
    updatepercent(bar1, 0, '0/15');
    updatepercent(bar2, 0, '0/15');
    updatepercent(bar3, 0, '0/20');
    updatepercent(bar4, 0, '0/15');
    updatepercent(bar5, 0, '0/15');
    updatepercent(bar6, 0, '0/20');
}

function formatDate(string){
    let date = new Date(string); // Convert string to Date object

    let day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    let year = String(date.getFullYear()).slice(-2); // Get last two digits of year

    return `${day}/${month}/${year}`;
}

function loadStats(){
    const stats = JSON.parse(localStorage.getItem("stats")) || [];;
    
    if (!stats){
        noStatsAvailable();
    } else {
        let lastitem = stats.length - 1;
        fgPercent.textContent = (stats[lastitem].shots.fg * 100) + '%';
        let date = formatDate(stats[lastitem].date);
        statstext.textContent = `Recent Stats: ${date}`;
        /* Layups */
        let recentLayups = stats[lastitem].shots.layup;
        updatepercent(bar1,recentLayups/15,`${recentLayups}/15`);
        /* MidRange */
        let recentMidrange = stats[lastitem].shots.midrange;
        updatepercent(bar2,recentMidrange/15,`${recentMidrange}/15`);
        /* Three Pointer */
        let recentthreePointer = stats[lastitem].shots.threepointer;
        updatepercent(bar3,recentthreePointer/20,`${recentthreePointer}/20`);
        /* CornerThrees */
        let recentcornerthrees = stats[lastitem].shots.cornerthree;
        updatepercent(bar4,recentcornerthrees/15,`${recentcornerthrees}/15`);
        /* FreeThrows */
        let recentfreethrows = stats[lastitem].shots.freethrows;
        updatepercent(bar5,recentfreethrows/15,`${recentfreethrows}/15`);
        /* FreeStyles */
        let recentfreestyles = stats[lastitem].shots.freestyle;
        updatepercent(bar6,recentfreestyles/20,`${recentfreestyles}/20`);
    }
}

loadStats();


/* updatepercent(bar1,0.5); */
window.onload = loadStats;