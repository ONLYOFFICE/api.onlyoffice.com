# EditorRestrictions

当前的编辑限制，为以下标志的组合：**0x00** - 无编辑限制，**0x01** - 允许编辑表单字段，**0x02** - 允许编辑批注和由范围权限界定的区域，**0x04** - 文档已签名且不能更改，**0x80** - 不允许编辑。

## 类型

number

## 示例

```javascript
window.Asc.plugin.executeMethod("GetRestrictions", [], function(restrictions) {
	let editorRestrictions = restrictions;
	let canEdit = 0 === editorRestrictions;
});
```
