# GetClassType

返回 ApiSignatureField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSignatureField](../ApiSignatureField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"signatureField"

## 示例

确定 PDF 中签名字段的对象类型。

```javascript editor-pdf
// How do I find out what class a signature field belongs to in a PDF?

// Identify the type category of a signature field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let signatureField = Api.CreateSignatureField([10, 10, 100, 100]);
page.AddObject(signatureField);
signatureField.SetValue('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);

paragraph.SetJc("left");
paragraph.AddText('Signature field class type is: ' + '"' + signatureField.GetClassType() + '"');
page.AddObject(shape);
```
