# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 语法

```javascript
expression.SetTag(tag);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | 必需 | string |  | 将添加到当前容器的标签。 |

## 返回值

boolean

## 示例

在文档中为图片字段附加标识标签。

```javascript editor-docx
// How do I label a picture field with a custom tag so I can reference it later in a document?

// Mark a picture field with a short keyword to make it easy to find and group in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetTag("Personal");
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let tag = pictureForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
