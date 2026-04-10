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

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取当前幻灯片索引](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurSlideIndex.md)，[按索引获取幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)，[创建纯色填充](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md)，[创建RGB颜色](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md)，[获取形状类型](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetClassType.md)，[获取元素数量](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md)，[获取元素](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md)，[获取段落属性](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md)，[获取左缩进](/docs/office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md)，[获取内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetContent.md)，[创建幻灯片](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md)，[添加幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)，[获取宽度](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md)，[获取高度](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md)，[创建形状](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md)，[设置位置](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md)，[创建占位符](/docs/office-api/usage-api/presentation-api/Api/Methods/CreatePlaceholder.md)，[设置占位符](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPlaceholder.md)，[移除所有元素](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md)，[创建段落](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md)，[创建文本块](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRun.md)，[获取文本属性](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr.md)，[设置字体大小](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize.md)，[设置填充](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill.md)，[添加文本](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md)，[添加元素](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md)，[推送元素](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md)，[添加对象](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)，[获取所有形状](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)

## 结果

![从列表项创建幻灯片](/assets/images/plugins/create-similar-slides.png#gh-light-mode-only)
![从列表项创建幻灯片](/assets/images/plugins/create-similar-slides.dark.png#gh-dark-mode-only)
