// 1. Use the D3 library to read the URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

d3.json(url).then((data)=>console.log(data));

// ----------------------------------------------------------------


// Create a horizontal bar chart using sample_values as the values for the bar chart, otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

function createCharts (sampleData){
    // You want to retrieve the data so you can assign variables
    d3.json(url).then((data)=> {
        let samples=data.samples;
        let arraySample=samples.filter(sampleObj => sampleObj.id == sampleData);
        let result = arraySample[0]

    // Define sample_values
    let sample_values = result.sample_values

    // Define otu_ids
    let otu_ids = result.otu_ids

    // Define otu_labels as the hovertext
    let otu_labels = result.otu_labels

    // Horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    let barTrace = [{
        y: otu_ids.slice(0,10).map(otu_ids => `otu_ids${otu_ids}`).reverse(),
        x: sample_values.slice(0,10).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'
    }];

    let barLayout = {
        title: "Top 10 OTUs Found in Individual"
    };

    Plotly.newPlot('bar', barTrace, barLayout)
   

    // Create a bubble chart that displays each sample
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.

    let bubTrace = [{
        x: otu_ids,
        y: sample_values,
        mode: 'markers',
        text: otu_labels,
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: 'Jet'
            }
        }];

    let bubLayout = {
        title: "Belly Button Diversity"
    };

    Plotly.newPlot('bubble', bubTrace, bubLayout)
    });

};
    
// // ----------------------------------------------------------------
// Display the sample metadata, i.e., an individual's demographic information.
function createMetadata(sampleData){
    d3.json(url).then((data)=> {
        let metadata = data.metadata;
        let arraySample=metadata.filter(sampleObj => sampleObj.id == sampleData);
        let result = arraySample[0];

        let display = d3.select("#sample-metadata");
        display.html("");
        Object.entries(result).forEach(function([key,value]){
            display.append("h6").text(`${key}: ${value}`)
        })
        // for (key in result){
        //     display.append("h6").text(`${key}: ${result[key]}`)
        // } 
    })
} 


function optionChanged(newSample){
    createMetadata(newSample);
    createCharts(newSample);
}

// // ----------------------------------------------------------------
// // Display each key-value pair from the metadata JSON object somewhere on the page.

// // ----------------------------------------------------------------
// // Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

// Create the dropdown menu
function init() {
    let dropdownMenu = d3.select("#selDataset");

    // You need to add data to the dropdown menu
    d3.json(url).then((data)=> {
        let sample_ids = data.names;
        sample_ids.forEach((sample)=>{
            dropdownMenu.append("option")
            .text(sample)
            .property("value",sample);
        })
        let firstSample = sample_ids[0];
        createMetadata(firstSample);
        createCharts(firstSample);
    })   
}
init();

// Bonus gauge function
