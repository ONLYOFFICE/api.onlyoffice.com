# SetReadOnly

设置字段为只读

## 语法

```javascript
expression.SetReadOnly();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 文档中设置字段为只读。

```javascript editor-pdf
// How can I set read only using a base field in a PDF document?

// Set read only for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
