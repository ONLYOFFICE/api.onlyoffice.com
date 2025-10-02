# 获取选中内容

以指定格式返回选中的内容。

## 语法

```javascript
expression.GetSelectedContent(prop);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | ------------- | ------------ | ---------- | -------- |
| prop | 必填 | object |  | 返回内容的属性。 |
| prop.type | 选填 | "text" \| "html" | "text" | 返回内容的格式类型（文本或 HTML）。 |

## 返回值

string（字符串）