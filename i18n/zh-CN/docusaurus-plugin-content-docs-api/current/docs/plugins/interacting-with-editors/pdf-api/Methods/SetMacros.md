# SetMacros

为文档设置宏。

## 语法

```javascript
expression.SetMacros(data);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | [Macros](../Enumeration/Macros.md) |  | 包含文档中所有宏数据的 *Macros* 对象。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetMacros", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
