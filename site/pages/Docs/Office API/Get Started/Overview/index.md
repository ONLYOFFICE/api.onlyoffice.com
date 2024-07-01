Office JavaScript APIv8.1

As any document is a composite object consisting of a tree of larger nodes (paragraphs and tables) where it is possible to insert smaller document elements (text runs, images, charts, shapes), **Office API** allows to insert the content and format it to your liking quickly and easily.

Office API is the JavaScript library which is used to work with the document editor. It contains classes and methods for every document type: [Text document API](/officeapi/textdocumentapi), [Spreadsheet API](/officeapi/spreadsheetapi), [Presentation API](/officeapi/presentationapi), and [Form API](/officeapi/formapi).

## Where to use

Here are some examples of where you can use Office API:

* build [plugins](/plugin/structure) using Office API in the plugin code *.js* file to interact with the editor content and web services;
* write [macros](/plugin/macros) using the JavaScript syntax and Office API scripting notation;
* generate documents using Office API in the [Document Builder scripts](/docbuilder/basic).

## Where to start

If you are not sure where to start, you can use the list of most common tasks below to find where to go and start creating your document:

##### Basic document actions

* [create a new document](#)
* [edit an existing document](#)

##### Main paragraph actions

* [create a paragraph](#)
* [edit the text in the existing paragraph](#)
* [change the paragraph properties (text documents)](#)
* [change the paragraph properties (spreadsheet)](#)
* [change the paragraph properties (presentations)](#)
* [edit the paragraph borders](#)
* [create a paragraph with an existing style](#)

##### Modifying fonts

* [change the text font family](#)
* [change the text font size](#)
* [make the text font italic](#)
* [make the text font bold](#)
* [make the text font strikeout](#)
* [make the text font double strikeout](#)
* [make the text font underlined](#)
* [change the text font color](#)
* [change the text font background color](#)
* [change the text font highlighting](#)
* [make the text font capitalized](#)
* [make the text font small capitalized](#)
* [make the text font spacing](#)

##### Creating and editing tables

* [create a table](#)
* [create a table with an existing style](#)
* [add a new row](#)
* [add a new column](#)
* [get a specific row](#)
* [get a specific cell](#)
* [add some text to the cell](#)
* [set the table width](#)
* [set the table borders](#)
* [set the table background](#)
* [set the table cell margins](#)
* [set borders to a single table cell](#)
* [set the background to a single table cell](#)
* [set width to the table column](#)
* [set the text direction in a table cell](#)

##### Working with lists

* [add a bulleted list](#)
* [add a numbered list](#)

##### Columns

* [add columns](#)

##### Page breaks

* [add a page break](#)

##### Headers and footers

* [get and edit a page header](#)
* [get and edit a page footer](#)

##### Using shapes, images and charts

* [create a shape](#)
* [add text to the shape](#)
* [create a chart](#)
* [add an image to the document](#)

##### Text language

* [set the text language](#)

##### Page size and margins

* [set the page size](#)
* [set the page margins](#)

##### Creating and editing forms

* [create a form](#)
* [set the border color to the form](#)
* [set the placeholder text to the form](#)
* [set the text properties to the form](#)
* [clear the form](#)
* [get the tip text from the form](#)
* [get the text from the form](#)
* [make a form fixed size](#)
* [set the picture position inside the form](#)
* [set the radio group key to the checkbox](#)
* [set the list values to the combo box](#)
* [select the specified value from the combo box list values](#)

##### Learn how to create a new document

* [Creating a new text document](/officeapi/textdocumentapi#CreateNewDoc)
* [Creating a new spreadsheet](/officeapi/spreadsheetapi#CreateSheet)
* [Creating a new presentation](/officeapi/presentationapi#CreatePresentation)

##### Learn how to edit an existing document

* [Opening an existing text document](/officeapi/textdocumentapi#OpenDoc)
* [Opening an existing spreadsheet](/officeapi/spreadsheetapi#OpenSheet)
* [Opening an existing presentation](/officeapi/presentationapi#OpenPresentation)

##### Learn how to create a paragraph

* Create a paragraph (text documents) — [Api.CreateParagraph](/officeapi/textdocumentapi/api/createparagraph)
* Create a paragraph (spreadsheets) — [Api.CreateParagraph](/officeapi/spreadsheetapi/api/createparagraph)
* Create a paragraph (presentations) — [Api.CreateParagraph](/officeapi/presentationapi/api/createparagraph)
* Push the created paragraph (text documents) — [ApiDocument.Push](/officeapi/textdocumentapi/apidocument/push)
* Push the created paragraph (spreadsheets) — [ApiDocumentContent.Push](/officeapi/spreadsheetapi/apidocumentcontent/push)
* Push the created paragraph (presentations) — [ApiDocumentContent.Push](/officeapi/presentationapi/apidocumentcontent/push)

##### Learn how to edit the text in the existing paragraph

* Get paragraph in document (text documents) — [ApiDocument.GetElement](/officeapi/textdocumentapi/apidocument/getelement)
* Get paragraph in document (spreadsheets) — [ApiDocumentContent.GetElement](/officeapi/spreadsheetapi/apidocumentcontent/getelement)
* Get paragraph in document (presentations) — [ApiDocumentContent.GetElement](/officeapi/presentationapi/apidocumentcontent/getelement)

##### Learn how to change the paragraph properties (text documents)

* Set text alignment in paragraph — [ApiParagraph.SetJc](/officeapi/textdocumentapi/apiparagraph/setjc)
* Set first line indentation — [ApiParagraph.SetIndFirstLine](/officeapi/textdocumentapi/apiparagraph/setindfirstline)
* Set paragraph left side indentation — [ApiParagraph.SetIndLeft](/officeapi/textdocumentapi/apiparagraph/setindleft)
* Set paragraph right side indentation — [ApiParagraph.SetIndRight](/officeapi/textdocumentapi/apiparagraph/setindright)
* Set paragraph spacing — [ApiParagraph.SetSpacingBefore](/officeapi/textdocumentapi/apiparagraph/setspacingbefore)/[SetSpacingAfter](/officeapi/textdocumentapi/apiparagraph/setspacingafter)
* Set paragraph background — [ApiParagraph.SetShd](/officeapi/textdocumentapi/apiparagraph/setshd)

##### Learn how to change the paragraph properties (spreadsheet)

* Set text alignment in paragraph — [ApiParagraph.SetJc](/officeapi/spreadsheetapi/apiparagraph/setjc)
* Set first line indentation — [ApiParagraph.SetIndFirstLine](/officeapi/spreadsheetapi/apiparagraph/setindfirstline)
* Set paragraph left side indentation — [ApiParagraph.SetIndLeft](/officeapi/spreadsheetapi/apiparagraph/setindleft)
* Set paragraph right side indentation — [ApiParagraph.SetIndRight](/officeapi/spreadsheetapi/apiparagraph/setindright)
* Set paragraph spacing — [ApiParagraph.SetSpacingBefore](/officeapi/spreadsheetapi/apiparagraph/setspacingbefore)/[SetSpacingAfter](/officeapi/spreadsheetapi/apiparagraph/setspacingafter)

##### Learn how to change the paragraph properties (presentations)

* Set text alignment in paragraph — [ApiParagraph.SetJc](/officeapi/presentationapi/apiparagraph/setjc)
* Set first line indentation — [ApiParagraph.SetIndFirstLine](/officeapi/presentationapi/apiparagraph/setindfirstline)
* Set paragraph left side indentation — [ApiParagraph.SetIndLeft](/officeapi/presentationapi/apiparagraph/setindleft)
* Set paragraph right side indentation — [ApiParagraph.SetIndRight](/officeapi/presentationapi/apiparagraph/setindright)
* Set paragraph spacing — [ApiParagraph.SetSpacingBefore](/officeapi/presentationapi/apiparagraph/setspacingbefore)/[SetSpacingAfter](/officeapi/presentationapi/apiparagraph/setspacingafter)

##### Learn how to edit the paragraph borders

* Set paragraph between borders — [ApiParagraph.SetBetweenBorder](/officeapi/textdocumentapi/apiparagraph/setbetweenborder)
* Set top border — [ApiParagraph.SetTopBorder](/officeapi/textdocumentapi/apiparagraph/settopborder)
* Set bottom border — [ApiParagraph.SetBottomBorder](/officeapi/textdocumentapi/apiparagraph/setbottomborder)
* Set right border — [ApiParagraph.SetRightBorder](/officeapi/textdocumentapi/apiparagraph/setrightborder)
* Set left border — [ApiParagraph.SetLeftBorder](/officeapi/textdocumentapi/apiparagraph/setleftborder)

##### Learn how to create a paragraph with an existing style

* Create a paragraph with a style (text documents) — [ApiParaPr](/officeapi/textdocumentapi/apiparapr)
* Create a paragraph with a style (spreadsheets) — [ApiParaPr](/officeapi/spreadsheetapi/apiparapr)
* Create a paragraph with a style (presentations) — [ApiParaPr](/officeapi/presentationapi/apiparapr)

##### Learn how to change the text font family

* Set font family for part of text or single word (text documents) — [ApiRun.SetFontFamily](/officeapi/textdocumentapi/apirun/setfontfamily)
* Set font family for part of text or single word (spreadsheets) — [ApiRun.SetFontFamily](/officeapi/spreadsheetapi/apirun/setfontfamily)
* Set font family for part of text or single word (presentations) — [ApiRun.SetFontFamily](/officeapi/presentationapi/apirun/setfontfamily)
* Set font family for whole text (text documents) — [ApiTextPr.SetFontFamily](/officeapi/textdocumentapi/apitextpr/setfontfamily)
* Set font family for whole text (spreadsheets) — [ApiTextPr.SetFontFamily](/officeapi/spreadsheetapi/apitextpr/setfontfamily)
* Set font family for whole text (presentations) — [ApiTextPr.SetFontFamily](/officeapi/presentationapi/apitextpr/setfontfamily)

##### Learn how to change the text font size

* Set font size for part of text or single word (text documents) — [ApiRun.SetFontSize](/officeapi/textdocumentapi/apirun/setfontsize)
* Set font size for part of text or single word (spreadsheets) — [ApiRun.SetFontSize](/officeapi/spreadsheetapi/apirun/setfontsize)
* Set font size for part of text or single word (presentations) — [ApiRun.SetFontSize](/officeapi/presentationapi/apirun/setfontsize)
* Set font size for whole text (text documents) — [ApiTextPr.SetFontSize](/officeapi/textdocumentapi/apitextpr/setfontsize)
* Set font size for whole text (spreadsheets) — [ApiTextPr.SetFontSize](/officeapi/spreadsheetapi/apitextpr/setfontsize)
* Set font size for whole text (presentations) — [ApiTextPr.SetFontSize](/officeapi/presentationapi/apitextpr/setfontsize)

##### Learn how to make the text font italic

* Make font italic for part of text or single word (text documents) — [ApiRun.SetItalic](/officeapi/textdocumentapi/apirun/setitalic)
* Make font italic for part of text or single word (spreadsheets) — [ApiRun.SetItalic](/officeapi/spreadsheetapi/apirun/setitalic)
* Make font italic for part of text or single word (presentations) — [ApiRun.SetItalic](/officeapi/presentationapi/apirun/setitalic)
* Make font italic for whole text (text documents) — [ApiTextPr.SetItalic](/officeapi/textdocumentapi/apitextpr/setitalic)
* Make font italic for whole text (spreadsheets) — [ApiTextPr.SetItalic](/officeapi/spreadsheetapi/apitextpr/setitalic)
* Make font italic for whole text (presentations) — [ApiTextPr.SetItalic](/officeapi/presentationapi/apitextpr/setitalic)

##### Learn how to make the text font bold

* Make font bold for part of text or single word (text documents) — [ApiRun.SetBold](/officeapi/textdocumentapi/apirun/setbold)
* Make font bold for part of text or single word (spreadsheets) — [ApiRun.SetBold](/officeapi/spreadsheetapi/apirun/setbold)
* Make font bold for part of text or single word (presentations) — [ApiRun.SetBold](/officeapi/presentationapi/apirun/setbold)
* Make font bold for whole text (text documents) — [ApiTextPr.SetBold](/officeapi/textdocumentapi/apitextpr/setbold)
* Make font bold for whole text (spreadsheets) — [ApiTextPr.SetBold](/officeapi/spreadsheetapi/apitextpr/setbold)
* Make font bold for whole text (presentations) — [ApiTextPr.SetBold](/officeapi/presentationapi/apitextpr/setbold)

##### Learn how to make the text font strikeout

* Make font strikeout for part of text or single word (text documents) — [ApiRun.SetStrikeout](/officeapi/textdocumentapi/apirun/setstrikeout)
* Make font strikeout for part of text or single word (spreadsheets) — [ApiRun.SetStrikeout](/officeapi/spreadsheetapi/apirun/setstrikeout)
* Make font strikeout for part of text or single word (presentations) — [ApiRun.SetStrikeout](/officeapi/presentationapi/apirun/setstrikeout)
* Make font strikeout for whole text (text documents) — [ApiTextPr.SetStrikeout](/officeapi/textdocumentapi/apitextpr/setstrikeout)
* Make font strikeout for whole text (spreadsheets) — [ApiTextPr.SetStrikeout](/officeapi/spreadsheetapi/apitextpr/setstrikeout)
* Make font strikeout for whole text (presentations) — [ApiTextPr.SetStrikeout](/officeapi/presentationapi/apitextpr/setstrikeout)

##### Learn how to make the text font double strikeout

* Make font double strikeout for part of text or single word (text documents) — [ApiRun.SetDoubleStrikeout](/officeapi/textdocumentapi/apirun/setdoublestrikeout)
* Make font double strikeout for part of text or single word (spreadsheets) — [ApiRun.SetDoubleStrikeout](/officeapi/spreadsheetapi/apirun/setdoublestrikeout)
* Make font double strikeout for part of text or single word (presentations) — [ApiRun.SetDoubleStrikeout](/officeapi/presentationapi/apirun/setdoublestrikeout)
* Make font double strikeout for whole text (text documents) — [ApiTextPr.SetDoubleStrikeout](/officeapi/textdocumentapi/apitextpr/setdoublestrikeout)
* Make font double strikeout for whole text (spreadsheets) — [ApiTextPr.SetDoubleStrikeout](/officeapi/spreadsheetapi/apitextpr/setdoublestrikeout)
* Make font double strikeout for whole text (presentations) — [ApiTextPr.SetDoubleStrikeout](/officeapi/presentationapi/apitextpr/setdoublestrikeout)

##### Learn how to make the text font underlined

* Make font underlined for part of text or single word (text documents) — [ApiRun.SetUnderline](/officeapi/textdocumentapi/apirun/setunderline)
* Make font underlined for part of text or single word (spreadsheets) — [ApiRun.SetUnderline](/officeapi/spreadsheetapi/apirun/setunderline)
* Make font underlined for part of text or single word (presentations) — [ApiRun.SetUnderline](/officeapi/presentationapi/apirun/setunderline)
* Make font underlined for whole text (text documents) — [ApiTextPr.SetUnderline](/officeapi/textdocumentapi/apitextpr/setunderline)
* Make font underlined for whole text (spreadsheets) — [ApiTextPr.SetUnderline](/officeapi/spreadsheetapi/apitextpr/setunderline)
* Make font underlined for whole text (presentations) — [ApiTextPr.SetUnderline](/officeapi/presentationapi/apitextpr/setunderline)

##### Learn how to change the text font color

* Set font color for part of text or single word (text documents) — [ApiRun.SetColor](/officeapi/textdocumentapi/apirun/setcolor)
* Set font color for part of text or single word (spreadsheets) — [ApiRun.SetFill](/officeapi/spreadsheetapi/apirun/setfill)
* Set font color for part of text or single word (presentations) — [ApiRun.SetFill](/officeapi/presentationapi/apirun/setfill)
* Set font color for whole text (text documents) — [ApiTextPr.SetColor](/officeapi/textdocumentapi/apitextpr/setcolor)
* Set font color for whole text (spreadsheets) — [ApiTextPr.SetFill](/officeapi/spreadsheetapi/apitextpr/setfill)
* Set font color for whole text (presentations) — [ApiTextPr.SetFill](/officeapi/presentationapi/apitextpr/setfill)

##### Learn how to change the text font background color

* Set font background color for part of text or single word — [ApiRun.SetShd](/officeapi/textdocumentapi/apirun/setshd)
* Set font background color for whole text — [ApiTextPr.SetShd](/officeapi/textdocumentapi/apitextpr/setshd)

##### Learn how to change the text font highlighting

* Set font highlighting for part of text or single word (text documents) — [ApiRun.SetHighlight](/officeapi/textdocumentapi/apirun/sethighlight)
* Set font highlighting for part of text or single word (spreadsheets) — [ApiRun.SetHighlight](/officeapi/spreadsheetapi/apirun/sethighlight)
* Set font highlighting for part of text or single word (presentations) — [ApiRun.SetHighlight](/officeapi/presentationapi/apirun/sethighlight)
* Set font highlighting for whole text (text documents) — [ApiTextPr.SetHighlight](/officeapi/textdocumentapi/apitextpr/sethighlight)

##### Learn how to make the text font capitalized

* Make font capitalized for part of text or single word (text documents) — [ApiRun.SetCaps](/officeapi/textdocumentapi/apirun/setcaps)
* Make font capitalized for part of text or single word (spreadsheets) — [ApiRun.SetCaps](/officeapi/spreadsheetapi/apirun/setcaps)
* Make font capitalized for part of text or single word (presentations) — [ApiRun.SetCaps](/officeapi/presentationapi/apirun/setcaps)
* Make font capitalized for whole text (text documents) — [ApiTextPr.SetCaps](/officeapi/textdocumentapi/apitextpr/setcaps)
* Make font capitalized for whole text (spreadsheets) — [ApiTextPr.SetCaps](/officeapi/spreadsheetapi/apitextpr/setcaps)
* Make font capitalized for whole text (presentations) — [ApiTextPr.SetCaps](/officeapi/presentationapi/apitextpr/setcaps)

##### Learn how to make the text font small capitalized

* Make font small capitalized for part of text or single word (text documents) — [ApiRun.SetSmallCaps](/officeapi/textdocumentapi/apirun/setsmallcaps)
* Make font small capitalized for part of text or single word (spreadsheets) — [ApiRun.SetSmallCaps](/officeapi/spreadsheetapi/apirun/setsmallcaps)
* Make font small capitalized for part of text or single word (presentations) — [ApiRun.SetSmallCaps](/officeapi/presentationapi/apirun/setsmallcaps)
* Make font small capitalized for whole text (text documents) — [ApiTextPr.SetSmallCaps](/officeapi/textdocumentapi/apitextpr/setsmallcaps)
* Make font small capitalized for whole text (spreadsheets) — [ApiTextPr.SetSmallCaps](/officeapi/spreadsheetapi/apitextpr/setsmallcaps)
* Make font small capitalized for whole text (presentations) — [ApiTextPr.SetSmallCaps](/officeapi/presentationapi/apitextpr/setsmallcaps)

##### Learn how to make the text font spacing

* Set font spacing for part of text or single word (text documents) — [ApiRun.SetSpacing](/officeapi/textdocumentapi/apirun/setspacing)
* Set font spacing for part of text or single word (spreadsheets) — [ApiRun.SetSpacing](/officeapi/spreadsheetapi/apirun/setspacing)
* Set font spacing for part of text or single word (presentations) — [ApiRun.SetSpacing](/officeapi/presentationapi/apirun/setspacing)
* Set font spacing for whole text (text documents) — [ApiTextPr.SetSpacing](/officeapi/textdocumentapi/apitextpr/setspacing)
* Set font spacing for whole text (spreadsheets) — [ApiTextPr.SetSpacing](/officeapi/spreadsheetapi/apitextpr/setspacing)
* Set font spacing for whole text (presentations) — [ApiTextPr.SetSpacing](/officeapi/presentationapi/apitextpr/setspacing)

##### Learn how to create a table

* Create a table — [Api.CreateTable](/officeapi/textdocumentapi/api/createtable)
* Push the created table — [ApiDocument.Push](/officeapi/textdocumentapi/apidocument/push)

##### Learn how to create a table with an existing style

* Create table with existing style — [ApiTable.SetStyle](/officeapi/textdocumentapi/apitable/setstyle)
* Create table and base style on existing one — [ApiStyle.SetBasedOn](/officeapi/textdocumentapi/apistyle/setbasedon)

##### Learn how to add a new row

* Add a new row — [ApiTable.AddRow](/officeapi/textdocumentapi/apitable/addrow)

##### Learn how to add a new column

* Add a new column — [ApiTable.AddColumn](/officeapi/textdocumentapi/apitable/addcolumn)

##### Learn how to get a specific row

* Get a specific existing/created row — [ApiTable.GetRow](/officeapi/textdocumentapi/apitable/getrow)

##### Learn how to get a specific cell

* Get a specific existing cell — [ApiTableRow.GetCell](/officeapi/textdocumentapi/apitablerow/getcell)

##### Learn how to add some text to the cell

* Add text to table cell — [ApiTableCell.GetContent](/officeapi/textdocumentapi/apitablecell/getcontent)

##### Learn how to set the table width

* Set table width — [ApiTable.SetWidth](/officeapi/textdocumentapi/apitable/setwidth)

##### Learn how to set the table borders

* Set table top border — [ApiTable.SetTableBorderTop](/officeapi/textdocumentapi/apitable/settablebordertop)
* Set table bottom border — [ApiTable.SetTableBorderBottom](/officeapi/textdocumentapi/apitable/settableborderbottom)
* Set table right border — [ApiTable.SetTableBorderRight](/officeapi/textdocumentapi/apitable/settableborderright)
* Set table left border — [ApiTable.SetTableBorderLeft](/officeapi/textdocumentapi/apitable/settableborderleft)
* Set table inside horizontal border — [ApiTable.SetTableBorderInsideH](/officeapi/textdocumentapi/apitable/settableborderinsideh)
* Set table inside vertical border — [ApiTable.SetTableBorderInsideV](/officeapi/textdocumentapi/apitable/settableborderinsidev)

##### Learn how to set the table background

* Set table background — [ApiTable.SetShd](/officeapi/textdocumentapi/apitable/setshd)

##### Learn how to set the table cell margins

* Set table cell top margin — [ApiTable.SetTableCellMarginTop](/officeapi/textdocumentapi/apitable/settablecellmargintop)
* Set table cell bottom margin — [ApiTable.SetTableCellMarginBottom](/officeapi/textdocumentapi/apitable/settablecellmarginbottom)
* Set table cell right margin — [ApiTable.SetTableCellMarginRight](/officeapi/textdocumentapi/apitable/settablecellmarginright)
* Set table cell left margin — [ApiTable.SetTableCellMarginLeft](/officeapi/textdocumentapi/apitable/settablecellmarginleft)

##### Learn how to set borders to a single table cell

* Set table cell top border — [ApiTableCell.SetCellBorderTop](/officeapi/textdocumentapi/apitablecell/setcellbordertop)
* Set table cell bottom border — [ApiTableCell.SetCellBorderBottom](/officeapi/textdocumentapi/apitablecell/setcellborderbottom)
* Set table cell right border — [ApiTableCell.SetCellBorderRight](/officeapi/textdocumentapi/apitablecell/setcellborderright)
* Set table cell left border — [ApiTableCell.SetCellBorderLeft](/officeapi/textdocumentapi/apitablecell/setcellborderleft)

##### Learn how to set the background to a single table cell

* Set table cell background — [ApiTableCell.SetShd](/officeapi/textdocumentapi/apitablecell/setshd)

##### Learn how to set width to the table column

* Set table column width — [ApiTableCell.SetWidth](/officeapi/textdocumentapi/apitablecell/setwidth)

##### Learn how to set the text direction in a table cell

* Set table cell text direction — [ApiTableCell.SetTextDirection](/officeapi/textdocumentapi/apitablecell/settextdirection)

##### Learn how to add a bulleted list

* Create bulleted list (text documents) — [ApiDocument.CreateNumbering](/officeapi/textdocumentapi/apidocument/createnumbering)
* Create bulleted list (spreadsheets) — [ApiParagraph.SetBullet](/officeapi/spreadsheetapi/apiparagraph/setbullet)
* Create bulleted list (presentations) — [ApiParagraph.SetBullet](/officeapi/presentationapi/apiparagraph/setbullet)
* Set and edit list levels — [ApiNumbering](/officeapi/textdocumentapi/apinumbering)/[ApiNumberingLevel](/officeapi/textdocumentapi/apinumberinglevel)

##### Learn how to add a numbered list

* Create numbered list — [ApiDocument.CreateNumbering](/officeapi/textdocumentapi/apidocument/createnumbering)
* Set and edit list levels — [ApiNumbering](/officeapi/textdocumentapi/apinumbering)/[ApiNumberingLevel](/officeapi/textdocumentapi/apinumberinglevel)

##### Learn how to add columns

* Create equal columns — [ApiSection.SetEqualColumns](/officeapi/textdocumentapi/apisection/setequalcolumns)
* Create non-equal columns — [ApiSection.SetNotEqualColumns](/officeapi/textdocumentapi/apisection/setnotequalcolumns)
* Set column break — [ApiParagraph.AddColumnBreak](/officeapi/textdocumentapi/apiparagraph/addcolumnbreak)

##### Learn how to add a page break

* Set page break — [ApiParagraph.AddPageBreak](/officeapi/textdocumentapi/apiparagraph/addpagebreak)

##### Learn how to get and edit a page header

* Get page header — [ApiSection.GetHeader](/officeapi/textdocumentapi/apisection/getheader)
* Remove page header — [ApiSection.RemoveHeader](/officeapi/textdocumentapi/apisection/removeheader)
* Edit page header — [ApiSection.SetHeaderDistance](/officeapi/textdocumentapi/apisection/setheaderdistance)

##### Learn how to get and edit a page footer

* Get page footer — [ApiSection.GetFooter](/officeapi/textdocumentapi/apisection/getfooter)
* Remove page footer — [ApiSection.RemoveFooter](/officeapi/textdocumentapi/apisection/removefooter)
* Edit page footer — [ApiSection.SetFooterDistance](/officeapi/textdocumentapi/apisection/setfooterdistance)

##### Learn how to create a shape

* Create a shape (text documents) — [Api.CreateShape](/officeapi/textdocumentapi/api/createshape)
* Create a shape (spreadsheets) — [ApiWorksheet.AddShape](/officeapi/spreadsheetapi/apiworksheet/addshape)
* Create a shape (presentations) — [Api.CreateShape](/officeapi/presentationapi/api/createshape)

##### Learn how to add text to the shape

* Get shape content to add text (text documents) — [ApiShape.GetDocContent](/officeapi/textdocumentapi/apishape/getdoccontent)
* Get shape content to add text (spreadsheets) — [ApiShape.GetDocContent](/officeapi/spreadsheetapi/apishape/getdoccontent)
* Get shape content to add text (presentations) — [ApiShape.GetDocContent](/officeapi/presentationapi/apishape/getdoccontent)
* Position text in shape vertically (text documents) — [ApiShape.SetVerticalTextAlign](/officeapi/textdocumentapi/apishape/setverticaltextalign)
* Position text in shape vertically (spreadsheets) — [ApiShape.SetVerticalTextAlign](/officeapi/spreadsheetapi/apishape/setverticaltextalign)
* Position text in shape vertically (presentations) — [ApiShape.SetVerticalTextAlign](/officeapi/presentationapi/apishape/setverticaltextalign)
* Set the text paddings to the shape (text documents) — [ApiShape.SetPaddings](/officeapi/textdocumentapi/apishape/setpaddings)
* Set the text paddings to the shape (spreadsheets) — [ApiShape.SetPaddings](/officeapi/spreadsheetapi/apishape/setpaddings)

##### Learn how to create a chart

* Create chart (text documents) — [Api.CreateChart](/officeapi/textdocumentapi/api/createchart)
* Create chart (spreadsheets) — [ApiWorksheet.AddChart](/officeapi/spreadsheetapi/apiworksheet/addchart)
* Create chart (presentations) — [Api.CreateChart](/officeapi/presentationapi/api/createchart)
* Setup chart and set its parameters (text documents) — [ApiChart](/officeapi/textdocumentapi/apichart)
* Setup chart and set its parameters (spreadsheets) — [ApiChart](/officeapi/spreadsheetapi/apichart)
* Setup chart and set its parameters (presentations) — [ApiChart](/officeapi/presentationapi/apichart)

##### Learn how to add an image to the document

* Create image (text documents) — [Api.CreateImage](/officeapi/textdocumentapi/api/createimage)
* Create image (spreadsheets) — [ApiWorksheet.AddImage](/officeapi/spreadsheetapi/apiworksheet/addimage)
* Create image (presentations) — [Api.CreateImage](/officeapi/presentationapi/api/createimage)

##### Learn how to set the text language

* Set language for part of text or single word (text documents) — [ApiRun.SetLanguage](/officeapi/textdocumentapi/apirun/setlanguage)
* Set language for part of text or single word (spreadsheets) — [ApiRun.SetLanguage](/officeapi/spreadsheetapi/apirun/setlanguage)
* Set language for part of text or single word (presentations) — [ApiRun.SetLanguage](/officeapi/presentationapi/apirun/setlanguage)
* Set language for whole text — [ApiTextPr.SetLanguage](/officeapi/textdocumentapi/apitextpr/setlanguage)

##### Learn how to set the page size

* Set page size — [ApiSection.SetPageSize](/officeapi/textdocumentapi/apisection/setpagesize)

##### Learn how to set the page margins

* Set page margins — [ApiSection.SetPageMargins](/officeapi/textdocumentapi/apisection/setpagemargins)

##### Learn how to create a form

* Create a text form — [Api.CreateTextForm](/officeapi/formapi/api/createtextform)
* Create a combo box form — [Api.CreateComboBoxForm](/officeapi/formapi/api/createcomboboxform)
* Create a checkbox form — [Api.CreateCheckBoxForm](/officeapi/formapi/api/createcheckboxform)
* Create a picture form — [Api.CreatePictureForm](/officeapi/formapi/api/createpictureform)

##### Learn how to set the border color to the form

* Set the border color to the text form — [ApiTextForm.SetBorderColor](/officeapi/textdocumentapi/apitextform/setbordercolor)
* Set the border color to the combo box form — [ApiComboBoxForm.SetBorderColor](/officeapi/textdocumentapi/apicomboboxform/setbordercolor)
* Set the border color to the checkbox form — [ApiCheckBoxForm.SetBorderColor](/officeapi/textdocumentapi/apicheckboxform/setbordercolor)
* Set the border color to the picture form — [ApiPictureForm.SetBorderColor](/officeapi/textdocumentapi/apipictureform/setbordercolor)

##### Learn how to set the placeholder text to the form

* Set the placeholder text to the text form — [ApiTextForm.SetPlaceholderText](/officeapi/textdocumentapi/apitextform/setplaceholdertext)
* Set the placeholder text to the combo box form — [ApiComboBoxForm.SetPlaceholderText](/officeapi/textdocumentapi/apicomboboxform/setplaceholdertext)
* Set the placeholder text to the checkbox form — [ApiCheckBoxForm.SetPlaceholderText](/officeapi/textdocumentapi/apicheckboxform/setplaceholdertext)
* Set the placeholder text to the picture form — [ApiPictureForm.SetPlaceholderText](/officeapi/textdocumentapi/apipictureform/setplaceholdertext)

##### Learn how to set the text properties to the form

* Set the text properties to the text form — [ApiTextForm.SetTextPr](/officeapi/textdocumentapi/apitextform/settextpr)
* Set the text properties to the combo box form — [ApiComboBoxForm.SetTextPr](/officeapi/textdocumentapi/apicomboboxform/settextpr)
* Set the text properties to the checkbox form — [ApiCheckBoxForm.SetTextPr](/officeapi/textdocumentapi/apicheckboxform/settextpr)
* Set the text properties to the picture form — [ApiPictureForm.SetTextPr](/officeapi/textdocumentapi/apipictureform/settextpr)

##### Learn how to clear the form

* Clear the text form — [ApiTextForm.Clear](/officeapi/textdocumentapi/apitextform/clear)
* Clear the combo box form — [ApiComboBoxForm.Clear](/officeapi/textdocumentapi/apicomboboxform/clear)
* Clear the checkbox form — [ApiCheckBoxForm.Clear](/officeapi/textdocumentapi/apicheckboxform/clear)
* Clear the picture form — [ApiPictureForm.Clear](/officeapi/textdocumentapi/apipictureform/clear)

##### Learn how to get the tip text from the form

* Get the tip text from the text form — [ApiTextForm.GetTipText](/officeapi/textdocumentapi/apitextform/gettiptext)
* Get the tip text from the combo box form — [ApiComboBoxForm.GetTipText](/officeapi/textdocumentapi/apicomboboxform/gettiptext)
* Get the tip text from the checkbox form — [ApiCheckBoxForm.GetTipText](/officeapi/textdocumentapi/apicheckboxform/gettiptext)
* Get the tip text from the picture form — [ApiPictureForm.GetTipText](/officeapi/textdocumentapi/apipictureform/gettiptext)

##### Learn how to get the text from the form

* Get the text from the text form — [ApiTextForm.GetText](/officeapi/textdocumentapi/apitextform/gettext)
* Get the text from the combo box form — [ApiComboBoxForm.GetText](/officeapi/textdocumentapi/apicomboboxform/gettext)

##### Learn how to make a form fixed size

* Make a text form fixed size — [ApiTextForm.ToFixed](/officeapi/textdocumentapi/apitextform/tofixed)
* Make a combo box form fixed size — [ApiComboBoxForm.ToFixed](/officeapi/textdocumentapi/apicomboboxform/tofixed)
* Make a checkbox form fixed size — [ApiCheckBoxForm.ToFixed](/officeapi/textdocumentapi/apicheckboxform/tofixed)
* Make a picture form fixed size — [ApiPictureForm.ToFixed](/officeapi/textdocumentapi/apipictureform/tofixed)

##### Learn how to set the picture position inside the form

* Set the picture position inside the form — [ApiPictureForm.SetPicturePosition](/officeapi/textdocumentapi/apipictureform/setpictureposition)

##### Learn how to set the radio group key to the checkbox

* Set the radio group key to the checkbox — [ApiCheckBoxForm.SetRadioGroup](/officeapi/textdocumentapi/apicheckboxform/setradiogroup)

##### Learn how to set the list values to the combo box

* Set the list values to the combo box — [ApiComboBoxForm.SetListValues](/officeapi/textdocumentapi/apicomboboxform/setlistvalues)

##### Learn how to select the specified value from the combo box list values

* Select the specified value from the combo box list values — [ApiComboBoxForm.SelectListValue](/officeapi/textdocumentapi/apicomboboxform/selectlistvalue)

[Close]()

×
