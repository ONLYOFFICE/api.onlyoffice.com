# 结束操作

指定长时间操作的结束行为。

## 语法

```javascript
expression.EndAction(type, description, status);
```

`expression` - 一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | -------------- | ------------- | ------------ | -------- |
| type | 必填 | number |  | 指定操作类型的值。如果是 *BlockInteraction* 操作，则为 **"Block"**；如果是 *Information* 操作，则为 **"Information"**。 |
| description | 必填 | string |  | 指定操作结束描述文本的字符串。 |
| status | 必填 | string |  | 错误状态码。如果没有发生错误，则传入空字符串。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("EndAction", ["Block", "Save to local storage...", ""]);
```
