namespace app {
  'use strict'

  class Config {
    public sparqlEndpoint: string
    public prefixes: string
  }

  export class ConfigService {
    public config: Config
    constructor($localStorage) {
      if (!$localStorage.config) {
        $localStorage.config = new Config()
        $localStorage.config.sparqlEndpoint = 'http://ldf.fi/ceecs/sparql'
        $localStorage.config.prefixes = `
          PREFIX text: <http://jena.apache.org/text#>
          PREFIX cs: <http://ldf.fi/ceec-schema#>
          PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
        `
      }
      this.config = $localStorage.config
    }
  }

}
