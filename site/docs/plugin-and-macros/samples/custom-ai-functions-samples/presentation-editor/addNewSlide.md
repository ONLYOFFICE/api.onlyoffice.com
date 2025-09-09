# addNewSlide

This function adds a new slide at the end of presentation using default layout from the current slide's master.

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "addNewSlide";
func.description = "Adds a new slide at the end of presentation using default layout from current slide's master";
func.params = [];
func.examples = ["if you need to add a new slide, respond with:\n" + "[functionCalling (addNewSlide)]: {}"];
```

### Prompts

- Add a new slide

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    await Asc.Editor.callCommand(function () {
        let presentation = Api.GetPresentation();
        let currentSlide = presentation.GetCurrentSlide();
        let master;
        if (currentSlide) {
            currentSlide = presentation.GetSlideByIndex(0);
            let curLayout = currentSlide.GetLayout();
            master = curLayout.GetMaster();
        }
        else {
            master = presentation.GetMasterByIndex(0);
        }
        if (!master) {
            return;
        }

        let layout = master.GetLayoutByType("obj");
        if (!layout) {
            let layoutsCount = master.GetLayoutsCount();
            if (layoutsCount > 0) {
                layout = master.GetLayout(0);
            }
        }

        if (!layout) return;
        let newSlide = Api.CreateSlide();

        if (layout) {
            newSlide.ApplyLayout(layout);
        }

        presentation.AddSlide(newSlide);
    });
};

return func;
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetCurrentSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetCurrentSlide.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetLayout](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetLayout.md), [GetMaster](/docs/office-api/usage-api/presentation-api/ApiLayout/Methods/GetMaster.md), [GetLayoutByType](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutByType.md), [GetLayoutsCount](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayoutsCount.md), [GetLayout](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetLayout.md), [CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [ApplyLayout](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/ApplyLayout.md), [AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## Result

![addNewSlide function](/assets/images/plugins/add-new-slide-function.png#gh-light-mode-only)
![addNewSlide function](/assets/images/plugins/add-new-slide-function.dark.png#gh-dark-mode-only)
![addNewSlide result](/assets/images/plugins/add-new-slide-result.png#gh-light-mode-only)
![addNewSlide result](/assets/images/plugins/add-new-slide-result.dark.png#gh-dark-mode-only)
