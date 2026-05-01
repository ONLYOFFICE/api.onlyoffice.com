# IsMultipleSelection

检查字段是否为多选。

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

获取 PDF 文档中列表框字段的多选属性。

```javascript editor-pdf
// How to is multiple selection for a listbox field in a PDF document?

// Is multiple selection and display the result in a PDF document.

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
