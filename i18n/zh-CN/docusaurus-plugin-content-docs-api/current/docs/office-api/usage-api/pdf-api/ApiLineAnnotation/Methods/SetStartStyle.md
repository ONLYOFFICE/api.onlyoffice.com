# SetStartStyle

设置线条起点样式。

## 语法

```javascript
expression.SetStartStyle(style);
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | 线条起始端点的样式。 |

## 返回值

boolean

## 示例

自定义 PDF 中线条注释的起始外观。

```javascript editor-pdf
// How do I change the start style in a PDF?

// Apply a specific line beginning to the annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetStartStyle("rClosedArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style set to: ${lineAnnot.GetStartStyle()}`);
```
