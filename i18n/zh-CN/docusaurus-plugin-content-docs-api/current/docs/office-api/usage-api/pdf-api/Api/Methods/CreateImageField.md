# CreateImageField

创建图像字段。

## 语法

```javascript
expression.CreateImageField(aRect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiButtonField](../../ApiButtonField/ApiButtonField.md)

## 示例

如何创建带图像的字段并添加到文档。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);
let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
