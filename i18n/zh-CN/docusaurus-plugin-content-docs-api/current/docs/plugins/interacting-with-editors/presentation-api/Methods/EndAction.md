# EndAction

指定长时间操作的结束操作。

## 语法

```javascript
expression.EndAction(type, description, status);
```

`expression` - 表示 [Api](../presentation-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "Information" \| "Block" |  | 操作类型：**"Information"** - 结束非阻塞的信息性操作，**"Block"** - 结束阻塞的交互操作。 |
| description | 可选 | string |  | 操作期间显示的字符串描述。 |
| status | 可选 | string |  | 错误状态代码。如果未发生错误，则传递空字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
