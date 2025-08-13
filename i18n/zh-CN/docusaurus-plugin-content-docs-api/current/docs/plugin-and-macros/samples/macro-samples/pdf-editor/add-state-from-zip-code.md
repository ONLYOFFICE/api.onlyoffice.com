# 根据邮政编码填写州名

如果输入的是加利福尼亚州的邮政编码，本插件会添加“州（State）”标签，并在文本表单中预填“CA（加利福尼亚州的简写）”。您也可以通过 API 扩展功能，实现根据邮政编码自动填写“州”。

<!-- 此代码片段显示在截图中。 -->

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

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetText.md), [CreateTextForm](../../../../office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [SetText](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md),, [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddTabStop](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddTabStop.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## 结果

![Add State From ZipCode](/assets/images/plugins/add-state-from-zipcode.png#gh-light-mode-only)![Add State From ZipCode](/assets/images/plugins/add-state-from-zipcode.dark.png#gh-dark-mode-only)
