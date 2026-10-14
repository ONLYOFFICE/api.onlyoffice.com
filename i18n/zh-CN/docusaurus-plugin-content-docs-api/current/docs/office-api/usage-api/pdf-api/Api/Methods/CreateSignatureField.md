# CreateSignatureField

创建签名字段。

## 语法

```javascript
expression.CreateSignatureField(rect);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | 必需 | [Rect](../../Enumeration/Rect.md) |  | 控件矩形 |

## 返回值

[ApiSignatureField](../../ApiSignatureField/ApiSignatureField.md)

## 示例

创建签名字段并将其添加到文档。

```javascript editor-pdf
// Create the signature field in a PDF document.

// Create the signature field and sets the signature image to it.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let signatureField = Api.CreateSignatureField([10, 10, 100, 100]);
page.AddObject(signatureField);
signatureField.SetValue('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');
```
