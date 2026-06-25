---
description: 对选定范围应用自动筛选。
tags: ["Docs", "Plugins", "AI Tools", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 设置自动筛选

此函数对给定单元格范围或活动选区应用或修改自动筛选。
支持按列索引或列名、比较运算符、多个值、颜色以及高级筛选运算符进行筛选。

## 提示词

- 对范围 A1:D10 应用自动筛选
- 对选定单元格应用筛选
- 筛选第 4 列中大于 10 的值
- 显示 Column1 大于 17 的行
- 显示第 4 列的前 3 项
- 显示第 4 列大于 15 或小于 5 的行

## 函数注册 {#function-registration}

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

### 参数

| Name            | Type                      | Example          | Description                                                                                                                                                                                                                        |
| --------------- | ------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range           | string                    | "A1:D10"         | 应用自动筛选的单元格范围。如果省略，则使用活动或选定范围。                                                                                                                                                                          |
| field           | number                    | 1                | 筛选所用字段的编号，从最左列开始，编号从 1 起。                                                                                                                                                                                     |
| fieldName       | string                    | "Price"          | 筛选所用的列名/标题（如 "Name"、"Age"）。函数会自动将其映射到正确的列索引。                                                                                                                                                         |
| criteria1       | string \| array \| object | ">18"            | 筛选条件。可以是：用于运算符的字符串（如 ">10"）、用于多个值的数组（如 \[1,2,3]）、用于颜色筛选的 [ApiColor](../../../office-api/usage-api/spreadsheet-api/ApiColor/ApiColor.md) 对象，或动态筛选常量。 |
| operator        | string                    | "xlFilterValues" | 筛选运算符。可以是："xlAnd"、"xlOr"、"xlFilterValues"、"xlTop10Items"、"xlTop10Percent"、"xlBottom10Items"、"xlBottom10Percent"、"xlFilterCellColor"、"xlFilterFontColor"、"xlFilterDynamic"。                                        |
| criteria2       | string                    | "\<2"            | 第二个筛选条件，与 "xlAnd" 或 "xlOr" 运算符结合使用，用于复合筛选。                                                                                                                                                                 |
| visibleDropDown | boolean                   | true             | 指定是否显示筛选下拉箭头。默认值为 "true"。                                                                                                                                                                                         |

## 函数执行 {#function-execution}

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

使用的方法：[GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetValue2](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue2.md), [CreateColorFromRGB](../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [SetAutoFilter](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetAutoFilter.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/spreadsheet-editor/set-auto-filter" dark />
