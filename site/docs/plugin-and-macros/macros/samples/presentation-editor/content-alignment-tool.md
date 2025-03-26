# Content alignment tool

Automatically aligns elements to the left and spaces them consistently.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    var presentation = Api.GetPresentation();
    // Configuration
    var leftMargin = 50;     // Gap from the left edge
    var topMargin = 50;      // Gap from top edge
    var verticalSpacing = 20; // Vertical spacing between elements

    for (var i = 0; i < presentation.GetSlidesCount(); i++) {
        var slide = presentation.GetSlideByIndex(i);
        var slideWidth = slide.GetWidth();
        var slideHeight = slide.GetHeight();

        try {
            // Remove all scratchable items
            var allElements = slide.GetAllDrawings();
            if (!allElements || !allElements.length) {
                console.log("No items found on this slide");
                continue;
            }

            console.log("Number of items:", allElements.length);

            // Place each item
            var currentY = topMargin;

            allElements.forEach(function (element, index) {
                var elementWidth = element.GetWidth();
                var elementHeight = element.GetHeight();

                // Align item to the left
                element.SetPosition(leftMargin, currentY);
                console.log("Item " + (index + 1) + " placed: X=" + leftMargin + ", Y=" + currentY);

                // Update Y position for the next item
                currentY += elementHeight + verticalSpacing;
            });

        } catch (error) {
            console.log("Error:", error);
        }
    }

    console.log("Placement is complete!");
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetWidth.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetHeight.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md)

## Result

<!-- imgpath -->

![ContentAlignmentTool](/assets/images/plugins/content-alignment-tool.png#gh-light-mode-only)![ContentAlignmentTool](/assets/images/plugins/content-alignment-tool.dark.png#gh-dark-mode-only)
