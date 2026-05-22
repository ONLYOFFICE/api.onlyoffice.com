# StartAction

指定长时间操作的开始操作。
:::note
GroupActions 仅适用于 [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) 和 [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api)。
:::

## 语法

```javascript
expression.StartAction(type, description);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "Information" \| "Block" \| "GroupActions" |  | 操作类型： |
| description | 可选 | string \| Object |  | 对于 **"Information"** 和 **"Block"** 类型：操作期间显示的字符串描述。 |
| description.lockScroll | 可选 | boolean |  | 如果为 &lt;em&gt;true&lt;/em&gt;，则在组操作期间编辑器的滚动位置将被锁定。 |
| description.keepSelection | 可选 | boolean |  | 如果为 &lt;em&gt;true&lt;/em&gt;，则在组操作结束后将保留光标位置和选区。 |

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
