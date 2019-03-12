import { ClusterNode } from './type_aliases/cluster_node';
import { NodeRole } from './type_aliases/node_role';
import { IORedisClusterOptions } from './cluster_options';
import { Cluster } from './cluster';
import { Commander } from './commander';
import { RedisCommands } from './commands';
import { Redis } from './redis';

export interface Cluster extends NodeJS.EventEmitter, Commander, RedisCommands {
  connect(callback: () => void): Promise<any>;
  disconnect(): void;
  nodes(role?: NodeRole): Redis[];
}

export interface ClusterStatic extends NodeJS.EventEmitter, Commander, RedisCommands {
  new (nodes: ClusterNode[], options?: IORedisClusterOptions): Cluster;
}
