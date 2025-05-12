import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import OnlyOfficeEditor from '@site/src/components/BrowserWindow/OnlyofficeEditor';

# Commenting spreadsheet errors

This script checks all used cells for formula errors like "#DIV/0!" and comments each error:

- open an existing spreadsheet file to check for errors;
- create a loop for columns and nest another loop for rows;
- get each cell ([ApiWorksheet/GetRangeByNumber](../spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md)) and check the value for errors;
- comment the cell ([ApiRange/AddComment](../spreadsheet-api/ApiRange/Methods/AddComment.md)) if an error exists.

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework/builder-framework-samples/builder-framework-samples.md) page.

``` ts editor-xlsx templateUrl=https://static.onlyoffice.com/assets/docs/samples/data_with_errors.xlsx
let worksheet = Api.GetActiveSheet();
let data = worksheet.GetRange("A:G").GetValue();
for (let row = 0; row < data.length; row += 1) {
  for (let column = 0; column < data[0].length; column += 1) {
    let cell = data[row][column];
    if (cell.indexOf("#") === 0) {
      let comment = `Error "${cell}"`;
      worksheet.GetRangeByNumber(row, column).AddComment(comment);
    }
  }
}
```
