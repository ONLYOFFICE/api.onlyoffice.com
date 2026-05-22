# SetBackgroundColor

设置当前表单的背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 背景颜色。 |

## 返回值

boolean

## 示例

在文档中为表单字段应用背景颜色。

```javascript editor-forms
// How do I fill a form field with a specific background color in a document?

// Color the background of a form field to make it visually distinct from surrounding text in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
