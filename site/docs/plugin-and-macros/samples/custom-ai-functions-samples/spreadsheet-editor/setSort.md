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
let func = new RegisteredFunction({
  name: "setSort",
  description:
    "Sorts data in a range by a single column in ascending or descending order.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "Cell range to sort (e.g., 'A1:D10'). If omitted, uses active/selected range.",
      },
      key1: {
        type: ["string", "number"],
        description:
          "Sort field - cell reference (e.g., 'A1'), column index (1-based), or column name. If omitted, uses first column.",
      },
      sortOrder1: {
        type: "string",
        description: "Sort order: 'xlAscending' or 'xlDescending'.",
        enum: ["xlAscending", "xlDescending"],
        default: "xlAscending",
      },
      header: {
        type: "string",
        description:
          "Specifies if first row contains headers: 'xlYes' or 'xlNo'.",
        enum: ["xlYes", "xlNo"],
        default: "xlNo",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Sort range A1:D10 by first column in ascending order",
      arguments: { range: "A1:D10", sortOrder1: "xlAscending" },
    },
    {
      prompt: "Sort active range in descending order",
      arguments: { sortOrder1: "xlDescending" },
    },
    {
      prompt: "Sort by column name 'Name' with headers",
      arguments: { key1: "Name", header: "xlYes" },
    },
  ],
});
```

### Parameters

| Name       | Type                         | Example        | Description                                                                                                                  |
| ---------- | ---------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
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
func.call = async function (params) {
  Asc.scope.range = params.range;
  Asc.scope.key1 = params.key1;
  Asc.scope.sortOrder1 = params.sortOrder1 || "xlAscending";
  Asc.scope.header = params.header || "xlNo";

  async function findColumnByName(fieldName) {
    if (!fieldName) return null;

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

    let argPromt =
      "Find column index for header '" +
      fieldName +
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
    if (!requestEngine) return null;

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
      argPromt,
      false,
      async function (data) {
        if (!data) return;
        await checkEndAction();
      }
    );

    await checkEndAction();
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    return result - 0;
  }

  if (
    Asc.scope.key1 &&
    typeof Asc.scope.key1 === "string" &&
    isNaN(Asc.scope.key1) &&
    !Asc.scope.key1.match(/^[A-Z]+\d+$/i)
  ) {
    Asc.scope.key1 = await findColumnByName(Asc.scope.key1);
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

    if (Asc.scope.header === "xlYes") {
      range.SetOffset(1, 0);
    }

    let key1 = null;

    function adjustSortKey(keyValue) {
      if (!keyValue) {
        return ws.GetCells(range.GetRow(), range.GetCol());
      }

      if (typeof keyValue === "number") {
        return ws.GetCells(range.GetRow(), range.GetCol() + keyValue - 1);
      } else if (typeof keyValue === "string") {
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

    range.SetSort(
      key1,
      Asc.scope.sortOrder1,
      null,
      null,
      null,
      null,
      Asc.scope.header
    );
  });
};

return func;
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue2](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [SetOffset](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetOffset.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetCol](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCol.md), [SetSort](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetSort.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/setSort.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/spreadsheet-editor/setSort.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
