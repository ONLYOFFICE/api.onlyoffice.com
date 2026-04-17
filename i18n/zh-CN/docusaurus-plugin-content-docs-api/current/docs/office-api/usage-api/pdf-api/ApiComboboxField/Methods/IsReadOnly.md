# IsReadOnly

检查字段是否为只读

Inherited from [ApiBaseField.IsReadOnly](../../ApiBaseField/Methods/IsReadOnly.md).

## 示例

此示例获取字段只读属性并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```

