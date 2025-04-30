# Date Setter

Sets current date to all date form fields in the document.

```ts
// Set current date to all date form fields in the document.
(function () {
  let document = Api.GetDocument();
  let forms = document.GetAllForms();

  forms.forEach((form) => {
    if (form.GetFormType() === "dateForm") {
      form.SetFormat("dddd, dd MMMM yyyy");
      form.SetLanguage("en-CA");

      form.SetBackgroundColor(255, 0, 0); // Set background color to red.
    }
  });

  console.log("Date fields updated to current date.");
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/GetFormType.md), [SetFormat](../../../../office-api/usage-api/text-document-api/ApiDateForm/Methods/SetFormat.md), [SetLanguage](../../../../office-api/usage-api/spreadsheet-api/ApiRun/Methods/SetLanguage.md), [SetBackgroundColor](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/SetBackgroundColor.md)

## Result

![DateSetter](/assets/images/plugins/date-setter.png#gh-light-mode-only)
![DateSetter](/assets/images/plugins/date-setter.dark.png#gh-dark-mode-only)
