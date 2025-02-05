# createUndefined

Creates an undefined value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [createUndefined](../CDocBuilderContext/createUndefined.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.createUndefined` method is not used.

## Syntax

```java
CDocBuilderValue createUndefined();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue undefinedValue = api.createUndefined();
CDocBuilder.dispose();
```
