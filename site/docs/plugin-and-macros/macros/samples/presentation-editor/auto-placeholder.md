# Autoplaceholder

Automatically fills empty text boxes on slides with placeholder content and arranges texts in a structured format.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();

    // Sample contents
    let sampleTexts = {
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
        let texts = sampleTexts[type];
        return texts[Math.floor(Math.random() * texts.length)];
    }

    for (let slideIndex = 0; slideIndex < presentation.GetSlidesCount(); slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllDrawings();

        console.log("Slide " + (slideIndex + 1) + " is being processed...");

        shapes.forEach(function (shape, shapeIndex) {
            if (shape.GetClassType() === "shape") {
                let docContent = shape.GetDocContent();

                if (docContent) {
                    // Clear existing content
                    docContent.RemoveAllElements();

                    // Create a new paragraph
                    let paragraph = Api.CreateParagraph();

                    // Use the first shape as the title
                    let newText = getRandomText(shapeIndex === 0 ? 'title' : 'content');

                    // Add text
                    paragraph.AddText(newText);

                    // Insert paragraph
                    docContent.Push(paragraph);

                    console.log("Content added:", newText);
                } else {
                    console.log("Failed to retrieve DocContent");
                }
            }
        });
    }

    console.log("Process completed!");
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/GetClassType.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md) 

## Result

<!-- imgpath -->

![AutoPlaceholder](/assets/images/plugins/auto-placeholder.png#gh-light-mode-only)![AutoPlaceholder](/assets/images/plugins/auto-placeholder.dark.png#gh-dark-mode-only)