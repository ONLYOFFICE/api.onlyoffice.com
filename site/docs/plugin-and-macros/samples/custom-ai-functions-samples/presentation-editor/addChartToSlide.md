# addChartToSlide

This function adds a chart to the specified  or the current slide. By default, the chart is 152x89 mm and centered.

## Prompts

- Add a bar chart showing sales data [[100, 120, 140], [90, 110, 130]] with series "Product A", "Product B" and categories "Q1", "Q2", "Q3" on the current slide
- Add a pie chart showing data [[30, 25, 20, 15, 10]] with series "Market Share" and categories "Company A", "Company B", "Company C", "Company D", "Others" on slide 2
- Generate chart data for monthly revenue showing steady growth from $50k to $120k in 2024

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "addChartToSlide";
func.description = "Adds a chart to the slide (152x89mm, centered)";
func.params = [
    "slideNumber (number): slide number to add chart to (optional, defaults to current)", 
    "chartType (string): type of chart - bar, barStacked, barStackedPercent, bar3D, barStacked3D, barStackedPercent3D, barStackedPercent3DPerspective, horizontalBar, horizontalBarStacked, horizontalBarStackedPercent, horizontalBar3D, horizontalBarStacked3D, horizontalBarStackedPercent3D, lineNormal, lineStacked, lineStackedPercent, line3D, pie, pie3D, doughnut, scatter, stock, area, areaStacked, areaStackedPercent",
    "data (array): 2D array of numeric data values - all sub-arrays must have same length, number of arrays must match series count", 
    "series (array): array of series names - must have same length as data arrays count", 
    "categories (array): array of category names - must have same length as each data array", 
    "prompt (string): description of what kind of data to generate for the chart (optional)"
];

func.examples = [
    "if you need to add a bar chart showing sales data on slide 2, respond with:\n" + 
    "[functionCalling (addChartToSlide)]: {\"slideNumber\": 2, \"chartType\": \"bar3D\", \"data\": [[100, 120, 140], [90, 110, 130]], \"series\": [\"Product A\", \"Product B\"], \"categories\": [\"Q1\", \"Q2\", \"Q3\"]}", 
    "if you need to add a pie chart on current slide, respond with:\n" + 
    "[functionCalling (addChartToSlide)]: {\"chartType\": \"pie\", \"data\": [[30, 25, 20, 15, 10]], \"series\": [\"Market Share\"], \"categories\": [\"Company A\", \"Company B\", \"Company C\", \"Company D\", \"Others\"]}", 
    "if you need to add a line chart with 3 series and 4 data points, respond with:\n" + 
    "[functionCalling (addChartToSlide)]: {\"chartType\": \"lineNormal\", \"data\": [[10, 20, 30, 40], [15, 25, 35, 45], [12, 22, 32, 42]], \"series\": [\"Series 1\", \"Series 2\", \"Series 3\"], \"categories\": [\"Jan\", \"Feb\", \"Mar\", \"Apr\"]}", 
    "if you need AI to generate chart data, respond with:\n" + 
    "[functionCalling (addChartToSlide)]: {\"slideNumber\": 3, \"chartType\": \"lineNormal\", \"prompt\": \"Create monthly revenue data for 2024 showing steady growth from $50k to $120k\"}"
];
```

### Parameters

| Name        | Type   | Example                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------|--------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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

    if (params.prompt && !params.data) {
        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

        let isSendedEndLongAction = false;

        async function checkEndAction() {
            if (!isSendedEndLongAction) {
                let actionName = "AI" + (requestEngine.modelUI && requestEngine.modelUI.name ? " (" + requestEngine.modelUI.name + ")" : " (Chart Generation)");
                await Asc.Editor.callMethod("EndAction", ["Block", actionName]);
                isSendedEndLongAction = true;
            }
        }

        let actionName = "AI" + (requestEngine.modelUI && requestEngine.modelUI.name ? " (" + requestEngine.modelUI.name + ")" : " (Chart Generation)");
        await Asc.Editor.callMethod("StartAction", ["Block", actionName]);
        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        try {
            let chartPrompt = "Generate chart data for the following request: " + params.prompt + "\n\nReturn ONLY a JSON object in this exact format (no other text):\n" + "{\n" + "  \"data\": [[number, number, ...], [number, number, ...]],\n" + "  \"series\": [\"Series1\", \"Series2\", ...],\n" + "  \"categories\": [\"Category1\", \"Category2\", ...]\n" + "}\n\n" + "IMPORTANT RULES:\n" + "1. The number of arrays in 'data' MUST equal the number of items in 'series'\n" + "2. ALL arrays in 'data' MUST have exactly the same length\n" + "3. The number of items in 'categories' MUST equal the length of each data array\n" + "Example: if data=[[10,20,30],[40,50,60]], then series must have 2 names and categories must have 3 names";

            let generatedData = await requestEngine.chatRequest(chartPrompt, false);

            await checkEndAction();

            try {
                let parsedData = JSON.parse(generatedData);
                Asc.scope.params.data = parsedData.data;
                Asc.scope.params.series = parsedData.series;
                Asc.scope.params.categories = parsedData.categories;

                let dataLength = Asc.scope.params.data.length;
                let seriesLength = Asc.scope.params.series.length;
                let pointsLength = Asc.scope.params.data[0] ? Asc.scope.params.data[0].length : 0;
                let categoriesLength = Asc.scope.params.categories.length;

                for (let i = 1; i < Asc.scope.params.data.length; i++) {
                    if (Asc.scope.params.data[i].length !== pointsLength) {
                        while (Asc.scope.params.data[i].length < pointsLength) {
                            Asc.scope.params.data[i].push(0);
                        }
                        Asc.scope.params.data[i] = Asc.scope.params.data[i].slice(0, pointsLength);
                    }
                }

                if (dataLength !== seriesLength) {
                    while (Asc.scope.params.series.length < dataLength) {
                        Asc.scope.params.series.push("Series " + (Asc.scope.params.series.length + 1));
                    }
                    Asc.scope.params.series = Asc.scope.params.series.slice(0, dataLength);
                }

                if (pointsLength !== categoriesLength) {
                    while (Asc.scope.params.categories.length < pointsLength) {
                        Asc.scope.params.categories.push("Cat " + (Asc.scope.params.categories.length + 1));
                    }
                    Asc.scope.params.categories = Asc.scope.params.categories.slice(0, pointsLength);
                }
            } catch (e) {
                Asc.scope.params.data = [[100, 120, 140], [90, 110, 130]];
                Asc.scope.params.series = ["Series 1", "Series 2"];
                Asc.scope.params.categories = ["Cat 1", "Cat 2", "Cat 3"];
            }
        } catch (error) {
            await checkEndAction();
            Asc.scope.params.data = [[100, 120, 140], [90, 110, 130]];
            Asc.scope.params.series = ["Series 1", "Series 2"];
            Asc.scope.params.categories = ["Cat 1", "Cat 2", "Cat 3"];
        }

        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    }

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide;

        if (Asc.scope.params.slideNumber) {
            slide = presentation.GetSlideByIndex(Asc.scope.params.slideNumber - 1);
        }
        else {
            slide = presentation.GetCurrentSlide();
        }

        if (!slide) return;

        let chartType = Asc.scope.params.chartType || "bar3D";
        let data = Asc.scope.params.data || [[100, 120, 140], [90, 110, 130]];
        let series = Asc.scope.params.series || ["Series 1", "Series 2"];
        let categories = Asc.scope.params.categories || ["Category 1", "Category 2", "Category 3"];

        if (!data || data.length === 0 || !data[0] || data[0].length === 0) {
            data = [[100, 120, 140], [90, 110, 130]];
            series = ["Series 1", "Series 2"];
            categories = ["Category 1", "Category 2", "Category 3"];
        }

        if (data.length > 0 && data[0].length > 0) {
            let dataLength = data.length;
            let pointsLength = data[0].length;

            for (let i = 1; i < data.length; i++) {
                if (data[i].length !== pointsLength) {
                    while (data[i].length < pointsLength) {
                        data[i].push(0);
                    }
                    data[i] = data[i].slice(0, pointsLength);
                }
            }

            if (series.length !== dataLength) {
                while (series.length < dataLength) {
                    series.push("Series " + (series.length + 1));
                }
                series = series.slice(0, dataLength);
            }

            if (categories.length !== pointsLength) {
                while (categories.length < pointsLength) {
                    categories.push("Category " + (categories.length + 1));
                }
                categories = categories.slice(0, pointsLength);
            }
        }

        let slideWidth = presentation.GetWidth();
        let slideHeight = presentation.GetHeight();
        let width = 5472000;
        let height = 3204000;

        let x = (slideWidth - width) / 2;
        let y = (slideHeight - height) / 2;

        let chart = Api.CreateChart(chartType, data, series, categories, width, height, 24);

        if (chart) {
            chart.SetPosition(x, y);
            slide.AddObject(chart);
        }
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateChart](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateChart.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/addChartToSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/addChartToSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
