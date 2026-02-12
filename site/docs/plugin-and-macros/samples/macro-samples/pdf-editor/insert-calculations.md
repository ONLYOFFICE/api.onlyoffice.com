---
hide_table_of_contents: true
---

# Insert calculations

Performs automatic calculations on the specified fields within the form and inserts the result.

```ts
(function () {
    // Get all forms from the document
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## Result

![InsertCalculations](/assets/images/plugins/insert-calculations.png#gh-light-mode-only)
![InsertCalculations](/assets/images/plugins/insert-calculations.dark.png#gh-dark-mode-only)
