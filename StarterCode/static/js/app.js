// 1. Use the D3 library to read the URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

d3.json(url).then((data)=>console.log(data));

// ----------------------------------------------------------------
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    
// function barChart(){
//     // Create dropdow menu
//     let dropdownMenu = d3.select('#selDataset'); 

//     // Assign the data
//     d3.json(url).then((importedData)=> {
//         let data=importedData;
//     });

//     console.log(data)
    // // Use sample_values as the values for the bar chart.
    // let sample_values = Object.values(data.samples)

    // // Use otu_ids as the labels for the bar chart.
    // let otu_ids = Object.keys(data.names)

    // // Use otu_labels as the hovertext for the chart.
    // let otu_labels = Object.keys(data.names)

    // Plotly.newPlot('bar', data)
// };

// ----------------------------------------------------------------
// 3. Create a bubble chart that displays each sample.

// Use otu_ids for the x values.

// Use sample_values for the y values.

// Use sample_values for the marker size.

// Use otu_ids for the marker colors.

// Use otu_labels for the text values.

// ----------------------------------------------------------------
// 4. Display the sample metadata, i.e., an individual's demographic information.


// ----------------------------------------------------------------
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ----------------------------------------------------------------
// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:


// init();

	


 








