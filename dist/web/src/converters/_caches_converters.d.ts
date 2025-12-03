/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import type * as types from '../types.js';
export declare function blobToMldev(fromObject: types.Blob): Record<string, unknown>;
export declare function contentToMldev(fromObject: types.Content): Record<string, unknown>;
export declare function createCachedContentConfigToMldev(fromObject: types.CreateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createCachedContentConfigToVertex(fromObject: types.CreateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.CreateCachedContentParameters): Record<string, unknown>;
export declare function createCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.CreateCachedContentParameters): Record<string, unknown>;
export declare function deleteCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.DeleteCachedContentParameters): Record<string, unknown>;
export declare function deleteCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.DeleteCachedContentParameters): Record<string, unknown>;
export declare function deleteCachedContentResponseFromMldev(fromObject: types.DeleteCachedContentResponse): Record<string, unknown>;
export declare function deleteCachedContentResponseFromVertex(fromObject: types.DeleteCachedContentResponse): Record<string, unknown>;
export declare function fileDataToMldev(fromObject: types.FileData): Record<string, unknown>;
export declare function functionCallToMldev(fromObject: types.FunctionCall): Record<string, unknown>;
export declare function functionCallingConfigToMldev(fromObject: types.FunctionCallingConfig): Record<string, unknown>;
export declare function functionDeclarationToVertex(fromObject: types.FunctionDeclaration): Record<string, unknown>;
export declare function getCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.GetCachedContentParameters): Record<string, unknown>;
export declare function getCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.GetCachedContentParameters): Record<string, unknown>;
export declare function googleMapsToMldev(fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function googleSearchToMldev(fromObject: types.GoogleSearch): Record<string, unknown>;
export declare function listCachedContentsConfigToMldev(fromObject: types.ListCachedContentsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listCachedContentsConfigToVertex(fromObject: types.ListCachedContentsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listCachedContentsParametersToMldev(fromObject: types.ListCachedContentsParameters): Record<string, unknown>;
export declare function listCachedContentsParametersToVertex(fromObject: types.ListCachedContentsParameters): Record<string, unknown>;
export declare function listCachedContentsResponseFromMldev(fromObject: types.ListCachedContentsResponse): Record<string, unknown>;
export declare function listCachedContentsResponseFromVertex(fromObject: types.ListCachedContentsResponse): Record<string, unknown>;
export declare function partToMldev(fromObject: types.Part): Record<string, unknown>;
export declare function toolConfigToMldev(fromObject: types.ToolConfig): Record<string, unknown>;
export declare function toolToMldev(fromObject: types.Tool): Record<string, unknown>;
export declare function toolToVertex(fromObject: types.Tool): Record<string, unknown>;
export declare function updateCachedContentConfigToMldev(fromObject: types.UpdateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function updateCachedContentConfigToVertex(fromObject: types.UpdateCachedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function updateCachedContentParametersToMldev(apiClient: ApiClient, fromObject: types.UpdateCachedContentParameters): Record<string, unknown>;
export declare function updateCachedContentParametersToVertex(apiClient: ApiClient, fromObject: types.UpdateCachedContentParameters): Record<string, unknown>;
