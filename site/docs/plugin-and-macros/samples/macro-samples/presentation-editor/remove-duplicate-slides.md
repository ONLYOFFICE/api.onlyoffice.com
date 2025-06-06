# Remove duplicate slides

Removes duplicate slides across the entire presentation.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slides = presentation.GetAllSlides();
    const slidesCount = presentation.GetSlidesCount();

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
            paragraph1.push(docContent1.GetAllParagraphs().map(p => p.GetText()));
        });
        shapes2.forEach(shape2 => {
            let docContent2 = shape2.GetDocContent();
            paragraph2.push(docContent2.GetAllParagraphs().map(p => p.GetText()));
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
            drawingsAll1.push(drawing.GetPlaceholder());
            drawingsAll1.push(drawing.GetWidth());
            drawingsAll1.push(drawing.GetHeight());
        });
        drawings2.forEach(drawing => {
            drawingsAll2.push(drawing.GetPlaceholder());
            drawingsAll2.push(drawing.GetWidth());
            drawingsAll2.push(drawing.GetHeight());
        });
        return drawingsAll1.join("|") === drawingsAll2.join("|");
    }
    
    function compareOleObjects(slide1, slide2) {
        let oleObjectsAll1 = [];
        let oleObjectsAll2 = [];
        let oleObjects1 = slide1.GetAllOleObjects();
        let oleObjects2 = slide2.GetAllOleObjects();

        if (oleObjects1.length != oleObjects2.length) {
            return false;
        }
        oleObjects1.forEach(oleObject => {
            drawingsAll1.push(oleObject.GetData());
        });
        oleObjects2.forEach(oleObject => {
            drawingsAll2.push(oleObject.GetData());
        });
        return oleObjectsAll1.join("|") === oleObjectsAll2.join("|");
    }

    for (let i = 0; i < slidesCount; i++) {
        for (let j = 1; j < slidesCount; j++) {
            let areShapesEqual = compareShapes(slides[i], slides[j]);
            let areChartsEqual = compareCharts(slides[i], slides[j]);
            let areDrawingsEqual = compareDrawings(slides[i], slides[j]);
            let areOleObjectsEqual = compareOleObjects(slides[i], slides[j]);
            if (i !== j && areShapesEqual && areChartsEqual && areDrawingsEqual && areOleObjectsEqual) {
                presentation.RemoveSlides(i, 1);
            }
        }
    }
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllCharts](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllSeries](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/GetAllSeries.md), [GetChartType](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/GetChartType.md), [GetAllDrawings](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetPlaceholder](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetPlaceholder.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [GetAllOleObjects](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllOleObjects.md), [GetData](/docs/office-api/usage-api/presentation-api/ApiOleObject/Methods/GetData.md), [RemoveSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/RemoveSlides.md)

## Result

![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.png#gh-light-mode-only)
![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.dark.png#gh-dark-mode-only)
