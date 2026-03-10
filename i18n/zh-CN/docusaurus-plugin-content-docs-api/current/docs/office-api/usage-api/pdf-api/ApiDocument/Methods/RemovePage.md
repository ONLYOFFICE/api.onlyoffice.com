# RemovePage

按索引从文档移除页面

## 语法

```javascript
expression.RemovePage(nPos);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 页面位置 |

## 返回值

boolean

## 示例

This example shows how to remove page from document.

```javascript editor-pdf
let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
