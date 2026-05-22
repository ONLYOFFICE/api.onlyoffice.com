# SetText

设置当前文本字段的文本。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 将设置到当前文本字段的文本。 |

## 返回值

boolean

## 示例

将文本放入文档中的文本表单字段。

```javascript editor-docx
// How do I pre-fill a text form with specific content in a document?

// Populate a text form with a default value so the field is not empty in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("John Smith");
```
