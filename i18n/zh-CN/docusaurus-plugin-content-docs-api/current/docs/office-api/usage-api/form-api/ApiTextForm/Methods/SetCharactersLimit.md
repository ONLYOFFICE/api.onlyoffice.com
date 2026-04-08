# SetCharactersLimit

设置文本字段的字符数限制。

## 语法

```javascript
expression.SetCharactersLimit(nChars);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nChars | 必需 | number |  | 文本字段中的最大字符数。如果此参数等于 -1，则不设置限制。如果应用字符梳，则必须设置限制。此参数的最大值为 1000000。 |

## 返回值

boolean

## 示例

此示例设置文本字段的字符数限制。

```javascript editor-forms
// How to specify the characters limit of the text form.

// Set the maximum number of characters that can be inserted to the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetCharactersLimit(5);
textForm.SetText("John Smith");
let limit = textForm.GetCharactersLimit();
paragraph = Api.CreateParagraph();
paragraph.AddText("Characters limit: " + limit);
doc.Push(paragraph);
```
