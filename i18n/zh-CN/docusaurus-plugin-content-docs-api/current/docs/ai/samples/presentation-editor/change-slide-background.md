---
description: 更改幻灯片的背景颜色。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 更改幻灯片背景

此函数更改指定幻灯片的背景，支持纯色和渐变填充。

## 提示词

- 将第 1 张幻灯片的背景设为蓝色
- 将第 2 张幻灯片的背景设为颜色 #FF0000 和 #0000FF 的渐变

## 函数注册 {#function-registration}

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

### 参数

| Name           | Type             | Example                  | Description                                        |
| -------------- | ---------------- | ------------------------ | -------------------------------------------------- |
| slideNumber    | number           | 2                        | 要更改背景的幻灯片编号。                             |
| backgroundType | string           | "solid"                  | 背景类型，可选值为 "solid"（纯色）或 "gradient"（渐变）。 |
| color          | string           | "#FF5733"                | 纯色背景的十六进制颜色代码。                         |
| gradientColors | string[] | \["#FF0000", "#0000FF"\] | 渐变背景的十六进制颜色代码数组。                     |

## 函数执行 {#function-execution}

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

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [CreateSolidFill](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](../../../office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [CreateGradientStop](../../../office-api/usage-api/presentation-api/Api/Methods/CreateGradientStop.md), [CreateLinearGradientFill](../../../office-api/usage-api/presentation-api/Api/Methods/CreateLinearGradientFill.md), [SetBackground](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/SetBackground.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/change-slide-background" dark />
