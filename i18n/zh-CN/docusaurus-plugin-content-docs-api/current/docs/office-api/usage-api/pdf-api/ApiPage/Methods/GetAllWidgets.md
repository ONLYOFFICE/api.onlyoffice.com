# GetAllWidgets

获取页面控件

## 语法

```javascript
expression.GetAllWidgets();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

This example gets all fields on the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
let comboboxField = Api.CreateComboboxField([10, 40, 160, 60]);
let listboxField = Api.CreateListboxField([10, 70, 100, 130]);

page.AddObject(textField);
page.AddObject(comboboxField);
page.AddObject(listboxField);

let allWidgets = page.GetAllWidgets();
allWidgets.forEach(function(field) {
    console.log(field.GetClassType());
});
```
