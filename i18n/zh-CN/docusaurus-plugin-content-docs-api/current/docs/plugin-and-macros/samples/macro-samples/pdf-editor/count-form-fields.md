# 统计表单字段数量

统计文档中表单字段的数量，并按类型分类。

```ts
(function () {
    // 获取文档对象。
    let doc = Api.GetDocument();

    // 获取文档中的所有表单字段。
    let forms = doc.GetAllForms();

    // 初始化计数器。
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

    // 遍历所有表单字段。
    for (let i = 0; i < totalFields; i++) {
        let formField = forms[i];
        let formType = formField.GetFormType(); // 例如："textForm"、"pictureForm" 等。

        // 如果是已知类型，则对应计数，否则计为“其他”。
        if (fieldTypes.hasOwnProperty(formType)) {
            fieldTypes[formType]++;
        } else {
            fieldTypes.other++;
        }
    }

    // 创建结果信息。
    let result =
        "表单字段总数: " + totalFields + "\n\n" +
        "字段类型统计：\n" +
        "- 文本字段: " + fieldTypes.textForm + "\n" +
        "- 图片字段: " + fieldTypes.pictureForm + "\n" +
        "- 复选框字段: " + fieldTypes.checkboxForm + "\n" +
        "- 下拉选择框字段: " + fieldTypes.comboBoxForm + "\n" +
        "- 单选按钮字段: " + fieldTypes.radioButtonForm + "\n" +
        "- 复合字段: " + fieldTypes.complexForm + "\n" +
        "- 其他字段: " + fieldTypes.other;

    // 如果希望将结果插入文档，可取消以下注释。
    let summaryParagraph = Api.CreateParagraph();
    summaryParagraph.AddText(result);
    summaryParagraph.SetFontSize(20);
    summaryParagraph.SetBold(true);
    summaryParagraph.SetJc("center");

    doc.Push(summaryParagraph);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), [SetJc](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [Push](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [Save](../../../../office-api/usage-api/text-document-api/Api/Methods/Save.md)

## 结果

![FormFieldCounter](/assets/images/plugins/count-form-fields.png#gh-light-mode-only)
![FormFieldCounter](/assets/images/plugins/count-form-fields.dark.png#gh-dark-mode-only)
