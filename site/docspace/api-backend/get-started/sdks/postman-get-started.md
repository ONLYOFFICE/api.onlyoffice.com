---
sidebar_position: -1
---

# Postman

The ONLYOFFICE DocSpace SDK for Postman is a simple Postman Collection for integrating with the ONLYOFFICE DocSpace API.

A Postman Collection is a structured format for organizing API requests. This SDK lets you create, modify, and manipulate these collections using JavaScript code.

The collection includes comprehensive API endpoints for managing groups, people, files, folders, rooms, and more in DocSpace.

**[ONLYOFFICE Postman Collection on GitHub](https://github.com/ONLYOFFICE/docspace-api-postman-collections)**

## Requirements

Node.js v12 or later

## Installation

In your project directory, run the command to install the Postman Collection SDK:

```bash
npm install postman-collection
```

## Getting Started

### Creating and running a JavaScript file

- In your project directory, create a new file, e.g., `load-collection.js`.
- Add the JavaScript code to the file (see the code examples in the steps below).
- In the command line, run the command:

```bash
node load-collection.js
```

You can add the code from each step to the single file sequentially or you can create separate .js files for different tasks.

### Loading the Collection

#### Step 1: Load the Collection from JSON

```javascript
const sdk = require('postman-collection');
const fs = require('fs');

// Read the collection file
const collectionJSON = JSON.parse(fs.readFileSync('postman.json', 'utf8'));

// Create a Collection instance
const docSpaceCollection = new sdk.Collection(collectionJSON);

console.log(`Collection Name: ${docSpaceCollection.name}`);
console.log(`Total Requests: ${docSpaceCollection.items.count()}`);
```

#### Step 2: Configure Variables

The collection uses several variables that you need to set:

```javascript
// Set the base URL for your DocSpace instance
docSpaceCollection.variables.upsert({
  key: 'baseUrl',
  value: 'https://your-docspace-instance.onlyoffice.com'
});

// Set your authentication key
docSpaceCollection.variables.upsert({
  key: 'asc_auth_key',
  value: 'your-api-key-here'
});
```

**Variables:**
- `baseUrl` - the URL of your DocSpace instance (e.g. `https://portal.onlyoffice.com`)
- `asc_auth_key` - your personal API key generated in DocSpace settings -> Developer Tools -> API keys.

### Exploring the Collection Structure

#### View All Request Groups

```javascript
// List all top-level folders
docSpaceCollection.items.each((item) => {
  console.log(`Group: ${item.name}`);
  
  // If it's a folder, list its requests
  if (item.items) {
    item.items.each((subItem) => {
      console.log(`  - ${subItem.name}`);
    });
  }
});
```

#### Find a Specific Request

```javascript
// Find a request by name
function findRequest(collection, requestName) {
  let foundRequest = null;
  
  collection.forEachItem((item) => {
    if (item.name === requestName) {
      foundRequest = item;
    }
  });
  
  return foundRequest;
}

// Example: Find the "Get groups" request
const getGroupsRequest = findRequest(docSpaceCollection, 'Get groups');

if (getGroupsRequest) {
  console.log('Request URL:', getGroupsRequest.request.url.toString());
  console.log('Method:', getGroupsRequest.request.method);
}
```

### Working with Requests

#### Inspect a Request

```javascript
// Get a specific request
const addGroupRequest = findRequest(docSpaceCollection, 'Add a new group');

if (addGroupRequest) {
  // View request details
  console.log('Method:', addGroupRequest.request.method);
  console.log('URL:', addGroupRequest.request.url.toString());
  console.log('Description:', addGroupRequest.request.description);
  
  // View headers
  console.log('\nHeaders:');
  addGroupRequest.request.headers.each((header) => {
    console.log(`  ${header.key}: ${header.value}`);
  });
  
  // View body (if exists)
  if (addGroupRequest.request.body) {
    console.log('\nBody:', addGroupRequest.request.body.raw);
  }
}
```

#### Modify a Request

```javascript
// Add a custom header to a request
addGroupRequest.request.headers.add({
  key: 'X-Custom-Header',
  value: 'MyValue'
});

// Update the request body
addGroupRequest.request.body.update({
  mode: 'raw',
  raw: JSON.stringify({
    groupName: 'Engineering Team',
    groupManager: 'manager@example.com',
    members: 'user1@example.com,user2@example.com'
  })
});
```

### Understanding Authentication

The collection uses API Key authentication with the following configuration:

```javascript
// View authentication settings
const auth = docSpaceCollection.auth;
console.log('Auth Type:', auth.type);

// The API key is sent as a header: asc_auth_key
auth.apikey.each((param) => {
  console.log(`${param.key}: ${param.value}`);
});
```

### Exporting the Modified Collection

After making changes, you can save the collection:

```javascript
// Convert collection to JSON
const updatedJSON = docSpaceCollection.toJSON();

// Save to file
fs.writeFileSync('updated-collection.json', JSON.stringify(updatedJSON, null, 2));
console.log('Collection saved to updated-collection.json');
```
