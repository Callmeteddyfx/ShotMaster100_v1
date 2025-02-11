const stats = JSON.parse(localStorage.getItem("stats")) || [];
const ctx = document.getElementById("myChart").getContext("2d");
let myChart = null; // Initialize as null to start with

function calculateAverage(data) {
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
}

function loadgraph(name){
    let _statsDate = [];
    let listvalue = [];

    /* Date x axis */
    for(let i = 0; i < stats.length; i++){
       const date = new Date(stats[i].date);
            const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
            const [day, month, year] = formattedDate.split('/');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');
            const simplifiedDate = `${day}/${month}/${year.slice(2)} ${hours}:${minutes}`;
           
            
       _statsDate.push(simplifiedDate);
    };

    /* Value Y axis */
    if(name == "layup"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.layup;       
            listvalue.push(list);
         };
    }
    if(name == "midrange"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.midrange;       
            listvalue.push(list);
         };
    }
    if(name == "threepointer"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.threepointer;       
            listvalue.push(list);
         };
    }
    if(name == "cornerthree"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.cornerthree;       
            listvalue.push(list);
         };
    }
    if(name == "freethrows"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.freethrows;       
            listvalue.push(list);
         };
    }
    if(name == "freestyle"){
        for(let i = 0; i < stats.length; i++){
            const list = stats[i].shots.freestyle;       
            listvalue.push(list);
         };
    }
    if(name == "fg"){
        for(let i = 0; i < stats.length; i++){
            const list = (stats[i].shots.fg * 100);       
            listvalue.push(list);
         };
    }
    
    const averageValue = calculateAverage(listvalue);

     myChart = new Chart(ctx, {
        type: "line", 
        data: {
            labels: _statsDate,
            datasets: [{
                label: `${name}`,
                data: listvalue,
                backgroundColor: "blue",
                fill: true,
            }]
        },
        
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
        plugins: {
             zoom: {
          pan: {
            enabled: true,
            mode: 'xy',  // Allow panning in both x and y directions
            speed: 10,
            threshold: 10
          },
          zoom: {
            enabled: true,
            mode: 'xy',  // Allow zooming in both x and y directions
            speed: 0.1,  // Zoom speed
            sensitivity: 3  // How sensitive the zoom is to mouse movement
                }
            }
        }
    });
};

loadgraph("layup");


document.getElementById("options").addEventListener( "change", function(){
    if (myChart) {
        myChart.destroy();
      }
    if(document.getElementById("options").value == "layup"){
        loadgraph("layup");
    }
    if(document.getElementById("options").value == "midrange"){
        loadgraph("midrange");
    }
    if(document.getElementById("options").value == "threepointer"){
        loadgraph("threepointer");
    }
    if(document.getElementById("options").value == "cornerthree"){
        loadgraph("cornerthree");
    }
    if(document.getElementById("options").value == "freethrows"){
        loadgraph("freethrows");
    }
    if(document.getElementById("options").value == "freestyle"){
        loadgraph("freestyle");
    }
    if(document.getElementById("options").value == "fg"){
        loadgraph("fg");
    }

});

