import Chart from 'chart.js/auto';

const fileInput = document.getElementById('file-input') as HTMLInputElement;
const uploadState = document.getElementById('upload-state');
const chartState = document.getElementById('chart-state');
const chartCanvas = document.getElementById('chart-canvas') as HTMLCanvasElement;

//check
if (uploadState && chartState) {
  fileInput.addEventListener('change', handleFileUpload);
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    uploadState!.style.display = 'none'; // TypeScript needs a non-null here for now
    chartState!.style.display = 'block'; 

    // TODO
  }
}