---
hide_table_of_contents: true
---

# 从列表项创建幻灯片

根据当前幻灯片中的列表项创建新幻灯片。每个列表项将成为一张幻灯片的标题。

```ts
(function () {
    let presentation = Api.GetPresentation();
    let activeSlideIndex = presentation.GetCurSlideIndex();
    let slide = presentation.GetSlideByIndex(activeSlideIndex);
    let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));

    if (!slide) {
        console.error("No slide is currently selected");
        return;
    }

    function processShapes(shapes, startIndex = 0, numberedItems = []) {
        if (startIndex >= shapes.length) {
            return numberedItems;
        }

        let shape = shapes[startIndex];

        if (shape.GetContent && shape.GetClassType() === "shape") {
            function processParagraphs(content, paraIndex = 0) {
                if (paraIndex >= content.GetElementsCount()) {
                    return;
                }

                let paragraph = content.GetElement(paraIndex);
                let text = paragraph.GetText();

                if (paragraph.GetParaPr().GetIndLeft() > 0) {
                    numberedItems.push(text.trim());
                }

                processParagraphs(content, paraIndex + 1);
            }

            let content = shape.GetContent();
            processParagraphs(content);
        }
        return processShapes(shapes, startIndex + 1, numberedItems);
    }
    function createSlides(items, index = 0) {
        if (index >= items.length) {
            return;
        }

        let newSlide = Api.CreateSlide();
        presentation.AddSlide(newSlide);

        let slideWidth = presentation.GetWidth();
        let slideHeight = presentation.GetHeight();

        let shapeWidth = slideWidth * 0.7; // 可按照偏好调整形状宽度
        let shapeHeight = slideHeight * 0.25; // 可按照偏好调整形状高度

        let posX = (slideWidth - shapeWidth) / 2; // 水平居中位，可根据偏好调整
        let posY = slideHeight * 0.1; // 垂直顶部位置，可根据偏好调整

        let subtitleShape = Api.CreateShape("rect", shapeWidth, shapeHeight);

        subtitleShape.SetPosition(posX, posY);

        let placeholder = Api.CreatePlaceholder("subtitle");
        subtitleShape.SetPlaceholder(placeholder);

        let content = subtitleShape.GetContent();
        if (content) {
            content.RemoveAllElements();

            let newParagraph = Api.CreateParagraph();
            let newRun = Api.CreateRun();
            let newTextPr = newRun.GetTextPr();
            newTextPr.SetFontSize(50);
            newTextPr.SetFill(fill);
            newRun.AddText(items[index]);
            newParagraph.AddElement(newRun);
            content.Push(newParagraph);
        }

        newSlide.AddObject(subtitleShape);

        createSlides(items, index + 1);
    }

    let shapes = slide.GetAllShapes();
    let numberedItems = processShapes(shapes);

    if (numberedItems.length === 0) {
        return;
    }

    createSlides(numberedItems);
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation), [GetCurSlideIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurSlideIndex), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex), [CreateSolidFill](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill), [CreateRGBColor](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetClassType), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount), [GetElement](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft), [GetContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetContent), [CreateSlide](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide), [AddSlide](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight), [CreateShape](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition), [CreatePlaceholder](../../../../office-api/usage-api/presentation-api/Api/Methods/CreatePlaceholder), [SetPlaceholder](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPlaceholder), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph), [CreateRun](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateRun), [GetTextPr](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize), [SetFill](../../../../office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill), [AddText](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/AddText), [AddElement](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes)

## 结果

![从列表项创建幻灯片](/assets/images/plugins/create-similar-slides.png#gh-light-mode-only)
![从列表项创建幻灯片](/assets/images/plugins/create-similar-slides.dark.png#gh-dark-mode-only)
