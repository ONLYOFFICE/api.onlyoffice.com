# SetBullet

Sets the bullet or numbering to the current paragraph.

## Syntax

```javascript
expression.SetBullet(oBullet);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | The bullet object created with the [Api#CreateBullet](../../Api/Methods/CreateBullet.md) or [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) method. |

## Returns

This method doesn't return any data.