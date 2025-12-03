/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class Batches extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Lists batch jobs.
     *
     * @param params - The parameters for the list request.
     * @return - A pager of batch jobs.
     *
     * @example
     * ```ts
     * const batchJobs = await ai.batches.list({config: {'pageSize': 2}});
     * for await (const batchJob of batchJobs) {
     *   console.log(batchJob);
     * }
     * ```
     */
    list: (params?: types.ListBatchJobsParameters) => Promise<Pager<types.BatchJob>>;
    /**
     * Create batch job.
     *
     * @param params - The parameters for create batch job request.
     * @return The created batch job.
     *
     * @example
     * ```ts
     * const response = await ai.batches.create({
     *   model: 'gemini-2.0-flash',
     *   src: {gcsUri: 'gs://bucket/path/to/file.jsonl', format: 'jsonl'},
     *   config: {
     *     dest: {gcsUri: 'gs://bucket/path/output/directory', format: 'jsonl'},
     *   }
     * });
     * console.log(response);
     * ```
     */
    create: (params: types.CreateBatchJobParameters) => Promise<types.BatchJob>;
    /**
     * **Experimental** Creates an embedding batch job.
     *
     * @param params - The parameters for create embedding batch job request.
     * @return The created batch job.
     *
     * @example
     * ```ts
     * const response = await ai.batches.createEmbeddings({
     *   model: 'text-embedding-004',
     *   src: {fileName: 'files/my_embedding_input'},
     * });
     * console.log(response);
     * ```
     */
    createEmbeddings: (params: types.CreateEmbeddingsBatchJobParameters) => Promise<types.BatchJob>;
    private createInlinedGenerateContentRequest;
    private getGcsUri;
    private getBigqueryUri;
    private formatDestination;
    /**
     * Internal method to create batch job.
     *
     * @param params - The parameters for create batch job request.
     * @return The created batch job.
     *
     */
    private createInternal;
    /**
     * Internal method to create batch job.
     *
     * @param params - The parameters for create batch job request.
     * @return The created batch job.
     *
     */
    private createEmbeddingsInternal;
    /**
     * Gets batch job configurations.
     *
     * @param params - The parameters for the get request.
     * @return The batch job.
     *
     * @example
     * ```ts
     * await ai.batches.get({name: '...'}); // The server-generated resource name.
     * ```
     */
    get(params: types.GetBatchJobParameters): Promise<types.BatchJob>;
    /**
     * Cancels a batch job.
     *
     * @param params - The parameters for the cancel request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.batches.cancel({name: '...'}); // The server-generated resource name.
     * ```
     */
    cancel(params: types.CancelBatchJobParameters): Promise<void>;
    private listInternal;
    /**
     * Deletes a batch job.
     *
     * @param params - The parameters for the delete request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.batches.delete({name: '...'}); // The server-generated resource name.
     * ```
     */
    delete(params: types.DeleteBatchJobParameters): Promise<types.DeleteResourceJob>;
}
