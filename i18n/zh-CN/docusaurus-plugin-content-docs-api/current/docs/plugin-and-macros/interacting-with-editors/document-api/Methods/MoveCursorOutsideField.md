# MoveCursorOutsideField

将光标移动到字段外部，定位在字段之前或之后。

## 语法

```javascript
expression.MoveCursorOutsideField(fieldId, isBefore);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | 可选 | string |  | 字段 ID。如果未指定，则使用当前字段。 |
| isBefore | 可选 | boolean | true | 定义光标是移动到字段之前 (**true**) 还是之后 (**false**)。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
Asc.plugin.executeMethod("MoveCursorOutsideField", [fieldId, false]);
```
