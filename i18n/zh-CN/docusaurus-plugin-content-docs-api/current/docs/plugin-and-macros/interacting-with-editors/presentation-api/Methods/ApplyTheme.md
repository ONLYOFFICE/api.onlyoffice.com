# ApplyTheme

通过索引或名称将主题应用于演示文稿。

## 语法

```javascript
expression.ApplyTheme(themeIndex);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| themeIndex | 必需 | number \| string |  | 主题索引（数字）或主题名称（字符串，不区分大小写）。 |

## 返回值

boolean

## 示例

```javascript
window.Asc.plugin.executeMethod("ApplyTheme", [5]);
```
