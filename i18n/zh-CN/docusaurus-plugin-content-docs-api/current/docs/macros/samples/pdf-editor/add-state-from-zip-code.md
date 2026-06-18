---
hide_table_of_contents: true
description: 根据输入的邮政编码自动填写州字段。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 根据邮政编码填写州名

如果输入的是加利福尼亚州的邮政编码，本插件会添加“州（State）”标签，并在文本表单中预填“CA（加利福尼亚州的简写）”。您也可以通过 API 扩展功能，实现根据邮政编码自动填写“州”。

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    //加利福尼亚州邮政编码正则表达式
    let zipRegex = /^9[0-5][0-9]{3}$/;
    
    allForms.forEach(form => {
        if(form.GetFormKey() == "ZipCode") {
            let input = form.GetText();
            //如果输入的是加利福尼亚州邮政编码，则添加"State"标签及预填"CA"的文本表单
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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../office-api/usage-api/document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../office-api/usage-api/document-api/ApiFormBase/Methods/GetText.md), [CreateTextForm](../../../office-api/usage-api/form-api/Api/Methods/CreateTextForm.md), [SetText](../../../office-api/usage-api/document-api/ApiTextForm/Methods/SetText.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddTabStop](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddTabStop.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [AddElement](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddElement.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/add-state-from-zip-code" dark />
