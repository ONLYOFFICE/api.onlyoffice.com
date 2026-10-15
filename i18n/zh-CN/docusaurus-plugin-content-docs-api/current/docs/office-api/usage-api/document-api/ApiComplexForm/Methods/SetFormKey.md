# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 语法

```javascript
expression.SetFormKey(sKey);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | 必需 | string |  | 表单键。 |

## 返回值

boolean

## 示例

在文档中为复合表单分配唯一键。

```javascript editor-docx
// How do I set or update the key of a form in a document?

// Link a form to a specific identifier so it can be referenced or grouped with related fields.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetFormKey("Complex2");
let key = complexForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
