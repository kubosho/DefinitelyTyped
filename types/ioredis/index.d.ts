// Type definitions for ioredis 4.0
// Project: https://github.com/luin/ioredis
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Christopher Eck <https://github.com/chrisleck>
//                 Yoga Aliarham <https://github.com/aliarham11>
//                 Ebrahim <https://github.com/br8h>
//                 Shahar Mor <https://github.com/shaharmor>
//                 Whemoon Jang <https://github.com/palindrom615>
//                 Francis Gulotta <https://github.com/reconbot>
//                 Dmitry Motovilov <https://github.com/funthing>
//                 Oleg Repin <https://github.com/iamolegga>
//                 Ting-Wai To <https://github.com/tingwai-to>
//                 Alex Petty <https://github.com/pettyalex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* =================== USAGE ===================
    import * as Redis from "ioredis";
    const redis = new Redis();
 =============================================== */

/// <reference types="node" />

import { ClusterNode, NodeConfiguration } from './type_aliases/cluster_node';
import { IORedisClusterOptions } from './cluster_options';
import { ClusterStatic } from './cluster';
import { Command } from './command';
import { IORedisOptions } from './redis_options';
import { Pipeline } from './pipeline';
import { Redis } from './redis';
import { MultiOptions, ScanStreamOption } from './commands';

// tslint:disable-next-line: interface-name
export interface IORedisStatic {
  (port?: number, host?: string, options?: IORedisOptions): Redis;
  (host?: string, options?: IORedisOptions): Redis;
  (options?: IORedisOptions): Redis;
  Cluster: ClusterStatic;
  ClusterNode: ClusterNode;
  ClusterOptions: IORedisClusterOptions;
  Command: Command;
  MultiOptions: MultiOptions;
  NodeConfiguration: NodeConfiguration;
  RedisOptions: IORedisOptions;
  ScanStreamOption: ScanStreamOption;
  pipeline: Pipeline;
  new (port?: number, host?: string, options?: IORedisOptions): Redis;
  new (host?: string, options?: IORedisOptions): Redis;
  new (options?: IORedisOptions): Redis;
}

export const IORedis: IORedisStatic;
