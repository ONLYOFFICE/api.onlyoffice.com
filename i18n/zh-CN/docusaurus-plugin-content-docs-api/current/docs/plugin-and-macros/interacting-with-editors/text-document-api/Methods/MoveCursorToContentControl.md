# 移动光标至内容控件

将光标移动到指定的内容控件。

## 语法

```javascript
expression.MoveCursorToContentControl(id, isBegin);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必填 | string | — | 内容控件的唯一内部标识符。 |
| isBegin | 选填 | boolean | false | 指定光标是否移动到内容控件的开头。默认情况下，光标将被放置在内容控件的开头（**false**）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToContentControl", ["2_839", false]);
```
