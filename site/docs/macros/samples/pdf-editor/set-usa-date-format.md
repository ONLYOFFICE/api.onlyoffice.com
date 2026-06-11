---
hide_table_of_contents: true
description: Set all date form fields to the USA date format.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Set USA date format

Sets all date form formats to USA one.

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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../office-api/usage-api/document-api/ApiFormBase/Methods/GetFormType.md), [SetFormat](../../../office-api/usage-api/document-api/ApiDateForm/Methods/SetFormat.md)

## Result

<Video src="/assets/video/macros/pdf-editor/set-usa-date-format" dark />
