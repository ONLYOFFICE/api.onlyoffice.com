# IsRequired

检查字段是否为必填

Inherited from [ApiBaseField.IsRequired](../../ApiBaseField/Methods/IsRequired.md).

## 示例

此示例获取字段必填属性并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());
```

