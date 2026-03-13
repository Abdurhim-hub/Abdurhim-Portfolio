
function toggleDarkMode(){
document.body.classList.toggle("dark");
}

const ctx = document.getElementById('skillsChart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Data Centers','Power Systems','Networking','Automation','Leadership'],
datasets: [{
label: 'Expertise Level',
data: [95,90,85,75,90]
}]
},
options: {
responsive:true,
plugins:{
legend:{display:false}
}
}
});
