---
description: Add a new slide to a presentation.
tags: ["Docs", "Plugins", "AI Tools", "Presentations"]
hide_table_of_contents: true
---

import Video from '@site/src/components/Video/Video';

# Add new slide

This function adds a new slide at the end of presentation using default layout from the current slide's master.

## Prompts

- Add a new slide

## Function registration {#function-registration}

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

## Function execution {#function-execution}

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

Methods used: [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetLayout](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetLayout.md), [GetMaster](../../../office-api/usage-api/presentation-api/ApiLayout/Methods/GetMaster.md), [GetLayoutByType](../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutByType.md), [GetLayoutsCount](../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutsCount.md), [GetLayout](../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayout.md), [CreateSlide](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [ApplyLayout](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/ApplyLayout.md), [AddSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## Result

<Video src="/assets/images/plugins/functions-video/presentation-editor/add-new-slide" dark />
