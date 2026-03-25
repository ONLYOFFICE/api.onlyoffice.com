# InsertParagraph

在指定位置插入段落。

## 语法

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | 必需 | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 文本或段落。 |
| sPosition | 必需 | string |  | 将插入文本或段落的位置（指定段落的「之前」或「之后」）。 |
| beRNewPara | 必需 | boolean |  | 定义此方法是返回新段落（true）还是当前段落（false）。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null