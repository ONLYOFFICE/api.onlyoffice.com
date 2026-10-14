# Split

按指定页面拆分当前 PDF 文件。

## 语法

```javascript
expression.Split(indexes);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| indexes | 可选 | number[] |  | 用于拆分的页面索引（如果省略此参数，则返回所有页面的结果。） |

## 返回值

[PdfFile](../../PdfFile/PdfFile.md)
