# CreateCheckboxField

创建复选框字段。

## 语法

```javascript
expression.CreateCheckboxField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiCheckboxField](../../ApiCheckboxField/ApiCheckboxField.md)

## 示例

在 PDF 中创建复选框表单字段。

```javascript editor-pdf
// How do I add a checkbox to a form in a PDF?

// Set the initial value of a checkbox in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);
checkboxField.SetValue('Yes');
```
