# deleteSlide

This function deletes the specified slide from the current presentation.

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

### Prompts

- Delete slide 8

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

![deleteSlide function](/assets/images/plugins/delete-slide-function.png#gh-light-mode-only)
![deleteSlide function](/assets/images/plugins/delete-slide-function.dark.png#gh-dark-mode-only)
![deleteSlide result](/assets/images/plugins/delete-slide-result.png#gh-light-mode-only)
![deleteSlide result](/assets/images/plugins/delete-slide-result.dark.png#gh-dark-mode-only)
