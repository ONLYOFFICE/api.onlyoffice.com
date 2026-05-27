# AddOption

向复选框组添加选项。

## 语法

```javascript
expression.AddOption(pageIndex, rect, exportValue);
```

`expression` - 表示 [ApiCheckboxField](../ApiCheckboxField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pageIndex | 必需 | number |  | 要添加选项的页面。 |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 选项矩形。 |
| exportValue | 可选 | string |  | 选项的选中值。 |

## 返回值

[ApiCheckboxWidget](../../ApiCheckboxWidget/ApiCheckboxWidget.md)

## 示例

在 PDF 中向复选框字段添加可选选项。

```javascript editor-pdf
// How do I create multiple choices for a checkbox field in a PDF?

// Create an additional choice that users can select in a checkbox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
