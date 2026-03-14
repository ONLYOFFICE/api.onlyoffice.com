# calculateValues

This function performs basic mathematical operations (addition, subtraction, multiplication, division, median, average) on selected cells or a specified range and writes the result to a specified cell or below the last used cell in the column.

## Prompts

- Calculate the sum of selected cells
- Calculate the sum of selected range and write in cell A12
- Subtract cell A5 from cell B7 and write result in C10
- Divide cell C3 by cell D4
- Multiply selected cells
- Find median of selected cells
- Calculate average of range A1:A20 and write in D5

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "calculateValues",
  description:
    "Allows performing basic mathematical operations (addition, subtraction, multiplication, division, median, average) on selected cells or a specified range and writing the result to a specified cell or below the last used cell in the column.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "Cell range containing values to calculate (e.g., 'A1:A10'). Used for add, multiply, median, average operations",
      },
      targetCell: {
        type: "string",
        description:
          "Cell where to write the result (e.g., 'A12', 'B5'). If omitted, writes result beneath the last used cell in column A",
      },
      operation: {
        type: "string",
        description:
          "Mathematical operation to perform - 'add', 'subtract', 'multiply', 'divide', 'median', 'average'. Default: 'add'",
      },
      cell1: {
        type: "string",
        description: "First cell for subtract/divide operations (e.g., 'A5')",
      },
      cell2: {
        type: "string",
        description: "Second cell for subtract/divide operations (e.g., 'B7')",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Calculate the sum of selected cells",
      arguments: { operation: "add" },
    },
    {
      prompt: "Calculate the sum of selected range and write in cell A12",
      arguments: { targetCell: "A12", operation: "add" },
    },
    {
      prompt: "Subtract cell A5 from cell B7 and write result in C10",
      arguments: {
        cell1: "B7",
        cell2: "A5",
        targetCell: "C10",
        operation: "subtract",
      },
    },
    {
      prompt: "Divide cell C3 by cell D4",
      arguments: { cell1: "C3", cell2: "D4", operation: "divide" },
    },
    {
      prompt: "Multiply selected cells",
      arguments: { operation: "multiply" },
    },
    {
      prompt: "Find median of selected cells",
      arguments: { operation: "median" },
    },
    {
      prompt: "Calculate average of range A1:A20 and write in D5",
      arguments: {
        range: "A1:A20",
        targetCell: "D5",
        operation: "average",
      },
    },
  ],
});
```

### Parameters

| Name       | Type   | Example  | Description                                                                                                                |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| range      | string | "A1:A10" | Cell range containing values to calculate. Used for add, multiply, median, average operations. If omitted, uses selection. |
| targetCell | string | "A12"    | Cell where to write the result. If omitted, writes result beneath the last used cell in column A.                          |
| operation  | string | "add"    | Mathematical operation to perform: 'add', 'subtract', 'multiply', 'divide', 'median', 'average'. Default: 'add'.           |
| cell1      | string | "A5"     | First cell for subtract/divide operations.                                                                                 |
| cell2      | string | "B7"     | Second cell for subtract/divide operations.                                                                                |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.range = params.range;
  Asc.scope.targetCell = params.targetCell;
  Asc.scope.operation = params.operation || "add";
  Asc.scope.cell1 = params.cell1;
  Asc.scope.cell2 = params.cell2;

  await Asc.Editor.callCommand(function () {
    let ws = Api.GetActiveSheet();
    let result = 0;
    let operationLabel = "";

    // Handle subtract and divide operations with two specific cells
    if (
      (Asc.scope.operation.toLowerCase() === "subtract" ||
        Asc.scope.operation.toLowerCase() === "subtraction") &&
      Asc.scope.cell1 &&
      Asc.scope.cell2
    ) {
      let value1 = ws.GetRange(Asc.scope.cell1).GetValue();
      let value2 = ws.GetRange(Asc.scope.cell2).GetValue();

      let num1 = parseFloat(value1);
      let num2 = parseFloat(value2);

      if (!isNaN(num1) && !isNaN(num2)) {
        result = num1 - num2;
        operationLabel = "DIFFERENCE";
      } else {
        result = "ERROR: Invalid numbers";
        operationLabel = "";
      }
    } else if (
      (Asc.scope.operation.toLowerCase() === "divide" ||
        Asc.scope.operation.toLowerCase() === "division") &&
      Asc.scope.cell1 &&
      Asc.scope.cell2
    ) {
      let value1 = ws.GetRange(Asc.scope.cell1).GetValue();
      let value2 = ws.GetRange(Asc.scope.cell2).GetValue();

      let num1 = parseFloat(value1);
      let num2 = parseFloat(value2);

      if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
          result = num1 / num2;
          operationLabel = "QUOTIENT";
        } else {
          result = "DIV/0 ERROR";
          operationLabel = "";
        }
      } else {
        result = "ERROR: Invalid numbers";
        operationLabel = "";
      }
    } else {
      // Handle other operations (add, multiply, median, average) with range/selection
      let numbers = [];

      if (Asc.scope.range) {
        // User specified a range - process it normally
        let sourceRange = ws.GetRange(Asc.scope.range);
        let values = sourceRange.GetValue2();

        if (values && values.length > 0) {
          for (let i = 0; i < values.length; i++) {
            let row = values[i];
            if (Array.isArray(row)) {
              for (let j = 0; j < row.length; j++) {
                let value = row[j];
                if (value !== null && value !== undefined && value !== "") {
                  let numValue = parseFloat(value);
                  if (!isNaN(numValue)) {
                    numbers.push(numValue);
                  }
                }
              }
            } else {
              if (row !== null && row !== undefined && row !== "") {
                let numValue = parseFloat(row);
                if (!isNaN(numValue)) {
                  numbers.push(numValue);
                }
              }
            }
          }
        } else if (values !== null && values !== undefined) {
          if (values !== "") {
            let numValue = parseFloat(values);
            if (!isNaN(numValue)) {
              numbers.push(numValue);
            }
          }
        }
      } else {
        // Get selection - try to handle multi-area selections
        let selection = Api.GetSelection();
        let address = selection.GetAddress();

        // Check if address contains comma (indicates multiple areas like "B3:C4,E7")
        if (address.indexOf(",") !== -1) {
          // Multiple areas - split and process each
          let areas = address.split(",");
          for (let a = 0; a < areas.length; a++) {
            let areaAddress = areas[a].trim();
            let areaRange = ws.GetRange(areaAddress);
            let areaValues = areaRange.GetValue2();

            if (areaValues && Array.isArray(areaValues)) {
              for (let i = 0; i < areaValues.length; i++) {
                let row = areaValues[i];
                if (Array.isArray(row)) {
                  for (let j = 0; j < row.length; j++) {
                    let value = row[j];
                    if (value !== null && value !== undefined && value !== "") {
                      let numValue = parseFloat(value);
                      if (!isNaN(numValue)) {
                        numbers.push(numValue);
                      }
                    }
                  }
                } else {
                  if (row !== null && row !== undefined && row !== "") {
                    let numValue = parseFloat(row);
                    if (!isNaN(numValue)) {
                      numbers.push(numValue);
                    }
                  }
                }
              }
            } else if (
              areaValues !== null &&
              areaValues !== undefined &&
              areaValues !== ""
            ) {
              let numValue = parseFloat(areaValues);
              if (!isNaN(numValue)) {
                numbers.push(numValue);
              }
            }
          }
        } else {
          // Single contiguous area
          let values = selection.GetValue2();

          if (values && values.length > 0) {
            for (let i = 0; i < values.length; i++) {
              let row = values[i];
              if (Array.isArray(row)) {
                for (let j = 0; j < row.length; j++) {
                  let value = row[j];
                  if (value !== null && value !== undefined && value !== "") {
                    let numValue = parseFloat(value);
                    if (!isNaN(numValue)) {
                      numbers.push(numValue);
                    }
                  }
                }
              } else {
                if (row !== null && row !== undefined && row !== "") {
                  let numValue = parseFloat(row);
                  if (!isNaN(numValue)) {
                    numbers.push(numValue);
                  }
                }
              }
            }
          } else if (values !== null && values !== undefined) {
            if (values !== "") {
              let numValue = parseFloat(values);
              if (!isNaN(numValue)) {
                numbers.push(numValue);
              }
            }
          }
        }
      }

      // Perform the requested operation on the range
      if (numbers.length === 0) {
        result = 0;
        operationLabel = "NO DATA";
      } else {
        switch (Asc.scope.operation.toLowerCase()) {
          case "add":
          case "sum":
            result = numbers.reduce((acc, val) => acc + val, 0);
            operationLabel = "TOTAL";
            break;

          case "multiply":
          case "multiplication":
            result = numbers.reduce((acc, val) => acc * val, 1);
            operationLabel = "PRODUCT";
            break;

          case "median":
            let sorted = numbers.slice().sort((a, b) => a - b);
            let mid = Math.floor(sorted.length / 2);
            if (sorted.length % 2 === 0) {
              result = (sorted[mid - 1] + sorted[mid]) / 2;
            } else {
              result = sorted[mid];
            }
            operationLabel = "MEDIAN";
            break;

          case "average":
          case "mean":
            result =
              numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
            operationLabel = "AVERAGE";
            break;

          default:
            result = numbers.reduce((acc, val) => acc + val, 0);
            operationLabel = "TOTAL";
        }
      }
    }

    // Format the result value
    let resultValue = operationLabel ? operationLabel + ": " + result : result;

    // Determine where to write the result
    let targetCell;

    if (Asc.scope.targetCell) {
      targetCell = ws.GetRange(Asc.scope.targetCell);
    } else {
      let usedRange = ws.GetUsedRange();
      if (usedRange) {
        let address = usedRange.GetAddress();
        let matches = address.match(/:([A-Z]+)(\d+)$/);
        let lastRow;
        if (matches && matches[2]) {
          lastRow = parseInt(matches[2]) + 1;
        } else {
          lastRow = 2;
        }
        let targetAddress = "A" + lastRow;
        targetCell = ws.GetRange(targetAddress);
      } else {
        targetCell = ws.GetRange("A1");
      }
    }

    targetCell.SetValue(resultValue);
  });
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [GetValue2](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetAddress](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/calculateValues.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/calculateValues.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
