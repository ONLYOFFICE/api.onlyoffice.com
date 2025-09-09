# 设置宏

设置文档的宏。

## 语法

```javascript
expression.SetMacros(data);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| -------- | ------------ | ------------ | ---------- | -------- |
| data     | 必填         | [宏](../Enumeration/Macros.md) |  | 包含文档中所有宏数据的*宏*对象。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetMacros", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
