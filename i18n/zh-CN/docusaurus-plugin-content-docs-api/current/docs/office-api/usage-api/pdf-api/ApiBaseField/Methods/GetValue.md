# GetValue

获取字段值

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在 PDF 中将文本从一个表单字段复制到另一个。

```javascript editor-pdf
// How do I read the value entered in a form field in a PDF?

// Transfer text content between form fields in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
```
