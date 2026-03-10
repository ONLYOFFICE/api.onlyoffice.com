# SetLanguage

设置当前表单的日期语言。

## 语法

```javascript
expression.SetLanguage(sLangId);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | 必需 | string |  | 日期语言。此参数的可能值是 RFC 4646/BCP 47 中定义的语言标识符。例如："en-CA"。 |

## 返回值

boolean

## 示例

此示例展示如何在日期表单中设置日期语言。

```javascript editor-forms
// Change the language of the date form.

// How to set the date form language to "en-CA".

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetLanguage("en-CA");
let langId = dateForm.GetLanguage();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted language: " + langId);
doc.Push(paragraph);
```
