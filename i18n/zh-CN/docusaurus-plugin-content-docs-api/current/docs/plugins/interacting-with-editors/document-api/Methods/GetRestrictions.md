# GetRestrictions

返回编辑器当前对文档应用的限制。

## 语法

```javascript
expression.GetRestrictions();
```

`expression` - 表示 [Api](../document-api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EditorRestrictions](../Enumeration/EditorRestrictions.md)

## 示例

```javascript
window.Asc.plugin.executeMethod("GetRestrictions", [], function(restrictions) {
	if (restrictions & 0x80)
		console.log("The document cannot be changed");
});
```
