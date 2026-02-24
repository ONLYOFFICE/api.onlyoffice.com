# describeImage

This function analyzes the selected image and generates a title, caption, description, or alt text using an AI model. The generated text is inserted into the document.

## Prompts

- Generate a caption for the selected image
- Add a short title for the selected chart
- Provide accessibility-friendly alt text for this infographic
- Write a 1-2 sentence description of this photo

## Function registration {#function-registration}

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

## Function execution {#function-execution}
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
Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [GetSelectedDrawings](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetSelectedDrawings.md), [GetCurrentParagraph](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [GetImageDataFromSelection](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/GetImageDataFromSelection.md)  

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/describeImage.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/describeImage.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
