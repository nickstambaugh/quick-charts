# Quick Charts 

Quick Charts is a simple web app that generates data visualizations from flat files. With the philosophy of being minimalistic, Quick Charts is created on top of a custom build system that handles the following tasks:

## Features
- File Upload: The app provides a dedicated file upload state that allows users to upload flat data files.

- Data Visualization: Once a CSV file is uploaded, the app generates a bar chart visualization using Chart.js.

- Chart Options: Users can select from a variety of chart types to visualize their data.

## Build System
Quick Charts uses a custom build system based on a Makefile. The Makefile automates the following tasks:

- Compiling TypeScript code into JavaScript: The TypeScript files in the src directory are compiled into JavaScript files using the TypeScript compiler (tsc). The compiled JavaScript files are placed in the dist directory.

- Copying HTML and CSS files: The HTML and CSS files in the src directory are copied to the dist directory.

- Cleaning the distribution directory: The clean target removes the dist directory and its contents.

To build the project, simply run the ` make ` command (or ` mingw32-make ` on Windows) in the project's root directory. The build system will compile the TypeScript code and copy the necessary files to the dist directory.

## Usage
1. Clone the repository or download the source code.
2. Navigate to the project's root directory.
3. Run ` make ` (or ` mingw32-make ` on Windows) to build the project.
4. Open the ` dist/index.html ` file in a web browser.
5. Use the file upload interface to select a CSV file.
6. The app will generate a bar chart visualization based on the uploaded data.
7. Explore different chart types by selecting them from the available options.

## Dependencies
Quick Charts relies on the following dependencies:

- TypeScript: For writing the application logic.
- Chart.js: A popular charting library for creating data visualizations.
These dependencies are automatically installed when you build the project using the provided Makefile.

