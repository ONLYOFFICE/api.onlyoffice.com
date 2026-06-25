---
description: 向幻灯片添加带有文本的形状。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 向幻灯片添加形状

此函数向幻灯片添加带有可选文本的形状。默认情况下，形状尺寸为 139×42 毫米，居中显示，蓝色填充，深色边框。

## 提示词

- 在第 2 张幻灯片上添加一个带有文本"Important Point"的矩形
- 在当前幻灯片上添加一个星形
- 添加一个带有文本"Key Message"的圆角矩形
- 添加一个带有文本"Decision Point"的菱形
- 添加一个带有文本"Next Step"的右箭头

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "addShapeToSlide",
    description:
      "Adds a shape to the slide with optional text (139x42mm, centered, blue fill with dark border)",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description: "Slide number to add shape to",
          minimum: 1,
        },
        shapeType: {
          type: "string",
          description:
            "shape type - rect, roundRect, ellipse, triangle, diamond, pentagon, hexagon, star5, plus, mathMinus, mathMultiply, mathEqual, mathNotEqual, heart, cloud, leftArrow, rightArrow, upArrow, downArrow, leftRightArrow, chevron, bentArrow, curvedRightArrow, blockArc, wedgeRectCallout, cloudCallout, ribbon, wave, can, cube, pie, donut, sun, moon, smileyFace, lightningBolt, noSmoking",
        },
        text: {
          type: "string",
          description: "Text to add to the shape",
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "add a rectangle with text on slide 2",
        arguments: { slideNumber: 2, shapeType: "rect" },
      },
      {
        prompt: "add a star shape on current slide",
        arguments: { shapeType: "star5" },
      },
      {
        prompt: "add a rounded rectangle with text",
        arguments: { text: "Key Message" },
      },
      {
        prompt: "add a diamond shape with text",
        arguments: { shapeType: "diamond", text: "Decision Point" },
      },
      {
        prompt: "add a right arrow with text",
        arguments: { shapeType: "rightArrow", text: "Next Step" },
      },
    ],
  });

  return func;
})();
```

### 参数

| Name        | Type   | Example          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-------------|--------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slideNumber | number | 2                | 要添加形状的幻灯片编号。如果省略，则将形状添加到当前幻灯片。                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| shapeType   | string | "rect"           | 形状类型，可选值为 "rect"、"roundRect"、"ellipse"、"triangle"、"diamond"、"pentagon"、"hexagon"、"star5"、"plus"、"mathMinus"、"mathMultiply"、"mathEqual"、"mathNotEqual"、"heart"、"cloud"、"leftArrow"、"rightArrow"、"upArrow"、"downArrow"、"leftRightArrow"、"chevron"、"bentArrow"、"curvedRightArrow"、"blockArc"、"wedgeRectCallout"、"cloudCallout"、"ribbon"、"wave"、"can"、"cube"、"pie"、"donut"、"sun"、"moon"、"smileyFace"、"lightningBolt"、"noSmoking"。默认值为 "roundRect"。 |
| text        | string | "Decision Point" | 要添加到形状中的文本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.params = params;

  await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let slide;

    if (Asc.scope.params.slideNumber) {
      slide = presentation.GetSlideByIndex(
        Asc.scope.params.slideNumber - 1
      );
    } else {
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

    let fill = Api.CreateSolidFill(
      Api.CreateSchemeColor("accent1")
    );
    let stroke = Api.CreateStroke(
      12700,
      Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51))
    );

    let shape = Api.CreateShape(
      shapeType,
      width,
      height,
      fill,
      stroke
    );
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
```

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateSolidFill](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateSchemeColor](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSchemeColor.md), [CreateStroke](../../../office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md), [CreateRGBColor](../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateShape](../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElement](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [CreateParagraph](../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [SetJc](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetVerticalTextAlign](../../../office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-shape-to-slide" dark />
