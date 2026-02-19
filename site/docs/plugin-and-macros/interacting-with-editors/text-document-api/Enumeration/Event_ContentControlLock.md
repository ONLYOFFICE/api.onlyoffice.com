# Event_ContentControlLock

Defines the access restrictions for a content control.
Possible values:
-**0** - only deleting,
-**1** - disable deleting or editing,
-**2** - only editing,
-**3** - full access.

## Type

Enumeration

## Values

- 0
- 1
- 2
- 3


## Example

```javascript
let documents = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [documents]);
```
