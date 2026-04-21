# SetEndStyle

设置线条终点样式。

## 语法

```javascript
expression.SetEndStyle(style);
```

`expression` - 表示 [ApiLineAnnotation](../ApiLineAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | 必需 | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

在 PDF 文档中为线条注释设置终止线条样式。

```javascript editor-pdf
// How to set end style for a line annotation in a PDF document?

// Set end style and display the result in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
lineAnnot.SetEndStyle("slash");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style set to: ${lineAnnot.GetEndStyle()}`);
```
