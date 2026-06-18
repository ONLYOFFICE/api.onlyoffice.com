# SetCustomFunctions

更新本地自定义函数库。

## 语法

```javascript
expression.SetCustomFunctions(jsonString);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jsonString | 必需 | string |  | JSON 格式的自定义函数库。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetCustomFunctions", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
