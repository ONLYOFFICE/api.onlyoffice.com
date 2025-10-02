# 设置文档编辑限制

设置文档编辑限制。

## 语法

```javascript
expression.SetEditingRestrictions(restrictions);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| restrictions | 必填 | [文档编辑限制](../Enumeration/DocumentEditingRestrictions.md) | — | 文档编辑限制。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod("SetEditingRestrictions", ["readOnly"]);
```
