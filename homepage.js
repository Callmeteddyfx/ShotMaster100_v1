/* Variables to get the Id of the divs to create the percentage bars */
    var layuppercent = document.getElementById("layuppercent");
    var midrangepercent = document.getElementById("midrangepercent");
    var threepointerpercent = document.getElementById("threepointerpercent");
    var cornerthreepercent = document.getElementById("cornerthreepercent");
    var freethrowpercent = document.getElementById("freethrowpercent");
    var freestylepercent = document.getElementById("freestylepercent");
    
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
    bar.setText((value*100) + '%' + ' ' + `${statstext}`);
}

function noStatsAvailable(){
    const titleText = document.getElementById('statstext');
    const fgPercent = document.getElementById('fgpercent');

    titleText.textContent = 'No Stats Available!';
    fgPercent.textContent = '0%';
    updatepercent(bar1, 0, '0/15');
    updatepercent(bar2, 0, '0/15');
    updatepercent(bar3, 0, '0/20');
    updatepercent(bar4, 0, '0/15');
    updatepercent(bar5, 0, '0/15');
    updatepercent(bar6, 0, '0/20');
}

function loadStats(){
    const stats = localStorage.getItem('stats');
    
    if (!stats){
        noStatsAvailable();
    } else {
        
    }
}




/* updatepercent(bar1,0.5); */
window.onload = loadStats;
window.onload = noStatsAvailable;