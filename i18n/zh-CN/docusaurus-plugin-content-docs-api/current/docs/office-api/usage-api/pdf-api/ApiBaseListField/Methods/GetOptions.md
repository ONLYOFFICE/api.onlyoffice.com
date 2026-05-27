# GetOptions

获取列表中的所有选项。

## 语法

```javascript
expression.GetOptions();
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ListOption](../../Enumeration/ListOption.md)[]

## 示例

检索 PDF 中下拉字段中所有可用的选项。

```javascript editor-pdf
// How do I get all options from a list field in a PDF?

// List all items in a dropdown or list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
let options = comboboxField.GetOptions();
console.log('Combobox options is: ' + options);
```
