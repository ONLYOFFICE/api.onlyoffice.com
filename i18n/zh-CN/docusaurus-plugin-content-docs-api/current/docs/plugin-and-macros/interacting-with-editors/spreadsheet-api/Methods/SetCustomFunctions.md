# 设置自定义函数

更新本地自定义函数库。

## 语法

```javascript
expression.SetCustomFunctions(jsonString);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jsonString | 必填 | string |  | JSON 格式的自定义函数库。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetCustomFunctions", [JSON.stringify (Content)], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
