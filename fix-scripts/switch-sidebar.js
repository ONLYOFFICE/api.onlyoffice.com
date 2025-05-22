const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const os = require('os');

const EOL = os.EOL;

const sidebarPath = path.join(__dirname, "../site/docspace/api-backend/usage-api/sidebar.ts");
const content = fs.readFileSync(sidebarPath, "utf8");

function flattenSidebar(sidebar) {
        let result = [];
    let seenDoc = false;
  
    sidebar.forEach((category) => {
        category.forEach((item) =>{
            if(item.type === "category" && item.items.length === 2) 
            {
                const [firstElement, secondElement] = item.items;

                if(firstElement.type === "doc" && secondElement.type === "category"){
                    if (!seenDoc) {
                        result.push(firstElement);
                        seenDoc = true;
                    }
                    result.push(secondElement);
                    return;
                }
            }
            else {
                result.push(item);
                return;
            }
        });
    });
    return result;
}

const startStr = "apisidebar:";
const endStr = `,${EOL}};${EOL}${EOL}export default sidebar.apisidebar;${EOL}`;
const startIndex = content.indexOf(startStr) + startStr.length;
const endIndex = content.lastIndexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find the exported array");
  process.exit(1);
}

const arrayContent = content.substring(startIndex, endIndex);
let sidebarJson;

try {
  sidebarJson = new Function(`return [${arrayContent}]`)();
} catch (e) {
  console.error("Error parsing the array:", e);
  process.exit(1);
}

const fixedSidebar = flattenSidebar(sidebarJson);

const newContent = content.substring(0, startIndex) + EOL + JSON.stringify(fixedSidebar, null, 2) + EOL + content.substring(endIndex);

async function main() {
    try {
        const options = await prettier.resolveConfig(sidebarPath);
        const formattedContent = await prettier.format(newContent, {
            ...options,
            parser: "typescript",
        });
        
        fs.writeFileSync(sidebarPath, formattedContent, "utf8");
        console.log("Sidebar structure has been updated successfully!");
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main();
