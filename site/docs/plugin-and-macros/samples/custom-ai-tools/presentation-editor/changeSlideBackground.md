# changeSlideBackground

This function changes the background of a specified slide. Supports solid colors and gradient fills.

## Prompts

- Set blue background on slide 1
- Set gradient background with colors #FF0000 and #0000FF on slide 2

## Function registration {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "changeSlideBackground",
    description: "Changes the color of the slide in the presentation.",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description: "Slide number to apply the color",
          minimum: 1,
        },
        backgroundType: {
          type: "string",
          description: "type of background - 'solid', 'gradient'",
        },
        color: {
          type: "string",
          description: "hex color for solid background (e.g., '#FF5733')",
        },
        gradientColors: {
          type: "array",
          description: "array of hex colors for gradient",
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "set blue background on slide 1",
        arguments: {
          slideNumber: 1,
          backgroundType: "solid",
          color: "#0066CC",
        },
      },
      {
        prompt: "set gradient background",
        arguments: {
          backgroundType: "gradient",
          gradientColors: ["#FF0000", "#0000FF"],
        },
      },
    ],
  });
  return func;
})();
```

### Parameters

| Name           | Type             | Example                  | Description                                                      |
| -------------- | ---------------- | ------------------------ | ---------------------------------------------------------------- |
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
    if (!slide) slide = presentation.GetCurrentSlide();
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
        if (
          Asc.scope.params.gradientColors &&
          Asc.scope.params.gradientColors.length >= 2
        ) {
          let stops = [];
          let step = 100000 / (Asc.scope.params.gradientColors.length - 1);

          for (let i = 0; i < Asc.scope.params.gradientColors.length; i++) {
            let color = Asc.scope.params.gradientColors[i];
            let rgb = parseInt(color.slice(1), 16);
            let r = (rgb >> 16) & 255;
            let g = (rgb >> 8) & 255;
            let b = rgb & 255;
            let stop = Api.CreateGradientStop(
              Api.CreateRGBColor(r, g, b),
              i * step,
            );
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
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateGradientStop](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateGradientStop.md), [CreateLinearGradientFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateLinearGradientFill.md), [SetBackground](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/presentation-editor/changeSlideBackground.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/changeSlideBackground.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
