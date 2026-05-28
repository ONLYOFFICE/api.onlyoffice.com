# IsMultipleSelection

检查字段是否支持多选。

## 语法

```javascript
expression.IsMultipleSelection();
```

`expression` - 表示 [ApiListboxField](../ApiListboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查 PDF 中的列表选择字段是否允许选择多个项目。

```javascript editor-pdf
// How do I know if multiple choices are allowed in a PDF?

// Verify the selection mode for this field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Option 1');
listboxField.AddOption('Option 2');
listboxField.AddOption('Option 3');
listboxField.AddOption('Option 4');
listboxField.SetMultipleSelection(true);
listboxField.SetValueIndexes([0, 3]);
console.log('Multiple selection is: ' + listboxField.IsMultipleSelection());
```
