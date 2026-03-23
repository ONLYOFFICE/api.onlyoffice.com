# deleteSlide

This function deletes the specified slide from the current presentation.

## Prompts

- Delete slide 8

## Function registration {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "deleteSlide",
    description: "Deletes slide with the specific index or current",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description: "the slide number to delete",
          minimum: 1,
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "delete slide 5",
        arguments: { slideNumber: 5 },
      },

      {
        prompt: "delete slide",
        arguments: {},
      },
    ],
  });
  return func;
})();
```

### Parameters

| Name        | Type   | Example | Description                        |
| ----------- | ------ | ------- | ---------------------------------- |
| slideNumber | number | 2       | The number of the slide to delete. |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.slideNum = params.slideNumber;

  let data = await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let slide;
    if (Asc.scope.slideNum !== undefined && Asc.scope.slideNum !== null) {
      slide = presentation.GetSlideByIndex(Asc.scope.slideNum - 1);
    }
    if (!slide) slide = presentation.GetCurrentSlide();
    if (!slide) {
      return null;
    }
    let curSlideIdx = presentation.GetCurSlideIndex();
    let slideIdx = slide.GetSlideIndex();
    slide.Delete();
    return { curSlideIdx: curSlideIdx, slideIdx: slideIdx };
  });
  if (data) {
    if (data["slideIdx"] <= data["curSlideIdx"]) {
      await Asc.Editor.callMethod("GoToSlide", [data["curSlideIdx"]]);
    }
  }
};
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [Delete](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/Delete.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/presentation-editor/deleteSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/deleteSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
