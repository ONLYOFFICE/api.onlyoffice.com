# SetPlaceholderText

设置当前表单的占位符文本。

:::note
无法为复选框或单选按钮表单设置占位符文本。
:::

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前表单的文本。 |

## 返回值

boolean

## 示例

在文档中为图片字段分配占位符文本。

```javascript editor-docx
// How do I add a hint label that appears inside an empty picture field in a document?

// Label an unfilled picture field with descriptive placeholder text in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.SetPlaceholderText("Picture form");
```
