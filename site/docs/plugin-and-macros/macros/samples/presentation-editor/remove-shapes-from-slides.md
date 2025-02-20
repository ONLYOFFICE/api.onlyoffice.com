# Remove shapes from slides

Removes shapes from slides in a presentation.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
  var oPresentation = Api.GetPresentation();
  for (let i = 0; i < 10; i++) {
    var oSlide = oPresentation.GetSlideByIndex(i);
    var aShape  = oSlide.GetAllShapes();
    aShape[0].Delete();
  }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)

## Result

![Next blank row](/assets/images/plugins/remove-shapes.png)
