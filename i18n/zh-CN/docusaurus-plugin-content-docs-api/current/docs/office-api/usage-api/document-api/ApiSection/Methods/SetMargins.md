# SetMargins

指定此节中所有页面的页边距。[ApiSection#SetPageMargins](../../ApiSection/Methods/SetPageMargins.md) 的别名。

## 语法

```javascript
expression.SetMargins(left, top, right, bottom);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| left | 必需 | [twips](../../Enumeration/twips.md) |  | 左边距宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| top | 必需 | [twips](../../Enumeration/twips.md) |  | 上边距高度，以点的二十分之一为单位（1/1440 英寸）。 |
| right | 必需 | [twips](../../Enumeration/twips.md) |  | 右边距宽度，以点的二十分之一为单位（1/1440 英寸）。 |
| bottom | 必需 | [twips](../../Enumeration/twips.md) |  | 下边距高度，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean
