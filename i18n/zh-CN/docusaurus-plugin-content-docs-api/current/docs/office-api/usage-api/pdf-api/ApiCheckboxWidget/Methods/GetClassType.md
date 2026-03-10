# GetClassType

返回 ApiCheckboxWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"page"

## 示例

This example gets checkbox widget object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
