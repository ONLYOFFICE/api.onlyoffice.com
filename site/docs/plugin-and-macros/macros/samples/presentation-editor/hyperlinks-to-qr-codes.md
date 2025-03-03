# Hyperlinks to QR codes

## Description

Converts all the hyperlinks in the presentation into QR codes using an external API.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    try {
        const oPresentation = Api.GetPresentation();
        const slideCount = oPresentation.GetSlidesCount();
        const urlPattern = /https?:\/\/\S+/g;

        for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
            const oSlide = oPresentation.GetSlideByIndex(slideIndex);
            const aShapes = oSlide.GetAllShapes();
            const processedUrls = new Set(); // Track processed URLs for the current slide

            aShapes.forEach(function (oShape) {
                const oDocContent = oShape.GetDocContent();
                if (oDocContent) {
                    const paragraphs = oDocContent.GetAllParagraphs();
                    paragraphs.forEach(function (paragraph) {
                        const text = paragraph.GetText();
                        if (text) {
                            let match;
                            while ((match = urlPattern.exec(text)) !== null) {
                                let url = match[0].replace(/[.,;!?)]+$/, "");
                                if (!processedUrls.has(url)) {
                                    processedUrls.add(url);
                                    console.log("Processing URL: " + url);

                                    // Encode the URL for the API request
                                    const encodedUrl = encodeURIComponent(url);
                                    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200`;

                                    // Create an image object from the API URL
                                    const oImage = Api.CreateOleObject(apiUrl, 200 * 3600, 200 * 3600);
                                    //   resize
                                    oImage.SetSize(200 * 3600, 200 * 3600)
                                    // Set the position and size of the image on the slide
                                    oImage.SetPosition(608400, 1267200); // Adjust the position as needed

                                    // Add the image to the slide
                                    oSlide.AddObject(oImage);
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
    } catch (error) {
        console.log("An error occurred: ", error);
    }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](../../../../office-api/usage-api/presentation-api/ApiDocContent/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [CreateOleObject](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateOleObject.md), [SetSize](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## Result

<!-- imgpath -->

![](/assets/images/plugins/hyperlinks-to-qr-codes.png)
