# SetBorderColor

设置当前表单的边框颜色。

继承自 [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md)。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为图片表单的边框应用颜色。

```javascript editor-forms
// How do I change the border color of a picture form in a document?

// Style the outline of a picture form with a specific color to improve its appearance in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
