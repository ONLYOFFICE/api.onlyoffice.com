# SetCellWidth

为已应用的字符梳设置单元格宽度。

## 语法

```javascript
expression.SetCellWidth(nCellWidth);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCellWidth | 可选 | [mm](../../Enumeration/mm.md) | 0 | 以毫米为单位的单元格宽度。如果未指定此参数或等于 0 或更小，则宽度将自动设置。必须 &gt;= 1 且 &lt;= 558.8。 |

## 返回值

boolean

## 示例

此示例为已应用的字符梳设置单元格宽度。

```javascript editor-forms
// How to set the width of the cell of the text form.

// Resize the text form cell.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);
```
