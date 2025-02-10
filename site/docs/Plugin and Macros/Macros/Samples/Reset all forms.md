## Description

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

Methods used: GetDocument, GetAllForms, Clear

## Result

<!-- imgpath -->

![Reset All Forms](/assets/images/plugins/reset-all-forms.png)
