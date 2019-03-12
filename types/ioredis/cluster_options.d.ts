import { IORedisOptions } from './redis_options';

export type DNSLookupFunction = (
  hostname: string,
  callback: (err: NodeJS.ErrnoException, address: string, family: number) => void,
) => void;

export interface NatMap {
  [key: string]: { host: string; port: number };
}

// tslint:disable-next-line: interface-name
export interface IORedisClusterOptions {
  enableOfflineQueue?: boolean;
  enableReadyCheck?: boolean;
  scaleReads?: string;
  maxRedirections?: number;
  retryDelayOnFailover?: number;
  retryDelayOnClusterDown?: number;
  retryDelayOnTryAgain?: number;
  slotsRefreshTimeout?: number;
  slotsRefreshInterval?: number;
  redisOptions?: IORedisOptions;
  lazyConnect?: boolean;
  dnsLookup?: DNSLookupFunction;
  natMap?: NatMap;
  clusterRetryStrategy?(times: number, reason?: Error): number | null;
}
