/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import { FileStat, Uploader } from '../_uploader.js';
import { File, UploadToFileSearchStoreOperation } from '../types.js';
export declare class BrowserUploader implements Uploader {
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    uploadToFileSearchStore(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<UploadToFileSearchStoreOperation>;
    stat(file: string | Blob): Promise<FileStat>;
}
