# createArray

Creates an array value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [createArray](../CDocBuilderContext/createArray.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.createArray` method is not used.

## Syntax

```java
CDocBuilderValue createArray(int length);
```

## Parameters

| Parameter | Type | Description       |
| --------- | ---- | ----------------- |
| length    | int  | The array length. |

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue arrayValue = api.createArray(2);
CDocBuilder.dispose();
```
