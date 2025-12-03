/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import type * as types from '../types.js';
export declare function blobToMldev(fromObject: types.Blob): Record<string, unknown>;
export declare function contentToMldev(fromObject: types.Content): Record<string, unknown>;
export declare function fileDataToMldev(fromObject: types.FileData): Record<string, unknown>;
export declare function functionCallToMldev(fromObject: types.FunctionCall): Record<string, unknown>;
export declare function functionDeclarationToVertex(fromObject: types.FunctionDeclaration): Record<string, unknown>;
export declare function generationConfigToVertex(fromObject: types.GenerationConfig): Record<string, unknown>;
export declare function googleMapsToMldev(fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function googleSearchToMldev(fromObject: types.GoogleSearch): Record<string, unknown>;
export declare function liveClientContentToMldev(fromObject: types.LiveClientContent): Record<string, unknown>;
export declare function liveClientMessageToMldev(fromObject: types.LiveClientMessage): Record<string, unknown>;
export declare function liveClientMessageToVertex(fromObject: types.LiveClientMessage): Record<string, unknown>;
export declare function liveClientRealtimeInputToMldev(fromObject: types.LiveClientRealtimeInput): Record<string, unknown>;
export declare function liveClientRealtimeInputToVertex(fromObject: types.LiveClientRealtimeInput): Record<string, unknown>;
export declare function liveClientSetupToMldev(fromObject: types.LiveClientSetup): Record<string, unknown>;
export declare function liveClientSetupToVertex(fromObject: types.LiveClientSetup): Record<string, unknown>;
export declare function liveConnectConfigToMldev(fromObject: types.LiveConnectConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function liveConnectConfigToVertex(fromObject: types.LiveConnectConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function liveConnectParametersToMldev(apiClient: ApiClient, fromObject: types.LiveConnectParameters): Record<string, unknown>;
export declare function liveConnectParametersToVertex(apiClient: ApiClient, fromObject: types.LiveConnectParameters): Record<string, unknown>;
export declare function liveMusicClientMessageToVertex(fromObject: types.LiveMusicClientMessage): Record<string, unknown>;
export declare function liveMusicConnectParametersToMldev(fromObject: types.LiveMusicConnectParameters): Record<string, unknown>;
export declare function liveMusicConnectParametersToVertex(fromObject: types.LiveMusicConnectParameters): Record<string, unknown>;
export declare function liveMusicSetConfigParametersToMldev(fromObject: types.LiveMusicSetConfigParameters): Record<string, unknown>;
export declare function liveMusicSetConfigParametersToVertex(fromObject: types.LiveMusicSetConfigParameters): Record<string, unknown>;
export declare function liveMusicSetWeightedPromptsParametersToMldev(fromObject: types.LiveMusicSetWeightedPromptsParameters): Record<string, unknown>;
export declare function liveMusicSetWeightedPromptsParametersToVertex(fromObject: types.LiveMusicSetWeightedPromptsParameters): Record<string, unknown>;
export declare function liveSendRealtimeInputParametersToMldev(fromObject: types.LiveSendRealtimeInputParameters): Record<string, unknown>;
export declare function liveSendRealtimeInputParametersToVertex(fromObject: types.LiveSendRealtimeInputParameters): Record<string, unknown>;
export declare function liveServerMessageFromVertex(fromObject: types.LiveServerMessage): Record<string, unknown>;
export declare function partToMldev(fromObject: types.Part): Record<string, unknown>;
export declare function sessionResumptionConfigToMldev(fromObject: types.SessionResumptionConfig): Record<string, unknown>;
export declare function speechConfigToVertex(fromObject: types.SpeechConfig): Record<string, unknown>;
export declare function toolToMldev(fromObject: types.Tool): Record<string, unknown>;
export declare function toolToVertex(fromObject: types.Tool): Record<string, unknown>;
export declare function usageMetadataFromVertex(fromObject: types.UsageMetadata): Record<string, unknown>;
