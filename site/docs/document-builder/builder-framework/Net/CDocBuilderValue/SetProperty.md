# SetProperty

Sets a property to the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.SetProperty` method is not used.

## Syntax

```cs
void SetProperty(String^ sName, CDocBuilderValue^ sValue);
```

## Parameters

| Parameter | Type                                                         | Description                                          |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| sName     | String^                                                      | The name of the `CDocBuilderValue` object property.  |
| sValue    | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | The value of the `CDocBuilderValue` object property. |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
CDocBuilder.Destroy();
```

There are two more ways to set a property to the `CDocBuilderValue` object:

1. use the `Set` method that takes the object property name and value as arguments:

   ```cs
   void Set(String^ name, CDocBuilderValue^ value);
   ```

   ## Example

   ### .Net

   ```cs
   string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
   CDocBuilder.Initialize(workDirectory);
   CDocBuilder oBuilder = new CDocBuilder();
   CContext oContext = oBuilder.GetContext();
   CValue oGlobal = oContext.GetGlobal();
   CValue oApi = oGlobal["Api"];
   CValue oDocument = oApi.Call("GetDocument");
   oDocument.Set("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
   CDocBuilder.Destroy();
   ```

2. use the `default[]` postfix expression:

   ```cs
   property CDocBuilderValue^ default[String^]
   ```

   ## Example

   ### .Net

   ```cs
   string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
   CDocBuilder.Initialize(workDirectory);
   CDocBuilder oBuilder = new CDocBuilder();
   CContext oContext = oBuilder.GetContext();
   CValue oGlobal = oContext.GetGlobal();
   CValue oApi = oGlobal["Api"];
   CValue oDocument = oApi.Call("GetDocument");
   oDocument["color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"}];
   CDocBuilder.Destroy();
   ```
