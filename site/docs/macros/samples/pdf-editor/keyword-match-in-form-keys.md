---
hide_table_of_contents: true
description: Highlight form fields matching a keyword in their key.
tags: ["Docs", "Macros", "PDF"]
---

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

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetRequired](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/SetRequired.md)

## Result

<video className="light-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/keyword-match-in-form-keys.webm" type="video/webm" />
</video>
<video className="dark-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/keyword-match-in-form-keys.dark.webm" type="video/webm" />
</video>
