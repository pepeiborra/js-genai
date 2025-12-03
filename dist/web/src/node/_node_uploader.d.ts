import { ApiClient } from '../_api_client.js';
import { FileStat, Uploader } from '../_uploader.js';
import { File, UploadToFileSearchStoreOperation } from '../types.js';
export declare class NodeUploader implements Uploader {
    stat(file: string | Blob): Promise<FileStat>;
    upload(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<File>;
    uploadToFileSearchStore(file: string | Blob, uploadUrl: string, apiClient: ApiClient): Promise<UploadToFileSearchStoreOperation>;
    /**
     * Infers the MIME type of a file based on its extension.
     *
     * @param filePath The path to the file.
     * @returns The MIME type of the file, or undefined if it cannot be inferred.
     */
    private inferMimeType;
    private uploadFileFromPath;
    private uploadFileToFileSearchStoreFromPath;
    private uploadFileFromPathInternal;
}
