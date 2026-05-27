# SetBorderEffectStyle

设置批注边框效果样式。
💡 可应用于圆形、方形、自由文本和多边形批注

## 语法

```javascript
expression.SetBorderEffectStyle(style);
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [AnnotBorderEffectStyle](../../Enumeration/AnnotBorderEffectStyle.md) |  | 边框效果样式：**"none"** 或 **"cloud"**。 |

## 返回值

boolean

## 示例

在 PDF 中为注释的边框应用视觉效果样式。

```javascript editor-pdf
// What visual effect should appear on an annotation's border in a PDF?

// Configure a border effect style on an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
