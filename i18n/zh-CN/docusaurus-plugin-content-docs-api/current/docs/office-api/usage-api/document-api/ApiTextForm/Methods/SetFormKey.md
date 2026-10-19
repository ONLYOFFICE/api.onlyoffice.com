# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 语法

```javascript
expression.SetFormKey(sKey);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 表单键。 |

## 返回值

boolean

## 示例

在文档中为文本字段分配标识键。

```javascript editor-docx
// How do I give a text field a unique identifier for referencing it later in a document?

// Label a text field with a key so it can be found and grouped with related fields in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetFormKey("Personal information");
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
