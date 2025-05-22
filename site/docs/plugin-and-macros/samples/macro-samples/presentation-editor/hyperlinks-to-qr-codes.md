# Hyperlinks to QR codes

Converts all the hyperlinks in the presentation into QR codes using an external API.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slideCount = presentation.GetSlidesCount();
    let urlPattern = /https?:\/\/\S+/g;

    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllShapes();
        let processedUrls = new Set(); // Track processed URLs for the current slide

        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraphs = docContent.GetAllParagraphs();
                paragraphs.forEach(function (paragraph) {
                    let text = paragraph.GetText();
                    if (text) {
                        let match;
                        while ((match = urlPattern.exec(text)) !== null) {
                            let url = match[0].replace(/[.,;!?)]+$/, "");
                            if (!processedUrls.has(url)) {
                                processedUrls.add(url);
                                console.log("Processing URL: " + url);

                                // Encode the URL for the API request
                                let encodedUrl = encodeURIComponent(url);
                                let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200`;

                                // Create an image object from the API URL
                                let image = Api.CreateOleObject(apiUrl, 200 * 3600, 200 * 3600);
                                // Resize
                                image.SetSize(200 * 3600, 200 * 3600);
                                // Set the position and size of the image on the slide
                                image.SetPosition(608400, 1267200); // Adjust the position as needed

                                // Add the image to the slide
                                slide.AddObject(image);
                            }
                        }
                        // Reset lastIndex for the next paragraph
                        urlPattern.lastIndex = 0;
                    }
                });
            }
        });
    }

    console.log("Macro execution completed.");
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [CreateOleObject](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateOleObject.md), [SetSize](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## Result

<!-- imgpath -->

![Hyperlinks to QR codes](/assets/images/plugins/hyperlinks-to-qr-codes.png#gh-light-mode-only)![Hyperlinks to QR codes](/assets/images/plugins/hyperlinks-to-qr-codes.dark.png#gh-dark-mode-only)
