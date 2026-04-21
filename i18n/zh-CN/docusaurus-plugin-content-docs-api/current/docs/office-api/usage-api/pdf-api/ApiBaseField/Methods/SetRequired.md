# SetRequired

设置字段为必填

## 语法

```javascript
expression.SetRequired();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在 PDF 文档中设置字段为必填。

```javascript editor-pdf
// How to set required for a base field in a PDF document?

// Set required and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```
