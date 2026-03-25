# ReplacePageContent

使用指定的参数替换页面内容。

## 语法

```javascript
expression.ReplacePageContent(nPage, oParams);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | 必需 | number |  | 页面索引。 |
| oParams | 必需 | object |  | 替换参数。 |
| oParams.type | 必需 | "xml" \| "html" |  | 要替换的内容类型（XML / HTML）。 |
| oParams.options | 必需 | [ReplaceXmlOptions](../Enumeration/ReplaceXmlOptions.md) \| [ReplaceHtmlOptions](../Enumeration/ReplaceHtmlOptions.md) |  | 内容替换选项。 |

## 返回值

boolean