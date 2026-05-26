# MoveCursorToEnd

Moves a cursor to the end of the current editing area (document body, footer/header, footnote, or autoshape).
This method is similar to pressing the - **Ctrl + End** keyboard shortcut.

## 语法

```javascript
expression.MoveCursorToEnd(isMoveToMainContent);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isMoveToMainContent | 必需 | boolean |  | 此标志忽略当前位置，始终将光标移动到文档正文的末尾。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToEnd", [true]);
```
