# GetPosition

获取控件位置。

## 语法

```javascript
expression.GetPosition();
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Point](../../Enumeration/Point.md)

## 示例

This example create a new field and gets position of its widget.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let pos = widgets[0].GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
