# Remove shapes from slides

Removes shapes from slides in a presentation.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
  let presentation = Api.GetPresentation();
  for (let i = 0; i < 10; i++) {
    let slide = presentation.GetSlideByIndex(i);
    let shapes  = slide.GetAllShapes();
    shapes[0].Delete();
  }
})();
```

Methods used: [GetPresentation](/site/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](/site/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/site/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)

## Result

![Remove shapes](/assets/images/plugins/remove-shapes.png#gh-light-mode-only)![Remove shapes](/assets/images/plugins/remove-shapes.dark.png#gh-dark-mode-only)
