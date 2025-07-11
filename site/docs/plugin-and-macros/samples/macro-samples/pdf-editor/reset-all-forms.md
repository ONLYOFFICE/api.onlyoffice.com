# Reset all forms

Clears all fields if necessary, for example after printing the document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        form.Clear();
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [Clear](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/Clear.md)

## Result

<!-- imgpath -->

![Reset All Forms](/assets/images/plugins/reset-all-forms.png#gh-light-mode-only)![Reset All Forms](/assets/images/plugins/reset-all-forms.dark.png#gh-dark-mode-only)
