# Extract negative values

Extracts rows containing negative values and inserts them into a new sheet.

```ts
(function () {
  let onlyNegative;

  //Leave one option ucommented
  onlyNegative = true; //Leave uncommented if you wish to copy only the rows that contain nothing but negative values
  // onlyNegative = false; //Leave uncommented if you wish to copy all of the rows that have at least one negative value

  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetUsedRange();
  let data = range.GetValue();

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;

  let hasNegative = false;
  let rowIndexes = [];
  let negativeRowsData = [];
  let nonEmptyValues;
  let negativeQuantity = 0;

  for (let i = 0; i < data.length; i++) {
    nonEmptyValues = data[0].length;

    for (let j = 0; j < data[0].length; j++) {
      //Checking if the data is a number
      if (
        !isNaN(
          parseFloat(
            worksheet.GetCells(firstColIndex + i, firstRowIndex + j).GetValue()
          )
        )
      ) {
        //If it is a number, check if it's a negative number
        if (
          parseFloat(
            worksheet.GetCells(firstColIndex + i, firstRowIndex + j).GetValue()
          ) <= -1
        ) {
          //In case we want rows with ONLY negative numbers, we just increment the quantity
          if (onlyNegative) {
            negativeQuantity++;

            //If we want rows with at least one negative value, we just set hasNegative to true
          } else {
            hasNegative = true;
          }
        }
      }

      //In case we come across an empty cell, we don't want that cell to be the reason that row is not considered "All negative"
      // That is why we use nonEmptyValues as a variable to compare against negativeQuantity later
      if (
        worksheet.GetCells(firstColIndex + i, firstRowIndex + j).GetValue() ==
        ""
      ) {
        nonEmptyValues--;
      }
    }

    // All values must be negative -> We check if the number of negative values equals the number of non-empty values
    // And we also check if there are any negative values at all (otherwise, we might copy completely empty rows)
    if (onlyNegative) {
      if (negativeQuantity == nonEmptyValues && negativeQuantity > 0) {
        rowIndexes.push(i);
      }

      // At least one negative value -> If the previous row had any negative data, hasNegative will be true, and we add that row index to the rowIndexes list
    } else {
      if (hasNegative) {
        rowIndexes.push(i);
      }
    }

    hasNegative = false;
    negativeQuantity = 0;
  }

  for (let i = 0; i < data.length; i++) {
    //If the current row is one of those that has negative values, we begin the iteration so we can store it's values (copy them)
    if (rowIndexes.includes(i)) {
      let rowData = [];
      for (let j = 0; j < data[0].length; j++) {
        rowData.push(
          worksheet.GetCells(firstColIndex + i, firstRowIndex + j).GetValue()
        );
      }

      //We push the whole column that contained the negative data into the negativeRowsData list
      negativeRowsData.push(rowData);
    }
  }

  //Creating a new worksheet
  Api.AddSheet("Negative_Rows");

  let sheetNegative = Api.GetSheet("Negative_Rows");

  //Using negativeRowsData, we populate the new worksheet with the rows
  for (let i = 0; i < negativeRowsData.length; i++) {
    for (let j = 0; j < negativeRowsData[0].length; j++) {
      sheetNegative.GetCells(i + 1, j + 1).SetValue(negativeRowsData[i][j]);
    }
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [Clear](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Clear.md), [AddSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/AddSheet.md), [GetSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![ExtractNegativeValues](/assets/images/plugins/extract-negative-values.png#gh-light-mode-only)
![ExtractNegativeValues](/assets/images/plugins/extract-negative-values.dark.png#gh-dark-mode-only)
