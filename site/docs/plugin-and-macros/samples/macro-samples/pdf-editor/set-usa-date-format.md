# Set USA date format

Sets all date form formats to USA one.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    let doc = Api.GetDocument();
    
    //Get all forms from the document
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        //For each Date form set USA date format
        if(form.GetFormType() == "dateForm") {
           form.SetFormat("mmmm dd, yyyy");
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](/docs/office-api/usage-api/text-document-api/ApiDateForm/Methods/SetFormat.md)

## Result

<!-- imgpath -->

![Set USA Date Format](/assets/images/plugins/set-usa-date-format.png#gh-light-mode-only)![Set USA Date Format](/assets/images/plugins/set-usa-date-format.dark.png#gh-dark-mode-only)
