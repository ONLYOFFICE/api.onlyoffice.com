# getGlobal

Returns the global object for the current context.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.getGlobal` method is not used.

## Syntax

```java
CDocBuilderValue getGlobal();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilder.dispose();
```
