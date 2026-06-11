---
hide_table_of_contents: true
description: Change the background color of all form fields.
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# Set form background color

Changes the background color of all form fields on focus.

```ts
(function () {
    let doc = Api.GetDocument();
  
    // Define the desired background color (light blue in RGB).
    let red = 171;
    let green = 242;
    let blue = 255;
  
    // Get all form fields in the document.
    let formFields = doc.GetAllForms();
  
    // Iterate through each form field and set the background color.
    formFields.forEach(function(field) {
      field.SetBackgroundColor(red, green, blue);
    });
  })();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [SetBackgroundColor](../../../office-api/usage-api/form-api/ApiFormBase/Methods/SetBackgroundColor.md)

## Result

<Video src="/assets/video/macros/pdf-editor/set-form-background-color" dark />
