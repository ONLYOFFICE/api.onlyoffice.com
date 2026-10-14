# Merge

将 PDF 文件合并到当前文档的指定位置。

## 语法

```javascript
expression.Merge(position, deleteCount, files);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 可选 | number |  | 用于合并 PDF 文件的页面索引（如果省略，则粘贴到末尾） |
| deleteCount | 可选 | number | 0 | 从该位置开始要替换的现有页数，以剩余页数为限 |
| files | 可选 | [PdfFile](../../PdfFile/PdfFile.md)[] \| Base64[] |  | PDF 文件 |

## 返回值

boolean
