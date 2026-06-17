---
description: 在演示文稿中复制指定的幻灯片。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 复制幻灯片

此函数在当前演示文稿中复制指定的幻灯片。

## 提示词

- 复制第 8 张幻灯片

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "duplicateSlide",
    description: "Duplicates slide with the specific index or current",
    parameters: {
      type: "object",
      properties: {
        slideNumber: {
          type: "number",
          description: "the slide number to duplicate",
          minimum: 1,
        },
      },
      required: [],
    },
    examples: [
      {
        prompt: "duplicate slide 3",
        arguments: { slideNumber: 3 },
      },

      {
        prompt: "duplicate slide",
        arguments: {},
      },
    ],
  });
  return func;
})();
```

### 参数

| Name        | Type   | Example | Description          |
| ----------- | ------ | ------- | -------------------- |
| slideNumber | number | 2       | 要复制的幻灯片编号。   |

## 函数执行 {#function-execution}

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
    let slideIdx = slide.GetSlideIndex();
    if (slide) {
      slide.Duplicate(slideIdx + 1);
      return { idx: slideIdx + 1 };
    }
    return null;
  });
  if (data) {
    await Asc.Editor.callMethod("GoToSlide", [data["idx"] + 1]);
  }
};
```

使用的方法：[GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [Duplicate](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/Duplicate.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/duplicate-slide" dark />
