# Generate heatmap

Colors a table based on value density, with darker colors for higher numbers.

```ts
(function () {
  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetSelection();
  let data = range.GetValue();

  // Check if no data is selected and show a message if that's the case
  if (!data) {
    console.log("No data selected");
    return;
  }

  //Indexes indicating where the rows and columns start and end
  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;
  let lastColIndex = data[0].length + firstColIndex;

  console.log(firstColIndex + " " + lastColIndex); // Testing if we got the right column indexes; the first should be on the spot, the last should be higher by 1
  console.log(firstRowIndex + " " + lastRowIndex); // Testing if we got the right row indexes; the first should be on the spot, the last should be higher by 1

  let values = []; //We will store numbers from selected data here

  for (let i = firstColIndex; i < lastColIndex; i++) {
    for (let j = firstRowIndex; j < lastRowIndex; j++) {
      //We are checking if the value is a number
      //If it is, we store it in the values array
      if (!isNaN(parseFloat(worksheet.GetCells(j, i).GetValue()))) {
        let value = parseFloat(worksheet.GetCells(j, i).GetValue());
        values.push(worksheet.GetCells(j, i).GetValue());
      }
    }
  }

  //Storing minimum and maximum values from the values array
  let minValue = Math.min(...values);
  let maxValue = Math.max(...values);

  for (let i = firstColIndex; i < lastColIndex; i++) {
    for (let j = firstRowIndex; j < lastRowIndex; j++) {
      //Again we have to check if the value is a number
      //If it is, we create the color depending on that value
      //As well as the minimum and maximum value from the array
      if (!isNaN(parseFloat(worksheet.GetCells(j, i).GetValue()))) {
        let value = parseFloat(worksheet.GetCells(j, i).GetValue());
        let ratio = (value - minValue) / (maxValue - minValue);
        let red = Math.round(255 * ratio);
        let green = Math.round(255 * (1 - ratio));
        worksheet
          .GetCells(j, i)
          .SetFillColor(Api.CreateColorFromRGB(red, green, 0));
        //We want the colors to go from green to red
      }
    }
  }
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetSelection.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md)

## Result

![GenerateHeatmap](/assets/images/plugins/generate-heatmap.png#gh-light-mode-only)
![GenerateHeatmap](/assets/images/plugins/generate-heatmap.dark.png#gh-dark-mode-only)
