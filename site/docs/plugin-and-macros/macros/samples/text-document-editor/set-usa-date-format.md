# Set USA date format

## Description

Sets all date form formats to USA one.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    var document = Api.GetDocument();
    
    //Get all forms from the document
    var allForms = document.GetAllForms();
    allForms.forEach(form => {
        //For each Date form set USA date format
        if(form.GetFormType() == "dateForm") {
           form.SetFormat("mmmm dd, yyyy");
        }
    });
})();
```

Methods used: GetDocument, GetAllForms, GetFormType, SetFormat

## Result

<!-- imgpath -->

![Set USA Date Format](/assets/images/plugins/set-usa-date-format.png)