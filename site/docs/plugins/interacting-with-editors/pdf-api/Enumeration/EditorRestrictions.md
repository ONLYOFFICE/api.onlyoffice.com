# EditorRestrictions

The current editing restrictions, a combination of the flags: **0x00** - no editing restrictions, **0x01** - allows editing form fields, **0x02** - allows editing comments and regions delimited by range permissions, **0x04** - the document is signed and cannot be changed, **0x80** - does not allow editing.

## Type

number

## Example

```javascript
window.Asc.plugin.executeMethod("GetRestrictions", [], function(restrictions) {
	let editorRestrictions = restrictions;
	let canEdit = 0 === editorRestrictions;
});
```
