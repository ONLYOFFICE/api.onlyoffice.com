# SetTextPr

设置当前表单的文本属性。

:::note
仅在此类型表单支持时使用。
:::

继承自 [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md) |  | 将设置到当前表单的文本属性。 |

## 返回值

boolean

## 示例

在文档中为图片字段内的文本应用自定义字体样式。

```javascript editor-forms
// How do I change the font size and weight of the label text shown in a picture field in a document?

// Style the caption text of a picture field with bold and a larger size in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetTipText("Upload your photo");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
pictureForm.SetTextPr(textPr);
```
