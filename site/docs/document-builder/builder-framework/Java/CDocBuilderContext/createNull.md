# createNull

Creates a null value, an analogue of `null` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.createNull` method is not used.

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
CDocBuilderValue nullValue = context.createNull();
CDocBuilder.dispose();
```
