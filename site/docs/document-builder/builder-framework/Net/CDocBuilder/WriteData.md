# WriteData

Writes data to the log file. It is used for logs in JS code.

> Please note, that for the `.docbuilder` file the `CDocBuilder.WriteData` method is not used.

## Syntax

```cs
void WriteData(String^ sPath, String^ sValue, bool bAppend);
```

## Parameters

| Parameter | Type    | Description                                                                                                |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| sPath     | String^ | The path to the file where all the logs will be written.                                                   |
| sValue    | String^ | The data which will be written to the log file.                                                            |
| bAppend   | bool    | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.WriteData("result.log", "Alert!", false);
CDocBuilder.Destroy();
```
