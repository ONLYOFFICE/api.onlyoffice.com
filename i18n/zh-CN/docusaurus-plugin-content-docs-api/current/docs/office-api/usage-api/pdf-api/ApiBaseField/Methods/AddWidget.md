# AddWidget

添加新控件 - 字段的可视化表示

## 语法

```javascript
expression.AddWidget(pageIndex, rect);
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pageIndex | 必需 | number |  | 要添加小部件的页面索引 |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 字段矩形 |

## 返回值

[ApiWidget](../../Enumeration/ApiWidget.md)

## 示例

在 PDF 中为表单字段添加视觉表示。

```javascript editor-pdf
// How do I create a visual instance of a form field in a PDF?

// Display a form field's widget at a specific location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
```
