# Insert calculations

Perform automatic calculations on specified fields within the form and insert the result.

```ts
(function () {
    // Get all forms from the document
    let doc = Api.GetDocument();
    let forms = document.GetAllForms();
    // Keys of input forms
    let formkey1 = "Form1";
    let formkey2 = "Form2";
    let taxFormkey = "TaxForm";

    // Keys of result forms
    let sumResultKey = "SumResult";
    let taxResultKey = "TaxResult";

    // Function to get the value of a form by its key
    function getFormValue(formKey) {
        for (let form of forms) {
            if (form.GetFormKey() === formKey) {
                return parseFloat(form.GetText()) || 0;
            }
        }
    }

    // Function to set the value of a result form
    function setFormValue(formKey, value) {
        for (let form of forms) {
            if (form.GetFormKey() === formKey) {
                form.SetText(value.toFixed(2));
            }
        }
    }

    // Main calculation function
    function calculateAndInsert() {
        let input1 = getFormValue(formkey1);
        let input2 = getFormValue(formkey2);
        let taxInput = getFormValue(taxFormkey);
        // Perform calculations
        let sum = parseFloat(input1) + parseFloat(input2);
        let tax = sum * taxInput / 100; // % tax

        // Insert results
        setFormValue(sumResultKey, sum);
        setFormValue(taxResultKey, tax);
    }

    // Call the calculation function
    calculateAndInsert();
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetText.md), [SetText](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetText.md)

## Result

![InsertCalculations](/assets/images/plugins/insert-calculations.png#gh-light-mode-only)
![InsertCalculations](/assets/images/plugins/insert-calculations.dark.png#gh-dark-mode-only)
