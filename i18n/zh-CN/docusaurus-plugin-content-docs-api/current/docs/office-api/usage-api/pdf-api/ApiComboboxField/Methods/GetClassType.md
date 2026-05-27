# GetClassType

返回 ApiComboboxField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiComboboxField](../ApiComboboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"comboboxField"

## 示例

识别 PDF 中组合框字段的类类型。

```javascript editor-pdf
// What is the class type of a combobox field object in a PDF?

// Retrieve the class type and show it as the field value in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());
```
