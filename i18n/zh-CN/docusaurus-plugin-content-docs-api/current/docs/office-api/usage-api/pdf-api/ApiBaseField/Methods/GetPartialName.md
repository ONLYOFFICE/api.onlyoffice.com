# GetPartialName

获取字段部分名称。

## 语法

```javascript
expression.GetPartialName();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取并显示 PDF 文档中的字段部分名称。

```javascript editor-pdf
// How to get the partial name for a base field in a PDF document?

// Get the partial name and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
