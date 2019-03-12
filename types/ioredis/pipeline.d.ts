import { Command } from './command';
import { RedisCommandsForPipeline } from './commands_for_pipeline';
import { Redis } from './redis';
import { IORedisOptions } from './redis_options';

export interface Pipeline extends RedisCommandsForPipeline {
  redis: Redis;
  isCluster: boolean;
  options: IORedisOptions;
  _queue: Command[];
  _result: any[];
  _transactions: number;
  _shaToScript: {};
}
