## Description

Adds the "State" label and the text form prefilled with "CA" if the zip code of California is entered. It can be extended by using API to prefill "State" when entering the zip code.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    var document = Api.GetDocument();
    var allForms = document.GetAllForms();
    //California Zip Codes regex
    const zipRegex = /^9[0-5][0-9]{3}$/;
    
    allForms.forEach(form => {
        if(form.GetFormKey() == "ZipCode") {
            var input = form.GetText();
            //If the zip code is Californian, add the "State" label with the text form indicating "CA"
            if(zipRegex.test(input)) {
                const stateForm = allForms.find(item => item.GetFormKey() === "State");
                if(stateForm == null) {
                    var stateTextForm = Api.CreateTextForm({"key": "State", "tip": "State", "required": false, "placeholder": "State", "comb": true, "maxCharacters": 2, "cellWidth": 3, "multiLine": false, "autoFit": false});
                    stateTextForm.SetText("CA");
                    var paragraph = Api.CreateParagraph();
                    paragraph.AddTabStop();
                    paragraph.AddText("State: ");
                    paragraph.AddElement(stateTextForm);
                    document.InsertContent([paragraph]);
                }
                else {
                    stateForm.SetText("CA");
                }
            }
        }
    });
})();
```

Methods used: GetDocument, GetAllForms, GetFormKey, GetText, CreateTextForm, SetText, CreateParagraph, AddTabStop, AddText, AddElement, InsertContent

## Result

![Add State From ZipCode](/assets/images/plugins/add-state-from-zipcode.png)
