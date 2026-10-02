# ToFixed

将当前表单转换为固定大小的表单。

继承自 [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md)。

## 语法

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| height | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的高度，以点的二十分之一为单位（1/1440 英寸）。 |
| keepPosition | 必需 | boolean |  | 保存在页面上的位置（可能会稍慢，因为需要运行文档计算）。 |

## 返回值

boolean

## 示例

在文档中将组合框表单转换为固定大小。

```javascript editor-forms
// How do I give a combo box form a fixed size in a document?

// Lock the dimensions of a combo box so it does not resize when content changes in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let isFixed = comboBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + isFixed);
doc.Push(paragraph);
```
