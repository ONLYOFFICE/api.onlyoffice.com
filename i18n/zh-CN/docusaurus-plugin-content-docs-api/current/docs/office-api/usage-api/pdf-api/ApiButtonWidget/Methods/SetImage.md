# SetImage

为按钮控件字段设置图像。

## 语法

```javascript
expression.SetImage(imageUrl, appearance);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 可选 | string | "" | 图像 URL。 |
| appearance | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | "normal" | 外观状态。 |

## 返回值

boolean

## 示例

设置 PDF 文档中按钮控件的图像。

```javascript editor-pdf
// Assign an image resource to an image field with normal state.

// Add the image field to a PDF page.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
