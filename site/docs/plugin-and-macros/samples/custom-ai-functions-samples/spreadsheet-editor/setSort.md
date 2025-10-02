# setSort

This function sorts a given range (or the active/selected range) by up to three columns, using either cell references, column indices, named ranges, or column headers. Supports ascending/descending order and optional header detection.

## Prompts

- Sort cells A1:D10 by the first column ascending
- Sort the table by Column1 ascending
- Sort by the second column descending
- Sort A1:D10 by Column1 ascending, then by Column2 descending
- Sort the selected range by the first column

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "setSort";
func.params = [
    "range (string, optional): cell range to sort (e.g., 'A1:D10'). If omitted, uses active/selected range",
    "key1 (string|ApiRange|number, optional): first sort field - range, named range reference, or column index within range (1-based)",
    "key1Name (string, optional): first sort field column name/header (e.g., 'Name', 'Age'). Will automatically find the column number",
    "sortOrder1 (string, optional): sort order for key1 - 'xlAscending' or 'xlDescending' (default: 'xlAscending')",
    "key2 (string|ApiRange|number, optional): second sort field - range, named range reference, or column index within range (1-based)",
    "key2Name (string, optional): second sort field column name/header (e.g., 'Name', 'Age'). Will automatically find the column number",
    "sortOrder2 (string, optional): sort order for key2 - 'xlAscending' or 'xlDescending'",
    "key3 (string|ApiRange|number, optional): third sort field - range, named range reference, or column index within range (1-based)",
    "key3Name (string, optional): third sort field column name/header (e.g., 'Name', 'Age'). Will automatically find the column number",
    "sortOrder3 (string, optional): sort order for key3 - 'xlAscending' or 'xlDescending'",
    "header (string, optional): specifies if first row contains headers - 'xlYes' or 'xlNo' (default: 'xlNo')"
];

func.examples = [
    "To sort range A1:D10 by first column in ascending order, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": \"A1\", \"sortOrder1\": \"xlAscending\"}",

    "To sort active range by first column with headers, respond:" +
    "[functionCalling (setSort)]: {\"key1\": \"A1\", \"header\": \"xlYes\"}",

    "To sort range by multiple columns (first ascending, second descending), respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": \"A1\", \"sortOrder1\": \"xlAscending\", \"key2\": \"B1\", \"sortOrder2\": \"xlDescending\"}",

    "To sort range by three columns, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": \"A1\", \"sortOrder1\": \"xlAscending\", \"key2\": \"B1\", \"sortOrder2\": \"xlDescending\", \"key3\": \"C1\", \"sortOrder3\": \"xlAscending\"}",

    "To sort range by rows instead of columns, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": \"A1\", \"orientation\": \"xlSortRows\"}",

    "To sort range with headers by second column descending, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": \"B1\", \"sortOrder1\": \"xlDescending\", \"header\": \"xlYes\"}",

    "To sort active range by named range key, respond:" +
    "[functionCalling (setSort)]: {\"key1\": \"MyRange\", \"sortOrder1\": \"xlAscending\"}",

    "To sort range by column index (1st column), respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": 1, \"sortOrder1\": \"xlAscending\"}",

    "To sort range by multiple column indices (1st ascending, 3rd descending), respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1\": 1, \"sortOrder1\": \"xlAscending\", \"key2\": 3, \"sortOrder2\": \"xlDescending\"}",

    "To sort active range by second column index with headers, respond:" +
    "[functionCalling (setSort)]: {\"key1\": 2, \"sortOrder1\": \"xlAscending\", \"header\": \"xlYes\"}",

    "To sort by column name 'Name' in ascending order, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1Name\": \"Name\", \"sortOrder1\": \"xlAscending\", \"header\": \"xlYes\"}",

    "To sort by multiple column names (Name ascending, Age descending), respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1Name\": \"Name\", \"sortOrder1\": \"xlAscending\", \"key2Name\": \"Age\", \"sortOrder2\": \"xlDescending\", \"header\": \"xlYes\"}",

    "To sort active range by column name 'Price' descending with headers, respond:" +
    "[functionCalling (setSort)]: {\"key1Name\": \"Price\", \"sortOrder1\": \"xlDescending\", \"header\": \"xlYes\"}",

    "To sort by three column names, respond:" +
    "[functionCalling (setSort)]: {\"range\": \"A1:D10\", \"key1Name\": \"Category\", \"sortOrder1\": \"xlAscending\", \"key2Name\": \"Price\", \"sortOrder2\": \"xlDescending\", \"key3Name\": \"Date\", \"sortOrder3\": \"xlAscending\", \"header\": \"xlYes\"}",

    "When user requests sorting by column name (e.g., 'sort by column X', 'order by field Y'), respond:" +
    "[functionCalling (setSort)]: {\"key1Name\": \"[extracted_column_name]\", \"sortOrder1\": \"xlAscending\", \"header\": \"xlYes\"}",

    "For sorting by specific column names in any case/format, respond:" +
    "[functionCalling (setSort)]: {\"key1Name\": \"[column_name_from_request]\", \"header\": \"xlYes\"}",

    "To sort data by any column header mentioned in user request, respond:" +
    "[functionCalling (setSort)]: {\"key1Name\": \"[header_name_from_user]\", \"sortOrder1\": \"[xlAscending_or_xlDescending]\", \"header\": \"xlYes\"}"
];
```

### Parameters

| Name       | Type                         | Example        | Description                                                                                                                  |
|------------|------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------|
| range      | string                       | "A1:D10"       | The cell range to sort. If omitted, the active or selected range is used.                                                    |
| key1       | string \| ApiRange \| number | "A1"           | The first sort field can be specified as a range, a named range reference, or a column index within the range (1-based).     |
| key1Name   | string                       | "Name"         | The column name or header of the first sort field, which will be automatically resolved to the corresponding column number.  |
| sortOrder1 | string                       | "xlAscending"  | The sort order for the first sort field can be "xlAscending" or "xlDescending". The default value is "xlAscending".          |
| key2       | string \| ApiRange \| number | "C3"           | The second sort field can be specified as a range, a named range reference, or a column index within the range (1-based).    |
| key2Name   | string                       | "Age"          | The column name or header of the second sort field, which will be automatically resolved to the corresponding column number. |
| sortOrder2 | string                       | "xlDescending" | The sort order for the second sort field can be "xlAscending" or "xlDescending". The default value is "xlAscending".         |
| key3       | string \| ApiRange \| number | "D5"           | The third sort field can be specified as a range, a named range reference, or a column index within the range (1-based).     |
| key3Name   | string                       | "Country"      | The column name or header of the third sort field, which will be automatically resolved to the corresponding column number.  |
| sortOrder3 | string                       | "xlDescending" | The sort order for the third sort field can be "xlAscending" or "xlDescending". The default value is "xlAscending".          |
| header     | string                       | "xlNo"         | Specifies whether the first row contains headers: "xlYes" or "xlNo". The default value is "xlNo".                            |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.range = params.range;
    Asc.scope.key1 = params.key1;
    Asc.scope.key1Name = params.key1Name;
    Asc.scope.sortOrder1 = params.sortOrder1 || "xlAscending";
    Asc.scope.key2 = params.key2;
    Asc.scope.key2Name = params.key2Name;
    Asc.scope.sortOrder2 = params.sortOrder2;
    Asc.scope.key3 = params.key3;
    Asc.scope.key3Name = params.key3Name;
    Asc.scope.sortOrder3 = params.sortOrder3;
    Asc.scope.header = params.header || "xlNo";

    async function findColumnByName(fieldName) {
        if (!fieldName) return null;

        let insertRes = await Asc.Editor.callCommand(function(){
            let ws = Api.GetActiveSheet();
            let _range;

            if (!Asc.scope.range) {
                _range = Api.GetSelection();
            } else {
                _range = ws.GetRange(Asc.scope.range);
            }

            return _range.GetValue2();
        });

        let csv = insertRes.map(function(item){
            return item.map(function(value) {
                if (value == null) return '';
                const str = String(value);
                if (str.includes(',') || str.includes('\n') || str.includes('\r') || str.includes('"')) {
                    return '"' + str.replace(/"/g, '""') + '"';
                }
                return str;
            }).join(',');
        }).join('\n');

        let argPromt = "Find column index for header '" + fieldName + "' in the following CSV data.\n\n" +
        "IMPORTANT RULES:\n" +
        "1. Return ONLY a single number (column index starting from 1). No text, no explanations, no additional characters.\n" +
        "2. Find EXACT match first. If exact match exists, return its index.\n" +
        "3. If no exact match, then look for partial matches.\n" +
        "4. Case-insensitive comparison allowed.\n" +
        "5. Data is CSV format (comma-separated). Look ONLY at the first row (header row).\n" +
        "6. Count positions carefully: each comma marks a column boundary.\n" +
        "7. Example: if searching for 'test2' and headers are 'test1,test2,test', return 2 (not 1 or 3).\n" +
        "8. If the header is in the 3rd column, return only: 3\n\n" +
        "CSV data:\n" + csv;
        
        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine)
            return null;

        let isSendedEndLongAction = false;
        async function checkEndAction() {
            if (!isSendedEndLongAction) {
                await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
                isSendedEndLongAction = true
            }
        }

        await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
            if (!data)
                return;
            await checkEndAction();
        });

        await checkEndAction();
        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
        return result - 0;
    }

    if (Asc.scope.key1Name && !Asc.scope.key1) {
        Asc.scope.key1 = await findColumnByName(Asc.scope.key1Name);
    }
    if (Asc.scope.key2Name && !Asc.scope.key2) {
        Asc.scope.key2 = await findColumnByName(Asc.scope.key2Name);
    }
    if (Asc.scope.key3Name && !Asc.scope.key3) {
        Asc.scope.key3 = await findColumnByName(Asc.scope.key3Name);
    }

    await Asc.Editor.callCommand(function(){
        let ws = Api.GetActiveSheet();
        let range;

        if (!Asc.scope.range) {
            range = Api.GetSelection();
        } else {
            range = ws.GetRange(Asc.scope.range);
        }

        if (!range) {
            return;
        }

        if (Asc.scope.header === "xlYes") {
            range.SetOffset(1, 0);
        }

        let key1 = null, key2 = null, key3 = null;

        function adjustSortKey(keyValue) {
            if (!keyValue) return null;

            if (typeof keyValue === 'number') {
                return ws.GetCells(range.GetRow(), range.GetCol() + keyValue - 1);
            } else if (typeof keyValue === 'string') {
                try {
                    let keyRange = ws.GetRange(keyValue);
                    return keyRange || keyValue;
                } catch {
                    return keyValue;
                }
            } else {
                return keyValue;
            }
        }

        key1 = adjustSortKey(Asc.scope.key1);
        key2 = adjustSortKey(Asc.scope.key2);
        key3 = adjustSortKey(Asc.scope.key3);

        range.SetSort(
            key1,
            Asc.scope.sortOrder1,
            key2,
            Asc.scope.sortOrder2,
            key3,
            Asc.scope.sortOrder3,
            Asc.scope.header
        );
    });
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue2](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [SetOffset](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetOffset.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetCol](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCol.md), [SetSort](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetSort.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![setSort](/assets/images/plugins/functions-gifs/set-sort-function.gif#gh-light-mode-only)
![setSort](/assets/images/plugins/functions-gifs/set-sort-function.dark.gif#gh-dark-mode-only)
