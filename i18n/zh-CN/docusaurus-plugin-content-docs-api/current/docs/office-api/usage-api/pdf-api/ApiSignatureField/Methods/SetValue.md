# SetValue

为所有按钮字段控件设置图像

:::note
不适用于 "textOnly" 布局。
:::

继承自 [ApiButtonField.SetValue](../../ApiButtonField/Methods/SetValue.md)。

## 语法

```javascript
expression.SetValue(imageUrl);
```

`expression` - 表示 [ApiSignatureField](../ApiSignatureField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 可选 | string | "" | 要为按钮设置的图像 URL（目前仅支持互联网 URL 或 Base64 编码的图像） |

## 返回值

boolean

## 示例

在 PDF 中为所有按钮字段控件设置图像值。

```javascript editor-pdf
// Useful for assigning an image to a button field.

// Create an image field and set the image for its widgets.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(buttonField);

buttonField.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
