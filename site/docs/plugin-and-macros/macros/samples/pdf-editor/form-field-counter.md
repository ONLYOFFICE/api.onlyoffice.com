# Form field counter

Counts all form fields in the document and displays a breakdown by form type.

```ts
(function () {
    // Get the document object.
    let document = Api.GetDocument();
    
    // Retrieve all form fields from the document.
    let forms = document.GetAllForms();
    
    // Initialize counters.
    let totalFields = forms.length;
    let fieldTypeCounts = {
        textForm: 0,
        pictureForm: 0,
        checkboxForm: 0,
        comboBoxForm: 0,
        radioButtonForm: 0,
        complexForm: 0,
        other: 0
    };
    
    // Iterate through all form fields.
    for (let i = 0; i < totalFields; i++) {
        let form = forms[i];
        let formType = form.GetFormType(); // e.g. "textForm", "pictureForm", etc.
        
        // Increment the corresponding counter if known, else count as "other".
        if (fieldTypeCounts.hasOwnProperty(formType)) {
            fieldTypeCounts[formType]++;
        } else {
            fieldTypeCounts.other++;
        }
    }
    
    // Create a result message.
    let result =
        "Total Form Fields: " + totalFields + "\n\n" +
        "Field Type Breakdown:\n" +
        "- Text Forms: " + fieldTypeCounts.textForm + "\n" +
        "- Picture Forms: " + fieldTypeCounts.pictureForm + "\n" +
        "- Checkbox Forms: " + fieldTypeCounts.checkboxForm + "\n" +
        "- Combo Box Forms: " + fieldTypeCounts.comboBoxForm + "\n" +
        "- Radio Button Forms: " + fieldTypeCounts.radioButtonForm + "\n" +
        "- Complex Forms: " + fieldTypeCounts.complexForm + "\n" +
        "- Other Form Fields: " + fieldTypeCounts.other;
    
    // Log the result to the console.
    console.log(result); 

    // Comment out the code below if you want to see the results only in the console.
    let paragraph = Api.CreateParagraph();
    paragraph.AddText(result);
   
    paragraph.SetFontSize(20);
    paragraph.SetBold(true);
    paragraph.SetJc("center");
    document.Push(paragraph);
    Api.Save();

})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetFormType.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/AddText.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetJc](../../../../office-api/usage-api/text-document-api/ApiParaPr/Methods/SetJc.md), [Push](../../../../office-api/usage-api/text-document-api/ApiBlockLvlSdt/Methods/Push.md), [Save](../../../../office-api/usage-api/text-document-api/Api/Methods/Save.md)

## Result

![FormFieldCounter](/assets/images/plugins/form-field-counter.png#gh-light-mode-only)
![FormFieldCounter](/assets/images/plugins/form-field-counter.dark.png#gh-dark-mode-only)
