# SelectContentControl

选择指定的内容控件。

## 语法

```javascript
expression.SelectContentControl(id);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | string |  | 内容控件的唯一内部标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SelectContentControl", ["5_665"]);
```
