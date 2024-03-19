const fileInput = document.getElementById('file-input') as HTMLInputElement;
const uploadState = document.getElementById('upload-state');
const chartState = document.getElementById('chart-state');
const chartCanvas = document.getElementById('chart-canvas') as HTMLCanvasElement;

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
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
