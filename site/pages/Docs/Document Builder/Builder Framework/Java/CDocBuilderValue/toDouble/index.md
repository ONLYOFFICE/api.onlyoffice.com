`double toDouble();`

Converts the **CDocBuilderValue** object to a double value.

> Please note, that for the *.docbuilder* file the *CDocBuilderValue.toDouble* method is not used.

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
double doubleValue = global.toDouble();
CDocBuilder.dispose();
```