# SetRequired

指定当前表单是否为必填项。

继承自 [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md)。

## 语法

```javascript
expression.SetRequired(bRequired);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | 必需 | boolean |  | 定义当前表单是否为必填项（true）或非必填项（false）。 |

## 返回值

boolean

## 示例

在文档中将日期表单标记为必填。

```javascript editor-docx
// How do I make a date form mandatory in a document?

// Enable the required flag on a date form and confirm the setting is active in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": false, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetRequired(true);
let required = dateForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
