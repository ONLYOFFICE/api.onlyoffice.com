# SetRect

设置字段矩形。

## 语法

```javascript
expression.SetRect(rect);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件的新边界矩形。 |

## 返回值

boolean

## 示例

在 PDF 中使用矩形边界调整控件大小和位置。

```javascript editor-pdf
// How do I set the size and position of a widget in a PDF?

// Define a widget's location and dimensions with boundary coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);
```
