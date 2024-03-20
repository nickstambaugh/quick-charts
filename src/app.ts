const fileInput = document.getElementById('file-input') as HTMLInputElement;
const uploadState = document.getElementById('upload-state');
const chartState = document.getElementById('chart-state');
const chartCanvas = document.getElementById('chart-canvas') as HTMLCanvasElement;
const colorInput = document.getElementById('color-input') as HTMLInputElement;
const exportButton = document.getElementById('export-button');

if (colorInput && exportButton) {
   colorInput.addEventListener('input', handleColorChange);
    exportButton.addEventListener('click', exportChartImage);
}

function handleColorChange(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    updateChartColor(color);
}

function updateChartColor(color: string) {
    // Update chart dataset color
    chart.data.datasets[0].backgroundColor = color;
    chart.update();
}

function exportChartImage() {
    const canvas = chartCanvas as HTMLCanvasElement;
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'chart.png';
    link.click();
}

if (uploadState && chartState) {
  fileInput.addEventListener('change', handleFileUpload);
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    uploadState!.style.display = 'none';
    chartState!.style.display = 'block';

    // Read the uploaded CSV file
    const reader = new FileReader();
    reader.onload = function(event) {
      if (event.target) {
        const csvData = event.target.result as string;
        const data = processData(csvData); // Process CSV data
        renderChart(data); // Render chart
      }
    };
    reader.readAsText(file);
  }
}

function processData(csvData: string): { labels: string[], data: number[] } {
  const lines = csvData.split('\n');
  const labels: string[] = [];
  const data: number[] = [];

  for (const line of lines) {
    const [label, value] = line.split(',');
    labels.push(label.trim());
    data.push(parseFloat(value.trim()));
  }

  return { labels, data };
}

function renderChart(data: { labels: string[], data: number[] }) {
    new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Data',
          data: data.data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', // Rotate chart to use y-axis for categories
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false // Hide grid lines
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        },
        layout: {
          padding: 20 // Add padding
        },// Ensure chart maintains a square aspect ratio
        responsive: true, // Allow chart to be responsive
        maintainAspectRatio: false, 
      }
    });
  }
  
