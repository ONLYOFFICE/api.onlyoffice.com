Description

Removes shapes from slides in a presentation.

```
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

Methods used: [GetPresentation](/officeapi/presentationapi/api/getpresentation), [GetSlideByIndex](/officeapi/presentationapi/apipresentation/getslidebyindex), [GetAllShapes](/officeapi/presentationapi/apislide/getallshapes)

Result

![Next blank row](/content/img/plugins/remove-shapes.png)
