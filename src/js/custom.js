document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', // Can be 'bar', 'pie', 'doughnut', etc.
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',"July","Aug","Sept","Oct","Nov","Dec"],
            datasets: [{
                label: 'Sales',
                data: [300, 100, 350, 280,56,180,100,240,180, 50,320, 400],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor:"#3E6BE0",
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Important for responsive sizing with Tailwind
            plugins: {
                legend: {
                    labels: {
                        color: "#999" // Tailwind gray-700 for legend text
                    }
                }
            },
            scales: {
                y: {
                    barThickness:80,
                    beginAtZero: true,
                    ticks: {
                        color: '#6A717D' // Tailwind gray-700 for Y-axis ticks
                    },
                    grid: {
                        color: '#EEF0F3' // Tailwind gray-200 for Y-axis grid lines
                    }
                },
                x: {
                    barPercentage:0.8,
                    barThickness:80,
                    ticks: {
                        color: '#4A5568' // Tailwind gray-700 for X-axis ticks
                    },
                    
                    grid: {
                        color: '#EEF0F3' // Tailwind gray-200 for X-axis grid lines
                    }
                }
            }
        }
    });
});


const sidebar = document.querySelector('.e-a-d-sidebar');
const scrollThreshold = 120;
window.addEventListener('scroll',()=>{
    if(window.scrollY > scrollThreshold){
        sidebar.classList.add("fixed_sidebar")
    } else{
       sidebar.classList.remove('fixed_sidebar');
       sidebar.style.top = '';
    }
})