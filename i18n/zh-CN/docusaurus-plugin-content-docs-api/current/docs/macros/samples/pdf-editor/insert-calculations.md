---
hide_table_of_contents: true
description: 对表单字段的值执行计算。
tags: ["Docs", "Macros", "PDF"]
---

import Video from '@site/src/components/Video/Video';

# 插入计算

对表单中的指定字段执行自动计算并插入结果。

```ts
(function () {
    // 从文档获取所有表单
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    // 输入表单的键值
    let formkey1 = "Form1";
    let formkey2 = "Form2";
    let taxFormkey = "TaxForm";

    // 结果表单的键值
    let sumResultKey = "SumResult";
    let taxResultKey = "TaxResult";

    // 通过键值获取表单值的函数
    function getFormValue(formKey) {
        for (let form of forms) {
            if (form.GetFormKey() === formKey) {
                return parseFloat(form.GetText()) || 0;
            }
        }
    }

    // 设置结果表单值的函数
    function setFormValue(formKey, value) {
        for (let form of forms) {
            if (form.GetFormKey() === formKey) {
                form.SetText(value.toFixed(2));
            }
        }
    }

    // 主计算函数
    function calculateAndInsert() {
        let input1 = getFormValue(formkey1);
        let input2 = getFormValue(formkey2);
        let taxInput = getFormValue(taxFormkey);
        // 执行计算
        let sum = parseFloat(input1) + parseFloat(input2);
        let tax = sum * taxInput / 100; // % tax

        // 插入结果
        setFormValue(sumResultKey, sum);
        setFormValue(taxResultKey, tax);
    }

    // 调用计算函数
    calculateAndInsert();
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetText](../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## 结果

<Video src="/assets/video/macros/pdf-editor/insert-calculations" dark />
