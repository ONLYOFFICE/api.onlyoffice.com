# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 语法

```javascript
expression.SetFormKey(sKey);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 表单键。 |

## 返回值

boolean

## 示例

在文档中为日期表单分配标识键。

```javascript editor-forms
// How do I set or update the key of a date form in a document?

// Rename a date form's key and confirm the new value is stored correctly in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormKey("Date form key");
let key = dateForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
