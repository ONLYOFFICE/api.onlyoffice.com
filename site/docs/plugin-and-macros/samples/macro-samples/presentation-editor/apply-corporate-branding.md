---
hide_table_of_contents: true
---

# Apply corporate branding

Applies corporate branding styles to a presentation, including text color, font, and logo placement.

```ts
(function () {
    // Configuration object for branding styles
    let brandingConfig = {
        colors: {
            text: { r: 255, g: 111, b: 61 },
        },
        fonts: {
            text: "Arial",
        },
        logo: {
            // Sample Base64 encoded image
            url: "data:image/png;base64, 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", // Sample Base64 image
            width: 174 * 12800,
            height: 38 * 12800,
            positionX: 608400,
            positionY: 500000,
        },
    };
    function createLogoImage(config) {
        let image = Api.CreateOleObject(config.url, config.width, config.height);
        image.SetSize(config.width, config.height);
        image.SetPosition(config.positionX, config.positionY);
        return image;
    }

    function applyTextStyles(paragraphs, fonts, colors) {
        paragraphs.forEach((paragraph) => {
            paragraph.SetColor(colors.text.r, colors.text.g, colors.text.b);
            paragraph.SetFontFamily(fonts.text);
        });
    }

    // Function to apply branding to a slide
    function applyBrandingToSlide(slide, config) {
        let logo = createLogoImage(config.logo);
        slide.AddObject(logo);
        let shapes = slide.GetAllShapes();

        shapes.forEach((shape) => {
            let docContent = shape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            if (paragraphs) {
                applyTextStyles(paragraphs, config.fonts, config.colors);
            }
        });
    }

    function applyBrandingToPresentation() {
        let presentation = Api.GetPresentation();
        let slideCount = presentation.GetSlidesCount();
        for (let i = 0; i < slideCount; i++) {
            let slide = presentation.GetSlideByIndex(i);
            if (slide) {
                applyBrandingToSlide(slide, brandingConfig);
            }
        }
    }

    applyBrandingToPresentation();
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreateOleObject](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateOleObject.md), [SetSize](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [SetColor](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md), [SetFontFamily](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)

## Result

![ApplyCorporateBranding](/assets/images/plugins/apply-corporate-branding.png#gh-light-mode-only)
![ApplyCorporateBranding](/assets/images/plugins/apply-corporate-branding.dark.png#gh-dark-mode-only)
