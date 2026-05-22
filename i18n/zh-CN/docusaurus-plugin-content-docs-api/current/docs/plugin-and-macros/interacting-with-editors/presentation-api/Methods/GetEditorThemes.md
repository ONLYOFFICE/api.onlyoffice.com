# GetEditorThemes

返回可用编辑器主题的列表。

## 语法

```javascript
expression.GetEditorThemes();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object[]

## 示例

```javascript
window.Asc.plugin.executeMethod("GetEditorThemes", null, function(themes) {
	console.log(themes);
});
```
