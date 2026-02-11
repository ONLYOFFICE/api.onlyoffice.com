# addNewSlide

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
      master = presentation.GetMasterByIndex(0);
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

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetLayout](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetLayout.md), [GetMaster](/docs/office-api/usage-api/presentation-api/ApiLayout/Methods/GetMaster.md), [GetLayoutByType](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutByType.md), [GetLayoutsCount](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutsCount.md), [GetLayout](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayout.md), [CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [ApplyLayout](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/ApplyLayout.md), [AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>

  <source src="/assets/images/plugins/functions-video/presentation-editor/addNewSlide.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/presentation-editor/addNewSlide.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
