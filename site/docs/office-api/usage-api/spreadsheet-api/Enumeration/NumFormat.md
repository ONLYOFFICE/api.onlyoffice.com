# NumFormat

Standard numeric format.

## Type

Enumeration

## Values

- "General"
- "0"
- "0.00"
- "#,##0"
- "#,##0.00"
- "0%"
- "0.00%"
- "0.00E+00"
- "# ?/?"
- "# ??/??"
- "m/d/yyyy"
- "d-mmm-yy"
- "d-mmm"
- "mmm-yy"
- "h:mm AM/PM"
- "h:mm:ss AM/PM"
- "h:mm"
- "h:mm:ss"
- "m/d/yyyy h:mm"
- "#,##0_);(#,##0)"
- "#,##0_);\[Red\](#,##0)"
- "#,##0.00_);(#,##0.00)"
- "#,##0.00_);\[Red\](#,##0.00)"
- "mm:ss"
- "\[h\]:mm:ss"
- "mm:ss.0"
- "##0.0E+0"
- "@"


## Example

Set the "0.00" numeric format to the chart data point.

```javascript editor-xlsx
// How to use the specified numeric format for the ApiChart object.

// Set the chart data point to the "0.00" numeric format.

chart.SetDataPointNumFormat("0.00", 0, 1, true);

```
