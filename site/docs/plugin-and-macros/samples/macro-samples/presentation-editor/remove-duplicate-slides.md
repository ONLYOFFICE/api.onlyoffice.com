# Remove duplicate slides

Remove duplicate slides across the entire presentation.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slides = presentation.GetAllSlides();
    let slidesCount = presentation.GetSlidesCount();

    function compareShapes(slide1, slide2) {
        let paragraph1 = [];
        let paragraph2 = [];
        let shapes1 = slide1.GetAllShapes();
        let shapes2 = slide2.GetAllShapes();

        if (shapes1.length != shapes2.length) {
            return false;
        }

        shapes1.forEach(shape1 => {
            let docContent1 = shape1.GetDocContent();
            paragraph1.push(docContent1.GetText());
        });
        shapes2.forEach(shape2 => {
            let docContent2 = shape2.GetDocContent();
            paragraph2.push(docContent2.GetText());
        });
        return paragraph1.join("|") === paragraph2.join("|");
    }

    function compareCharts(slide1, slide2) {
        let chartssAll1 = [];
        let chartssAll2 = [];
        let charts1 = slide1.GetAllCharts();
        let charts2 = slide2.GetAllCharts();

        if (charts1.length != charts2.length) {
            return false;
        }
        charts1.forEach(chart => {
            let allSeries = chart.GetAllSeries();
            chartssAll1.push(allSeries.map(c => c.GetChartType()));
        });
        charts2.forEach(chart => {
            let allSeries = chart.GetAllSeries();
            chartssAll2.push(allSeries.map(c => c.GetChartType()));
        });
        return chartssAll1.join("|") === chartssAll2.join("|");
    }

    function compareDrawings(slide1, slide2) {
        let drawingsAll1 = [];
        let drawingsAll2 = [];
        let drawings1 = slide1.GetAllDrawings();
        let drawings2 = slide2.GetAllDrawings();

        if (drawings1.length != drawings2.length) {
            return false;
        }
        drawings1.forEach(drawing => {
            let content = drawing.GetContent();
            drawingsAll1.push(content?.GetText());
        });
        drawings2.forEach(drawing => {
            let content = drawing.GetContent();
            drawingsAll2.push(content?.GetText());
        });
        return drawingsAll1.join("|") === drawingsAll2.join("|");
    }

    for (let i = 0; i < slidesCount; i++) {
        for (let j = 1; j < slidesCount; j++) {
            let areShapesEqual = compareShapes(slides[i], slides[j]);
            let areChartsEqual = compareCharts(slides[i], slides[j]);
            let areDrawingsEqual = compareDrawings(slides[i], slides[j]);
            if (areShapesEqual && areChartsEqual && areDrawingsEqual) {
                console.log(i + ", " + j);
            }
        }
    }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [GetAllCharts](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllCharts.md), [GetAllSeries](../../../../office-api/usage-api/presentation-api/ApiChart/Methods/GetAllSeries.md), [GetChartType](../../../../office-api/usage-api/presentation-api/ApiChart/Methods/GetChartType.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllDrawings.md), [GetContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetContent.md)

## Result

![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.png#gh-light-mode-only)
![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.dark.png#gh-dark-mode-only)
