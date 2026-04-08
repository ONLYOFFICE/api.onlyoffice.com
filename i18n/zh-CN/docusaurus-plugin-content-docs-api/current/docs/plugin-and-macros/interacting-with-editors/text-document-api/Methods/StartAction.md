# StartAction

指定长时间操作的开始操作。

## 语法

```javascript
expression.StartAction(type, description);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | number |  | 定义操作类型的值，如果是 *Information* 操作则为 **0**，如果是 *BlockInteraction* 操作则为 **1**。 |
| description | 必需 | string |  | 指定操作开始动作的描述文本的字符串值。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200););
});
```
