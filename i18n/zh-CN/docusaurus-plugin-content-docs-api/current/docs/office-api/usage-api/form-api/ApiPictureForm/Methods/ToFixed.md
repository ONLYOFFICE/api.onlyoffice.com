# ToFixed

将当前表单转换为固定大小的表单。

继承自 [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md)。

## 语法

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| height | 必需 | [twips](../../Enumeration/twips.md) |  | 包装形状的高度，以点的二十分之一为单位（1/1440 英寸）。 |
| keepPosition | 必需 | boolean |  | 保存在页面上的位置（可能会稍慢，因为需要运行文档计算）。 |

## 返回值

boolean

## 示例

在文档中将图片字段锁定为特定的宽度和高度。

```javascript editor-forms
// How do I stop a picture field from changing its dimensions when content is added in a document?

// Freeze the size of a picture field so it never grows or shrinks in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.ToFixed(10 * 240, 10 * 240);
let fixed = pictureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
