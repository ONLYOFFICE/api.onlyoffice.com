# GetPartialName

获取字段部分名称。

Inherited from [ApiBaseField.GetPartialName](../../ApiBaseField/Methods/GetPartialName.md).

## 示例

此示例获取字段部分名称并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```

