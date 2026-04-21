# SetEditingRestrictions

设置文档编辑限制。

## 语法

```javascript
expression.SetEditingRestrictions(restrictions);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| restrictions | 必需 | [DocumentEditingRestrictions](../Enumeration/DocumentEditingRestrictions.md) |  | 文档编辑限制。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod("SetEditingRestrictions", ["readOnly"]);
```
