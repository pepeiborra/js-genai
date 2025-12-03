/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiClient } from '../_api_client.js';
import { Downloader } from '../_downloader.js';
import { DownloadFileParameters } from '../types.js';
export declare class CrossDownloader implements Downloader {
    download(_params: DownloadFileParameters, _apiClient: ApiClient): Promise<void>;
}
