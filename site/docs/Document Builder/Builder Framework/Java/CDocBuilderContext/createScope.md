# createScope

Creates a [context scope](../CDocBuilderContextScope/CDocBuilderContextScope.md) which sets the execution context for all operations executed within a local scope.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.createScope` method is not used.

## Syntax

```java
CDocBuilderContextScope createScope();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderContextScope scope = context.createScope();
CDocBuilder.dispose();
```
