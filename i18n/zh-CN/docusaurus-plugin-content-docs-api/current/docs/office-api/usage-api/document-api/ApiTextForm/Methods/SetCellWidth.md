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
| nCellWidth | 可选 | [mm](../../Enumeration/mm.md) | 0 | 以毫米为单位的单元格宽度。如果未指定此参数或等于 0 或更小，则宽度将自动设置。必须 \>= 1 且 \<= 558.8。 |

## 返回值

boolean

## 示例

设置文档中梳状文本字段中每个字符单元格的宽度。

```javascript editor-docx
// How do I control the width of individual character boxes in a text field in a document?

// Adjust character cell width to ensure uniform spacing across a comb text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);
```
