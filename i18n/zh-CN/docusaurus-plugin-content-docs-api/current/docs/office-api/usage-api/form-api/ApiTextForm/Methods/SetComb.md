# SetComb

指定文本字段是否应为具有相同单元格宽度的字符梳。
最大字符数必须设置为正值。

## 语法

```javascript
expression.SetComb(bComb);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bComb | 必需 | boolean |  | 定义文本字段是否为字符梳（true）或不是（false）。 |

## 返回值

boolean

## 示例

在文档中将文本字段分割为等宽字符框。

```javascript editor-forms
// How do I split a text field into evenly spaced individual character cells in a document?

// Give a text field a structured grid appearance by enabling its comb layout in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
let comb = textForm.IsComb();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is comb: " + comb);
doc.Push(paragraph);
```
