# ToFixed

将当前表单转换为固定大小的表单。

继承自 [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md)。

## 语法

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| height | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的高度，以点的二十分之一为单位（1/1440 英寸）。 |
| keepPosition | 必需 | boolean |  | 保存在页面上的位置（可能会稍慢，因为需要运行文档计算）。 |

## 返回值

boolean

## 示例

在文档中将复选框表单转换为固定大小表单。

```javascript editor-forms
// How do I lock the dimensions of a form field so it does not resize in a document?

// Prevent layout shifts by giving a checkbox form a precise fixed width and height in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let isFixed = checkBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document has a fixed size: " + isFixed);
doc.Push(paragraph);
```
