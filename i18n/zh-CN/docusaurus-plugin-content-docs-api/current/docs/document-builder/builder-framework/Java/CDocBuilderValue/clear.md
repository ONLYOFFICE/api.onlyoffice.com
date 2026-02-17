# clear（清空）

清空 `CDocBuilderValue` 对象。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.clear` 方法。

## 语法

```java
void clear();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
doc.clear();
CDocBuilder.dispose();
```