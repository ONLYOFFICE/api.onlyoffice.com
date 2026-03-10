# SetImage

为按钮控件字段设置图像。

## 语法

```javascript
expression.SetImage(sImageUrl, sApType);
```

`expression` - 表示 [ApiButtonWidget](../ApiButtonWidget.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | 可选 | string | '' | 图像 URL |
| sApType | 可选 | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | 'normal' | 为哪种状态设置图片 |

## 返回值

boolean

## 示例

This example sets image for field with image.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
