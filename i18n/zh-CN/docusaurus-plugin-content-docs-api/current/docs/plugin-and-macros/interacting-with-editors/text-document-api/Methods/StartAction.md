# 开始动作

指定用于长时间操作的起始动作。

## 语法

```javascript
expression.StartAction(type, description);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必填 | number |  | 一个用于定义动作类型的数值。 **0** 表示*信息*动作，**1** 表示*阻止交互*动作。 |
| description | 必填 | string |  | 一个字符串，指定该操作起始动作的描述文本。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200););
});
```
