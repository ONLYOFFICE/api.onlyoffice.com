# Reset all forms

Clears all fields if necessary, for example after printing the document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    var document = Api.GetDocument();
    var allForms = document.GetAllForms();
    allForms.forEach(form => {
        form.Clear();
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [Clear](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/Clear.md)

## Result

<!-- imgpath -->

![Reset All Forms](/assets/images/plugins/reset-all-forms.png#gh-light-mode-only)![Reset All Forms](/assets/images/plugins/reset-all-forms.dark.png#gh-dark-mode-only)
