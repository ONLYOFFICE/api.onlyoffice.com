# Autoplaceholder

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

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/GetClassType.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md) 

## Result

<!-- imgpath -->

![AutoPlaceholder](/assets/images/plugins/auto-placeholder.png#gh-light-mode-only)![AutoPlaceholder](/assets/images/plugins/auto-placeholder.dark.png#gh-dark-mode-only)