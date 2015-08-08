module app {

  class Config {
    sparqlEndpoint: string
  }

  export class ConfigService {
    config : Config
    constructor($localStorage) {
      if (!$localStorage.config) {
        $localStorage.config = new Config()
        $localStorage.config.sparqlEndpoint = 'http://ldf.fi/ceec/sparql'
      }
      this.config = $localStorage.config
    }
  }

}
