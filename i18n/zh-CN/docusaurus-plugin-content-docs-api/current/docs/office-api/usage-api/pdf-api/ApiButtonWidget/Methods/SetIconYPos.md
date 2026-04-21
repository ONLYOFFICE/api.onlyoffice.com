# SetIconYPos

设置按钮控件图标的 y 位置。

## 语法

```javascript
expression.SetIconYPos(nPosY);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosY | 必需 | [percentage](../../Enumeration/percentage.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中将带有图像的字段图标 Y 位置设置为 0。

```javascript editor-pdf
// How do I set icon y pos in a PDF document?

// Set icon y pos using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconYPos(0);
```
