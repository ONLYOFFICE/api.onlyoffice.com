# Add state from zip code

Adds the "State" label and the text form prefilled with "CA" if the zip code of California is entered. It can be extended by using API to prefill "State" when entering the zip code.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    //California Zip Codes regex
    let zipRegex = /^9[0-5][0-9]{3}$/;
    
    allForms.forEach(form => {
        if(form.GetFormKey() == "ZipCode") {
            let input = form.GetText();
            //If the zip code is Californian, add the "State" label with the text form indicating "CA"
            if(zipRegex.test(input)) {
                let stateForm = allForms.find(item => item.GetFormKey() === "State");
                if(stateForm == null) {
                    let stateTextForm = Api.CreateTextForm({"key": "State", "tip": "State", "required": false, "placeholder": "State", "comb": true, "maxCharacters": 2, "cellWidth": 3, "multiLine": false, "autoFit": false});
                    stateTextForm.SetText("CA");
                    let paragraph = Api.CreateParagraph();
                    paragraph.AddTabStop();
                    paragraph.AddText("State: ");
                    paragraph.AddElement(stateTextForm);
                    doc.InsertContent([paragraph]);
                }
                else {
                    stateForm.SetText("CA");
                }
            }
        }
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetText.md), [CreateTextForm](../../../../office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [SetText](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md),, [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddTabStop](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddTabStop.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

![Add State From ZipCode](/assets/images/plugins/add-state-from-zipcode.png#gh-light-mode-only)![Add State From ZipCode](/assets/images/plugins/add-state-from-zipcode.dark.png#gh-dark-mode-only)
