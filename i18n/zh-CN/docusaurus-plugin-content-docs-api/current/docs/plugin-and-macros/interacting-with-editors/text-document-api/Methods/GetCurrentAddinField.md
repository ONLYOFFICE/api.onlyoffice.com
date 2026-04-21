# GetCurrentAddinField

返回文档中的当前加载项字段。

## 语法

```javascript
expression.GetCurrentAddinField();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[AddinFieldData](../Enumeration/AddinFieldData.md)

## 示例

```javascript
window.Asc.plugin.executeMethod("GetCurrentAddinField", [], function(data){
	if (null === data) {
		console.log("No addin field at the current cursor position");
	} else {
		console.log("Current addin field:", data);
	}
});
```
