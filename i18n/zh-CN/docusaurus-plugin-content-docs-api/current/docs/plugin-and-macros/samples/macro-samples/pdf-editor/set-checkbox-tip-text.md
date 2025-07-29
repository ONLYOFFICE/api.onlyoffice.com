# 设置复选框提示文本

为所有具有特定键值的复选框设置所需的提示文本。

```ts
(function () {
  let doc = Api.GetDocument();
  let allForms = doc.GetAllForms(); // 获取所有表单字段。
  let targetKey = "CheckBox10"; // 指定要更新的复选框键值。
  let newTip = "Please update your marital status."; // 新的提示文本。

  allForms.forEach(function (form) {
    // 检查字段类型是否为复选框且键值匹配目标键。
    if (form.GetFormType() === "checkBoxForm" && form.GetFormKey() === targetKey) {
      form.SetTipText(newTip); // 设置新的提示文本。
    }
  });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetTipText](../../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetTipText.md)

## 结果

![TipTextSetter](/assets/images/plugins/set-checkbox-tip-text.png#gh-light-mode-only)
![TipTextSetter](/assets/images/plugins/set-checkbox-tip-text.dark.png#gh-dark-mode-only)
