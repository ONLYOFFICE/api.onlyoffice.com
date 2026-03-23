# MoveCursorToContentControl

将光标移动到指定的内容控件。

## 语法

```javascript
expression.MoveCursorToContentControl(id, isBegin);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | string |  | 内容控件的唯一内部标识符。 |
| isBegin | 可选 | boolean | false | 定义内容控件中光标位置是否改变。默认情况下，光标将放置在内容控件的开头（**false**）。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToContentControl", ["2_839", false]);
```
