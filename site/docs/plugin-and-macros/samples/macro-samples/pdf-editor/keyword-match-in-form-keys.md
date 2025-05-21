# Keyword match in form keys

Highlights form fields based on a keyword match in the form key.

```ts
(function () {
    let keyword = "information";
    let caseInsensitive = true; // Set to true for case-insensitive search, false for case-sensitive
    let enableRequired = true; // Set to true to enable 'required' property when keyword is found, false to disable

    let regex = new RegExp(keyword, caseInsensitive ? "i" : "");

    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();

    for (let form of forms) {
        let formKey = form.GetFormKey();
        let isMatch = regex.test(formKey);
        form.SetRequired(isMatch ? enableRequired : isMatch);
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetRequired](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/SetRequired.md)

## Result

![KeywordMatch](/assets/images/plugins/keyword-match.png#gh-light-mode-only)
![KeywordMatch](/assets/images/plugins/keyword-match.dark.png#gh-dark-mode-only)
