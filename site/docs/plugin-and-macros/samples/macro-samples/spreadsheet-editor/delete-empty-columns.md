# Delete empty columns

Deletes columns that do not contain any data.

```ts
(function () {
  let hasHeader;

  //Leave one option uncommented
  hasHeader = 0; //Leave this uncommented if your data has headers
  //hasHeader = 1; //Leave this uncommented if your data does not have headers

  let worksheet = Api.GetActiveSheet();
  let range = worksheet.GetUsedRange();
  let data = range.GetValue();

  if (!data) {
    return;
  }

  let firstRowIndex = range.GetCells().Row;
  let firstColIndex = range.GetCells().Col;
  let lastRowIndex = data.length + firstRowIndex;

  let emptyCells;
  let emptyIndex = [];

  for (let i = 0; i < data[0].length; i++) {
    emptyCells = 0;
    for (let j = 0; j < data.length; j++) {
      if (
        !worksheet.GetCells(firstColIndex + j, firstRowIndex + i).GetValue()
      ) {
        emptyCells++;
      }
    }
    //If the whole column is empty, add the index of that column to the emptyIndex list
    if (emptyCells >= lastRowIndex - 1 - hasHeader) {
      emptyIndex.unshift(i);
    }
  }

  let deleteRange;
  let deleteEndRange;

  for (let i = 0; i < emptyIndex.length; i++) {
    //We take the first cell of the column that we want to delete
    deleteRange = worksheet.GetRangeByNumber(
      0,
      emptyIndex[i],
      lastRowIndex - 1,
      emptyIndex[i]
    );

    //We take the address of that cell so we get it in the form of $D$4
    let rawRange = deleteRange.Address;

    //Then, we extract the part between the two dollar signs, and we are left with a list containing only D instead of $D$4
    let extractedRange = rawRange.match(/\$(.*?)\$/);

    //Now we select the whole column with GetRange("D:D")
    deleteEndRange = worksheet.GetRange(
      extractedRange[1] + `:` + extractedRange[1]
    );

    //We delete that column, and everything to the right of it moves 1 column to the left
    deleteEndRange.Delete();
  }
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCells.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Delete](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Delete.md)

## Result

![DeleteEmptyColumns](/assets/images/plugins/delete-empty-columns.png#gh-light-mode-only)
![DeleteEmptyColumns](/assets/images/plugins/delete-empty-columns.dark.png#gh-dark-mode-only)
