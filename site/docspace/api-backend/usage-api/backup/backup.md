# ONLYOFFICE DocSpace Backup API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Backup

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**cancelBackup**](cancel-backup.md) | **POST** /api/2.0/backup/cancelbackup | Cancel the running backup |
| [**createBackupSchedule**](create-backup-schedule.md) | **POST** /api/2.0/backup/createbackupschedule | Create the backup schedule |
| [**deleteBackup**](delete-backup.md) | **DELETE** /api/2.0/backup/deletebackup/\{id\} | Delete the backup |
| [**deleteBackupHistory**](delete-backup-history.md) | **DELETE** /api/2.0/backup/deletebackuphistory | Delete the backup history |
| [**deleteBackupSchedule**](delete-backup-schedule.md) | **DELETE** /api/2.0/backup/deletebackupschedule | Delete the backup schedule |
| [**getBackupHistory**](get-backup-history.md) | **GET** /api/2.0/backup/getbackuphistory | Get the backup history |
| [**getBackupProgress**](get-backup-progress.md) | **GET** /api/2.0/backup/getbackupprogress | Get the backup progress |
| [**getBackupSchedule**](get-backup-schedule.md) | **GET** /api/2.0/backup/getbackupschedule | Get the backup schedule |
| [**getBackupsCount**](get-backups-count.md) | **GET** /api/2.0/backup/getbackupscount | Get the number of backups |
| [**getBackupsCounts**](get-backups-counts.md) | **GET** /api/2.0/backup/getbackupscountbypaid | Get free and paid backup counts |
| [**getBackupsServiceState**](get-backups-service-state.md) | **GET** /api/2.0/backup/getservicestate | Check whether backups are enabled |
| [**getRestoreProgress**](get-restore-progress.md) | **GET** /api/2.0/backup/getrestoreprogress | Get the restoring progress |
| [**startBackup**](start-backup.md) | **POST** /api/2.0/backup/startbackup | Start the backup |
| [**startBackupRestore**](start-backup-restore.md) | **POST** /api/2.0/backup/startrestore | Start the restoring process |

## Authorization

### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### bearerAuth

- **Type**: HTTP Bearer Token authentication

### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### Basic

- **Type**: HTTP basic authentication

### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)

### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources

### OpenId

### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

