# EndAction

指定长时间操作的结束操作。
:::note
GroupActions 仅适用于 [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) 和 [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api)。
:::

## 语法

```javascript
expression.EndAction(type, description, status);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "Information" \| "Block" \| "GroupActions" |  | 操作类型： |
| description | 可选 | string \| Object |  | 对于 **"Information"** 和 **"Block"** 类型：操作期间显示的字符串描述。 |
| description.scrollToTarget | 可选 | boolean | true | 如果为 &lt;em&gt;false&lt;/em&gt;，则在组操作结束后编辑器不会滚动到目标位置。 |
| description.cancel | 可选 | boolean | false | 如果为 &lt;em&gt;true&lt;/em&gt;，则组操作将被取消并回滚，而不是提交。 |
| status | 可选 | string |  | 对于 **"Information"** 和 **"Block"** 类型：错误状态码。如果未发生错误，则传递空字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
