# 文档编辑限制

文档编辑限制：\
- **none** - 无编辑限制，\
- **comments** - 仅允许编辑批注，\
- **forms** - 仅允许编辑表单字段，\
- **readOnly** - 禁止任何编辑。

## 类型

Enumeration（枚举）

## 取值

- 'none'
- 'comments'
- 'forms'
- 'readOnly'


## 示例

```javascript
let documentEditingRestrictions = "readOnly";
window.Asc.plugin.executeMethod("SetEditingRestrictions", [documentEditingRestrictions]);
```
