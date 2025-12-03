/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from './_api_client.js';
import { BaseModule } from './_common.js';
import { Documents } from './documents.js';
import { Pager } from './pagers.js';
import * as types from './types.js';
export declare class FileSearchStores extends BaseModule {
    private readonly apiClient;
    readonly documents: Documents;
    constructor(apiClient: ApiClient, documents?: Documents);
    /**
     * Lists file search stores.
     *
     * @param params - The parameters for the list request.
     * @return - A pager of file search stores.
     *
     * @example
     * ```ts
     * const fileSearchStores = await ai.fileSearchStores.list({config: {'pageSize': 2}});
     * for await (const fileSearchStore of fileSearchStores) {
     *   console.log(fileSearchStore);
     * }
     * ```
     */
    list: (params?: types.ListFileSearchStoresParameters) => Promise<Pager<types.FileSearchStore>>;
    /**
     * Uploads a file asynchronously to a given File Search Store.
     * This method is not available in Vertex AI.
     * Supported upload sources:
     * - Node.js: File path (string) or Blob object.
     * - Browser: Blob object (e.g., File).
     *
     * @remarks
     * The `mimeType` can be specified in the `config` parameter. If omitted:
     *  - For file path (string) inputs, the `mimeType` will be inferred from the
     *     file extension.
     *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
     *     property.
     *
     * This section can contain multiple paragraphs and code examples.
     *
     * @param params - Optional parameters specified in the
     *        `types.UploadToFileSearchStoreParameters` interface.
     *         @see {@link types.UploadToFileSearchStoreParameters#config} for the optional
     *         config in the parameters.
     * @return A promise that resolves to a long running operation.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     * the `mimeType` can be provided in the `params.config` parameter.
     * @throws An error occurs if a suitable upload location cannot be established.
     *
     * @example
     * The following code uploads a file to a given file search store.
     *
     * ```ts
     * const operation = await ai.fileSearchStores.upload({fileSearchStoreName: 'fileSearchStores/foo-bar', file: 'file.txt', config: {
     *   mimeType: 'text/plain',
     * }});
     * console.log(operation.name);
     * ```
     */
    uploadToFileSearchStore(params: types.UploadToFileSearchStoreParameters): Promise<types.UploadToFileSearchStoreOperation>;
    /**
     * Creates a File Search Store.
     *
     * @param params - The parameters for creating a File Search Store.
     * @return FileSearchStore.
     */
    create(params: types.CreateFileSearchStoreParameters): Promise<types.FileSearchStore>;
    /**
     * Gets a File Search Store.
     *
     * @param params - The parameters for getting a File Search Store.
     * @return FileSearchStore.
     */
    get(params: types.GetFileSearchStoreParameters): Promise<types.FileSearchStore>;
    /**
     * Deletes a File Search Store.
     *
     * @param params - The parameters for deleting a File Search Store.
     */
    delete(params: types.DeleteFileSearchStoreParameters): Promise<void>;
    private listInternal;
    private uploadToFileSearchStoreInternal;
    /**
     * Imports a File from File Service to a FileSearchStore.
     *
     * This is a long-running operation, see aip.dev/151
     *
     * @param params - The parameters for importing a file to a file search store.
     * @return ImportFileOperation.
     */
    importFile(params: types.ImportFileParameters): Promise<types.ImportFileOperation>;
}
