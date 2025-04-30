# Validate Form Fields

Highlights empty or unrequired text fields in a document with desired colors. 

```ts
(function () {
    let checkSpecificTip = false;
    let requiredTipText = "Please enter your second address";

    let document = Api.GetDocument();
    let forms = document.GetAllForms();
    let formsData = JSON.parse(JSON.stringify(document.GetFormsData()));
    let invalidCount = 0;

    forms.forEach(form => {
        if (form.GetFormType() === "textForm") {
            let key = form.GetFormKey();
            let required = form.IsRequired();

            let formData = formsData.find(fd => fd.key === key);

            if (formData) {
                let isEmpty = !formData.value || formData.value.trim() === "";
                let tip = form.GetTipText() || "";

                let shouldCheck = !checkSpecificTip || (checkSpecificTip && tip.trim() === requiredTipText.trim());

                if (shouldCheck && isEmpty && !required) {
                    form.SetBorderColor(0, 255, 127); // Spring green border.
                    form.SetBackgroundColor(171, 242, 255); // Light blue background.
                    invalidCount++;
                }
            }
        }
    });

    console.log(`Form Field Validator complete. ${invalidCount} empty unrequired text field(s) highlighted.`);
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormsData](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetFormsData.md), [GetFormType](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/GetFormKey.md), [IsRequired](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/IsRequired.md), [GetTipText](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/GetTipText.md), [SetBorderColor](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/SetBorderColor.md), [SetBackgroundColor](../../../../office-api/usage-api/text-document-api/ApiComplexForm/Methods/SetBackgroundColor.md)

## Result

![ValidateFormFields](/assets/images/plugins/validate-form-fields.png#gh-light-mode-only)
![ValidateFormFields](/assets/images/plugins/validate-form-fields.dark.png#gh-dark-mode-only)
