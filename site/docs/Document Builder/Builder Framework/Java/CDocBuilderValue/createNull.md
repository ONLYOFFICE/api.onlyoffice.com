# createNull

Creates a null value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [createNull](../CDocBuilderContext/createNull.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.createNull` method is not used.

## Syntax

```java
CDocBuilderValue createNull();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue nullValue = api.createNull();
CDocBuilder.dispose();
```
