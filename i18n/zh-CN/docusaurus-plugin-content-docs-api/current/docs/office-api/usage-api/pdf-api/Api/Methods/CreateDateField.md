# CreateDateField

创建文本日期字段。

## 语法

```javascript
expression.CreateDateField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiTextField](../../ApiTextField/ApiTextField.md)

## 示例

在 PDF 表单中创建日期输入字段。

```javascript editor-pdf
// How do I add a date picker to a form in a PDF?

// Set a default date value in a date field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let dateField = Api.CreateDateField([10, 10, 160, 32]);
page.AddObject(dateField);
dateField.SetValue('01.01.2025');
```
