`void setProperty(String param, String value);`

Sets an argument to the builder class which can be trasferred to the program outside the [CDocBuilder.executeCommand](../executeCommand/index.md) method, i.e. either as an additional property when running **ONLYOFFICE Document Builder** executable file or as a part of program code, but not included into the document file script.

> Please note, that for the *.docbuilder* file the *CDocBuilder.setProperty* method is not used explicitly. The argument itself is used instead as an additional property for the executable. See the example below.

## Parameters

| Name    | Type   | Description                                             |
| ------- | ------ | ------------------------------------------------------- |
| *param* | String | The parameter name, the value is always *--argument*.   |
| *value* | String | The parameter value which will be used in the document. |

## Supported properties

| Name                        | Type    | Default | Description                                                                                                                |
| --------------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| *--use-doctrenderer-scheme* | boolean | false   | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file. |
| *--check-fonts*             | boolean | true    | Specifies if the system fonts are cached for faster work.                                                                  |
| *--work-directory*          | String  | ""      | The path to the temporary directory.                                                                                       |
| *--cache-scripts*           | boolean | true    | Specifies if the sdkjs scripts are cached.                                                                                 |
| *--save-use-only-names*     | boolean | false   | Specifies if the destination paths are used (for server work). For example: /home/user/1.txt => /tmp/1.txt                 |
| *--all-fonts-path*          | String  | ""      | The path to the *AllFonts.js* script.                                                                                      |
| *--argument*                | String  | ""      | The JSON argument which is sent to the global parameters of all the opened JS context.                                     |
| *--fonts-system*            | boolean | true    | Specifies if the system fonts are used.                                                                                    |
| *--fonts-dir*               | String  | ""      | The path to the additional fonts directory (may be many records).                                                          |

Once added, the argument will be available as the **Argument** variable with its parameter values set:

``` java
Argument.name === "ONLYOFFICE" // true
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
builder.setProperty("--argument", L"{\"name\":\"ONLYOFFICE\"}");
CDocBuilder.dispose();
```

### .docbuilder

```sh
docbuilder.exe "--argument={\"name\":\"ONLYOFFICE\"}" test.docbuilder
```

## Adding or removing fonts

It is also possible to update the font list when you either add new fonts or remove old ones. To do this, the **check-fonts** variable is used.

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
builder.setProperty("--check-fonts", L"true");
CDocBuilder.dispose();
```

### .docbuilder

```sh
docbuilder.exe "--check-fonts=true" test.docbuilder
```