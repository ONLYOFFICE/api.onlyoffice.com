# SetTipText

设置当前表单的提示文本。

继承自 [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md)。

## 语法

```javascript
expression.SetTipText(sText);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 提示文本。 |

## 返回值

boolean

## 示例

在文档中为复合表单设置工具提示消息。

```javascript editor-docx
// How do I add a helpful tip that appears when a user hovers over a form in a document?

// Provide context or instructions to users through a tooltip shown on a form field.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetTipText("Insert here other forms");
let tipText = complexForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
