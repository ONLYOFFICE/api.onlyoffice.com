---
sidebar_position: -1
---

# Error codes

An [error](./response.md#error) can occur during the conversion. Below you can find possible error codes and their description.

| Error code | Description                                                                                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -1         | Unknown error.                                                                                                                                                                                                                                                                            |
| -2         | Conversion timeout error.                                                                                                                                                                                                                                                                 |
| -3         | Conversion error.                                                                                                                                                                                                                                                                         |
| -4         | Error while downloading the document file to be converted.                                                                                                                                                                                                                                |
| -5         | Incorrect password.                                                                                                                                                                                                                                                                       |
| -6         | Error while accessing the conversion result database.                                                                                                                                                                                                                                     |
| -7         | Input error.                                                                                                                                                                                                                                                                              |
| -8         | Invalid token.                                                                                                                                                                                                                                                                            |
| -9         | Error when the converter cannot automatically determine the output file format. This error means that the client must explicitly specify in which format the file should be converted (text document or spreadsheet). It is used to convert XML to OOXML in case the XML type is unknown. |
| -10        | Size limit exceeded.                                                                                                                                                                                                                                                                      |
