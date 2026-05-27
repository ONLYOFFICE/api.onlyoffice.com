# RemoveComments

删除指定的批注。

## 语法

```javascript
expression.RemoveComments(arrIds);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrIds | 必需 | string[] |  | 包含指定批注 ID 的数组。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RemoveComments", [["1_631", "1_632"]]);
```
