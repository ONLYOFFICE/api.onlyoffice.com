---
description: 按列对选定范围进行排序。
tags: ["Docs", "Plugins", "AI Tools", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 设置排序

此函数按最多三列对给定范围（或活动/选定范围）进行排序，支持使用单元格引用、列索引、命名范围或列标题。支持升序/降序排列，并可选择是否进行标题行检测。

## 提示词

- 按第一列升序排序单元格 A1:D10
- 按 Column1 升序排序表格
- 按第二列降序排序
- 按 Column1 升序、Column2 降序排序 A1:D10
- 按第一列对选定范围进行排序

## 函数注册 {#function-registration}

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

### 参数

| Name       | Type                         | Example        | Description                                                                                                                  |
| ---------- | ---------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| range      | string                       | "A1:D10"       | 要排序的单元格范围。如果省略，则使用活动或选定范围。                                                                          |
| key1       | string \| ApiRange \| number | "A1"           | 第一个排序字段，可以指定为范围、命名范围引用或范围内的列索引（从 1 开始）。                                                   |
| key1Name   | string                       | "Name"         | 第一个排序字段的列名或标题，将自动解析为对应的列编号。                                                                        |
| sortOrder1 | string                       | "xlAscending"  | 第一个排序字段的排序顺序，可以是 "xlAscending" 或 "xlDescending"。默认值为 "xlAscending"。                                    |
| key2       | string \| ApiRange \| number | "C3"           | 第二个排序字段，可以指定为范围、命名范围引用或范围内的列索引（从 1 开始）。                                                   |
| key2Name   | string                       | "Age"          | 第二个排序字段的列名或标题，将自动解析为对应的列编号。                                                                        |
| sortOrder2 | string                       | "xlDescending" | 第二个排序字段的排序顺序，可以是 "xlAscending" 或 "xlDescending"。默认值为 "xlAscending"。                                    |
| key3       | string \| ApiRange \| number | "D5"           | 第三个排序字段，可以指定为范围、命名范围引用或范围内的列索引（从 1 开始）。                                                   |
| key3Name   | string                       | "Country"      | 第三个排序字段的列名或标题，将自动解析为对应的列编号。                                                                        |
| sortOrder3 | string                       | "xlDescending" | 第三个排序字段的排序顺序，可以是 "xlAscending" 或 "xlDescending"。默认值为 "xlAscending"。                                    |
| header     | string                       | "xlNo"         | 指定第一行是否包含标题："xlYes" 或 "xlNo"。默认值为 "xlNo"。                                                                  |

## 函数执行 {#function-execution}

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

    let argPrompt =
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
      argPrompt,
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

使用的方法：[GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue2](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [SetOffset](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetOffset.md), [GetCells](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [GetRow](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetCol](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCol.md), [SetSort](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetSort.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/spreadsheet-editor/set-sort" dark />
