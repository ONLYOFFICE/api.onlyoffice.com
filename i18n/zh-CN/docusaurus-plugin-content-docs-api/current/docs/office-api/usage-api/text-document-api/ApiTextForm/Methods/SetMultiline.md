# SetMultiline

指定当前文本字段是否应为多行。

## 语法

```javascript
expression.SetMultiline(bMultiline);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | 必需 | boolean |  | 定义当前文本字段是否为多行（true）或单行（false）。 |

## 返回值

boolean

## 示例

此示例指定文本字段是否应为多行。

```javascript editor-docx
// How to set the first text form from this document multiline.

// Set the boolean that represents the multiline property of the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(3 * 240, 3 * 240);
textForm.SetMultiline(true);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
