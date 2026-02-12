---
hide_table_of_contents: true
---

# Mask card numbers

Applies the mask to all forms with the specified form key to hide card numbers.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        if(form.GetFormKey() == "CardNumber") {
            let input = form.GetText();
            //Keep the first 4 characters and the last 2 characters
            let firstPart = input.slice(0, 4);
            let lastPart = input.slice(-2);
            //Create a middle part with asterisks
            let maskedPart = '*'.repeat(10);
            //Set masked string
            let result = firstPart + maskedPart + lastPart;
            form.SetText(result);
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiFormBase/Methods/GetText.md), [SetText](/docs/office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md)

## Result

![Mask Card Numbers](/assets/images/plugins/mask-card-numbers.png#gh-light-mode-only)![Mask Card Numbers](/assets/images/plugins/mask-card-numbers.dark.png#gh-dark-mode-only)
