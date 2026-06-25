---
description: 向幻灯片占位符添加文本。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 向占位符添加文本

此函数向指定幻灯片或当前幻灯片添加任意文本内容。适用于所有文本插入请求，包括食谱、列表、说明、备注、创意或其他文本内容。

## 提示词

- 添加咖啡食谱：Coffee Recipe:\n1. Grind coffee beans\n2. Heat water to 95°C\n3. Pour water over coffee\n4. Wait 4 minutes\n5. Enjoy
- 插入购物清单：Shopping List:\n- Milk\n- Bread\n- Eggs\n- Coffee\n- Sugar
- 在第 9 张幻灯片上添加标题 Introduction

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "addTextToPlaceholder",
    description:
      "Universal function for adding ANY text content to slides. Use this for ALL text addition requests: recipes, lists, instructions, notes, ideas, or any other text content.",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description:
            "the slide number to add text to (optional, default current slide)",
          minimum: 1,
        },
        text: {
          type: "string",
          description:
            "ANY text content to add - recipes, lists, instructions, notes, ideas, descriptions, stories, data, or whatever user asks to add",
        },
        textType: {
          type: "string",
          description:
            "type of text - 'body', 'chart', 'clipArt', 'ctrTitle', 'diagram', 'date', 'footer', 'header', 'media', 'object', 'picture', 'sldImage', 'sldNumber', 'subTitle', 'table', 'title' (optional, default 'body')",
        },
        prompt: {
          type: "string",
          description:
            "AI instructions for text enhancement or generation (optional)",
        },
      },
      required: [],
    },
    examples: [
      {
        prompt:
          "add [anything] or write [anything] or create text about [anything]'",
        arguments: {
          text: "[generated or specified content]",
          textType: "body",
        },
      },
      {
        prompt: "add recipe for coffee or just recipe for coffee",
        arguments: {
          text: "Coffee Recipe:\\n1. Grind coffee beans\\n2. Heat water to 95°C\\n3. Pour water over coffee\\n4. Wait 4 minutes\\n5. Enjoy",
          textType: "body",
        },
      },
      {
        prompt: "generate content",
        arguments: {
          text: "Topic",
          textType: "body",
          prompt: "generate detailed content about this topic",
        },
      },
    ],
  });
  return func;
})();
```

### 参数

| Name        | Type   | Example                                      | Description                                                                                                                                                                                                           |
| ----------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| slideNumber | number | 2                                            | 要添加文本的幻灯片编号。如果省略，则将文本添加到当前幻灯片。                                                                                                                                                           |
| text        | string | "Introduction"                               | 要添加的文本内容，可包括食谱、列表、说明、备注、创意、描述、故事、数据或用户要求添加的任何其他文本。                                                                                                                    |
| textType    | string | "title"                                      | 文本类型，可选值为 "body"、"chart"、"clipArt"、"ctrTitle"、"diagram"、"date"、"footer"、"header"、"media"、"object"、"picture"、"sldImage"、"sldNumber"、"subTitle"、"table"、"title"。默认值为 "body"。               |
| prompt      | string | "generate detailed content about this topic" | 用于文本增强或生成的 AI 指令。                                                                                                                                                                                         |

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.slideNum = params.slideNumber;
  Asc.scope.text = params.text;
  Asc.scope.textType = params.textType || "body";
  Asc.scope.prompt = params.prompt;

  await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let slide;

    if (Asc.scope.slideNum) {
      slide = presentation.GetSlideByIndex(Asc.scope.slideNum - 1);
    } else {
      slide = presentation.GetCurrentSlide();
    }

    if (!slide) return;

    const placeholderGroups = {
      titles: ["title", "ctrTitle"],
      subTitles: ["subTitle"],
      content: ["body", "object", "unknown"],
      media: [
        "picture",
        "chart",
        "media",
        "clipArt",
        "diagram",
        "sldImage",
        "table",
      ],
      footer: ["footer", "date", "sldNumber", "header"],
    };

    function findPlaceholderGroup(type) {
      for (let groupName in placeholderGroups) {
        if (placeholderGroups[groupName].includes(type)) {
          return placeholderGroups[groupName];
        }
      }
      return [type];
    }

    function findShapeByPlaceholderType(slide, placeholderTypes) {
      let allDrawings = slide.GetAllDrawings();

      for (let type of placeholderTypes) {
        for (let i = 0; i < allDrawings.length; i++) {
          let drawing = allDrawings[i];

          let ph = drawing.GetPlaceholder();
          if (ph) {
            if (ph.GetType() === type) {
              return { shape: drawing, foundType: type };
            }
          }
        }
      }

      return null;
    }

    let placeholderGroup = findPlaceholderGroup(Asc.scope.textType);

    let searchResult = findShapeByPlaceholderType(slide, placeholderGroup);
    let targetShape = searchResult ? searchResult.shape : null;
    let foundType = searchResult ? searchResult.foundType : null;

    if (
      !targetShape &&
      !placeholderGroups.content.includes(Asc.scope.textType)
    ) {
      searchResult = findShapeByPlaceholderType(
        slide,
        placeholderGroups.content,
      );
      targetShape = searchResult ? searchResult.shape : null;
      foundType = searchResult ? searchResult.foundType : null;
    }

    let bNewShape = false;
    if (!targetShape) {
      let slideWidth = presentation.GetWidth();
      let slideHeight = presentation.GetHeight();

      let sizes = {
        title: { width: 0.8, height: 0.1 },
        ctrTitle: { width: 0.8, height: 0.1 },
        subTitle: { width: 0.8, height: 0.08 },
        body: { width: 0.8, height: 0.6 },
        object: { width: 0.8, height: 0.6 },
        picture: { width: 0.5, height: 0.4 },
        chart: { width: 0.6, height: 0.5 },
        table: { width: 0.8, height: 0.6 },
        media: { width: 0.6, height: 0.5 },
        clipArt: { width: 0.3, height: 0.3 },
        diagram: { width: 0.7, height: 0.5 },
        sldImage: { width: 0.6, height: 0.5 },
        footer: { width: 0.8, height: 0.06 },
        header: { width: 0.8, height: 0.06 },
        date: { width: 0.2, height: 0.04 },
        sldNumber: { width: 0.1, height: 0.04 },
      };

      let size = sizes[Asc.scope.textType] || sizes.body;
      let shapeWidth = slideWidth * size.width;
      let shapeHeight = slideHeight * size.height;
      let x = (slideWidth - shapeWidth) / 2;
      let y = (slideHeight - shapeHeight) / 2;

      let oFill = Api.CreateNoFill();
      let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
      targetShape = Api.CreateShape(
        "rect",
        shapeWidth,
        shapeHeight,
        oFill,
        oStroke,
      );
      targetShape.SetPosition(x, y);

      slide.AddObject(targetShape);
      foundType = Asc.scope.textType;
      bNewShape = true;
    }

    let docContent = targetShape.GetDocContent();
    if (docContent) {
      let internalContent = docContent.Content || docContent;

      while (internalContent.GetElementsCount() > 1) {
        internalContent.RemoveElement(1);
      }

      let lines = Asc.scope.text
        .split("\n")
        .filter((line) => line.trim() !== "");

      if (lines.length === 1) {
        let paragraph = internalContent.GetElement(0);
        if (paragraph) {
          paragraph.RemoveAllElements();
          paragraph.AddText(lines[0]);
        }
      } else {
        let firstParagraph = internalContent.GetElement(0);
        if (firstParagraph) {
          firstParagraph.RemoveAllElements();
          let run = firstParagraph.AddText(lines[0]);
          if (bNewShape) {
            run.SetFill(Api.CreateSolidFill(Api.CreateSchemeColor("tx1")));
          }
        }

        for (let i = 1; i < lines.length; i++) {
          let newParagraph = Api.CreateParagraph();
          let run = newParagraph.AddText(lines[i]);
          if (bNewShape) {
            run.SetFill(Api.CreateSolidFill(Api.CreateSchemeColor("tx1")));
          }
          internalContent.Push(newParagraph);
        }
      }

      return;
    }

    return;
  });
};
```

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetPlaceholder](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetPlaceholder.md), [GetType](../../../office-api/usage-api/presentation-api/ApiPlaceholder/Methods/GetType.md), [GetWidth](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetWidth.md), [GetHeight](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetHeight.md), [CreateNoFill](../../../office-api/usage-api/presentation-api/Api/Methods/CreateNoFill.md), [CreateStroke](../../../office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md), [CreateShape](../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [RemoveElement](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveElement.md), [GetElement](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [RemoveAllElements](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetFill](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md), [CreateSolidFill](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateSchemeColor](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSchemeColor.md), [CreateParagraph](../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [Push](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-text-to-placeholder" dark />
