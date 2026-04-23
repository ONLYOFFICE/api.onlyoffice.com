# EndAction

指定长时间操作的结束操作。

## 语法

```javascript
expression.EndAction(type, description, status);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | number |  | 定义操作类型的值，如果是 *BlockInteraction* 操作则为 **"Block"**，如果是 *Information* 操作则为 **"Information"**。 |
| description | 必需 | string |  | 指定操作结束动作的描述文本的字符串值。 |
| status | 必需 | string |  | 错误状态代码。如果没有错误发生，则传递空字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
