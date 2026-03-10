# GetValueIndexes

获取选定值的索引。

## 语法

```javascript
expression.GetValueIndexes();
```

`expression` - 表示 [ApiBaseListField](../ApiBaseListField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number[]

## 示例

This example gets selected value indexes from field with list of options.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetValueIndexes([0]);
console.log('Selected indexes is: ' + comboboxField.GetValueIndexes());
```
