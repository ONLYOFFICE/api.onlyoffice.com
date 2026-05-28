# SetParagraphHtml

用从给定 HTML 字符串解析的内容替换指定段落的所有内容。
如果 HTML 包含多个块级元素，其内联内容将合并到目标段落中。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetParagraphHtml(html, paraId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| html | 必需 | string |  | 要解析和应用的 HTML 字符串。 |
| paraId | 可选 | number |  | 段落 ID。如果未指定，则使用当前段落。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("SetParagraphHtml", ["<p>Hello <b>World</b></p>"]);
```
