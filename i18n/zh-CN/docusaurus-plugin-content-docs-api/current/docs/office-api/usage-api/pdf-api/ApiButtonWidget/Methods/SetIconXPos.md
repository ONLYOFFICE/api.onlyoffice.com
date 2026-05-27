# SetIconXPos

设置按钮控件图标的 x 位置。

## 语法

```javascript
expression.SetIconXPos(posX);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | 必需 | [percentage](../../Enumeration/percentage.md) |  | 图标的水平位置，以按钮宽度的百分比表示。 |

## 返回值

boolean

## 示例

设置 PDF 文档中字段图像图标的 X 位置。

```javascript editor-pdf
// Configure the horizontal position of an icon in an image field.

// Apply the X position value to a button widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconXPos(0);
```
