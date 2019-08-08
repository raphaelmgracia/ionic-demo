declare module "@capacitor/core" {
  interface PluginRegistry {
    GyroscopePlugin: GyroscopePluginPlugin;
  }
}

export interface GyroscopePluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
