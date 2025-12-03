/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export declare class BaseModule {
}
export declare function formatMap(templateString: string, valueMap: Record<string, unknown>): string;
export declare function setValueByPath(data: Record<string, unknown>, keys: string[], value: unknown): void;
export declare function getValueByPath(data: unknown, keys: string[], defaultValue?: unknown): unknown;
/**
 * Moves values from source paths to destination paths.
 *
 * Examples:
 *   moveValueByPath(
 *     {'requests': [{'content': v1}, {'content': v2}]},
 *     {'requests[].*': 'requests[].request.*'}
 *   )
 *     -> {'requests': [{'request': {'content': v1}}, {'request': {'content': v2}}]}
 */
export declare function moveValueByPath(data: unknown, paths: Record<string, string>): void;
