interface NodeConfiguration {
  host?: string;
  port?: number;
}

export type ClusterNode = string | number | NodeConfiguration;
