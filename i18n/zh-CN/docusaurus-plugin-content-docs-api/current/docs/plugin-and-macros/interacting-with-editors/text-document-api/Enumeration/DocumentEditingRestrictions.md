# DocumentEditingRestrictions

文档编辑限制：
-**none** - 无编辑限制，
-**comments** - 允许编辑批注，
-**forms** - 允许编辑表单字段，
-**readOnly** - 不允许编辑。

## 类型

枚举

## 值

- 'none'
- 'comments'
- 'forms'
- 'readOnly'


## 示例

```javascript
let documentEditingRestrictions = "readOnly";
window.Asc.plugin.executeMethod("SetEditingRestrictions", [documentEditingRestrictions]);
```
