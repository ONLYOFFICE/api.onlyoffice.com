﻿/*
* (c) Copyright Ascensio System SIA 2010-2023
*
* This program is a free software product. You can redistribute it and/or
* modify it under the terms of the GNU Affero General Public License (AGPL)
* version 3 as published by the Free Software Foundation. In accordance with
* Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
* that Ascensio System SIA expressly excludes the warranty of non-infringement
* of any third-party rights.
*
* This program is distributed WITHOUT ANY WARRANTY; without even the implied
* warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
* details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
*
* You can contact Ascensio System SIA at 20A-6 Ernesta Birznieka-Upish
* street, Riga, Latvia, EU, LV-1050.
*
* The  interactive user interfaces in modified source and object code versions
* of the Program must display Appropriate Legal Notices, as required under
* Section 5 of the GNU AGPL version 3.
*
* Pursuant to Section 7(b) of the License you must retain the original Product
* logo when distributing the program. Pursuant to Section 7(e) we decline to
* grant you any rights under trademark law for use of our trademarks.
*
* All the Product's GUI elements, including illustrations and icon sets, as
* well as technical writing content are licensed under the terms of the
* Creative Commons Attribution-ShareAlike 4.0 International. See the License
* terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
*
*/

#include<map>
#include <string>
#include <iostream>
#include "C:/Program Files/ONLYOFFICE/DocumentBuilder/include/common.h"
#include "C:/Program Files/ONLYOFFICE/DocumentBuilder/include/docbuilder.h"
#pragma comment(lib, "C:/Program Files/ONLYOFFICE/DocumentBuilder/doctrenderer.lib")
using namespace std;
using namespace NSDoctRenderer;

const wchar_t* workDir = L"C:\\Program Files\\ONLYOFFICE\\DocumentBuilder";
const wchar_t* templatePath = L"../SpreadsheetWithErrors.xlsx";
const wchar_t* resultPath = L"../result.xlsx";

// Helper functions
string cValueToString(CValue value)
{
    wchar_t* txt = value.ToString().c_str();
    wstring ws(txt);
    string str(ws.begin(), ws.end());
    return str;
}

void CheckCell(CValue oWorksheet, string cell, int row, int col)
{
    if (cell.find("#") != std::string::npos)
    {
        string comment = "Error" + cell;
        CValue errorCell = oWorksheet.Call("GetRangeByNumber", row, col);
        errorCell.Call("AddComment", comment.c_str());
    }
}

// Main function
int main(int argc, char* argv[])
{
    // Init DocBuilder
    CDocBuilder::Initialize(workDir);
    CDocBuilder oBuilder;
    oBuilder.SetProperty("--work-directory", workDir);
    
    // Open file and get context
    oBuilder.OpenFile(templatePath, L"");
    CContext oContext = oBuilder.GetContext();
    CContextScope oScope = oContext.CreateScope();
    CValue oGlobal = oContext.GetGlobal();
    CValue oApi = oGlobal["Api"];

    // Find and comment formula errors
    CValue oWorksheet = oApi.Call("GetActiveSheet");
    CValue oRange = oWorksheet.Call("GetUsedRange");
    CValue data = oRange.Call("GetValue");
 
    for (int row = 0; row < data.GetLength(); row++)
    {
        for (int col = 0; col < data[0].GetLength(); col++)
        {
            CheckCell(oWorksheet, cValueToString(data[row][col]), row, col);
        }
    }

    // Save and close
    oBuilder.SaveFile(OFFICESTUDIO_FILE_SPREADSHEET_XLSX, resultPath);
    oBuilder.CloseFile();
    CDocBuilder::Dispose();
    return 0;
}
