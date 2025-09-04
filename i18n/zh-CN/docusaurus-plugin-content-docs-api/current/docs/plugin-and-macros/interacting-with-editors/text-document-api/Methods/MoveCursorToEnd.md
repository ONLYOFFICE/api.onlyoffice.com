# 移动光标至末尾

将光标移动到当前编辑区域（文档正文、页脚/页眉、脚注或自选图形）的末尾。
此方法类似于按下 **Ctrl + End** 快捷键。

## 语法

```javascript
expression.MoveCursorToEnd(isMoveToMainContent);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isMoveToMainContent | 必填 | boolean | — | 该标志忽略当前位置，始终将光标移动到文档正文的末尾。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveCursorToEnd", [true]);
```
