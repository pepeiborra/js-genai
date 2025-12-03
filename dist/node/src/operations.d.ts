/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import * as types from './types.js';
export declare class Operations extends BaseModule {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * Gets the status of a long-running operation.
     *
     * @param parameters The parameters for the get operation request.
     * @return The updated Operation object, with the latest status or result.
     */
    getVideosOperation(parameters: types.OperationGetParameters<types.GenerateVideosResponse, types.GenerateVideosOperation>): Promise<types.GenerateVideosOperation>;
    /**
     * Gets the status of a long-running operation.
     *
     * @param parameters The parameters for the get operation request.
     * @return The updated Operation object, with the latest status or result.
     */
    get<T, U extends types.Operation<T>>(parameters: types.OperationGetParameters<T, U>): Promise<types.Operation<T>>;
    private getVideosOperationInternal;
    private fetchPredictVideosOperationInternal;
}
