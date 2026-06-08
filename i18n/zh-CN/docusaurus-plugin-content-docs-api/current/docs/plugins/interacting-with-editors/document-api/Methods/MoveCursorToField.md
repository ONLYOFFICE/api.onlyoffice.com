# MoveCursorToField

将光标移动到字段的开头或末尾。

## 语法

```javascript
expression.MoveCursorToField(fieldId, isBegin);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | 可选 | string |  | 字段 ID。如果未指定，则使用当前字段。 |
| isBegin | 可选 | boolean | false | 定义光标是移动到字段的开头 (**true**) 还是末尾 (**false**)。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
Asc.plugin.executeMethod("MoveCursorToField", [fieldId, true]);
```
