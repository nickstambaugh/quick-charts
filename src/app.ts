import Chart from 'chart.js/auto';

const fileInput = document.getElementById('file-input') as HTMLInputElement;
const uploadState = document.getElementById('upload-state');
const chartState = document.getElementById('chart-state');
const chartCanvas = document.getElementById('chart-canvas') as HTMLCanvasElement;

// Check if the elements are not null before accessing them
if (uploadState && chartState) {
  fileInput.addEventListener('change', handleFileUpload);
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    // Handle file upload and create chart
    uploadState!.style.display = 'none'; // Add a non-null assertion
    chartState!.style.display = 'block'; // Add a non-null assertion

    // Read the CSV file and create a chart
    // ...
  }
}