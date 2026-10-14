# GetParent

获取父字段。

继承自 [ApiBaseWidget.GetParent](../../ApiBaseWidget/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiField](../../Enumeration/ApiField.md)

## 示例

此示例获取控件的父字段。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myField");
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
let parent = widgets[0].GetParent();
console.log('Parent field name: ' + parent.GetPartialName());
```
