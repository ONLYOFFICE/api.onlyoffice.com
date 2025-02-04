# createUndefined

Creates an undefined value, an analogue of `undefined` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.createUndefined` method is not used.

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
CDocBuilderValue undefinedValue = context.createUndefined();
CDocBuilder.dispose();
```
