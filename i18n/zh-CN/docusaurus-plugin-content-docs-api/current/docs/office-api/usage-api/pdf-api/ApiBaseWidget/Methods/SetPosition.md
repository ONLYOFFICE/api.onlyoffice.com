# SetPosition

设置控件位置。

## 语法

```javascript
expression.SetPosition(position);
```

`expression` - 表示 [ApiBaseWidget](../ApiBaseWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | [Point](../../Enumeration/Point.md) |  | 控件的新位置。 |

## 返回值

boolean

## 示例

在 PDF 中将控件移动到新位置。

```javascript editor-pdf
// How do I change the position of a widget in a PDF?

// Reposition a field widget using coordinate values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});
```
