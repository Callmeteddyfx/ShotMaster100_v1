let stats = JSON.parse(localStorage.getItem("stats")) || [];
const ctx = document.getElementById("myChart").getContext("2d");

function loadgraph(){
    const myChart = new Chart(ctx, {
        type: "line", 
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Sales",
                data: [10, 20, 30, 25, 40],
                backgroundColor: "blue"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}



/* function getSelected(){
    let selectElement = document.getElementById("options"); // Select element
    let selectedOption = selectElement.options[selectElement.selectedIndex]; // Selected option
    console.log("Select ID:", selectElement.value); // Logs 'myDropdown'
}
 */


document.getElementById("options").addEventListener( "change", function(){
});

loadgraph();