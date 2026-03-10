# GetClassType

返回 ApiButtonWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"page"

## 示例

This example gets button widget object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());
```
