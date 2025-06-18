# Set form background color

Changes the background color of all form fields on focus.

```ts
(function () {
    let doc = Api.GetDocument();
  
    // Define the desired background color (light blue in RGB).
    let red = 171;
    let green = 242;
    let blue = 255;
  
    // Get all form fields in the document.
    let formFields = doc.GetAllForms();
  
    // Iterate through each form field and set the background color.
    formFields.forEach(function(field) {
      field.SetBackgroundColor(red, green, blue);
    });
  })();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [SetBackgroundColor](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/SetBackgroundColor.md)

## Result

![BackgroundColorSetter](/assets/images/plugins/set-form-background-color.png#gh-light-mode-only)
![BackgroundColorSetter](/assets/images/plugins/set-form-background-color.dark.png#gh-dark-mode-only)
