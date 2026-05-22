# Delete

从文档中移除字段。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从 PDF 移除表单字段。

```javascript editor-pdf
// How do I delete a form field from a PDF?

// Remove a field and all its associated widgets from a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
textField.Delete();
```
