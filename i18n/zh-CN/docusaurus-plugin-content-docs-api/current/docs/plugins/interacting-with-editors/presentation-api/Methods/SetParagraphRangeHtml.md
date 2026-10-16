# SetParagraphRangeHtml

用从给定 HTML 字符串解析的内容替换指定段落的一部分。段落中的幻灯片编号和日期字段以及公式将保持不变。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetParagraphRangeHtml(html, paraId, from, to);
```

`expression` - 表示 [Api](../presentation-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | 必需 | string |  | 要解析和应用的 HTML 字符串。 |
| paraId | 必需 | string |  | 段落 ID。 |
| from | 必需 | number |  | 段落内的起始偏移量。 |
| to | 必需 | number |  | 段落内的结束偏移量。 |

## 返回值

boolean
