# addShapeToSlide

This function adds a shape to the slide with optional text. By default, the shape is 139x42 mm, centered, with a blue fill and a dark border.

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "addShapeToSlide";
func.description = "Adds a shape to the slide with optional text (139x42mm, centered, blue fill with dark border)";
func.params = [
    "slideNumber (number): slide number to add shape to (optional, defaults to current)", 
    "shapeType (string): shape type - rect, roundRect, ellipse, triangle, diamond, pentagon, hexagon, star5, plus, mathMinus, mathMultiply, mathEqual, mathNotEqual, heart, cloud, leftArrow, rightArrow, upArrow, downArrow, leftRightArrow, chevron, bentArrow, curvedRightArrow, blockArc, wedgeRectCallout, cloudCallout, ribbon, wave, can, cube, pie, donut, sun, moon, smileyFace, lightningBolt, noSmoking (optional, defaults to roundRect)", 
    "text (string): text to add to the shape (optional)"
];

func.examples = [
    "if you need to add a rectangle with text on slide 2, respond with:\n" + 
    "[functionCalling (addShapeToSlide)]: {\"slideNumber\": 2, \"shapeType\": \"rect\", \"text\": \"Important Point\"}", 
    "if you need to add a star shape on current slide, respond with:\n" + 
    "[functionCalling (addShapeToSlide)]: {\"shapeType\": \"star5\"}", 
    "if you need to add a rounded rectangle with text, respond with:\n" + 
    "[functionCalling (addShapeToSlide)]: {\"text\": \"Key Message\"}", 
    "if you need to add a diamond shape with text, respond with:\n" + 
    "[functionCalling (addShapeToSlide)]: {\"shapeType\": \"diamond\", \"text\": \"Decision Point\"}", 
    "if you need to add a right arrow with text, respond with:\n" + 
    "[functionCalling (addShapeToSlide)]: {\"shapeType\": \"rightArrow\", \"text\": \"Next Step\"}"
];
```

### Parameters

| Name        | Type   | Example          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------|--------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slideNumber | number | 2                | The slide number where the shape will be added. If omitted, the shape is added to the current slide.                                                                                                                                                                                                                                                                                                                                                                                                            |
| shapeType   | string | "rect"           | The shape type can be "rect", "roundRect", "ellipse", "triangle", "diamond", "pentagon", "hexagon", "star5", "plus", "mathMinus", "mathMultiply", "mathEqual", "mathNotEqual", "heart", "cloud", "leftArrow", "rightArrow", "upArrow", "downArrow", "leftRightArrow", "chevron", "bentArrow", "curvedRightArrow", "blockArc", "wedgeRectCallout", "cloudCallout", "ribbon", "wave", "can", "cube", "pie", "donut", "sun", "moon", "smileyFace", "lightningBolt", "noSmoking". The default value is "roundRect". |
| text        | string | "Decision Point" | The text to add to the shape.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Prompts

- Add a rectangle with text "Important Point" on slide 2
- Add a star shape on the current slide
- Add a rounded rectangle with text "Key Message"
- Add a diamond shape with text "Decision Point"
- Add a right arrow with text "Next Step"

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.params = params;

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide;

        if (Asc.scope.params.slideNumber) {
            slide = presentation.GetSlideByIndex(Asc.scope.params.slideNumber - 1);
        }
        else {
            slide = presentation.GetCurrentSlide();
        }

        if (!slide) return;

        let slideWidth = presentation.GetWidth();
        let slideHeight = presentation.GetHeight();

        let shapeType = Asc.scope.params.shapeType || "rect";
        let width = 2500000;
        let height = 2500000;
        let x = (slideWidth - width) / 2;
        let y = (slideHeight - height) / 2;

        let fill = Api.CreateSolidFill(Api.CreateSchemeColor("accent1"));
        let stroke = Api.CreateStroke(12700, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));

        let shape = Api.CreateShape(shapeType, width, height, fill, stroke);
        shape.SetPosition(x, y);

        if (Asc.scope.params.text) {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraph = docContent.GetElement(0);
                if (!paragraph) {
                    paragraph = Api.CreateParagraph();
                    docContent.Push(paragraph);
                }
                paragraph.SetJc("center");
                paragraph.AddText(Asc.scope.params.text);
                shape.SetVerticalTextAlign("center");
            }
        }
        slide.AddObject(shape);
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateSchemeColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSchemeColor.md), [CreateStroke](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md), [CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetVerticalTextAlign](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![addShapeToSlide function](/assets/images/plugins/add-shape-to-slide-function.png#gh-light-mode-only)
![addShapeToSlide function](/assets/images/plugins/add-shape-to-slide-function.dark.png#gh-dark-mode-only)
![addShapeToSlide result](/assets/images/plugins/add-shape-to-slide-result.png#gh-light-mode-only)
![addShapeToSlide result](/assets/images/plugins/add-shape-to-slide-result.dark.png#gh-dark-mode-only)
