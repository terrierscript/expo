export declare const brand: any;
export declare const manufacturer: any;
export declare const osBuildFingerprint: any;
export declare const modelName: any;
export declare const osName: any;
export declare const totalMemory: any;
export declare const isDevice: any;
export declare const deviceType: any;
export declare const modelId: any;
export declare const supportedCPUArchitectures: any;
export declare const designName: any;
export declare const systemBuildId: any;
export declare const productName: any;
export declare const platformApiLevel: any;
export declare const osVersion: any;
export declare const deviceName: any;
export declare const osBuildId: any;
export declare function hasPlatformFeatureAsync(feature: string): Promise<boolean>;
export declare function getPlatformFeaturesAsync(): Promise<string[]>;
export declare function getMaxMemoryAsync(): Promise<number>;
export declare function isSideLoadingEnabled(): Promise<boolean>;
export declare function getUptimeAsync(): Promise<number>;
export declare function isRootedAsync(): Promise<boolean>;