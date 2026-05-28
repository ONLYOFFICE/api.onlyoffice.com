# SetCheckStyle

设置控件复选框样式。

## 语法

```javascript
expression.SetCheckStyle(style);
```

`expression` - 表示 [ApiCheckboxWidget](../ApiCheckboxWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [CheckStyle](../../Enumeration/CheckStyle.md) |  | 复选框样式。 |

## 返回值

boolean

## 示例

更改 PDF 中复选框控件的勾选符号外观。

```javascript editor-pdf
// How do I customize what symbol appears inside a checked checkbox in a PDF?

// Apply a visual style to a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');
```
