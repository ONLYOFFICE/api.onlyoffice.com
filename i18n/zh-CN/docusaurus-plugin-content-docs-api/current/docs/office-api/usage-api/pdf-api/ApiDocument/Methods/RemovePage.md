# RemovePage

按索引从文档中移除页面
💡  无法删除最后一页 

## 语法

```javascript
expression.RemovePage(index);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | 必需 | number |  | 页面索引 |

## 返回值

boolean

## 示例

从 PDF 删除页面。

```javascript editor-pdf
// How do I remove an unwanted page from a PDF?

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
