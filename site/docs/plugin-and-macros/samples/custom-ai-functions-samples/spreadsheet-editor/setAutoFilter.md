# setAutoFilter

This function applies or modifies an AutoFilter on a given cell range or the active selection.
Supports filtering by column index or name, comparison operators, multiple values, colors, and advanced filter operators.

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "setAutoFilter";
func.params = [
    "range (string, optional): cell range to apply autofilter (e.g., 'A1:D10'). If omitted, uses active/selected range",
    "field (number, optional): field number for filtering (starting from 1, left-most field)",
    "fieldName (string, optional): column name/header for filtering (e.g., 'Name', 'Age'). Will automatically find the column number",
    "criteria1 (string|array|object, optional): filter criteria - string for operators (e.g., '>10'), array for multiple values (e.g., [1,2,3]), ApiColor object for color filters, or dynamic filter constant",
    "operator (string, optional): filter operator - 'xlAnd', 'xlOr', 'xlFilterValues', 'xlTop10Items', 'xlTop10Percent', 'xlBottom10Items', 'xlBottom10Percent', 'xlFilterCellColor', 'xlFilterFontColor', 'xlFilterDynamic'",
    "criteria2 (string, optional): second criteria for compound filters (used with xlAnd/xlOr operators)",
    "visibleDropDown (boolean, optional): show/hide filter dropdown arrow (default: true)"
];

func.examples = [
    "If you need to apply autofilter to range A1:D10, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\"}",

    "To apply autofilter to active/selected range, respond:" +
    "[functionCalling (setAutoFilter)]: {}",

    "To filter column 1 for values greater than 10, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": \">10\"}",

    "To filter by column name 'Name' for specific values, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"fieldName\": \"Name\", \"criteria1\": [\"John\", \"Jane\"], \"operator\": \"xlFilterValues\"}",

    "To filter by column header 'Age' for values greater than 18, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"fieldName\": \"Age\", \"criteria1\": \">18\"}",

    "To filter column 2 for specific values [2,5,8], respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 2, \"criteria1\": [2,5,8], \"operator\": \"xlFilterValues\"}",

    "To filter column 1 for top 10 items, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": \"10\", \"operator\": \"xlTop10Items\"}",

    "To create compound filter (>5 OR <2), respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": \">5\", \"operator\": \"xlOr\", \"criteria2\": \"<2\"}",

    "To filter by cell background color (yellow), respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": {\"r\": 255, \"g\": 255, \"b\": 0}, \"operator\": \"xlFilterCellColor\"}",

    "To filter by font color (red), respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": {\"r\": 255, \"g\": 0, \"b\": 0}, \"operator\": \"xlFilterFontColor\"}",

    "To filter active range for values greater than 5, respond:" +
    "[functionCalling (setAutoFilter)]: {\"field\": 1, \"criteria1\": \">5\"}",

    "To filter active range by column name 'Price' for values less than 100, respond:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"Price\", \"criteria1\": \"<100\"}",

    "When user requests filtering by column name with comparison operators (e.g., 'filter more than X by column Y', 'show values greater than Z in field W'), respond:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[extracted_column_name]\", \"criteria1\": \"[operator][value]\"}",

    "For filtering by column names with numeric criteria (e.g., 'values > 10', 'less than 50', 'equal to 25'), respond:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[column_name_from_request]\", \"criteria1\": \"[comparison_operator][numeric_value]\"}",

    "To filter by any column header with comparison operators mentioned in user request, respond:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[header_name_from_user]\", \"criteria1\": \"[operator_and_value_from_request]\"}",

    "When user requests filtering with 'more than', 'greater than', 'above' use '>' operator:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[column_name]\", \"criteria1\": \">[value]\"}",

    "When user requests filtering with 'less than', 'below', 'under' use '<' operator:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[column_name]\", \"criteria1\": \"<[value]\"}",

    "When user requests filtering with 'equal to', 'equals', 'exactly' use '=' operator:" +
    "[functionCalling (setAutoFilter)]: {\"fieldName\": \"[column_name]\", \"criteria1\": \"=[value]\"}",

    "To remove autofilter from range, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": null}",

    "To clear filter from specific column, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D10\", \"field\": 1, \"criteria1\": null}",

    "To filter range A1:D8 by yellow color, respond:" +
    "[functionCalling (setAutoFilter)]: {\"range\": \"A1:D8\", \"fieldName\": \"color\", \"criteria1\": {\"r\": 255, \"g\": 255, \"b\": 0}, \"operator\": \"xlFilterCellColor\"}"
];
```

### Parameters

| Name            | Type                      | Example          | Description                                                                                                                                                                                                                        |
|-----------------|---------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range           | string                    | "A1:D10"         | The cell range to apply the autofilter. If omitted, the active or selected range is used.                                                                                                                                          |
| field           | number                    | 1                | The field number used for filtering, where numbering starts at 1 from the left-most column.                                                                                                                                        |
| fieldName       | string                    | "Price"          | The column name/header used for filtering (e.g., "Name", "Age"). The function automatically maps it to the correct column index.                                                                                                   |
| criteria1       | string \| array \| object | ">18"            | The filter criteria. Can be: string for operators (e.g., ">10"), array for multiple values (e.g., \[1,2,3]), [ApiColor](/docs/office-api/usage-api/spreadsheet-api/ApiColor) object for color filters, or dynamic filter constant. |
| operator        | string                    | "xlFilterValues" | The filter operator. Can be: "xlAnd", "xlOr", "xlFilterValues", "xlTop10Items", "xlTop10Percent", "xlBottom10Items", "xlBottom10Percent", "xlFilterCellColor", "xlFilterFontColor", "xlFilterDynamic".                             |
| criteria2       | string                    | "\<2"            | The second filter criteria, used with "xlAnd" or "xlOr" operators for compound filters.                                                                                                                                            |
| visibleDropDown | boolean                   | true             | Specifies whether to show the filter dropdown arrow. The default value is "true".                                                                                                                                                  |

### Prompts

- Apply autofilter to range A1:D10
- Apply filter to the selected cells
- Filter column 4 for values greater than 10
- Show rows where Column1 is greater than 17
- Show top 3 items in column 4
- Show rows where column 4 is greater than 15 or less than 5

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.range = params.range;
    Asc.scope.field = params.field;
    Asc.scope.fieldName = params.fieldName;
    Asc.scope.criteria1 = params.criteria1;
    Asc.scope.operator = params.operator;
    Asc.scope.criteria2 = params.criteria2;
    Asc.scope.visibleDropDown = params.visibleDropDown;

    if (Asc.scope.fieldName && !Asc.scope.field) {
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

        let argPromt = "Find column index for header '" + Asc.scope.fieldName + "' in the following CSV data.\n\n" +
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
            return;

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
        Asc.scope.field = result;
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

        let field = Asc.scope.field;
        if (!field) {
            field = 1;
        }

        let criteria1 = Asc.scope.criteria1;
        if (Asc.scope.operator === "xlFilterCellColor" || Asc.scope.operator === "xlFilterFontColor") {
            if (criteria1 && typeof criteria1 === 'object' && criteria1.r !== undefined && criteria1.g !== undefined && criteria1.b !== undefined) {
                criteria1 = Api.CreateColorFromRGB(criteria1.r, criteria1.g, criteria1.b);
            }
        }

        range.SetAutoFilter(
            field,
            criteria1,
            Asc.scope.operator,
            Asc.scope.criteria2,
            Asc.scope.visibleDropDown
        );
    });
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue2](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [CreateColorFromRGB](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetAutoFilter](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAutoFilter.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![setAutoFilter function](/assets/images/plugins/set-auto-filter-function.png#gh-light-mode-only)
![setAutoFilter function](/assets/images/plugins/set-auto-filter-function.dark.png#gh-dark-mode-only)
![setAutoFilter result](/assets/images/plugins/set-auto-filter-result.png#gh-light-mode-only)
![setAutoFilter result](/assets/images/plugins/set-auto-filter-result.dark.png#gh-dark-mode-only)
