# SetIconType

设置此批注的图标类型。

## 语法

```javascript
expression.SetIconType(iconType);
```

`expression` - 表示 [ApiTextAnnotation](../ApiTextAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconType | 必需 | [TextIconType](../../Enumeration/TextIconType.md) |  | 文本批注的图标类型。 |

## 返回值

boolean

## 示例

为 PDF 中的文本注释选择图标符号。

```javascript editor-pdf
// How do I change which icon a text annotation shows in a PDF?

// Assign a different icon appearance to an annotation comment in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let oldIcon = textAnnot.GetIconType();
textAnnot.SetContents("Annot contents");
textAnnot.SetIconType("star");
let newIcon = textAnnot.GetIconType();

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Changed icon from: ${oldIcon} to ${newIcon}`);
```
