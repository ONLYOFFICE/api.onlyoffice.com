# duplicateSlide

This function duplicates the specified slide in the current presentation.

## Prompts

- Duplicate slide 8

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "duplicateSlide";
func.params = [
    "slideNumber (number): the slide number to duplicate"
];

func.examples = [
    "if you need to duplicate slide 3, respond with:\n" + 
    "[functionCalling (duplicateSlide)]: {\"slideNumber\": 3}"
];
```

### Parameters

| Name        | Type   | Example | Description                           |
|-------------|--------|---------|---------------------------------------|
| slideNumber | number | 2       | The number of the slide to duplicate. |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.slideNum = params.slideNumber;

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide = presentation.GetSlideByIndex(Asc.scope.slideNum - 1);
        if (slide) {
            let newSlide = slide.Duplicate(Asc.scope.slideNum);
        }
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [Duplicate](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/Duplicate.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/duplicateSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls width="600">
  <source src="/assets/images/plugins/functions-video/duplicateSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
