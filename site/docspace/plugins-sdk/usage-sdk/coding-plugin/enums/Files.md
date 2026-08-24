# Files

Enumerations for file types, supported extensions, and security permissions.

## FilesType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts#L27)

Defines the supported file types.

### Enumeration Members

#### room

```ts
room: "room";
```

DocSpace room or workspace

#### file

```ts
file: "file";
```

Generic file type

#### folder

```ts
folder: "folder";
```

Directory or folder

#### image

```ts
image: "image";
```

Image file (various formats)

#### video

```ts
video: "video";
```

Video file (various formats)

***

## FilesExst

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts#L47)

Defines the supported file extensions.

### Enumeration Members

#### doc

```ts
doc: ".doc";
```

Microsoft Word document

#### docx

```ts
docx: ".docx";
```

Microsoft Word document (XML-based)

#### docm

```ts
docm: ".docm";
```

Microsoft Word macro-enabled document

#### dotx

```ts
dotx: ".dotx";
```

Microsoft Word template

#### odt

```ts
odt: ".odt";
```

OpenDocument text format

#### fodt

```ts
fodt: ".fodt";
```

OpenDocument flat XML text format

#### ott

```ts
ott: ".ott";
```

OpenDocument text template

#### rtf

```ts
rtf: ".rtf";
```

Rich Text Format

#### txt

```ts
txt: ".txt";
```

Plain text

#### pdf

```ts
pdf: ".pdf";
```

Portable Document Format

#### docxf

```ts
docxf: ".docxf";
```

Form document (DOCX-based)

#### oform

```ts
oform: ".oform";
```

Form document (OpenDocument-based)

#### xls

```ts
xls: ".xls";
```

Microsoft Excel spreadsheet

#### xlsx

```ts
xlsx: ".xlsx";
```

Microsoft Excel spreadsheet (XML-based)

#### xlsm

```ts
xlsm: ".xlsm";
```

Microsoft Excel macro-enabled spreadsheet

#### ods

```ts
ods: ".ods";
```

OpenDocument spreadsheet

#### ots

```ts
ots: ".ots";
```

OpenDocument spreadsheet template

#### ppt

```ts
ppt: ".ppt";
```

Microsoft PowerPoint presentation

#### pptx

```ts
pptx: ".pptx";
```

Microsoft PowerPoint presentation (XML-based)

#### pptm

```ts
pptm: ".pptm";
```

Microsoft PowerPoint macro-enabled presentation

#### odp

```ts
odp: ".odp";
```

OpenDocument presentation

#### otp

```ts
otp: ".otp";
```

OpenDocument presentation template

#### pps

```ts
pps: ".pps";
```

PowerPoint show format

#### ppsx

```ts
ppsx: ".ppsx";
```

PowerPoint show format (XML-based)

#### pot

```ts
pot: ".pot";
```

PowerPoint template

#### avi

```ts
avi: ".avi";
```

Video file (AVI format)

#### flv

```ts
flv: ".flv";
```

Video file (FLV format)

#### mkv

```ts
mkv: ".mkv";
```

Video file (MKV format)

#### mov

```ts
mov: ".mov";
```

Video file (MOV format)

#### mp4

```ts
mp4: ".mp4";
```

Video file (MP4 format)

#### mpg

```ts
mpg: ".mpg";
```

Video file (MPEG format)

#### webm

```ts
webm: ".webm";
```

Video file (WebM format)

#### m2ts

```ts
m2ts: ".m2ts";
```

Video file (M2TS format)

#### dvd

```ts
dvd: ".dvd";
```

Video file (DVD format)

#### svg

```ts
svg: ".svg";
```

Scalable Vector Graphics

#### csv

```ts
csv: ".csv";
```

Comma-separated values

#### djvu

```ts
djvu: ".djvu";
```

DjVu format

#### epub

```ts
epub: ".epub";
```

E-book format (EPUB)

#### fb2

```ts
fb2: ".fb2";
```

E-book format (FB2)

#### pb2

```ts
pb2: ".pb2";
```

E-book format (PB2)

#### iaf

```ts
iaf: ".iaf";
```

Archive format (IAF)

#### ics

```ts
ics: ".ics";
```

Calendar format (ICS)

#### mht

```ts
mht: ".mht";
```

Web archive (MHT)

#### xps

```ts
xps: ".xps";
```

XML Paper Specification

#### xml

```ts
xml: ".xml";
```

Extensible Markup Language

***

## FilesSecurity

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts#L154)

Defines the supported file security parameters.

### Enumeration Members

#### Convert

```ts
Convert: "Convert";
```

Permission to convert files to other formats

#### Copy

```ts
Copy: "Copy";
```

Permission to copy files and folders

#### CustomFilter

```ts
CustomFilter: "CustomFilter";
```

Permission to apply custom filters

#### Delete

```ts
Delete: "Delete";
```

Permission to delete items

#### Download

```ts
Download: "Download";
```

Permission to download files

#### Duplicate

```ts
Duplicate: "Duplicate";
```

Permission to create duplicates of items

#### Edit

```ts
Edit: "Edit";
```

Permission to edit files

#### EditHistory

```ts
EditHistory: "EditHistory";
```

Permission to view and edit file history

#### FillForms

```ts
FillForms: "FillForms";
```

Permission to fill forms

#### Lock

```ts
Lock: "Lock";
```

Permission to lock/unlock files

#### Move

```ts
Move: "Move";
```

Permission to move items

#### Read

```ts
Read: "Read";
```

Permission to view and read content

#### ReadHistory

```ts
ReadHistory: "ReadHistory";
```

Permission to read file history

#### Rename

```ts
Rename: "Rename";
```

Permission to rename items

#### Review

```ts
Review: "Review";
```

Permission to review documents

#### SubmitToFormGallery

```ts
SubmitToFormGallery: "SubmitToFormGallery";
```

Permission to submit forms to gallery

#### StopFilling

```ts
StopFilling: "StopFilling";
```

Permission to stop form filling process

#### ResetFilling

```ts
ResetFilling: "ResetFilling";
```

Permission to reset form filling

#### EditForm

```ts
EditForm: "EditForm";
```

Permission to edit forms

#### Comment

```ts
Comment: "Comment";
```

Permission to comment on files

#### CreateRoomFrom

```ts
CreateRoomFrom: "CreateRoomFrom";
```

Permission to create rooms from existing content

#### CopyLink

```ts
CopyLink: "CopyLink";
```

Permission to copy links to files

#### Embed

```ts
Embed: "Embed";
```

Permission to embed content
