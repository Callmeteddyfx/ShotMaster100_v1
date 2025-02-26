var list = document.getElementById('statslist');
var listdate = document.getElementById('listitem1 date');

document.getElementById('close').addEventListener('click', function(){
    window.location.replace('index.html');
})

function loadStats(){
    const stats = JSON.parse(localStorage.getItem("stats")) || [];
    document.getElementById('finaltime').textContent = `Finishing time: ${stats[stats.length - 1].shots.finalTime}`;

    if ((stats.length - 1) >= 3){
        const lastThreeStats = stats.slice(-3).reverse();
 
        for (let i=0; i < lastThreeStats.length; i++){
            /* Format Date */
            const date = new Date(lastThreeStats[i].date);
            const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
            const [day, month, year] = formattedDate.split('/');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');
            const simplifiedDate = `${day}/${month}/${year.slice(2)} ${hours}:${minutes}:${seconds}`;
            
            /* Get values */
            const layups = lastThreeStats[i].shots.layup;
            const midrange = lastThreeStats[i].shots.midrange;
            const threepointer = lastThreeStats[i].shots.threepointer;
            const cornerthree = lastThreeStats[i].shots.cornerthree;
            const freethrows = lastThreeStats[i].shots.freethrows;
            const freestyle = lastThreeStats[i].shots.freestyle;

            const newDiv = document.createElement('li');
            newDiv.id = 'listitem1';
            newDiv.innerHTML = `
          <p id = 'Date'>${simplifiedDate}</p>
          <div id="stats-value-container">
          <ul id="statvalues" class ="wrapper">
          <li>
                <p id="shots">Types</p>
                <p id="fraction">Shots</p>
                <p id="percentage">Percent</p>
             </li>
           <li>
                <p id="shots">Layups</p>
                <p id="fraction">${layups} out of 15</p>
               <p id="percentage">${Math.round((layups/15)* 100)}%</p>
            </li>
             <li>
                <p id="shots">Midrange</p>
                <p id="fraction">${midrange} out of 15</p>
                <p id="percentage">${Math.round((midrange/15)* 100)}%</p>
             </li>
             <li>
                <p id="shots">Three Points</p>
                <p id="fraction">${threepointer} out of 20</p>
                <p id="percentage">${Math.round((threepointer/20)* 100)}%</p>
             </li>
             <li>
                <p id="shots">Corner Three</p>
                <p id="fraction">${cornerthree} out of 15</p>
                <p id="percentage">${Math.round((cornerthree/15)* 100)}%</p>
             </li>
             <li>
                <p id="shots">Free Throws</p>
                <p id="fraction">${freethrows} out of 15</p>
                <p id="percentage">${Math.round((freethrows/15)* 100)}%</p>
             </li>
             <li>
                <p id="shots">Freestyle</p>
                <p id="fraction">${freestyle} out of 20</p>
                <p id="percentage">${Math.round((freestyle/20)* 100)}%</p>
             </li>
         
          </ul>
            </div>
            `
            date.textContent = lastThreeStats[i].date;

            list.appendChild(newDiv);
        };

    } else {
        lastThreeStats = stats;
      
        for (let i=0; i < lastThreeStats.length; i++){
          /* Format Date */
          const date = new Date(lastThreeStats[i].date);
          const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
          const [day, month, year] = formattedDate.split('/');
          const hours = String(date.getUTCHours()).padStart(2, '0');
          const minutes = String(date.getUTCMinutes()).padStart(2, '0');
          const seconds = String(date.getUTCSeconds()).padStart(2, '0');
          const simplifiedDate = `${day}/${month}/${year.slice(2)} ${hours}:${minutes}:${seconds}`;
          
          /* Get values */
          const layups = lastThreeStats[i].shots.layup;
          const midrange = lastThreeStats[i].shots.midrange;
          const threepointer = lastThreeStats[i].shots.threepointer;
          const cornerthree = lastThreeStats[i].shots.cornerthree;
          const freethrows = lastThreeStats[i].shots.freethrows;
          const freestyle = lastThreeStats[i].shots.freestyle;

          const newDiv = document.createElement('li');
          newDiv.id = 'listitem1';
          newDiv.innerHTML = `
        <p id = 'Date'>${simplifiedDate}</p>
        <div id="stats-value-container">
        <ul id="statvalues" class ="wrapper">
        <li>
              <p id="shots">Types</p>
              <p id="fraction">Shots</p>
              <p id="percentage">Percent</p>
           </li>
         <li>
              <p id="shots">Layups</p>
              <p id="fraction">${layups} out of 15</p>
             <p id="percentage">${Math.round((layups/15)* 100)}%</p>
          </li>
           <li>
              <p id="shots">Midrange</p>
              <p id="fraction">${midrange} out of 15</p>
              <p id="percentage">${Math.round((midrange/15)* 100)}%</p>
           </li>
           <li>
              <p id="shots">Three Points</p>
              <p id="fraction">${threepointer} out of 20</p>
              <p id="percentage">${Math.round((threepointer/20)* 100)}%</p>
           </li>
           <li>
              <p id="shots">Corner Three</p>
              <p id="fraction">${cornerthree} out of 15</p>
              <p id="percentage">${Math.round((cornerthree/15)* 100)}%</p>
           </li>
           <li>
              <p id="shots">Free Throws</p>
              <p id="fraction">${freethrows} out of 15</p>
              <p id="percentage">${Math.round((freethrows/15)* 100)}%</p>
           </li>
           <li>
              <p id="shots">Freestyle</p>
              <p id="fraction">${freestyle} out of 20</p>
              <p id="percentage">${Math.round((freestyle/20)* 100)}%</p>
           </li>
       
        </ul>
          </div>
          `
          date.textContent = lastThreeStats[i].date;

          list.appendChild(newDiv);
    };
}};

loadStats();