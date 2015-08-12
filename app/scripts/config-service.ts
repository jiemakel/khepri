module app {

  class Config {
    sparqlEndpoint: string
    prefixes : string
  }

  export class ConfigService {
    config : Config
    constructor($localStorage) {
      if (!$localStorage.config) {
        $localStorage.config = new Config()
        $localStorage.config.sparqlEndpoint = 'http://ldf.fi/ceec/sparql'
        $localStorage.config.prefixes = `
          PREFIX text: <http://jena.apache.org/text#>
          PREFIX cs: <http://ldf.fi/ceec-schema#>
          PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        `
      }
      this.config = $localStorage.config
    }
  }

}
