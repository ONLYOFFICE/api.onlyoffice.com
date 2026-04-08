# SetFormsHighlight

为文档中的表单设置突出显示。

## 语法

```javascript
expression.SetFormsHighlight(color);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../../text-document-api/ApiColor/ApiColor.md) |  | 表单的高亮颜色。 |

## 返回值

boolean

## 示例

此示例为文档中的表单设置高亮显示。

```javascript editor-forms
// How to set color for forms background.

// Highlight the forms color.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(Api.HexColor('#FF6F3D'));

```
