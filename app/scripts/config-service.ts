namespace fi.seco.khepri {
  'use strict'

  export class Config {
    public mainView: string
    public sparqlEndpoint: string
    public prefixes: string
    public viewConfiguration: {[id: string]: any}
  }

  export class ConfigService {
    public config: Config
    constructor($localStorage: any, configuration: Config) {
      if (true || !$localStorage.config) {
        $localStorage.config = configuration
      }
      this.config = $localStorage.config
    }
  }

}
