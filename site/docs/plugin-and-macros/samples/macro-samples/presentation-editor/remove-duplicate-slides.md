# Remove duplicate slides

Remove duplicate slides across the entire presentation.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slides = presentation.GetAllSlides();
    let slidesCount = slides.length;

    function compareShapes(slide1, slide2) {
        let paragraph1 = [], paragraph2 = [];
        if (slide1.GetAllShapes().length !== slide2.GetAllShapes().length) return false;

        slide1.GetAllShapes().forEach(s => {
            paragraph1.push(s.GetDocContent().GetAllParagraphs().map(p => p.GetText()));
        });
        slide2.GetAllShapes().forEach(s => {
            paragraph2.push(s.GetDocContent().GetAllParagraphs().map(p => p.GetText()));
        });
        return paragraph1.join("|") === paragraph2.join("|");
    }

    function compareCharts(slide1, slide2) {
        let chart1 = slide1.GetAllCharts();
        let chart2 = slide2.GetAllCharts();
        if (chart1.length !== chart2.length) return false;

        let summary1 = chart1.map(c => c.GetAllSeries().map(s => s.GetChartType()).join(",")).join("|");
        let summary2 = chart2.map(c => c.GetAllSeries().map(s => s.GetChartType()).join(",")).join("|");

        return summary1 === summary2;
    }

    function compareDrawings(slide1, slide2) {
        let d1 = slide1.GetAllDrawings();
        let d2 = slide2.GetAllDrawings();
        if (d1.length !== d2.length) return false;

        let data1 = d1.map(d => [d.GetPlaceholder(), d.GetWidth(), d.GetHeight()].join(",")).join("|");
        let data2 = d2.map(d => [d.GetPlaceholder(), d.GetWidth(), d.GetHeight()].join(",")).join("|");

        return data1 === data2;
    }

    function compareOleObjects(slide1, slide2) {
        let o1 = slide1.GetAllOleObjects();
        let o2 = slide2.GetAllOleObjects();
        if (o1.length !== o2.length) return false;

        let d1 = o1.map(o => o.GetData()).join("|");
        let d2 = o2.map(o => o.GetData()).join("|");

        return d1 === d2;
    }

    let duplicateIndices = new Set();

    for (let i = 0; i < slidesCount - 1; i++) {
        if (duplicateIndices.has(i)) continue;

        for (let j = i + 1; j < slidesCount; j++) {
            if (duplicateIndices.has(j)) continue;

            if (
                compareShapes(slides[i], slides[j]) &&
                compareCharts(slides[i], slides[j]) &&
                compareDrawings(slides[i], slides[j]) &&
                compareOleObjects(slides[i], slides[j])
            ) {
                duplicateIndices.add(j);
                console.log(`Duplicate: slide ${j} is a duplicate of slide ${i}`);
            }
        }
    }

    [...duplicateIndices].sort((a, b) => b - a).forEach(index => {
        presentation.RemoveSlides(index, 1);
    });
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllCharts](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllCharts.md), [GetAllSeries](/docs/office-api/usage-api/presentation-api/ApiChart/Methods/GetAllSeries.md), [GetChartType](/docs/office-api/usage-api/presentation-api/ApiChartSeries/Methods/GetChartType.md), [GetAllDrawings](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetPlaceholder](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetPlaceholder.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [GetAllOleObjects](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllOleObjects.md), [GetData](/docs/office-api/usage-api/presentation-api/ApiOleObject/Methods/GetData.md), [RemoveSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/RemoveSlides.md)

## Result

![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.png#gh-light-mode-only)
![RemoveDuplicateSlides](/assets/images/plugins/remove-duplicate-slides.dark.png#gh-dark-mode-only)
