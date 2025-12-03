/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import * as types from './types.js';
export declare const DEFAULT_MAX_REMOTE_CALLS = 10;
/** Returns whether automatic function calling is disabled. */
export declare function shouldDisableAfc(config: types.GenerateContentConfig | undefined): boolean;
export declare function isCallableTool(tool: types.ToolUnion): boolean;
export declare function hasCallableTools(params: types.GenerateContentParameters): boolean;
/**
 * Returns the indexes of the tools that are not compatible with AFC.
 */
export declare function findAfcIncompatibleToolIndexes(params?: types.GenerateContentParameters): number[];
/**
 * Returns whether to append automatic function calling history to the
 * response.
 */
export declare function shouldAppendAfcHistory(config: types.GenerateContentConfig | undefined): boolean;
