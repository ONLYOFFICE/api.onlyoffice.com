# insertPivotTable

This function inserts a pivot table into the specified range or the currently selected range.
This function can be used to summarize, group, or aggregate data by rows and values.

## Prompts

- Insert a pivot table
- Group data by columns Column1 and Column2 using a pivot table
- Aggregate data by Column3 in a pivot table

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "insertPivotTable";
func.params = [
    "range (string, optional): cell range to apply autofilter (e.g., 'A1:D10'). If omitted, uses active/selected range",
    "columns (array, optional): array of column names to use for pivot rows (categorical/grouping)",
    "valueColumn (string, optional): column name to use for pivot values (numeric/aggregate)",
];

func.examples = [
    "Create or summarize the current selection with a pivot table."+
    "Use when the user requests a pivot table or asks to group/aggregate/analyze data(selection):\n" +
    "[functionCalling (insertPivotTable)]: {}",

    "If you need to insert pivot table to range A1:D10, respond:" +
    "[functionCalling (insertPivotTable)]: {\"range\": \"A1:D10\"}",

    "Create or summarize the current grouping columns with a pivot table."+
    "Use when the user requests a pivot table or asks to group/aggregate/analyze specific grouping columns:\n" +
    "[functionCalling (insertPivotTable)]: {\"columns\": [\"Column1\", \"Column2\"]}",

    "Create or summarize the numeric value columns with a pivot table."+
    "Use when the user requests a pivot table or asks to group/aggregate/analyze numeric value columns:\n" +
    "[functionCalling (insertPivotTable)]: {\"valueColumn\": \"Column3\"}"
];
```

### Parameters

| Name        | Type             | Example                | Description                                                                               |
|-------------|------------------|------------------------|-------------------------------------------------------------------------------------------|
| range       | string           | "A1:D10"               | The cell range to apply the autofilter. If omitted, the active or selected range is used. |
| columns     | array of strings | ["Column1", "Column2"] | An array of column names used for pivot rows (categorical/grouping).                      |
| valueColumn | string           | "Column3"              | The column name used for pivot values (numeric/aggregate).                                |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.range = params.range;
    const columns = params.columns || [];
    const valueColumn = params.valueColumn || "";
    Asc.scope.rowCountToLookup = 20;
    // Generate relevant sheet name based on user params (language-neutral)
    let nameParts = [];
    if (columns.length > 0) {
        nameParts = columns.slice(0, 2); // Max 2 for readability
    }
    if (valueColumn) {
        nameParts.push(valueColumn);
    }
    let newSheetName = nameParts.length > 0 ? nameParts.join('_') : 'Pivot Analysis';
    // Excel limit 31 (reserve space for uniqueness suffix)
    if (newSheetName.length > 28) {
        newSheetName = newSheetName.substring(0, 28);
    }
    Asc.scope.newSheetName = newSheetName;
    //insert pivot table
    let insertRes = await Asc.Editor.callCommand(function(){
        function limitRangeToRows(address, maxRows) {
            const digits = address.match(/\d+/g);
            if (!digits || digits.length < 2) {
                return address;
            }
            const startRow = parseInt(digits[0], 10);
            const endRow = parseInt(digits[1], 10);
            const currentRowCount = endRow - startRow + 1;
            if (currentRowCount <= maxRows) {
                return address;
            }
            const limitedEndRow = startRow + maxRows - 1;
            return address.replace(/\d+(?=\D*$)/, limitedEndRow.toString());
        }
        function createUniqueSheetName(newSheetName) {
            let sheets = Api.Sheets;
            let items = [];
            for (let i = 0; i < sheets.length; i++) {
                items.push(sheets[i].Name.toLowerCase());
            }
            if (items.indexOf(newSheetName.toLowerCase()) < 0) {
                return newSheetName;
            }
            let index = 0, name;
            while(++index < 1000) {
                name = newSheetName + '_'+ index;
                if (items.indexOf(name.toLowerCase()) < 0) break;
            }

            newSheetName = name;
            return newSheetName;
        }
        let pivotTable;
        if (Asc.scope.range) {
            let ws = Api.GetActiveSheet();
            let range = ws.GetRange(Asc.scope.range);
            pivotTable = Api.InsertPivotNewWorksheet(range, createUniqueSheetName(Asc.scope.newSheetName));
        } else {
            pivotTable = Api.InsertPivotNewWorksheet(undefined, createUniqueSheetName(Asc.scope.newSheetName));
        }
        let wsSource = pivotTable.Source.Worksheet;
        let addressSource = pivotTable.Source.Address;
        // Apply row limitation
        addressSource = limitRangeToRows(addressSource, Asc.scope.rowCountToLookup);
        let rangeSource = wsSource.GetRange(addressSource);
        return [pivotTable.GetParent().Name, pivotTable.TableRange1.Address, rangeSource.GetValue2()];
    });

    //make csv from source data
    let colsMaxIndex = 0;
    let sheetName = insertRes[0];
    let address = insertRes[1];
    let csv = insertRes[2].map(function(item){
        return item.map(function(value) {
            if (value == null) return '';
            colsMaxIndex = value.length;
            const str = String(value);
            if (str.includes(',') || str.includes('\n') || str.includes('\r') || str.includes('"')) {
                return '"' + str.replace(/"/g, '""') + '"';
            }
            return str;
        }).join(',');
    }).join('\n');

    //make ai request for indices to aggregate
    const argPrompt = [
        "You are a data analyst.",
        "Input is CSV (comma-separated, ','). Can contain empty cells. Columns are zero-based from 0 to " + colsMaxIndex + ".",
        "Rules:",
        "1. Column selection priority:",
        "   a) If mandatory grouping columns are specified and found: use ONLY those matched columns as pivot rows.",
        "   b) If no mandatory columns or none found: choose 1–2 best column indices for pivot rows (categorical/grouping).",
        "2. For automatic column selection (when no mandatory columns found):",
        "   a) Contain textual (non-numeric) data.",
        "   b) Prefer columns with at least 2 distinct values.",
        "   c) Prefer columns that have at least one repeated value (i.e., not all values are unique and not all identical).",
        "   If no column fully satisfies these preferences, pick the best available textual option.",
        "3. Mandatory grouping columns: " + columns.join(', ') + " (comma-separated header names).",
        "   - Use approximate (fuzzy) matching against header cells: case-insensitive, ignore spaces/punctuation.",
        "   - If multiple headers match the same required name, pick the one with the highest similarity (tie-breaker: lowest index).",
        "   - IMPORTANT: If any mandatory columns are matched, use ONLY those matched columns. Do NOT add additional columns.",
        "4. Choose exactly 1 column index for pivot values (numeric/aggregate). Prefer a numeric column; otherwise pick one that can be meaningfully aggregated.",
        "5. Mandatory value column (combined with selection of the data index): " + valueColumn + " (single header name, can be empty).",
        "   - Use the same fuzzy matching rules (case-insensitive, ignore spaces/punctuation).",
        "   - If found, use its index as the ONLY pivot value column.",
        "   - Fallback: If no acceptable match is found, choose the best available numeric column (or the most aggregatable one) as the value column.",
        "   - If a fallback is used, still follow all output rules (numbers only, correct braces).",
        "6. Ordering rule: Within the rows list and within the columns list, place indices in descending order of “grouping potential” (more suitable for grouping first). Use ascending numeric order only to break ties.",
        "   Definition of “grouping potential”: medium-to-high cardinality (not all identical, not all unique), well-distributed categories, likely to produce useful pivot groups.",
        "7. The answer MUST start with '{' and end with '}'. Missing braces = invalid.",
        "8. No extra text, spaces, or newlines.",
        "9. Output ONLY numbers, no labels like 'rows:' or 'data:'.",
        "Output format examples:",
        "- Single row field: {1|3} (row index 1, data index 3)",
        "- Two row fields: {2,0|4} (row indices 2,0, data index 4)",
        "Do NOT output: {rows:1|data:2} - this is wrong!",
        "DO output: {1|2} - this is correct!",
        "CSV:",
        csv
        ].join('\n');

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;

    let isSendedEndLongAction = false;
    async function checkEndAction() {
        if (!isSendedEndLongAction) {
            await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            isSendedEndLongAction = true;
        }
    }

    await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    let aiResult = await requestEngine.chatRequest(argPrompt, false, async function(data) {
        if (!data)
            return;
    });
    await checkEndAction();
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);

    //Parse AI result
    function parseAIResult(result) {
        const matches = result.match(/\{([^}]+)\}/g);
        if (!matches) return null;

        let content = null;
        for (let i = 0; i < matches.length; i++) {
            const bracesContent = matches[i].slice(1, -1);
            if (/\d/.test(bracesContent)) { // Check if contains any digit
                content = bracesContent;
                break;
            }
        }

        if (!content) return null;

        const sections = content.split('|');
        if (sections.length !== 2) return null;

        const rowMatches = sections[0].match(/\d+/g) || [];
        const rowIndices = rowMatches.map(s => parseInt(s, 10)).filter(n => !isNaN(n));

        const dataMatches = sections[1].match(/\d+/g) || [];
        const dataIndex = dataMatches.length > 0 ? parseInt(dataMatches[0], 10) : NaN;

        if (rowIndices.length === 0 || isNaN(dataIndex)) return null;
        return {
            rowIndices,
            colIndices: [],
            dataIndex
        };
    }
    Asc.scope.address = address;
    Asc.scope.sheetName = sheetName;
    Asc.scope.parsedResult = parseAIResult(aiResult);
    if (Asc.scope.parsedResult) {
        //add pivot fields and data values
        await Asc.Editor.callCommand(function() {
            let ws = Api.GetSheet(Asc.scope.sheetName);
            if (!ws) {
                return;
            }
            let range = ws.GetRange(Asc.scope.address);
            let pivotTable = range.PivotTable;
            if (pivotTable) {
                let pivotFields = pivotTable.GetPivotFields();
                const parsedResult = Asc.scope.parsedResult;
                const rowNames = [];
                for (let i = 0; i < parsedResult.rowIndices.length; i++) {
                    const rowIndex = parsedResult.rowIndices[i];
                    if (rowIndex < pivotFields.length) {
                        rowNames.push(pivotFields[rowIndex].GetName());
                    }
                }
                const colNames = [];
                for (let j = 0; j < parsedResult.colIndices.length; j++) {
                    const colIndex = parsedResult.colIndices[j];
                    if (colIndex < pivotFields.length) {
                        colNames.push(pivotFields[colIndex].GetName());
                    }
                }
                let dataName = "";
                if (parsedResult.dataIndex < pivotFields.length) {
                    dataName = pivotFields[parsedResult.dataIndex].GetName();
                }

                if (rowNames.length > 0 || colNames.length > 0) {
                    pivotTable.AddFields({rows: rowNames, columns: colNames});
                }

                if (dataName) {
                    pivotTable.AddDataField(dataName);
                }
            }
        });
    }
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [InsertPivotNewWorksheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/InsertPivotNewWorksheet.md), [GetParent](/docs/office-api/usage-api/spreadsheet-api/ApiPivotTable/Methods/GetParent.md), [GetValue2](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [GetSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSheet.md), [GetPivotFields](/docs/office-api/usage-api/spreadsheet-api/ApiPivotTable/Methods/GetPivotFields.md), [GetName](/docs/office-api/usage-api/spreadsheet-api/ApiPivotField/Methods/GetName.md), [AddFields](/docs/office-api/usage-api/spreadsheet-api/ApiPivotTable/Methods/AddFields.md), [AddDataField](/docs/office-api/usage-api/spreadsheet-api/ApiPivotTable/Methods/AddDataField.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/insertPivotTable.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/insertPivotTable.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
