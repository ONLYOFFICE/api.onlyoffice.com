# 验证表单字段

使用指定颜色高亮显示文档中为空或非必填的文本字段。

```ts
(function () {
    let checkSpecificTip = false;
    let requiredTipText = "Please enter your second address";

    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let formsData = JSON.parse(JSON.stringify(doc.GetFormsData()));

    forms.forEach(form => {
        if (form.GetFormType() === "textForm") {
            let key = form.GetFormKey();
            let required = form.IsRequired();

            let formData = formsData.find(fd => fd.key === key);

            if (formData) {
                let isEmpty = !formData.value || formData.value.trim() === "";
                let tip = form.GetTipText() || "";

                let shouldCheck = !checkSpecificTip || (checkSpecificTip && tip.trim() === requiredTipText.trim());

                if (shouldCheck && isEmpty && !required) {
                    form.SetBorderColor(0, 255, 127); // 春绿色边框
                    form.SetBackgroundColor(171, 242, 255); // 浅蓝色背景
                }
            }
        }
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormsData](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetFormsData.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [IsRequired](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/IsRequired.md), [GetTipText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [SetBorderColor](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetBorderColor.md), [SetBackgroundColor](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetBackgroundColor.md)

## 结果

![ValidateFormFields](/assets/images/plugins/validate-form-fields.png#gh-light-mode-only)
![ValidateFormFields](/assets/images/plugins/validate-form-fields.dark.png#gh-dark-mode-only)
