# AddPage

向文档添加新页面。

## 语法

```javascript
expression.AddPage(nPos, nWidth, nHeight);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 添加页面的位置。 |
| nWidth | 可选 | [pt](../../Enumeration/pt.md) |  | 页面宽度。 |
| nHeight | 可选 | [pt](../../Enumeration/pt.md) |  | 页面高度。 |

## 返回值

[ApiPage](../../ApiPage/ApiPage.md)

## 示例

This example adds new page into document after 0 index page.

```javascript editor-pdf
let doc = Api.GetDocument();
doc.AddPage(1);
```
