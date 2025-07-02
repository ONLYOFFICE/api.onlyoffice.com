# Rearrange list values

Arranges the listed items in alphabetical order. You can also use reverse alphabetical order.

```ts
(function(isReverse = false) {
    // Get the current document
    let doc = Api.GetDocument();
    
    // Retrieve all form fields in the document
    let allForms = doc.GetAllForms();
    
    // Process each form field
    allForms.forEach(function(form, index) {
        // Try to determine the form type (handles potential API differences)
        let formType = form.GetFormType ? form.GetFormType() : "unknown";
        
        // Only process dropdown forms
        if (formType === "dropDownForm") {
            // Get the current list values (safe handling if the method doesn't exist)
            let values = form.GetListValues ? form.GetListValues() : [];
            
            // Sort the values alphabetically (A-Z)
            values.sort();
            
            // If reverse sorting is requested, reverse the order (Z-A)
            if (isReverse) {
                values.reverse();
            }
            
            // Apply the sorted values back to the form
            form.SetListValues(values);

            // Log information about the process for debugging
            console.log("Form " + index + " values listed (" + (isReverse ? "Z->A" : "A->Z") + "):", values);
        }
    });
})(true); // Set to true for descending (Z-A) order or false for ascending (A-Z) order
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetListValues](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/GetListValues.md), [SetListValues](../../../../office-api/usage-api/form-api/ApiComboBoxForm/Methods/SetListValues.md)

## Result

![RearrangeListValues](/assets/images/plugins/rearrange-list-values.png#gh-light-mode-only)
![RearrangeListValues](/assets/images/plugins/rearrange-list-values.dark.png#gh-dark-mode-only)
