# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 语法

```javascript
expression.SetTag(tag);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 将添加到当前容器的标签。 |

## 返回值

boolean

## 示例

在文档中为组合框表单附加标签。

```javascript editor-docx
// How do I attach a tag to a combo box form in a document?

// Label a combo box with a custom identifier so it can be found and referenced later in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
comboBoxForm.SetTag("Country");
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let tag = comboBoxForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
