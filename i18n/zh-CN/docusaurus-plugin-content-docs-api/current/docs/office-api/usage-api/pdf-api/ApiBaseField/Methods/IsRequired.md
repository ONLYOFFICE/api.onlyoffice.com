# IsRequired

检查字段是否为必填

## 语法

```javascript
expression.IsRequired();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的表单字段是否必须在提交前填写。

```javascript editor-pdf
// How can I determine if a form field is required in a PDF?

// Verify whether a form field must have a value in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());
```
