# setProperty

为 `CDocBuilderValue` 对象设置属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.setProperty` 方法。

## 语法

```java
void setProperty(String name, Object value);
```

## 参数

| 参数   | 类型   | 描述                                          |
| ------ | ------ | --------------------------------------------- |
| name   | String | `CDocBuilderValue` 对象属性的名称。           |
| value  | Object | `CDocBuilderValue` 对象属性的值。             |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
doc.setProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
CDocBuilder.dispose();
```

还有另外两种为 `CDocBuilderValue` 对象设置属性的方法：

1. 使用接受对象属性名称和值作为参数的 `set` 方法：

   ```java
   void set(String name, Object value);
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
   doc.set("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
   CDocBuilder.dispose();
   ```

2. 使用 `default[]` 后缀表达式：

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
   doc["color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"}];
   CDocBuilder.dispose();
   ```