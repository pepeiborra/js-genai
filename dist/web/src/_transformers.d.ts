/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Tool as McpTool } from '@modelcontextprotocol/sdk/types';
import { ApiClient } from './_api_client.js';
import * as types from './types.js';
export declare function tModel(apiClient: ApiClient, model: string | unknown): string;
export declare function tCachesModel(apiClient: ApiClient, model: string | unknown): string;
export declare function tBlobs(blobs: types.BlobImageUnion | types.BlobImageUnion[]): types.Blob[];
export declare function tBlob(blob: types.BlobImageUnion): types.Blob;
export declare function tImageBlob(blob: types.BlobImageUnion): types.Blob;
export declare function tAudioBlob(blob: types.Blob): types.Blob;
export declare function tPart(origin?: types.PartUnion | null): types.Part;
export declare function tParts(origin?: types.PartListUnion | null): types.Part[];
export declare function tContent(origin?: types.ContentUnion): types.Content;
export declare function tContentsForEmbed(apiClient: ApiClient, origin: types.ContentListUnion): types.ContentUnion[];
export declare function tContents(origin?: types.ContentListUnion): types.Content[];
export declare function processJsonSchema(_jsonSchema: types.Schema | Record<string, unknown>): types.Schema;
export declare function tSchema(schema: types.Schema | unknown): types.Schema;
export declare function tSpeechConfig(speechConfig: types.SpeechConfigUnion): types.SpeechConfig;
export declare function tLiveSpeechConfig(speechConfig: types.SpeechConfig | object): types.SpeechConfig;
export declare function tTool(tool: types.Tool): types.Tool;
export declare function tTools(tools: types.ToolListUnion | unknown): types.Tool[];
export declare function tCachedContentName(apiClient: ApiClient, name: string | unknown): string;
export declare function tTuningJobStatus(status: string | unknown): string;
export declare function tBytes(fromImageBytes: string | unknown): string;
export declare function isGeneratedVideo(origin: unknown): boolean;
export declare function isVideo(origin: unknown): boolean;
export declare function tFileName(fromName: string | types.File | types.GeneratedVideo | types.Video): string | undefined;
export declare function tModelsUrl(apiClient: ApiClient, baseModels: boolean | unknown): string;
export declare function tExtractModels(response: unknown): Record<string, unknown>[];
export declare function mcpToGeminiTool(mcpTool: McpTool, config?: types.CallableToolConfig): types.Tool;
/**
 * Converts a list of MCP tools to a single Gemini tool with a list of function
 * declarations.
 */
export declare function mcpToolsToGeminiTool(mcpTools: McpTool[], config?: types.CallableToolConfig): types.Tool;
export declare function tBatchJobSource(client: ApiClient, src: string | types.InlinedRequest[] | types.BatchJobSource): types.BatchJobSource;
export declare function tEmbeddingBatchJobSource(client: ApiClient, src: types.EmbeddingsBatchJobSource): types.EmbeddingsBatchJobSource;
export declare function tBatchJobDestination(dest: string | types.BatchJobDestination): types.BatchJobDestination;
export declare function tRecvBatchJobDestination(dest: unknown): types.BatchJobDestination;
export declare function tBatchJobName(apiClient: ApiClient, name: unknown): string;
export declare function tJobState(state: unknown): string;
