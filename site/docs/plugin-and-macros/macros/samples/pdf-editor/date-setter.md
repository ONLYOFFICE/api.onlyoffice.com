# Date Setter

Sets current date to all date form fields in the document.

```ts
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

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetFormat.md), [SetLanguage](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetLanguage.md), [SetBackgroundColor](../../../../office-api/usage-api/form-api/ApiDateForm/Methods/SetBackgroundColor.md)

## Result

![DateSetter](/assets/images/plugins/date-setter.png#gh-light-mode-only)
![DateSetter](/assets/images/plugins/date-setter.dark.png#gh-dark-mode-only)
