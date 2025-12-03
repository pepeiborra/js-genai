/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import type * as types from '../types.js';
export declare function blobToMldev(fromObject: types.Blob): Record<string, unknown>;
export declare function contentToMldev(fromObject: types.Content): Record<string, unknown>;
export declare function createAuthTokenConfigToMldev(apiClient: ApiClient, fromObject: types.CreateAuthTokenConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createAuthTokenParametersToMldev(apiClient: ApiClient, fromObject: types.CreateAuthTokenParameters): Record<string, unknown>;
export declare function createAuthTokenParametersToVertex(fromObject: types.CreateAuthTokenParameters): Record<string, unknown>;
export declare function fileDataToMldev(fromObject: types.FileData): Record<string, unknown>;
export declare function functionCallToMldev(fromObject: types.FunctionCall): Record<string, unknown>;
export declare function googleMapsToMldev(fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function googleSearchToMldev(fromObject: types.GoogleSearch): Record<string, unknown>;
export declare function liveConnectConfigToMldev(fromObject: types.LiveConnectConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function liveConnectConstraintsToMldev(apiClient: ApiClient, fromObject: types.LiveConnectConstraints): Record<string, unknown>;
export declare function partToMldev(fromObject: types.Part): Record<string, unknown>;
export declare function sessionResumptionConfigToMldev(fromObject: types.SessionResumptionConfig): Record<string, unknown>;
export declare function toolToMldev(fromObject: types.Tool): Record<string, unknown>;
