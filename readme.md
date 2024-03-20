![image](https://github.com/nickstambaugh/quick-charts/assets/73977662/968692ee-0fca-4d8b-b13f-74071c9e1b1c)

Quick Charts is a simple web app that generates data visualizations from flat files.

Build on any system, serve URLs for your next web project, or add to an existing local project. The power is in the developer's hands. 

Quick Charts will initially look to complete the following: 
- Follow a philosophy of being minimalistic, building only what is needed when it is needed. 
- Be a proof-of-concept against bloated frameworks.
- For developer/local usage only.
- ***Allow me to theorize a complex build system that can ingest APIs and include enterprise features for data visualization projects***.

# Demo
![](https://github.com/nickstambaugh/quick-charts/blob/main/assets/3-19.gif)

Quick Charts is created on top of a custom build system that handles the following tasks:

## Features
- File Upload: The app provides a dedicated file upload state that allows users to upload flat data files.

- Data Visualization: Once a CSV file is uploaded, the app generates a bar chart visualization using Chart.js.

- Chart Options: Users can select from a variety of chart types to visualize their data.

For now, it is Windows only until I add Linux support.

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

## Dev Tools

` mingw32-make install-deps `: install project dependencies, if needed (chart.js with types)

` mingw32-make install-typescript `: install typescript globally, if needed

## Dependencies
Quick Charts relies on the following dependencies:

- TypeScript: For writing the application logic.
- Chart.js: A popular charting library for creating data visualizations.
These dependencies are automatically installed through the makefile if you need them.

