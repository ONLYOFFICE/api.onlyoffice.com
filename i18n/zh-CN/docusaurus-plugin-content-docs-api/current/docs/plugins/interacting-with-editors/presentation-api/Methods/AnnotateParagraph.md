# AnnotateParagraph

向指定的段落添加注解。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.AnnotateParagraph(data);
```

`expression` - 表示 [Api](../presentation-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | Object |  | 指定注解内容的注解数据。 |
| data.type | 必需 | string |  | 注解操作的类型（例如 `"highlightText"`）。 |
| data.name | 可选 | string |  | 注解的可选名称。 |
| data.paragraphId | 必需 | string |  | 被注解段落的 ID。 |
| data.recalcId | 必需 | string |  | 段落重算 ID。 |
| data.ranges | 可选 | Object[] |  | 要高亮显示的文本范围数组（适用于 highlightText 类型）。 |

## 返回值

此方法不返回任何数据。
