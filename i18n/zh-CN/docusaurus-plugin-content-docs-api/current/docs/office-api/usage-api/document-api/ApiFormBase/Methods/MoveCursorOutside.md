# MoveCursorOutside

将光标放置在当前表单之前/之后。

## 语法

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - 表示 [ApiFormBase](../ApiFormBase.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | 可选 | boolean | true | 指定光标是放置在当前表单之前（false）还是之后（true）。 |

## 返回值

boolean

## 示例

将光标移动到文档中表单字段外的位置。

```javascript editor-docx
// How do I place the cursor right after a form field to continue typing in a document?

// Shift focus out of a completed form field so the next input lands in the surrounding text in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("The cursor will be placed after the current form.");
textForm.MoveCursorOutside(true);
```
