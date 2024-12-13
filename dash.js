
    // Pie Chart for Total Projects
const projectsChart = new Chart(document.getElementById('projectsChart'), {
    type: 'pie',
    data: {
      labels:['AI & Machine Learning', 'Healthcare & Biotechnology', 'Renewable Energy', 'Robotics', 'E-learning Technologies', 'Others'],
      datasets: [{
        data: [30, 26, 18, 15, 7, 4], // Replace with your actual data
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4caf50', '#f44336']
      }]
    }
  });
  
  // Bar Chart for Total Publications
  const publicationsChart = new Chart(document.getElementById('publicationsChart'), {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Publications',
        data: [15, 12, 18, 20, 25, 30, 28, 22, 26, 35, 40, 50], // Data points
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
   
  // Bar Chart for Total Patents
  const patentsChart = new Chart(document.getElementById('patentsChart'), {
    type: 'bar',
    data: {
      labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Patents',
        data:  [8, 6, 12, 14, 16, 20, 22, 18, 24, 28, 30, 35], // Data points // Replace with your actual data
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
       
      }]
    }
  });
  
  // Bar Chart for Total Grants
  const grantsChart = new Chart(document.getElementById('grantsChart'), {
    type: 'bar',
    data: {
      labels:  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Grants ($)',
        data: [50000, 45000, 70000, 90000, 110000, 150000, 130000, 100000, 140000, 160000, 180000, 200000],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    }
  });
  
  // Bar Chart for Patents Per Year
  const patentsPerYearChart = new Chart(document.getElementById('patentsPerYearChart'), {
    type: 'bar',
    data: {
      labels: ['2019','2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Patents',
        data: [1, 3, 6, 10, 15,20], // Replace with your actual data
        backgroundColor: '#ff6384'
      }]
    }
  });
  
  // Pie Chart for Projects and Grants per Year
  const projectsGrantsPerYearChart = new Chart(document.getElementById('projectsGrantsPerYearChart'), {
    type: 'pie',
    data: {
      labels: ['Completed', 'In Progress', 'Planned', 'On Hold', 'Cancelled'],
      datasets: [{
        data: [50, 40, 15, 5, 2], // Realistic data for project statuses
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4caf50', '#f44336']
      }]

      
    }
    
  });


  const GrantsPerYearChart = new Chart(document.getElementById('GrantsPerYearChart'), {
    type: 'line',  // Line chart type
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024'], // Years on the X-axis
      datasets: [{
        label: 'Grants ($)',
        data: [150000, 250000, 350000, 450000, 550000, 700000], // Realistic grant data
        borderColor: '#ffcd56',  // Line color
        // fill: false,             // No fill for line chart
        // tension: 0.1             // Line smoothness
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,   // Start Y-axis at 0
          ticks: {
            callback: function(value) {
              return '$' + value.toLocaleString();  // Format Y-axis values with a dollar sign
            }
          }
        }
      },
      responsive: true,  // Make the chart responsive to window resizing
      plugins: {
        legend: {
          position: 'top',   // Position of the legend
        }
      }
    }
  });