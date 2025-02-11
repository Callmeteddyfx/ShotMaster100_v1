const { jsPDF } = window.jspdf; 


function exportStats(){
    const infoDiv = document.getElementById('info-div-container');

    infoDiv.innerHTML = '';
    let newDiv = document.createElement('div');
    newDiv.id = 'info-div';
    newDiv.innerHTML = `<div id="close-btn-div">
        <img id="close-btn" src="./assets/close_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" onclick="closeinfodiv()">
        </div>
            <p id="info-text">Would you like to export as a txt file or a pdf?</p>
            <div id="info-btns">
            <button id="cancel-btn" onclick="exportstatsaspdf()">Export as PDF</button>
            <button id="accept-btn" onclick="exportstatsascsv()">Export as CSV</button>
            </div>`
    
            setTimeout(() => {
                document.getElementById('cancel-btn').style.backgroundColor = 'blue';
                document.getElementById('accept-btn').style.backgroundColor = 'green';
              }, 0);
    infoDiv.appendChild(newDiv);
    infoDiv.style.display = 'block';
}

function closeinfodiv(){
    const infoDiv = document.getElementById('info-div-container');
    infoDiv.style.display = 'none';
}

function exportstatsaspdf(){
    const stats = JSON.parse(localStorage.getItem('stats'));
    const doc = new jsPDF();


    let jsonString = JSON.stringify(stats, null, 2);
    jsonString = jsonString.replace(/[{}\[\]]/g, ""); // Removes { } [ ]

    // Define position and page size
    const marginLeft = 10;
    const marginTop = 10;
    const pageHeight = doc.internal.pageSize.height - 20;

    // Split text into lines that fit within the page width
    const lines = doc.splitTextToSize(jsonString, 180);
    let y = marginTop;

    // Loop through lines and add them to the document
    lines.forEach((line, i) => {
        if (y + 10 > pageHeight) {
            doc.addPage(); // Add a new page if reaching bottom
            y = marginTop; // Reset position
        }
        doc.text(line, marginLeft, y);
        y += 7; // Move down for next line
    });

// Save the document
doc.save("stats.pdf");
}

function exportstatsascsv(){
    const stats = JSON.parse(localStorage.getItem('stats'));

    const csvContent = "Date,Layups,Mid Range,Three Pointers\n" +
    stats.map(row => `${row.date},${row.shots.layup},${row.shots.midrange},${row.shots.threepointer}`).join("\n");

const blob = new Blob([csvContent], { type: "text/csv" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "shotsmaster-stats.csv";
a.click();
}

function resetStats(){
    const infoDiv = document.getElementById('info-div-container');
    infoDiv.style.display = 'block';
}
