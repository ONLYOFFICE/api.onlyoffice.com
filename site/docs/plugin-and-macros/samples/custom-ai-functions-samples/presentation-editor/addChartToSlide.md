# addChartToSlide

This function adds a chart to the specified or the current slide. By default, the chart is 152x89 mm and centered.

## Prompts

- Add a bar chart showing sales data [[100, 120, 140], [90, 110, 130]] with series "Product A", "Product B" and categories "Q1", "Q2", "Q3" on the current slide
- Add a pie chart showing data [[30, 25, 20, 15, 10]] with series "Market Share" and categories "Company A", "Company B", "Company C", "Company D", "Others" on slide 2
- Generate chart data for monthly revenue showing steady growth from $50k to $120k in 2024

## Function registration {#function-registration}

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

### Parameters

| Name        | Type   | Example                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------- | ------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| slideNumber | number | 2                                                                               | The slide number where the chart will be added. If omitted, the chart is added to the current slide.                                                                                                                                                                                                                                                                                                                                                              |
| chartType   | string | "bar3D"                                                                         | The chart type can be "bar", "barStacked", "barStackedPercent", "bar3D", "barStacked3D", "barStackedPercent3D", "barStackedPercent3DPerspective", "horizontalBar", "horizontalBarStacked", "horizontalBarStackedPercent", "horizontalBar3D", "horizontalBarStacked3D", "horizontalBarStackedPercent3D", "lineNormal", "lineStacked", "lineStackedPercent", "line3D", "pie", "pie3D", "doughnut", "scatter", "stock", "area", "areaStacked", "areaStackedPercent". |
| data        | array  | \[\[10, 20, 30, 40\], \[15, 25, 35, 45\], \[12, 22, 32, 42\]\]                  | A two-dimensional array of numeric data values. Each sub-array must have the same length, and the number of sub-arrays must match the series count.                                                                                                                                                                                                                                                                                                               |
| series      | array  | \["Series 1", "Series 2", "Series 3"\]                                          | An array of series names, which must have the same length as the number of data arrays.                                                                                                                                                                                                                                                                                                                                                                           |
| categories  | array  | \["Jan", "Feb", "Mar", "Apr"\]                                                  | An array of category names, which must have the same length as each data array.                                                                                                                                                                                                                                                                                                                                                                                   |
| prompt      | string | "Create monthly revenue data for 2024 showing steady growth from $50k to $120k" | The description of the data to generate for the chart.                                                                                                                                                                                                                                                                                                                                                                                                            |

## Function execution {#function-execution}

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
          "AI" +
          (requestEngine.modelUI && requestEngine.modelUI.name
            ? " (" + requestEngine.modelUI.name + ")"
            : " (Chart Generation)");
        await Asc.Editor.callMethod("EndAction", ["Block", actionName]);
        isSendedEndLongAction = true;
      }
    }

    let actionName =
      "AI" +
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

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateChart](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/presentation-editor/addChartToSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/addChartToSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
