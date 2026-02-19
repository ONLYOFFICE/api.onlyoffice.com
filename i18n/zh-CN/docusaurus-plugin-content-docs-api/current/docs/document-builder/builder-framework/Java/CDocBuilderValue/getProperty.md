# getProperty

返回 `CDocBuilderValue` 对象的属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.getProperty` 方法。

## 语法

```java
CDocBuilderValue getProperty(String name);
```

## 参数

| 参数   | 类型   | 描述                                       |
| ------ | ------ | ------------------------------------------ |
| name   | String | `CDocBuilderValue` 对象属性的名称。        |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
CDocBuilderValue docPr = doc.getProperty("color");
CDocBuilder.dispose();
```

还有另外两种获取 `CDocBuilderValue` 对象属性的方法：

1. 使用接受字符串格式参数的 `get` 方法：

   ```java
   CDocBuilderValue get(String name);
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
   CDocBuilderValue docPr = doc.get("color");
   CDocBuilder.dispose();
   ```

2. 使用接受字符串格式参数的 `default[]` 后缀表达式：

   ```java
   property CDocBuilderValue default[String]
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
   CDocBuilderValue docPr = doc["color"];
   CDocBuilder.dispose();
   ```