# CreateTextField

创建文本字段。

## 语法

```javascript
expression.CreateTextField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiTextField](../../ApiTextField/ApiTextField.md)

## 示例

在 PDF 中向页面添加文本字段。

```javascript editor-pdf
// How do I add a text field to a PDF?

// Create a text field, insert it into a page, and set its value in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');
```
