# GetPage

按索引从文档获取页面。

## 语法

```javascript
expression.GetPage(nPos);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 页面位置 |

## 返回值

[ApiPage](../../ApiPage/ApiPage.md)

## 示例

从 PDF 访问单个页面。

```javascript editor-pdf
// How do I work with a specific page in a PDF?

// Retrieve a page and rotate it in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
