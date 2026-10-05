# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 语法

```javascript
expression.SetTag(tag);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 将添加到当前容器的标签。 |

## 返回值

boolean

## 示例

在文档中为复合表单附加自定义标签。

```javascript editor-forms
// How do I label a form with a tag in a document?

// Organize or categorize forms by tagging them for later lookup or processing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetTag("Custom tag")
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
