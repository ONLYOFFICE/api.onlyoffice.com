# changeSlideBackground

This function changes the background of a specified slide. Supports solid colors and gradient fills.

## Prompts

- Set blue background on slide 1
- Set gradient background with colors #FF0000 and #0000FF on slide 2

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "changeSlideBackground";
func.params = [
    "slideNumber (number): the slide number to change background", 
    "backgroundType (string): type of background - 'solid', 'gradient'", 
    "color (string): hex color for solid background (e.g., '#FF5733')", 
    "gradientColors (array): array of hex colors for gradient"
];

func.examples = [
    "if you need to set blue background on slide 1, respond with:\n" + 
    "[functionCalling (changeSlideBackground)]: {\"slideNumber\": 1, \"backgroundType\": \"solid\", \"color\": \"#0066CC\"}", 
    "if you need to set gradient background, respond with:\n" + 
    "[functionCalling (changeSlideBackground)]: {\"slideNumber\": 2, \"backgroundType\": \"gradient\", \"gradientColors\": [\"#FF0000\", \"#0000FF\"]}"
];
```

### Parameters

| Name           | Type             | Example                  | Description                                                      |
|----------------|------------------|--------------------------|------------------------------------------------------------------|
| slideNumber    | number           | 2                        | The slide number to change the background.                       |
| backgroundType | string           | "solid"                  | The background type can be "solid" or "gradient".                |
| color          | string           | "#FF5733"                | The hexadecimal color code for the solid background.             |
| gradientColors | array of strings | \["#FF0000", "#0000FF"\] | An array of hexadecimal color codes for the gradient background. |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.params = params;

    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let slide = presentation.GetSlideByIndex(Asc.scope.params.slideNumber - 1);
        if (!slide) return;

        let fill;

        switch (Asc.scope.params.backgroundType) {
            case "solid":
                if (Asc.scope.params.color) {
                    let rgb = parseInt(Asc.scope.params.color.slice(1), 16);
                    let r = (rgb >> 16) & 255;
                    let g = (rgb >> 8) & 255;
                    let b = rgb & 255;
                    fill = Api.CreateSolidFill(Api.CreateRGBColor(r, g, b));
                }
                break;

            case "gradient":
                if (Asc.scope.params.gradientColors && Asc.scope.params.gradientColors.length >= 2) {
                    let stops = [];
                    let step = 100000 / (Asc.scope.params.gradientColors.length - 1);

                    for (let i = 0; i < Asc.scope.params.gradientColors.length; i++) {
                        let color = Asc.scope.params.gradientColors[i];
                        let rgb = parseInt(color.slice(1), 16);
                        let r = (rgb >> 16) & 255;
                        let g = (rgb >> 8) & 255;
                        let b = rgb & 255;
                        let stop = Api.CreateGradientStop(Api.CreateRGBColor(r, g, b), i * step);
                        stops.push(stop);
                    }

                    fill = Api.CreateLinearGradientFill(stops, 5400000);
                }
                break;
        }

        if (fill) {
            slide.SetBackground(fill);
        }
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateGradientStop](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateGradientStop.md), [CreateLinearGradientFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateLinearGradientFill.md), [SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

![changeSlideBackground](/assets/images/plugins/functions-gifs/change-slide-background-function.gif#gh-light-mode-only)
![changeSlideBackground](/assets/images/plugins/functions-gifs/change-slide-background-function.dark.gif#gh-dark-mode-only)
