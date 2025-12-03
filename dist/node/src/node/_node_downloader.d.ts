/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import { Downloader } from '../_downloader.js';
import { DownloadFileParameters } from '../types.js';
export declare class NodeDownloader implements Downloader {
    download(params: DownloadFileParameters, apiClient: ApiClient): Promise<void>;
}
