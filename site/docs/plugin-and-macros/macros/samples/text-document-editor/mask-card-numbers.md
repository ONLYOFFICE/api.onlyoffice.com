# Mask card numbers

## Description

Applies the mask to all forms with the specified form key to hide card numbers.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    var document = Api.GetDocument();
    var allForms = document.GetAllForms();
    allForms.forEach(form => {
        if(form.GetFormKey() == "CardNumber") {
            var input = form.GetText();
            //Keep the first 4 characters and the last 2 characters
            const firstPart = input.slice(0, 4);
            const lastPart = input.slice(-2);
            //Create a middle part with asterisks
            const maskedPart = '*'.repeat(10);
            //Set masked string
            var result = firstPart + maskedPart + lastPart;
            form.SetText(result);
        }
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetText.md), [SetText](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md)

## Result

![Mask Card Numbers](/assets/images/plugins/mask-card-numbers.png)
