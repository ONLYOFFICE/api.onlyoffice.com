# SelectAddinField

选择指定的加载项字段。

## 语法

```javascript
expression.SelectAddinField(fieldId);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | 必需 | string |  | 字段标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
let fieldId = "12";
window.Asc.plugin.executeMethod("SelectAddinField", [fieldId]);
```
