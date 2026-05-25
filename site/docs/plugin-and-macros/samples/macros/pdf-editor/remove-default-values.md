---
hide_table_of_contents: true
description: Clear specific default values from text form fields.
tags: ["Docs", "Macros", "PDF"]
---

# Remove default values

Automatically removes a specific default value from all text fields in the entire document.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [Clear](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/remove-default-values.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/remove-default-values.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
