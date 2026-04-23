# GetClassType

返回 ApiTextWidget 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextWidget](../ApiTextWidget.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"page"

## 示例

此示例获取文本控件并显示其类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());
```
