---
description: 从电子表格数据范围创建图表。
tags: ["Docs", "Plugins", "AI Tools", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 添加图表

此函数根据给定范围或选定范围，创建指定类型的图表。

## 提示词

- 根据当前选择创建条形图
- 根据当前选择创建普通折线图
- 根据范围 A1:B10 创建饼图
- 创建标题为"Sales Overview"的图表

## 函数注册 {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "addChart",
  description:
    "Creates charts from data ranges to visualize data. Supports multiple chart types including bar charts, line charts, pie charts, scatter plots, and area charts. Each chart type has variants like stacked, 3D, and percentage views. Charts are automatically positioned below the source data range with configurable dimensions. Optional chart titles can be added for better context.",
  parameters: {
    type: "object",
    properties: {
      range: {
        type: "string",
        description:
          "Cell range with data for chart (e.g., 'A1:D10'). If omitted, uses current selection.",
      },
      chartType: {
        type: "string",
        description: "Type of chart to create.",
        enum: [
          "bar",
          "barStacked",
          "barStackedPercent",
          "bar3D",
          "barStacked3D",
          "barStackedPercent3D",
          "barStackedPercent3DPerspective",
          "horizontalBar",
          "horizontalBarStacked",
          "horizontalBarStackedPercent",
          "horizontalBar3D",
          "horizontalBarStacked3D",
          "horizontalBarStackedPercent3D",
          "lineNormal",
          "lineStacked",
          "lineStackedPercent",
          "line3D",
          "pie",
          "pie3D",
          "doughnut",
          "scatter",
          "stock",
          "area",
          "areaStacked",
          "areaStackedPercent",
        ],
        default: "bar",
      },
      title: {
        type: "string",
        description: "Chart title text.",
      },
    },
    required: [],
  },
  examples: [
    {
      prompt: "Create a bar chart from current selection",
      arguments: {},
    },
    {
      prompt: "Create a line chart from current selection",
      arguments: { chartType: "lineNormal" },
    },
    {
      prompt: "Create a pie chart from specific range",
      arguments: { range: "A1:B10", chartType: "pie" },
    },
    {
      prompt: "Create a chart with title",
      arguments: { title: "Sales Overview" },
    },
  ],
});
```

### 参数

| Name      | Type   | Example          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------- | ------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range     | string | "A1:D10"         | 包含图表数据的单元格范围。如果省略，则使用选定范围。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| chartType | string | "bar3D"          | 图表类型，可以是 "bar"、"barStacked"、"barStackedPercent"、"bar3D"、"barStacked3D"、"barStackedPercent3D"、"barStackedPercent3DPerspective"、"horizontalBar"、"horizontalBarStacked"、"horizontalBarStackedPercent"、"horizontalBar3D"、"horizontalBarStacked3D"、"horizontalBarStackedPercent3D"、"lineNormal"、"lineStacked"、"lineStackedPercent"、"line3D"、"pie"、"pie3D"、"doughnut"、"scatter"、"stock"、"area"、"areaStacked"、"areaStackedPercent"。默认值为 "bar"。 |
| title     | string | "Sales Overview" | 图表标题。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.range = params.range;
  Asc.scope.chartType = params.chartType || "bar";
  Asc.scope.title = params.title;

  await Asc.Editor.callCommand(function () {
    let ws = Api.GetActiveSheet();
    let chartRange;

    if (Asc.scope.range) {
      chartRange = Asc.scope.range;
    } else {
      let selection = Api.GetSelection();
      chartRange = selection.GetAddress(true, true, "xlA1", false);
    }

    let range = ws.GetRange(chartRange);
    let fromRow = range.GetRow() + 3;
    let fromCol = range.GetCol();

    let widthEMU = 130 * 36000;
    let heightEMU = 80 * 36000;

    let chart = ws.AddChart(
      chartRange,
      true,
      Asc.scope.chartType,
      2,
      widthEMU,
      heightEMU,
      fromCol,
      0,
      fromRow,
      0
    );
    if (chart && Asc.scope.title) {
      chart.SetTitle(Asc.scope.title, 14);
    }
  });
};

return func;
```

使用的方法：[GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetAddress](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetAddress.md), [AddChart](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md), [SetTitle](../../../office-api/usage-api/spreadsheet-api/ApiChart/Methods/SetTitle.md), [GetRow](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetCol](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCol.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/spreadsheet-editor/add-chart" dark />
