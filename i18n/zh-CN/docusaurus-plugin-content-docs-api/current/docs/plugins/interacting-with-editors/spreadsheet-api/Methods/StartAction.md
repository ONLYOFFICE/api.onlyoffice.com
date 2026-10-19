# StartAction

指定长时间操作的开始操作。

## 语法

```javascript
expression.StartAction(type, description);
```

`expression` - 表示 [Api](../spreadsheet-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "Information" \| "Block" |  | 操作类型：**"Information"** - 非阻塞的信息性操作，**"Block"** - 阻塞的交互操作。 |
| description | 可选 | string |  | 操作期间显示的字符串描述。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("StartAction", ["Block", "Save to local storage..."], function () {
    setPasswordByFile ("sha256", "123456");

    setTimeout (function () {
        window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to localstorage..."]);
    }, 200);
});
```
