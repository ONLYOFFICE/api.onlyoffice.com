# setAutoFilter

This function applies or modifies an AutoFilter on a given cell range or the active selection.
Supports filtering by column index or name, comparison operators, multiple values, colors, and advanced filter operators.

## Prompts

- Apply autofilter to range A1:D10
- Apply filter to the selected cells
- Filter column 4 for values greater than 10
- Show rows where Column1 is greater than 17
- Show top 3 items in column 4
- Show rows where column 4 is greater than 15 or less than 5

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "setAutoFilter",
  description:
    "Applies autofilter to a data range, enabling dropdown filters on column headers. Supports filtering by column number or column name (with fuzzy matching). Offers multiple filter types: value comparison operators (greater than, less than, equals), multiple value selection, top/bottom N items or percentage, color-based filtering (cell background or font color), and dynamic filters. Can be used to filter active selection or specific ranges.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "Cell range to apply autofilter (e.g., 'A1:D10'). If omitted, uses active/selected range.",
      },
      field: {
        type: "number",
        description:
          "Field number for filtering (starting from 1, left-most field).",
      },
      fieldName: {
        type: "string",
        description:
          "Column name/header for filtering (e.g., 'Name', 'Age'). Will automatically find the column number.",
      },
      criteria1: {
        type: ["string", "array", "object"],
        description:
          "Filter criteria - string for operators (e.g., '>10'), array for multiple values (e.g., [1,2,3]), ApiColor object for color filters, or dynamic filter constant.",
      },
      operator: {
        type: "string",
        description: "Filter operator.",
        enum: [
          "xlAnd",
          "xlOr",
          "xlFilterValues",
          "xlTop10Items",
          "xlTop10Percent",
          "xlBottom10Items",
          "xlBottom10Percent",
          "xlFilterCellColor",
          "xlFilterFontColor",
          "xlFilterDynamic",
        ],
      },
      criteria2: {
        type: "string",
        description:
          "Second criteria for compound filters (used with xlAnd/xlOr operators).",
      },
      visibleDropDown: {
        type: "boolean",
        description: "Show/hide filter dropdown arrow (default: true).",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Apply autofilter to range A1:D10",
      arguments: { range: "A1:D10" },
    },
    {
      prompt: "Apply autofilter to active/selected range",
      arguments: {},
    },
    {
      prompt: "Filter column 1 for values greater than 10",
      arguments: { range: "A1:D10", field: 1, criteria1: ">10" },
    },
    {
      prompt: "Filter by column name 'Name' for specific values",
      arguments: {
        range: "A1:D10",
        fieldName: "Name",
        criteria1: ["John", "Jane"],
        operator: "xlFilterValues",
      },
    },
    {
      prompt: "Filter by column header 'Age' for values greater than 18",
      arguments: { range: "A1:D10", fieldName: "Age", criteria1: ">18" },
    },
    {
      prompt: "Filter column 2 for specific values [2,5,8]",
      arguments: {
        range: "A1:D10",
        field: 2,
        criteria1: [2, 5, 8],
        operator: "xlFilterValues",
      },
    },
    {
      prompt: "Filter column 1 for top 10 items",
      arguments: {
        range: "A1:D10",
        field: 1,
        criteria1: "10",
        operator: "xlTop10Items",
      },
    },
    {
      prompt: "Create compound filter (>5 OR <2)",
      arguments: {
        range: "A1:D10",
        field: 1,
        criteria1: ">5",
        operator: "xlOr",
        criteria2: "<2",
      },
    },
    {
      prompt: "Filter by cell background color (yellow)",
      arguments: {
        range: "A1:D10",
        field: 1,
        criteria1: { r: 255, g: 255, b: 0 },
        operator: "xlFilterCellColor",
      },
    },
    {
      prompt: "Filter by font color (red)",
      arguments: {
        range: "A1:D10",
        field: 1,
        criteria1: { r: 255, g: 0, b: 0 },
        operator: "xlFilterFontColor",
      },
    },
  ],
});
```

### Parameters

| Name            | Type                      | Example          | Description                                                                                                                                                                                                                        |
| --------------- | ------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range           | string                    | "A1:D10"         | The cell range to apply the autofilter. If omitted, the active or selected range is used.                                                                                                                                          |
| field           | number                    | 1                | The field number used for filtering, where numbering starts at 1 from the left-most column.                                                                                                                                        |
| fieldName       | string                    | "Price"          | The column name/header used for filtering (e.g., "Name", "Age"). The function automatically maps it to the correct column index.                                                                                                   |
| criteria1       | string \| array \| object | ">18"            | The filter criteria. Can be: string for operators (e.g., ">10"), array for multiple values (e.g., \[1,2,3]), [ApiColor](/docs/office-api/usage-api/spreadsheet-api/ApiColor) object for color filters, or dynamic filter constant. |
| operator        | string                    | "xlFilterValues" | The filter operator. Can be: "xlAnd", "xlOr", "xlFilterValues", "xlTop10Items", "xlTop10Percent", "xlBottom10Items", "xlBottom10Percent", "xlFilterCellColor", "xlFilterFontColor", "xlFilterDynamic".                             |
| criteria2       | string                    | "\<2"            | The second filter criteria, used with "xlAnd" or "xlOr" operators for compound filters.                                                                                                                                            |
| visibleDropDown | boolean                   | true             | Specifies whether to show the filter dropdown arrow. The default value is "true".                                                                                                                                                  |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.range = params.range;
  Asc.scope.field = params.field;
  Asc.scope.fieldName = params.fieldName;
  Asc.scope.criteria1 = params.criteria1;
  Asc.scope.operator = params.operator;
  Asc.scope.criteria2 = params.criteria2;
  Asc.scope.visibleDropDown = params.visibleDropDown;

  if (Asc.scope.fieldName && !Asc.scope.field) {
    let insertRes = await Asc.Editor.callCommand(function () {
      let ws = Api.GetActiveSheet();
      let _range;

      if (!Asc.scope.range) {
        _range = Api.GetSelection();
      } else {
        _range = ws.GetRange(Asc.scope.range);
      }

      return _range.GetValue2();
    });

    let csv = insertRes
      .map(function (item) {
        return item
          .map(function (value) {
            if (value == null) return "";
            const str = String(value);
            if (
              str.includes(",") ||
              str.includes("\n") ||
              str.includes("\r") ||
              str.includes('"')
            ) {
              return '"' + str.replace(/"/g, '""') + '"';
            }
            return str;
          })
          .join(",");
      })
      .join("\n");

    let argPrompt =
      "Find column index for header '" +
      Asc.scope.fieldName +
      "' in the following CSV data.\n\n" +
      "IMPORTANT RULES:\n" +
      "1. Return ONLY a single number (column index starting from 1). No text, no explanations, no additional characters.\n" +
      "2. Find EXACT match first. If exact match exists, return its index.\n" +
      "3. If no exact match, then look for partial matches.\n" +
      "4. Case-insensitive comparison allowed.\n" +
      "5. Data is CSV format (comma-separated). Look ONLY at the first row (header row).\n" +
      "6. Count positions carefully: each comma marks a column boundary.\n" +
      "7. Example: if searching for 'test2' and headers are 'test1,test2,test', return 2 (not 1 or 3).\n" +
      "8. If the header is in the 3rd column, return only: 3\n\n" +
      "CSV data:\n" +
      csv;

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    let isSendedEndLongAction = false;
    async function checkEndAction() {
      if (!isSendedEndLongAction) {
        await Asc.Editor.callMethod("EndAction", [
          "Block",
          "AI (" + requestEngine.modelUI.name + ")",
        ]);
        isSendedEndLongAction = true;
      }
    }

    await Asc.Editor.callMethod("StartAction", [
      "Block",
      "AI (" + requestEngine.modelUI.name + ")",
    ]);
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    let result = await requestEngine.chatRequest(
      argPrompt,
      false,
      async function (data) {
        if (!data) return;
        await checkEndAction();
      }
    );

    await checkEndAction();
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    Asc.scope.field = result;
  }

  await Asc.Editor.callCommand(function () {
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
    if (
      Asc.scope.operator === "xlFilterCellColor" ||
      Asc.scope.operator === "xlFilterFontColor"
    ) {
      if (
        criteria1 &&
        typeof criteria1 === "object" &&
        criteria1.r !== undefined &&
        criteria1.g !== undefined &&
        criteria1.b !== undefined
      ) {
        criteria1 = Api.CreateColorFromRGB(
          criteria1.r,
          criteria1.g,
          criteria1.b
        );
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

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/setAutoFilter.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/setAutoFilter.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
