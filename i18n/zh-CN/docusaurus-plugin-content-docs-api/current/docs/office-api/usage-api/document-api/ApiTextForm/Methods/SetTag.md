# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 语法

```javascript
expression.SetTag(tag);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 将添加到当前容器的标签。 |

## 返回值

boolean

## 示例

在文档中为文本表单附加自定义标签。

```javascript editor-docx
// How do I label a text form with a tag so it can be identified later in a document?

// Organize and reference a text form by giving it a searchable tag in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
textForm.SetTag("Info");
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
