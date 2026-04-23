# GetSelectedContent

以指定格式返回所选内容。

## 语法

```javascript
expression.GetSelectedContent(prop);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | 必需 | object |  | 返回内容的属性。 |
| prop.type | 可选 | "text" \| "html" | "text" | 返回内容的格式类型（text 或 HTML）。 |

## 返回值

string