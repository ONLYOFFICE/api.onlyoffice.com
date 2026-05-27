# AddPage

向文档添加新页面。

## 语法

```javascript
expression.AddPage(index, width, height);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 要添加页面的索引。 |
| width | 可选 | [pt](../../Enumeration/pt.md) |  | 页面宽度。 |
| height | 可选 | [pt](../../Enumeration/pt.md) |  | 页面高度。 |

## 返回值

[ApiPage](../../ApiPage/ApiPage.md)

## 示例

在 PDF 中向文档插入新页面。

```javascript editor-pdf
// Can I add pages to a PDF document?

// Place additional pages at specific positions in a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
```
