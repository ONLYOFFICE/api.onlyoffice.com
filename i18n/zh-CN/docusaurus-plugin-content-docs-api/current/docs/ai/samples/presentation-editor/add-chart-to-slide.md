---
description: 向演示文稿幻灯片添加图表。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 向幻灯片添加图表

此函数向指定幻灯片或当前幻灯片添加图表。默认情况下，图表尺寸为 152×89 毫米并居中显示。

## 提示词

- 在当前幻灯片上添加一个展示销售数据 [[100, 120, 140], [90, 110, 130]] 的柱状图，系列名称为"Product A"、"Product B"，类别为"Q1"、"Q2"、"Q3"
- 在第 2 张幻灯片上添加一个展示数据 [[30, 25, 20, 15, 10]] 的饼图，系列名称为"Market Share"，类别为"Company A"、"Company B"、"Company C"、"Company D"、"Others"
- 生成展示 2024 年月度营收从 5 万美元稳步增长至 12 万美元的图表数据

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "addChartToSlide",
    description: "Adds a chart to the slide (152x89mm, centered)",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description:
            "Slide number to add the chart to (optional, defaults to current slide)",
          minimum: 1,
        },
        chartType: {
          type: "string",
          description:
            "Type of chart (bar, pie, line, area, scatter, stock, etc.)",
        },
        data: {
          type: "array",
          description:
            "2D array of numeric data values. All sub-arrays must have the same length.",
        },
        series: {
          type: "array",
          description:
            "Array of series names. Must match the number of data arrays.",
        },
        categories: {
          type: "array",
          description:
            "Array of category names. Must match the length of each data array.",
        },
        prompt: {
          type: "string",
          description:
            "Description of the data to generate for the chart using AI",
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "Add a bar chart showing sales data on slide 2",
        arguments: {
          slideNumber: 2,
          chartType: "bar3D",
          data: [
            [100, 120, 140],
            [90, 110, 130],
          ],
          series: ["Product A", "Product B"],
          categories: ["Q1", "Q2", "Q3"],
        },
      },
      {
        prompt: "Add a pie chart on the current slide",
        arguments: {
          chartType: "pie",
          data: [[30, 25, 20, 15, 10]],
          series: ["Market Share"],
          categories: [
            "Company A",
            "Company B",
            "Company C",
            "Company D",
            "Others",
          ],
        },
      },
      {
        prompt: "Add a line chart with 3 series and 4 data points",
        arguments: {
          chartType: "lineNormal",
          data: [
            [10, 20, 30, 40],
            [15, 25, 35, 45],
            [12, 22, 32, 42],
          ],
          series: ["Series 1", "Series 2", "Series 3"],
          categories: ["Jan", "Feb", "Mar", "Apr"],
        },
      },
      {
        prompt: "Add chart with AI generated data",
        arguments: {
          slideNumber: 3,
          chartType: "lineNormal",
          prompt:
            "Create monthly revenue data for 2024 showing steady growth from $50k to $120k",
        },
      },
    ],
  });
  return func;
})();
```

### 参数

| Name        | Type   | Example                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| slideNumber | number | 2                                                                               | 要添加图表的幻灯片编号。如果省略，则将图表添加到当前幻灯片。                                                                                                                                                                                                                                                                                                                                                                                                       |
| chartType   | string | "bar3D"                                                                         | 图表类型，可选值为 "bar"、"barStacked"、"barStackedPercent"、"bar3D"、"barStacked3D"、"barStackedPercent3D"、"barStackedPercent3DPerspective"、"horizontalBar"、"horizontalBarStacked"、"horizontalBarStackedPercent"、"horizontalBar3D"、"horizontalBarStacked3D"、"horizontalBarStackedPercent3D"、"lineNormal"、"lineStacked"、"lineStackedPercent"、"line3D"、"pie"、"pie3D"、"doughnut"、"scatter"、"stock"、"area"、"areaStacked"、"areaStackedPercent"。 |
| data        | array  | \[\[10, 20, 30, 40\], \[15, 25, 35, 45\], \[12, 22, 32, 42\]\]                  | 二维数值数据数组。每个子数组的长度必须相同，且子数组的数量必须与系列数量匹配。                                                                                                                                                                                                                                                                                                                                                                                     |
| series      | array  | \["Series 1", "Series 2", "Series 3"\]                                          | 系列名称数组，其长度必须与数据数组的数量相同。                                                                                                                                                                                                                                                                                                                                                                                                                     |
| categories  | array  | \["Jan", "Feb", "Mar", "Apr"\]                                                  | 类别名称数组，其长度必须与每个数据数组的长度相同。                                                                                                                                                                                                                                                                                                                                                                                                                 |
| prompt      | string | "Create monthly revenue data for 2024 showing steady growth from $50k to $120k" | 用于通过 AI 生成图表数据的描述信息。                                                                                                                                                                                                                                                                                                                                                                                                                               |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.params = params;

  // Generate chart data using AI if prompt is provided
  if (params.prompt && !params.data) {
    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    let isSendedEndLongAction = false;

    async function checkEndAction() {
      if (!isSendedEndLongAction) {
        let actionName =
          "AI Tools" +
          (requestEngine.modelUI && requestEngine.modelUI.name
            ? " (" + requestEngine.modelUI.name + ")"
            : " (Chart Generation)");
        await Asc.Editor.callMethod("EndAction", ["Block", actionName]);
        isSendedEndLongAction = true;
      }
    }

    let actionName =
      "AI Tools" +
      (requestEngine.modelUI && requestEngine.modelUI.name
        ? " (" + requestEngine.modelUI.name + ")"
        : " (Chart Generation)");

    await Asc.Editor.callMethod("StartAction", ["Block", actionName]);
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    try {
      let chartPrompt =
        "Generate chart data for the following request: " +
        params.prompt +
        "\n\nReturn ONLY a JSON object in this exact format:\n" +
        "{\n" +
        '  "data": [[number, number, ...], ...],\n' +
        '  "series": ["Series 1", "Series 2", ...],\n' +
        '  "categories": ["Category 1", "Category 2", ...]\n' +
        "}";

      let generatedData = await requestEngine.chatRequest(chartPrompt, false);
      await checkEndAction();

      let parsedData = JSON.parse(generatedData);
      Asc.scope.params.data = parsedData.data;
      Asc.scope.params.series = parsedData.series;
      Asc.scope.params.categories = parsedData.categories;
    } catch (e) {
      Asc.scope.params.data = [
        [100, 120, 140],
        [90, 110, 130],
      ];
      Asc.scope.params.series = ["Series 1", "Series 2"];
      Asc.scope.params.categories = ["Category 1", "Category 2", "Category 3"];
    }

    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  }

  // Insert chart into slide
  await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let slide = Asc.scope.params.slideNumber
      ? presentation.GetSlideByIndex(Asc.scope.params.slideNumber - 1)
      : presentation.GetCurrentSlide();

    if (!slide) return;

    let chartType = Asc.scope.params.chartType || "bar3D";
    let data = Asc.scope.params.data;
    let series = Asc.scope.params.series;
    let categories = Asc.scope.params.categories;

    let slideWidth = presentation.GetWidth();
    let slideHeight = presentation.GetHeight();
    let width = 5472000;
    let height = 3204000;

    let x = (slideWidth - width) / 2;
    let y = (slideHeight - height) / 2;

    let chart = Api.CreateChart(
      chartType,
      data,
      series,
      categories,
      width,
      height,
      24,
    );
    if (chart) {
      chart.SetPosition(x, y);
      slide.AddObject(chart);
    }
  });
};
```

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateChart](../../../office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-chart-to-slide" dark />
