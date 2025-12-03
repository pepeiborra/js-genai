/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import { FileStat, Uploader } from '../_uploader.js';
import { File, UploadToFileSearchStoreOperation } from '../types.js';
export declare const MAX_CHUNK_SIZE: number;
export declare const MAX_RETRY_COUNT = 3;
export declare const INITIAL_RETRY_DELAY_MS = 1000;
export declare const DELAY_MULTIPLIER = 2;
export declare const X_GOOG_UPLOAD_STATUS_HEADER_FIELD = "x-goog-upload-status";
export declare class CrossUploader implements Uploader {
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    uploadToFileSearchStore(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<UploadToFileSearchStoreOperation>;
    stat(file: string | Blob): Promise<FileStat>;
}
export declare function uploadBlob(file: Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
export declare function uploadBlobToFileSearchStore(file: Blob, uploadUrl: string, apiClient: ApiClient): Promise<UploadToFileSearchStoreOperation>;
export declare function getBlobStat(file: Blob): Promise<FileStat>;
export declare function sleep(ms: number): Promise<void>;
