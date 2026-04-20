/**
 * Field sorting configuration for ConfigEditor
 * Defines the order in which fields should be displayed
 */

const ROOT_FIELD_ORDER: Record<string, number> = {
  // Single parameters first
  'type': 1,
  'width': 2,
  'height': 3,
  'documentType': 4,
  // Complex objects
  'document': 10,
  'editorConfig': 11,
  'events': 12,
  // Token last
  'token': 100,
}

const EDITOR_CONFIG_FIELD_ORDER: Record<string, number> = {}

function getSortOrder(fieldName: string, path: string): number {
  if (path === 'editorConfig') {
    return EDITOR_CONFIG_FIELD_ORDER[fieldName] ?? 999
  }

  if (!path) {
    return ROOT_FIELD_ORDER[fieldName] ?? 50
  }

  return 999
}

export function sortObjectKeys(keys: string[], path: string): string[] {
  return [...keys].sort((a, b) => {
    const orderA = getSortOrder(a, path)
    const orderB = getSortOrder(b, path)
    
    if (orderA !== orderB) {
      return orderA - orderB
    }
    
    return a.localeCompare(b)
  })
}
