# deleteSlide

This function deletes the specified slide from the current presentation.

## Prompts

- Delete slide 8

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "deleteSlide";
func.params = [
    "slideNumber (number): the slide number to delete"
];

func.examples = [
    "if you need to delete slide 5, respond with:\n" + "[functionCalling (deleteSlide)]: {\"slideNumber\": 5}"
];
```

### Parameters

| Name        | Type   | Example | Description                        |
|-------------|--------|---------|------------------------------------|
| slideNumber | number | 2       | The number of the slide to delete. |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.slideNum = params.slideNumber;

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide = presentation.GetSlideByIndex(Asc.scope.slideNum - 1);
        if (slide) {
            slide.Delete();
        }
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [Delete](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/Delete.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls width="800">
  <source src="/assets/images/plugins/functions-video/deleteSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls width="800">
  <source src="/assets/images/plugins/functions-video/deleteSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
