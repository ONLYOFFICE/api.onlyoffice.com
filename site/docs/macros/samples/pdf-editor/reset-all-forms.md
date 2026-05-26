---
hide_table_of_contents: true
description: Reset all form fields to empty values.
tags: ["Docs", "Macros", "PDF"]
---

# Reset all forms

Clears all fields if necessary, for example after printing the document.

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

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetAllForms.md), [Clear](/docs/office-api/usage-api/document-api/ApiFormBase/Methods/Clear.md)

## Result

<video className="light-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/reset-all-forms.webm" type="video/webm" />
</video>
<video className="dark-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/pdf-editor/reset-all-forms.dark.webm" type="video/webm" />
</video>
