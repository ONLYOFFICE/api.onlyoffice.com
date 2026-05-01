import { JsonSchema } from '@jsonforms/core';

enum FieldTypeCategory {
    PRIMITIVE = 100,
    COMPLEX = 200,
    UNKNOWN = 999
}

const ROOT_FIELD_ORDER: Record<string, number> = {
    'documentType': 1,
    'type': 2,
    'width': 3,
    'height': 4,
    'token': 5,
};

function isPrimitiveType(schema: JsonSchema): boolean {
    const type = schema.type;
    return (
        type === 'string' ||
        type === 'number' ||
        type === 'integer' ||
        type === 'boolean'
    );
}

export function isComplexType(schema: JsonSchema): boolean {
    return (
        schema.type === 'object' ||
        schema.type === 'array' ||
        !!schema.properties ||
        !!schema.items ||
        !!schema.$ref ||
        !!schema.oneOf ||
        !!schema.anyOf ||
        !!schema.allOf
    )
}

function getFieldTypeCategory(schema: JsonSchema): FieldTypeCategory {
    if (isPrimitiveType(schema)) {
        return FieldTypeCategory.PRIMITIVE;
    }

    if (isComplexType(schema)) {
        return FieldTypeCategory.COMPLEX;
    }

    return FieldTypeCategory.UNKNOWN;
}

function getSortOrder(
    fieldName: string,
    path: string,
    schema?: JsonSchema
): number {
    if (!path) {
        const customOrder = ROOT_FIELD_ORDER[fieldName];
        if (customOrder !== undefined) {
            return customOrder;
        }
    }

    if (schema) {
        return getFieldTypeCategory(schema)
    }

    return FieldTypeCategory.UNKNOWN
}

export function sortObjectKeys(
    keys: string[],
    path: string,
    properties?: Record<string, JsonSchema>
): string[] {
    return [...keys].sort((a, b) => {
        const schemaA = properties?.[a];
        const schemaB = properties?.[b];

        const orderA = getSortOrder(a, path, schemaA);
        const orderB = getSortOrder(b, path, schemaB);

        if (orderA !== orderB) {
            return orderA - orderB;
        }

        return a.localeCompare(b);
    });
}
