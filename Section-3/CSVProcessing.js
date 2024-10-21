/**
 * Section 3: Working with Libraries
Task 7: CSV Processing using Pandas
Load a CSV file in Colab using Python’s pandas library. Filter the rows where a specific column (e.g., 'Age') is greater than 25, and save the filtered result back to a new CSV file.
 */

const fs = require('fs');
const csv = require('csv-parser');
const results = [];

fs.createReadStream('input.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (parseInt(row.Age) > 25) {
        results.push(row);
    }
  })
  .on('end', () => {
    const filteredCSV = results.map(row => Object.values(row).join(',')).join('\n');
    fs.writeFileSync('filtered_output.csv', filteredCSV);
    console.log('Filtered CSV saved.');
  });
