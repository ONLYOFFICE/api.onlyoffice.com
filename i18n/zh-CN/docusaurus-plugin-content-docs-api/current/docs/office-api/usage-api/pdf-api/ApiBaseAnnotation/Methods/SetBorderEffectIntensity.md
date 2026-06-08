# SetBorderEffectIntensity

设置批注边框效果强度。
💡 可应用于圆形、方形、自由文本和多边形批注

## 语法

```javascript
expression.SetBorderEffectIntensity(value);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | number |  | 边框效果强度。必须大于或等于 0。 |

## 返回值

boolean

## 示例

控制 PDF 中注释上边框效果的强度。

```javascript editor-pdf
// How strong should a border effect appear on an annotation in a PDF?

// Adjust the intensity level of a visual effect applied to an annotation's border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
