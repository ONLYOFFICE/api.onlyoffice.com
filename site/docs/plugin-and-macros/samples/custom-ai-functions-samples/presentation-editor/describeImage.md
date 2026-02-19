# describeImage

This function analyzes the currently selected image and generates a title, caption, description, or alt text using an AI model. The generated text is then inserted into the slide.

## Prompts
- Generate a caption for the selected image
- Add a short title for the selected chart
- Provide accessibility‑friendly alt text for this infographic
- Write a 1–2 sentence description of this photo

## Function registration

```ts
 let func = new RegisteredFunction({
    "name": "describeImage",
    "description": "Allows users to select an image and generate a meaningful title, description, caption, or alt text for it using AI.",
    "parameters": {
      "type": "object",
      "properties": {
        "prompt": {
          "type": "string",
          "description": "instruction for the AI (e.g., 'Add a short title for this chart.')"
        }
      },
      "required": ["prompt"]
    },
    "examples": [
      {
        "prompt": "Add a short title for this chart.",
        "arguments": { "prompt": "Add a short title for this chart." }
      }
    ]
});
```
## Function execution
```ts
  func.call = async function (params) {
    async function insertMessage(message) {
      Asc.scope._message = String(message || "");
      await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide = presentation.GetCurrentSlide();

        let fill = Api.CreateNoFill();
        let stroke = Api.CreateStroke(0, Api.CreateNoFill());
        let shape = Api.CreateShape(
          "rect",
          300 * 36000,
          40 * 36000,
          fill,
          stroke
        );
        shape.SetPosition(720000, 3600000);

        let docContent = shape.GetDocContent();
        let p = docContent.GetElement(0);

        let run = Api.CreateRun();
        run.SetFontSize(22);
        run.SetColor(0, 0, 0);
        run.AddText(Asc.scope._message);
        p.AddElement(run);

        slide.AddObject(shape);
        Asc.scope._message = "";
      }, true);
    }

    try {
      let imageData = await new Promise((resolve) => {
        window.Asc.plugin.executeMethod(
          "GetImageDataFromSelection",
          [],
          function (result) {
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

      let argPrompt = params.prompt + " (for the selected image)";
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

      if (Asc.scope.text && Asc.scope.text.trim().length > 0) {
        await insertMessage(Asc.scope.text);
      }
      await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    } catch (e) {
      try {
        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
      } catch (ee) {}
      console.error("[describeImage] error:", e);
      await insertMessage("An error occurred while describing the image.");
    }
  };
  return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [CreateNoFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateNoFill.md), [CreateStroke](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateStroke.md), [CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElement](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [CreateRun](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRun.md), [SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetFill](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFill.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md), [AddElement](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/describeImageSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/describeImageSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
