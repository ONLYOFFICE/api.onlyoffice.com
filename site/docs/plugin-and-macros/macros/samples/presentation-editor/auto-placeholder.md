# Auto placeholder

Automatically fills empty text boxes on slides with placeholder content and arranges texts in a structured format.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    var presentation = Api.GetPresentation();
    // sample contents
    var sampleTexts = {
        title: [
            "Project Summary",
            "Product Introduction",
            "2024 Goals",
            "Market Analysis"
        ],
        content: [
            "• Goals and Objectives\n• Project Scope\n• Time Plan",
            "• Market Research\n• Target Audience\n• Competitive Analysis",
            "• Financial Data\n• Risk Analysis\n• Budget Plan",
            "• Strategic Plan\n• Resource Plan\n• Outcome Targets"
        ]
    };

    function getRandomText(type) {
        var texts = sampleTexts[type];
        return texts[Math.floor(Math.random() * texts.length)];
    }

    for (var i = 0; i < presentation.GetSlidesCount(); i++) {
        try {
            var slide = presentation.GetSlideByIndex(i);
            var shapes = slide.GetAllDrawings();

            console.log("Slide " + (i + 1) + " is being processed...");

            shapes.forEach(function (shape, index) {
                try {
                    if (shape.GetClassType() === "shape") {
                        var docContent = shape.GetDocContent();

                        if (docContent) {
                            // Clear existing content
                            docContent.RemoveAllElements();

                            // Create new paragraph
                            var para = Api.CreateParagraph();

                            // Accept the first shape as the title
                            var newText = getRandomText(index === 0 ? 'title' : 'content');

                            // Add text
                            para.AddText(newText);

                            // Insert paragraph
                            docContent.Push(para);

                            console.log("Content added:", newText);
                        } else {
                            console.log("Failed to retrieve DocContent");
                        }
                    }
                } catch (error) {
                    console.log("Shape processing error:", error);
                }
            });

        } catch (error) {
            console.log("Slide processing error:", error);
        }
    }

    console.log("Process completed!");
})();
```

Methods used: GetPresentation, GetSlidesCount, GetSlideByIndex, GetAllDrawings, GetClassType, GetDocContent, RemoveAllElements, CreateParagraph, AddText, Push  

## Result

<!-- imgpath -->

![](/assets/images/plugins/auto-placeholder.png)
