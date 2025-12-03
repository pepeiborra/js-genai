/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class Tunings extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Lists tuning jobs.
     *
     * @param params - The parameters for the list request.
     * @return - A pager of tuning jobs.
     *
     * @example
     * ```ts
     * const tuningJobs = await ai.tunings.list({config: {'pageSize': 2}});
     * for await (const tuningJob of tuningJobs) {
     *   console.log(tuningJob);
     * }
     * ```
     */
    list: (params?: types.ListTuningJobsParameters) => Promise<Pager<types.TuningJob>>;
    /**
     * Gets a TuningJob.
     *
     * @param name - The resource name of the tuning job.
     * @return - A TuningJob object.
     *
     * @experimental - The SDK's tuning implementation is experimental, and may
     * change in future versions.
     */
    get: (params: types.GetTuningJobParameters) => Promise<types.TuningJob>;
    /**
     * Creates a supervised fine-tuning job.
     *
     * @param params - The parameters for the tuning job.
     * @return - A TuningJob operation.
     *
     * @experimental - The SDK's tuning implementation is experimental, and may
     * change in future versions.
     */
    tune: (params: types.CreateTuningJobParameters) => Promise<types.TuningJob>;
    private getInternal;
    private listInternal;
    /**
     * Cancels a tuning job.
     *
     * @param params - The parameters for the cancel request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.tunings.cancel({name: '...'}); // The server-generated resource name.
     * ```
     */
    cancel(params: types.CancelTuningJobParameters): Promise<types.CancelTuningJobResponse>;
    private tuneInternal;
    private tuneMldevInternal;
}
