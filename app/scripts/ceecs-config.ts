namespace app {
  'use strict'

  let textSearchViewConfiguration: fi.seco.khepri.ITextSearchViewConfiguration = {
    textSearchQuery:
`PREFIX text: <http://jena.apache.org/text#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT ?keyword (COUNT(?tid) AS ?totalInstances) (COUNT(?id) AS ?matchingInstances) {
{
?tid text:query "<LUCENE_REGEX>" .
?tid a cs:Letter .
?tid cs:fulltext ?fulltext .
FILTER(REGEX(?fulltext, "<SPARQL_REGEX>", "i"))
BIND(LCASE(REPLACE(REPLACE(?fulltext, ".*?(<SPARQL_REGEX>).*", "$1", "si"),"\\\\s+"," ")) AS ?keyword)
} UNION {
?id text:query "<LUCENE_REGEX>" .
?id a cs:Letter .
?id cs:fulltext ?fulltext .
FILTER(REGEX(?fulltext, "<SPARQL_REGEX>", "i"))
# CONSTRAINTS
BIND(LCASE(REPLACE(REPLACE(?fulltext, ".*?(<SPARQL_REGEX>).*", "$1", "si"),"\\\\s+"," ")) AS ?keyword)
}
}
GROUP BY ?keyword
ORDER BY DESC(?matchingInstances)`,
    constraintString:
`?id text:query "<LUCENE_REGEX>" .
?id cs:fulltext ?fulltext .
FILTER(REGEX(?fulltext,"<SPARQL_REGEX>","i"))`
  }

  let resultListViewConfiguration: fi.seco.khepri.IResultListViewConfiguration = {
    resultQuery:
`PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT ?id ?label ?fulltext ?match ?metadataAuthor ?metadataYear {
{
SELECT DISTINCT ?id {
# CONSTRAINTS
}
}
?id skos:prefLabel ?label .
?id cs:fulltext ?fulltext .
?id crm:P28_custody_surrendered_by/skos:prefLabel ?metadataAuthor .
?id cs:year ?metadataYear .
OPTIONAL {
FILTER("<SPARQL_REGEX>"!="(?:)")
?id cs:fulltext ?fulltext .
FILTER REGEX(?fulltext,"<SPARQL_REGEX>","si")
BIND(REPLACE(?fulltext,".*?(<SPARQL_REGEX>).*","$1","si") AS ?match)
}
}
ORDER BY <ORDER_BY>
LIMIT 50
`,
    constraintString: ''
  }

  let propertyTreeViewConfiguration: fi.seco.khepri.ITreeViewConfiguration = {
    getTreeQuery:
`PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT ?subClass ?superClass ?class ?classLabel ?instances {
{
?subClass rdfs:subClassOf ?superClass .
FILTER EXISTS {
?p cs:education/rdfs:subClassOf* ?subClass .
}
} UNION {
{
SELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {
  ?p cs:education/rdfs:subClassOf* ?class .
}
GROUP BY ?class
}
?class rdfs:label|skos:prefLabel ?classLabel .
}
}
`,
    getCountsQuery:
`PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX cs: <http://ldf.fi/ceec-schema#>
SELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {
# CONSTRAINTS
?id crm:P28_custody_surrendered_by ?p .
?p <PROPERTY>/rdfs:subClassOf* ?class .
}
GROUP BY ?class`,
    constraintString: '?id crm:P28_custody_surrendered_by/cs:education/rdfs:subClassOf* <CONSTRAINT_ID>'
  }

  let googleChartViewConfiguration: fi.seco.khepri.IMultiGoogleChartViewsConfiguration = {
      partitionsQuery:
`PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?property (SAMPLE(?l) AS ?propertyLabel) {
  {
    SELECT DISTINCT ?property {
      ?id crm:P28_custody_surrendered_by ?person .
      ?person ?property ?object .
      FILTER isIRI(?object)
    }
  }
  ?property skos:prefLabel|rdfs:label ?l .
  FILTER (LANG(?l) = 'en' || LANG(?l) = '')
}
GROUP BY ?property
`,
      graphQuery:
`PREFIX cs: <http://ldf.fi/ceec-schema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX pf: <http://jena.hpl.hp.com/ARQ/property#>
SELECT ?queryId ?group (SAMPLE(?l2) AS ?groupLabel) ?aggrId ?year (MAX(?mwords) AS ?matching) (MAX(?twords) as ?total) {
  {
    {
      SELECT ?queryId ?group (SAMPLE(?l) AS ?l2) ?aggrId ?year ((COUNT(?foo)-COUNT(DISTINCT ?id)) AS ?mwords) {
        { # CONSTRAINTHOLDER
          # CONSTRAINTS
          BIND(<REGEX> AS ?regex)
          BIND(<QUERY_ID> AS ?queryId)
        } # /CONSTRAINTHOLDER
        ?id cs:year ?year .
        ?id cs:fulltext ?fulltext .
        ?foo pf:strSplit (?fulltext ?regex) .
        # AGGREGATION
        # GROUPING
      }
      GROUP BY ?queryId ?group ?aggrId ?year
    }
  } UNION {
    {
      SELECT ?group (SAMPLE(?l) AS ?l2) ?aggrId ?year (SUM(STRDT(?wc, xsd:integer)) AS ?twords) {
        ?id a cs:Letter .
        ?id cs:year ?year .
        ?id cs:wordcount ?wc .
        # AGGREGATION
        # GROUPING
      }
      GROUP BY ?group ?aggrId ?year
    }
  }
}
GROUP BY ?queryId ?group ?year ?aggrId
ORDER BY ?queryId ?group ?year
`,
    constraintString: '',
    groupingString: ''
  }

  angular.module('app').constant('configuration', {
      mainView: 'partials/ceecs-main.html',
      sparqlEndpoint: 'http://ldf.fi/ceecs/sparql',
      prefixes:
  `PREFIX text: <http://jena.apache.org/text#>
  PREFIX cs: <http://ldf.fi/ceec-schema#>
  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
  `,
      viewConfiguration: {
        textSearchView: textSearchViewConfiguration,
        resultListView: resultListViewConfiguration,
        propertyTreeView: propertyTreeViewConfiguration,
        googleChartView: googleChartViewConfiguration
      }
    }
  )

  import k = fi.seco.khepri

  interface IMainScope extends angular.IScope {
    queries: k.Query[]
    state: string
    addQuery: () => void
    renameQuery: (oldQuery: k.Query, newName: string) => void
    removeQuery: (query: k.Query) => void
    resize: () => void
  }

  export class MainController {
    constructor(private $scope: IMainScope, private stateService: k.StateService, private $timeout: angular.ITimeoutService) {
      $scope.queries = []
      $scope.state = 'normal'
      stateService.getQueryState('unnamed 1')
      $scope.queries.push(new k.Query('unnamed 1'))
      $scope.queries[0].active = true
      let count: number = 2
      $scope.addQuery = () => {
        let name: string = 'unnamed ' + count++
        stateService.getQueryState(name)
        let nq: k.Query = new k.Query(name)
        nq.active = true
        $scope.queries.push(nq)
      }
      $scope.renameQuery = (oldQuery: k.Query, newName: string) => {
        stateService.getQueries()[newName] = stateService.getQueries()[oldQuery.name]
        delete stateService.getQueries[oldQuery.name]
        oldQuery.name = newName
      }
      $scope.removeQuery = (query: k.Query) => {
        delete stateService.getQueries[query.name]
        $scope.queries.splice($scope.queries.indexOf(query), 1)
      }
      $scope.resize = () => $timeout(() => $scope.$broadcast('resize'))
    }
  }
}
