# Count form fields

Counts the number of form fields in a document and categorizes them by type.

```ts
(function () {
    // Get the document object.
    let doc = Api.GetDocument();

    // Retrieve all form fields from the document.
    let forms = doc.GetAllForms();

    // Initialize counters.
    let totalFields = forms.length;
    let fieldTypes = {
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
        let formField = forms[i];
        let formType = formField.GetFormType(); // e.g., "textForm", "pictureForm", etc.

        // Increment the corresponding counter if known, else count as "other".
        if (fieldTypes.hasOwnProperty(formType)) {
            fieldTypes[formType]++;
        } else {
            fieldTypes.other++;
        }
    }

    // Create a result message.
    let result =
        "Total Form Fields: " + totalFields + "\n\n" +
        "Field Type Breakdown:\n" +
        "- Text Forms: " + fieldTypes.textForm + "\n" +
        "- Picture Forms: " + fieldTypes.pictureForm + "\n" +
        "- Checkbox Forms: " + fieldTypes.checkboxForm + "\n" +
        "- Combo Box Forms: " + fieldTypes.comboBoxForm + "\n" +
        "- Radio Button Forms: " + fieldTypes.radioButtonForm + "\n" +
        "- Complex Forms: " + fieldTypes.complexForm + "\n" +
        "- Other Form Fields: " + fieldTypes.other;

    // Uncomment the below block if you want the results inserted into the document.
    let summaryParagraph = Api.CreateParagraph();
    summaryParagraph.AddText(result);
    summaryParagraph.SetFontSize(20);
    summaryParagraph.SetBold(true);
    summaryParagraph.SetJc("center");

    doc.Push(summaryParagraph);
})();
```

Methods used: [GetDocument](/site/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/site/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/site/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [CreateParagraph](/site/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/site/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetFontSize](/site/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md), [SetBold](/site/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), [SetJc](/site/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [Push](/site/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [Save](/site/docs/office-api/usage-api/text-document-api/Api/Methods/Save.md)

## Result

![FormFieldCounter](/assets/images/plugins/count-form-fields.png#gh-light-mode-only)
![FormFieldCounter](/assets/images/plugins/count-form-fields.dark.png#gh-dark-mode-only)
