# SetProperty（设置属性）

为 `CDocBuilderValue` 对象设置一个属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.SetProperty` 方法。

## 语法

```cpp
void SetProperty(const wchar_t* sName, const wchar_t* sValue);
```

## 参数

| **名称** | **数据类型**   | **描述**                                      |
| -------- | -------------- | --------------------------------------------- |
| sName    | const wchar_t* | `CDocBuilderValue` 对象属性的名称。            |
| sValue   | const wchar_t* | `CDocBuilderValue` 对象属性的值。              |

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
CDocBuilder::Dispose();
```

`Set` 方法也可用于为 `CDocBuilderValue` 对象设置属性。可以使用 Unicode 格式的名称来指定对象属性：

```cpp
void Set(const wchar_t* name, CDocBuilderValue value);
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.Set("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
CDocBuilder::Dispose();
```