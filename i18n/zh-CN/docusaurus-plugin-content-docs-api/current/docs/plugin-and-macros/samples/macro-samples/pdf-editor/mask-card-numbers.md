# 隐藏卡号信息

对所有具有指定表单键的表单应用掩码，以隐藏卡号。

<!-- 此代码片段展示于截图中 -->

<!-- eslint-skip -->

```ts
(function()
{
    let doc = Api.GetDocument();
    let allForms = doc.GetAllForms();
    allForms.forEach(form => {
        if(form.GetFormKey() == "CardNumber") {
            let input = form.GetText();
            // 保留前4位和后2位字符
            let firstPart = input.slice(0, 4);
            let lastPart = input.slice(-2);
            // 用星号生成中间部分
            let maskedPart = '*'.repeat(10);
            // 设置被掩码的字符串
            let result = firstPart + maskedPart + lastPart;
            form.SetText(result);
        }
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllForms.md), [GetFormKey](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetFormKey.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiFormBase/Methods/GetText.md), [SetText](../../../../office-api/usage-api/text-document-api/ApiTextForm/Methods/SetText.md)

## 结果

![Mask Card Numbers](/assets/images/plugins/mask-card-numbers.png#gh-light-mode-only)![Mask Card Numbers](/assets/images/plugins/mask-card-numbers.dark.png#gh-dark-mode-only)
