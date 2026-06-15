---
description: 向演示文稿添加新幻灯片。
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 添加新幻灯片

此函数使用当前幻灯片母版的默认版式，在演示文稿末尾添加一张新幻灯片。

## 提示词

- 添加新幻灯片

## 函数注册 {#function-registration}

```ts
(function () {
  let func = new RegisteredFunction({
    name: "addNewSlide",
    description:
      "Adds a new slide at the end of presentation using default layout from current slide's master",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
    examples: [
      {
        prompt: "Add new slide",
        arguments: {},
      },
    ],
  });

  return func;
})();
```

## 函数执行 {#function-execution}

```ts
func.call = async function (params) {
  Asc.scope.params = params;

  await Asc.Editor.callCommand(function () {
    let presentation = Api.GetPresentation();
    let currentSlide = presentation.GetCurrentSlide();
    let master;

    if (!currentSlide) {
      currentSlide = presentation.GetSlideByIndex(0);
      let curLayout = currentSlide.GetLayout();
      master = curLayout.GetMaster();
    } else {
      master = presentation.GetMaster(0);
    }

    if (!master) return;

    let layout = master.GetLayoutByType("obj");
    if (!layout) {
      let layoutsCount = master.GetLayoutsCount();
      if (layoutsCount > 0) {
        layout = master.GetLayout(0);
      }
    }

    if (!layout) return;

    let newSlide = Api.CreateSlide();
    newSlide.ApplyLayout(layout);
    presentation.AddSlide(newSlide);
  });
};
```

使用的方法：[GetPresentation](../../../../../../../../site/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetLayout](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetLayout.md), [GetMaster](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiLayout/Methods/GetMaster.md), [GetLayoutByType](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutByType.md), [GetLayoutsCount](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutsCount.md), [GetLayout](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayout.md), [CreateSlide](../../../../../../../../site/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [ApplyLayout](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/ApplyLayout.md), [AddSlide](../../../../../../../../site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## 结果

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-new-slide" dark />
