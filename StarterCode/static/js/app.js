// 1. Use the D3 library to read the URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// d3.json(url).then((data)=>console.log(data));

// ----------------------------------------------------------------


// // Create a horizontal bar chart and a bubble chart, you'll be using the same variables, so create one function that will create both charts

// function createCharts(sampleData){
//     const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

//     // You want to retrieve the data so you can assign variables
//     d3.json(url).then((data)=>{
//         let samples=data.samples

//     // Define sample_values
//     let sample_values = Object.values(data.samples)

//     // Define otu_ids
//     let otu_ids = Object.keys(data.names)

//     // Define otu_labels as the hovertext
//     let otu_labels = Object.keys(data.names)

//     // Horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     let barTrace = {
//         x: otu_ids.slice(0,10),
//         y: sample_values.slice(0,10),
//         type: 'bar',
//         orientation: 'h',
//          showlegend: true 
//     };

//     let barLayout = {
//         title: "Top 10 OTUs Found in Individual"
//     };

//     Plotly.newPlot('bar', barTrace, barLayout)

//     // Bubble chart that displays each sample.

//     // Use otu_ids for the x values.
//     // Use sample_values for the y values.
//     // Use sample_values for the marker size.
//     // Use otu_ids for the marker colors.
//     // Use otu_labels for the text values.
//         let bubTrace = {
//             x: otu_ids,
//             y: sample_values,
//             mode: 'markers',
//             marker: {
//                 size: sample_values,
//                 color: otu_ids
//             }
//         };

//     let bubLayout = {
//         title: "All Samples"
//     };

//     Plotly.newPlot('bubble', bubTrace, bubLayout)
//     });
// }

// ----------------------------------------------------------------
// 4. Display the sample metadata, i.e., an individual's demographic information.


// ----------------------------------------------------------------
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ----------------------------------------------------------------
// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
// Create the dropdown menu
// function init() {
//     let dropdownMenu = d3.select("#selDataset");

//     // You need to add data to the dropdown menu
//     d3.json(url).then((data)=> {
//         let sample_ids = data.names;
//     })   
// }
// init();
