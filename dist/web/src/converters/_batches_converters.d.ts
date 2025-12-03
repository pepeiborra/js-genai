/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import type * as types from '../types.js';
export declare function batchJobDestinationFromMldev(fromObject: types.BatchJobDestination): Record<string, unknown>;
export declare function batchJobDestinationFromVertex(fromObject: types.BatchJobDestination): Record<string, unknown>;
export declare function batchJobDestinationToVertex(fromObject: types.BatchJobDestination): Record<string, unknown>;
export declare function batchJobFromMldev(fromObject: types.BatchJob): Record<string, unknown>;
export declare function batchJobFromVertex(fromObject: types.BatchJob): Record<string, unknown>;
export declare function batchJobSourceFromVertex(fromObject: types.BatchJobSource): Record<string, unknown>;
export declare function batchJobSourceToMldev(apiClient: ApiClient, fromObject: types.BatchJobSource): Record<string, unknown>;
export declare function batchJobSourceToVertex(fromObject: types.BatchJobSource): Record<string, unknown>;
export declare function blobToMldev(fromObject: types.Blob): Record<string, unknown>;
export declare function cancelBatchJobParametersToMldev(apiClient: ApiClient, fromObject: types.CancelBatchJobParameters): Record<string, unknown>;
export declare function cancelBatchJobParametersToVertex(apiClient: ApiClient, fromObject: types.CancelBatchJobParameters): Record<string, unknown>;
export declare function candidateFromMldev(fromObject: types.Candidate): Record<string, unknown>;
export declare function citationMetadataFromMldev(fromObject: types.CitationMetadata): Record<string, unknown>;
export declare function contentToMldev(fromObject: types.Content): Record<string, unknown>;
export declare function createBatchJobConfigToMldev(fromObject: types.CreateBatchJobConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createBatchJobConfigToVertex(fromObject: types.CreateBatchJobConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createBatchJobParametersToMldev(apiClient: ApiClient, fromObject: types.CreateBatchJobParameters): Record<string, unknown>;
export declare function createBatchJobParametersToVertex(apiClient: ApiClient, fromObject: types.CreateBatchJobParameters): Record<string, unknown>;
export declare function createEmbeddingsBatchJobConfigToMldev(fromObject: types.CreateEmbeddingsBatchJobConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function createEmbeddingsBatchJobParametersToMldev(apiClient: ApiClient, fromObject: types.CreateEmbeddingsBatchJobParameters): Record<string, unknown>;
export declare function deleteBatchJobParametersToMldev(apiClient: ApiClient, fromObject: types.DeleteBatchJobParameters): Record<string, unknown>;
export declare function deleteBatchJobParametersToVertex(apiClient: ApiClient, fromObject: types.DeleteBatchJobParameters): Record<string, unknown>;
export declare function deleteResourceJobFromMldev(fromObject: types.DeleteResourceJob): Record<string, unknown>;
export declare function deleteResourceJobFromVertex(fromObject: types.DeleteResourceJob): Record<string, unknown>;
export declare function embedContentBatchToMldev(apiClient: ApiClient, fromObject: types.EmbedContentBatch): Record<string, unknown>;
export declare function embedContentConfigToMldev(fromObject: types.EmbedContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function embeddingsBatchJobSourceToMldev(apiClient: ApiClient, fromObject: types.EmbeddingsBatchJobSource): Record<string, unknown>;
export declare function fileDataToMldev(fromObject: types.FileData): Record<string, unknown>;
export declare function functionCallToMldev(fromObject: types.FunctionCall): Record<string, unknown>;
export declare function functionCallingConfigToMldev(fromObject: types.FunctionCallingConfig): Record<string, unknown>;
export declare function generateContentConfigToMldev(apiClient: ApiClient, fromObject: types.GenerateContentConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function generateContentResponseFromMldev(fromObject: types.GenerateContentResponse): Record<string, unknown>;
export declare function getBatchJobParametersToMldev(apiClient: ApiClient, fromObject: types.GetBatchJobParameters): Record<string, unknown>;
export declare function getBatchJobParametersToVertex(apiClient: ApiClient, fromObject: types.GetBatchJobParameters): Record<string, unknown>;
export declare function googleMapsToMldev(fromObject: types.GoogleMaps): Record<string, unknown>;
export declare function googleSearchToMldev(fromObject: types.GoogleSearch): Record<string, unknown>;
export declare function imageConfigToMldev(fromObject: types.ImageConfig): Record<string, unknown>;
export declare function inlinedRequestToMldev(apiClient: ApiClient, fromObject: types.InlinedRequest): Record<string, unknown>;
export declare function inlinedResponseFromMldev(fromObject: types.InlinedResponse): Record<string, unknown>;
export declare function listBatchJobsConfigToMldev(fromObject: types.ListBatchJobsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listBatchJobsConfigToVertex(fromObject: types.ListBatchJobsConfig, parentObject: Record<string, unknown>): Record<string, unknown>;
export declare function listBatchJobsParametersToMldev(fromObject: types.ListBatchJobsParameters): Record<string, unknown>;
export declare function listBatchJobsParametersToVertex(fromObject: types.ListBatchJobsParameters): Record<string, unknown>;
export declare function listBatchJobsResponseFromMldev(fromObject: types.ListBatchJobsResponse): Record<string, unknown>;
export declare function listBatchJobsResponseFromVertex(fromObject: types.ListBatchJobsResponse): Record<string, unknown>;
export declare function partToMldev(fromObject: types.Part): Record<string, unknown>;
export declare function safetySettingToMldev(fromObject: types.SafetySetting): Record<string, unknown>;
export declare function toolConfigToMldev(fromObject: types.ToolConfig): Record<string, unknown>;
export declare function toolToMldev(fromObject: types.Tool): Record<string, unknown>;
