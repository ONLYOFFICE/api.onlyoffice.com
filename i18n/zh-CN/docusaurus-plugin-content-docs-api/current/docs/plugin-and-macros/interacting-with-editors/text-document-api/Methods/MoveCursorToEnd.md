# MoveCursorToEnd

将光标移动到当前编辑区域（文档正文、页眉/页脚、脚注或自选图形）的末尾。
此方法类似于按 **Ctrl + End** 键盘快捷键。

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
