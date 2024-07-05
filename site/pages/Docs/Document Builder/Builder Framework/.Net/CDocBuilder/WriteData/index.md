#### void WriteData(sPath, sValue, bAppend);

Writes data to the log file. It is used for logs in JS code.

Please note, that for the *.docbuilder* file the *CDocBuilder.WriteData* method is not used.

## Parameters:

| Name      | Type    | Description                                                                                                |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| *sPath*   | String^ | The path to the file where all the logs will be written.                                                   |
| *sValue*  | String^ | The data which will be written to the log file.                                                            |
| *bAppend* | bool    | Specifies if the new data will be appended to the already existing log file or a new file will be created. |

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.WriteData("result.log", "Alert!", false);
CDocBuilder.Destroy();
```