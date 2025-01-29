# setItems

Sets the items to the input helper.

## Syntax

expression.setItems(items);

`expression` - A variable that represents a [InputHelper](../InputHelper.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | Required | [InputHelperItem[]](../../Enumeration/InputHelperItem.md) |  | Defines an array of the &#123;@link global#InputHelperItem InputHelperItem&#125; objects which contain all the items for the input helper. |

## Returns

This method doesn't return any data.

## Example

```javascript
{
    var items = [
        { text: "Name1.Family1", id : "0" },
        { text: "Name2.Family2", id : "1" },
        { text: "Name3.Family3", id : "2" },
        { text: "Name4.Family4", id : "3" },
        { text: "Name5.Family5", id : "4" },
        { text: "Name6.Family6", id : "5" },
        { text: "Name7.Family7", id : "6" },
        { text: "Name8.Family8", id : "7" },
        { text: "Name9.Family9", id : "8" },
        { text: "Name10.Family10", id : "9" },
        { text: "Name11.Family11", id : "10" },
        { text: "Name12.Family12", id : "11" },
        { text: "Name13.Family13", id : "12" }
    ];
    window.Asc.plugin.getInputHelper().setItems(items);
    var _sizes = getInputHelperSize();
    window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, true);
}
```
