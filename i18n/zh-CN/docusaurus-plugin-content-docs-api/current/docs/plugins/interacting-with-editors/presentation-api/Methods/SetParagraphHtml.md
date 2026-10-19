# SetParagraphHtml

用从给定 HTML 字符串解析的内容替换指定段落的全部内容。段落中的幻灯片编号和日期字段以及公式将保持不变。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetParagraphHtml(html, paraId);
```

`expression` - 表示 [Api](../presentation-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | 必需 | string |  | 要解析和应用的 HTML 字符串。 |
| paraId | 可选 | string |  | 段落 ID。如果未指定，则使用当前段落。 |

## 返回值

boolean
