# SetQuads

设置当前标记批注的四边形。

## 语法

```javascript
expression.SetQuads(quads);
```

`expression` - 表示 [ApiCaretAnnotation](../ApiCaretAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| quads | 必需 | [Quad](../../Enumeration/Quad.md)[] |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例为标记注释设置四边形。

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
