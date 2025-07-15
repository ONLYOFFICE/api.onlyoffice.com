# Update date field

Sets the current date to all date form fields in the document.

```ts
(function () {
  let doc = Api.GetDocument();
  let forms = doc.GetAllForms();

  forms.forEach((form) => {
    if (form.GetFormType() === "dateForm") {
      form.SetFormat("dddd, dd MMMM yyyy");
      form.SetLanguage("en-CA");

      form.SetBackgroundColor(255, 0, 0); // Set background color to red.
    }
  });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](/docs/office-api/usage-api/form-api/ApiDateForm/Methods/SetFormat.md), [SetLanguage](/docs/office-api/usage-api/form-api/ApiDateForm/Methods/SetLanguage.md), [SetBackgroundColor](/docs/office-api/usage-api/form-api/ApiDateForm/Methods/SetBackgroundColor.md)

## Result

![DateSetter](/assets/images/plugins/update-date-field.png#gh-light-mode-only)
![DateSetter](/assets/images/plugins/update-date-field.dark.png#gh-dark-mode-only)
