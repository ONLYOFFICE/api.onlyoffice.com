---
description: 为文档中的图像生成描述。
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 描述图像

此函数分析选中的图像，并使用 AI 模型生成标题、说明、描述或替代文本，然后将生成的文本插入文档。

## 提示词

- 为选中的图像生成说明
- 为选中的图表添加简短标题
- 为此信息图提供无障碍友好的替代文本
- 为此照片撰写 1-2 句描述

## 函数注册 {#function-registration}

```js
let func = new RegisteredFunction({
    name: "describeImage",
    description:
        "Allows users to select an image and generate a meaningful title, description, caption, or alt text for it using AI.",
    parameters: {
        type: "object",
        properties: {
            prompt: {
                type: "string",
                description:
                    "instruction for the AI (e.g., 'Add a short title for this chart.')",
            },
        },
        required: ["prompt"],
    },
    examples: [
        {
            prompt: "Add a short title for this chart.",
            arguments: { prompt: "Add a short title for this chart." },
        }
    ]
});
```

## 函数执行 {#function-execution}

```js
  func.call = async function (params) {
    let prompt = params.prompt;

    async function insertMessage(message) {
      Asc.scope._message = String(message || "");
      await Asc.Editor.callCommand(function () {
        const msg = Asc.scope._message || "";
        const doc = Api.GetDocument();
        const selected =
          (doc.GetSelectedDrawings && doc.GetSelectedDrawings()) || [];
        if (selected.length > 0) {
          for (let i = 0; i < selected.length; i++) {
            const drawing = selected[i];
            const para = Api.CreateParagraph();
            para.AddText(msg);
            drawing.InsertParagraph(para, "after", true);
          }
        } else {
          const para = Api.CreateParagraph();
          para.AddText(msg);
          let range = doc.GetCurrentParagraph();
          range.InsertParagraph(para, "after", true);
        }
        Asc.scope._message = "";
      }, true);
    }

    try {
      let imageData = await new Promise((resolve) => {
        window.Asc.plugin.executeMethod(
          "GetImageDataFromSelection",
          [],
          function (result) {
            console.log("describeImage: GetImageDataFromSelection result received", result ? "data found" : "no data");
            resolve(result);
          }
        );
      });

      if (!imageData || !imageData.src) {
        await insertMessage("Please select a valid image first.");
        return;
      }

      const whiteRectangleBase64 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";
      if (imageData.src === whiteRectangleBase64) {
        await insertMessage("Please select a valid image first.");
        return;
      }

      let argPrompt = prompt + " (for the selected image)";
      let requestEngine = AI.Request.create(AI.ActionType.Vision);
      if (!requestEngine) {
        await insertMessage("AI request engine not available.");
        return;
      }
      await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
      
      let resultText = "";
      try {
        let result = await requestEngine.imageVisionRequest({
            prompt: argPrompt,
            image: imageData.src
        });
        
        if (result) {
            resultText = result;
        }
      } catch (e) {
          console.error("describeImage: imageVisionRequest failed", e);
      }

      Asc.scope.text = resultText || "";

      if (!Asc.scope.text.trim()) {
        await insertMessage(
          "⚠ AI request failed or returned empty response. The model may not support images."
        );
        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
        return;
      }
      await insertMessage(Asc.scope.text);
      await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    } catch (e) {
      try {
        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
      } catch (ee) {
        /* ignore */
      }
      console.error("describeImage error:", e);
      await insertMessage(
        "An unexpected error occurred while describing the image: " + (e.message || e)
      );
    }
  };

  return func;
```

使用的方法：[GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [GetSelectedDrawings](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetSelectedDrawings.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [InsertParagraph](../../../office-api/usage-api/document-api/ApiParagraph/Methods/InsertParagraph.md), [GetImageDataFromSelection](../../../plugins/interacting-with-editors/document-api/Methods/GetImageDataFromSelection.md)  

## 结果

<Video src="/assets/images/plugins/functions-video/document-editor/describe-image" dark />
