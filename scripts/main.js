var app;
(function (app) {
    'use strict';
    var m = angular.module('app', ['http-auth-interceptor', 'ngStorage', 'ui.router', 'ui.bootstrap', 'ngResize', 'fi.seco.sparql']);
    m.config(function ($stateProvider, $urlRouterProvider, configuration) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('main', {
            url: '/',
            templateUrl: configuration.mainView,
            controller: 'MainController'
        });
        $stateProvider.state('configure', {
            url: '/configure',
            templateUrl: 'partials/configure.html',
            controller: 'ConfigureController'
        });
    });
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FtQlo7QUFuQkQsV0FBVSxHQUFHLEVBQUMsQ0FBQztJQUNiLFlBQVksQ0FBQTtJQUlaLElBQUksQ0FBQyxHQUFvQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDLENBQUE7SUFDbkosQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGNBQXlDLEVBQUUsa0JBQWlELEVBQUUsYUFBdUI7UUFDN0gsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLGFBQWEsQ0FBQyxRQUFRO1lBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQyxDQUFBO1FBQ0osY0FBYyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDaEMsR0FBRyxFQUFHLFlBQVk7WUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxVQUFVLEVBQUcscUJBQXFCO1NBQ2pDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxFQW5CUyxHQUFHLEtBQUgsR0FBRyxRQW1CWiIsImZpbGUiOiJzY3JpcHRzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICAndXNlIHN0cmljdCdcblxuICBpbXBvcnQgayA9IGZpLnNlY28ua2hlcHJpXG5cbiAgbGV0IG06IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbICdodHRwLWF1dGgtaW50ZXJjZXB0b3InLCAnbmdTdG9yYWdlJywgJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAnbmdSZXNpemUnLCAnZmkuc2Vjby5zcGFycWwnIF0pXG4gIG0uY29uZmlnKCgkc3RhdGVQcm92aWRlcjogYW5ndWxhci51aS5JU3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyOiBhbmd1bGFyLnVpLklVcmxSb3V0ZXJQcm92aWRlciwgY29uZmlndXJhdGlvbjogay5Db25maWcpID0+IHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbWFpbicsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZ3VyYXRpb24ubWFpblZpZXcsXG4gICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInXG4gICAgICB9KVxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdjb25maWd1cmUnLCB7XG4gICAgICB1cmwgOiAnL2NvbmZpZ3VyZScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2NvbmZpZ3VyZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXIgOiAnQ29uZmlndXJlQ29udHJvbGxlcidcbiAgICAgIH0pXG4gIH0pXG59XG4iXX0=

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var Config = (function () {
                function Config() {
                }
                return Config;
            }());
            khepri.Config = Config;
            var ConfigService = (function () {
                function ConfigService($localStorage, configuration) {
                    if (true || !$localStorage.config) {
                        $localStorage.config = configuration;
                    }
                    this.config = $localStorage.config;
                }
                return ConfigService;
            }());/*<auto_generate>*/angular.module('app').service('configService',['$localStorage','configuration',function(){return new (Function.prototype.bind.apply(ConfigService,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.ConfigService = ConfigService;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL2NvbmZpZy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsRUFBRSxDQW9CWDtBQXBCRCxXQUFVLEVBQUU7SUFBQyxJQUFBLElBQUksQ0FvQmhCO0lBcEJZLFdBQUEsSUFBSTtRQUFDLElBQUEsTUFBTSxDQW9CdkI7UUFwQmlCLFdBQUEsTUFBTSxFQUFDLENBQUM7WUFDeEIsWUFBWSxDQUFBO1lBRVo7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFBRCxhQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMWSxhQUFNLFNBS2xCLENBQUE7WUFFRDtnQkFFRSx1QkFBWSxhQUFrQixFQUFFLGFBQXFCO29CQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsYUFBYSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUE7b0JBQ3RDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFBO2dCQUNwQyxDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSWSxvQkFBYSxnQkFRekIsQ0FBQTtRQUVILENBQUMsRUFwQmlCLE1BQU0sR0FBTixXQUFNLEtBQU4sV0FBTSxRQW9CdkI7SUFBRCxDQUFDLEVBcEJZLElBQUksR0FBSixPQUFJLEtBQUosT0FBSSxRQW9CaEI7QUFBRCxDQUFDLEVBcEJTLEVBQUUsS0FBRixFQUFFLFFBb0JYIiwiZmlsZSI6InNjcmlwdHMvY29uZmlnLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgZmkuc2Vjby5raGVwcmkge1xuICAndXNlIHN0cmljdCdcblxuICBleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgICBwdWJsaWMgbWFpblZpZXc6IHN0cmluZ1xuICAgIHB1YmxpYyBzcGFycWxFbmRwb2ludDogc3RyaW5nXG4gICAgcHVibGljIHByZWZpeGVzOiBzdHJpbmdcbiAgICBwdWJsaWMgdmlld0NvbmZpZ3VyYXRpb246IHtbaWQ6IHN0cmluZ106IGFueX1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlnOiBDb25maWdcbiAgICBjb25zdHJ1Y3RvcigkbG9jYWxTdG9yYWdlOiBhbnksIGNvbmZpZ3VyYXRpb246IENvbmZpZykge1xuICAgICAgaWYgKHRydWUgfHwgISRsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XG4gICAgICAgICRsb2NhbFN0b3JhZ2UuY29uZmlnID0gY29uZmlndXJhdGlvblxuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcgPSAkbG9jYWxTdG9yYWdlLmNvbmZpZ1xuICAgIH1cbiAgfVxuXG59XG4iXX0=

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var Query = (function () {
                function Query(name) {
                    this.name = name;
                    this.active = false;
                }
                return Query;
            }());
            khepri.Query = Query;
            var State = (function () {
                function State() {
                    this._queries = {};
                }
                Object.defineProperty(State.prototype, "queries", {
                    get: function () {
                        return this._queries;
                    },
                    enumerable: true,
                    configurable: true
                });
                State.prototype.getQueryState = function (queryId) {
                    if (!this._queries[queryId])
                        this.queries[queryId] = new QueryState();
                    return this._queries[queryId];
                };
                return State;
            }());
            var QueryState = (function () {
                function QueryState() {
                    this.constraints = {};
                }
                return QueryState;
            }());
            khepri.QueryState = QueryState;
            var SimpleConstraint = (function () {
                function SimpleConstraint(constraintString, order) {
                    this.constraintString = constraintString;
                    this.order = order;
                }
                return SimpleConstraint;
            }());
            khepri.SimpleConstraint = SimpleConstraint;
            var StateService = (function () {
                function StateService($rootScope) {
                    this.$rootScope = $rootScope;
                    this.state = new State();
                }
                StateService.prototype.setConstraint = function (queryId, constraintId, constraint) {
                    this.state.getQueryState(queryId).constraints[constraintId] = constraint;
                    this.$rootScope.$broadcast('updateConstraint', queryId, constraintId);
                };
                StateService.prototype.getQueries = function () {
                    return this.state.queries;
                };
                StateService.prototype.getQueryState = function (queryId) {
                    return this.state.getQueryState(queryId);
                };
                StateService.prototype.setQueryState = function (queryId, QueryState) {
                    this.state[queryId] = QueryState;
                    this.$rootScope.$broadcast('updateConstraint', queryId);
                };
                StateService.prototype.getConstraintString = function (queryId, constraintIdsToFilter) {
                    if (constraintIdsToFilter === void 0) { constraintIdsToFilter = {}; }
                    var orderedConstraints = [];
                    for (var constraintId in this.state.getQueryState(queryId).constraints)
                        if (!constraintIdsToFilter[constraintId]) {
                            if (!orderedConstraints[this.state.queries[queryId].constraints[constraintId].order])
                                orderedConstraints[this.state.queries[queryId].constraints[constraintId].order] = '';
                            orderedConstraints[this.state.queries[queryId].constraints[constraintId].order] += this.state.queries[queryId].constraints[constraintId].constraintString;
                        }
                    var constraintString = '';
                    orderedConstraints.filter(function (v) { return v !== ''; }).forEach(function (v) { return constraintString += v; });
                    return constraintString;
                };
                return StateService;
            }());/*<auto_generate>*/angular.module('app').service('stateService',['$rootScope',function(){return new (Function.prototype.bind.apply(StateService,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.StateService = StateService;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL3N0YXRlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxFQUFFLENBMEVYO0FBMUVELFdBQVUsRUFBRTtJQUFDLElBQUEsSUFBSSxDQTBFaEI7SUExRVksV0FBQSxJQUFJO1FBQUMsSUFBQSxNQUFNLENBMEV2QjtRQTFFaUIsV0FBQSxNQUFNLEVBQUMsQ0FBQztZQUN4QixZQUFZLENBQUE7WUFFWjtnQkFFRSxlQUFtQixJQUFZO29CQUFaLFNBQUksR0FBSixJQUFJLENBQVE7b0JBRHhCLFdBQU0sR0FBWSxLQUFLLENBQUE7Z0JBQ0ksQ0FBQztnQkFDckMsWUFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSFksWUFBSyxRQUdqQixDQUFBO1lBRUQ7Z0JBQUE7b0JBQ1UsYUFBUSxHQUFzQyxFQUFFLENBQUE7Z0JBUTFELENBQUM7Z0JBUEMsc0JBQVcsMEJBQU87eUJBQWxCO3dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO29CQUN0QixDQUFDOzs7bUJBQUE7Z0JBQ00sNkJBQWEsR0FBcEIsVUFBcUIsT0FBZTtvQkFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQTtvQkFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQy9CLENBQUM7Z0JBQ0gsWUFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBRUQ7Z0JBQUE7b0JBQ1MsZ0JBQVcsR0FBa0MsRUFBRSxDQUFBO2dCQUN4RCxDQUFDO2dCQUFELGlCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGWSxpQkFBVSxhQUV0QixDQUFBO1lBT0Q7Z0JBQ0UsMEJBQ1MsZ0JBQXdCLEVBQ3hCLEtBQWE7b0JBRGIscUJBQWdCLEdBQWhCLGdC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TixXQUFNLFFBMEV2QjtJQUFELENBQUMsRUExRVksSUFBSSxHQUFKLE9BQUksS0FBSixPQUFJLFFBMEVoQjtBQUFELENBQUMsRUExRVMsRUFBRSxLQUFGLEVBQUUsUUEwRVgiLCJmaWxlIjoic2NyaXB0cy9zdGF0ZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGZpLnNlY28ua2hlcHJpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgZXhwb3J0IGNsYXNzIFF1ZXJ5IHtcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2VcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7fVxuICB9XG5cbiAgY2xhc3MgU3RhdGUge1xuICAgIHByaXZhdGUgX3F1ZXJpZXM6IHsgW3F1ZXJ5SWQ6IHN0cmluZ106IFF1ZXJ5U3RhdGUgfSA9IHt9XG4gICAgcHVibGljIGdldCBxdWVyaWVzKCk6IHsgW3F1ZXJ5SWQ6IHN0cmluZ106IFF1ZXJ5U3RhdGUgfSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UXVlcnlTdGF0ZShxdWVyeUlkOiBzdHJpbmcpOiBRdWVyeVN0YXRlIHtcbiAgICAgIGlmICghdGhpcy5fcXVlcmllc1txdWVyeUlkXSkgdGhpcy5xdWVyaWVzW3F1ZXJ5SWRdID0gbmV3IFF1ZXJ5U3RhdGUoKVxuICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNbcXVlcnlJZF1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUXVlcnlTdGF0ZSB7XG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiB7IFtpZDogc3RyaW5nXTogSUNvbnN0cmFpbnQgfSA9IHt9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElDb25zdHJhaW50IHtcbiAgICBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmdcbiAgICBvcmRlcjogbnVtYmVyXG4gIH1cblxuICBleHBvcnQgY2xhc3MgU2ltcGxlQ29uc3RyYWludCBpbXBsZW1lbnRzIElDb25zdHJhaW50IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgb3JkZXI6IG51bWJlclxuICAgICkgeyB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkcm9vdFNjb3BlOiBhbmd1bGFyLklSb290U2NvcGVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENvbnN0cmFpbnQocXVlcnlJZDogc3RyaW5nLCBjb25zdHJhaW50SWQ6IHN0cmluZywgY29uc3RyYWludDogSUNvbnN0cmFpbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuc3RhdGUuZ2V0UXVlcnlTdGF0ZShxdWVyeUlkKS5jb25zdHJhaW50c1tjb25zdHJhaW50SWRdID0gY29uc3RyYWludFxuICAgICAgdGhpcy4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3VwZGF0ZUNvbnN0cmFpbnQnLCBxdWVyeUlkLCBjb25zdHJhaW50SWQpXG4gICAgfVxuXG4gICAgcHVibGljIGdldFF1ZXJpZXMoKTogeyBbaWQ6IHN0cmluZ106IFF1ZXJ5U3RhdGUgfSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5xdWVyaWVzXG4gICAgfVxuXG4gICAgcHVibGljIGdldFF1ZXJ5U3RhdGUocXVlcnlJZDogc3RyaW5nKTogUXVlcnlTdGF0ZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXRRdWVyeVN0YXRlKHF1ZXJ5SWQpXG4gICAgfVxuXG4gICAgcHVibGljIHNldFF1ZXJ5U3RhdGUocXVlcnlJZDogc3RyaW5nLCBRdWVyeVN0YXRlOiBRdWVyeVN0YXRlKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXRlW3F1ZXJ5SWRdID0gUXVlcnlTdGF0ZVxuICAgICAgdGhpcy4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3VwZGF0ZUNvbnN0cmFpbnQnLCBxdWVyeUlkKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25zdHJhaW50U3RyaW5nKHF1ZXJ5SWQ6IHN0cmluZywgY29uc3RyYWludElkc1RvRmlsdGVyOiB7IFtpZDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge30pOiBzdHJpbmcge1xuICAgICAgbGV0IG9yZGVyZWRDb25zdHJhaW50czogc3RyaW5nW10gPSBbXVxuICAgICAgZm9yIChsZXQgY29uc3RyYWludElkIGluIHRoaXMuc3RhdGUuZ2V0UXVlcnlTdGF0ZShxdWVyeUlkKS5jb25zdHJhaW50cykgaWYgKCFjb25zdHJhaW50SWRzVG9GaWx0ZXJbY29uc3RyYWludElkXSkge1xuICAgICAgICBpZiAoIW9yZGVyZWRDb25zdHJhaW50c1t0aGlzLnN0YXRlLnF1ZXJpZXNbcXVlcnlJZF0uY29uc3RyYWludHNbY29uc3RyYWludElkXS5vcmRlcl0pIG9yZGVyZWRDb25zdHJhaW50c1t0aGlzLnN0YXRlLnF1ZXJpZXNbcXVlcnlJZF0uY29uc3RyYWludHNbY29uc3RyYWludElkXS5vcmRlcl0gPSAnJ1xuICAgICAgICBvcmRlcmVkQ29uc3RyYWludHNbdGhpcy5zdGF0ZS5xdWVyaWVzW3F1ZXJ5SWRdLmNvbnN0cmFpbnRzW2NvbnN0cmFpbnRJZF0ub3JkZXJdICs9IHRoaXMuc3RhdGUucXVlcmllc1txdWVyeUlkXS5jb25zdHJhaW50c1tjb25zdHJhaW50SWRdLmNvbnN0cmFpbnRTdHJpbmdcbiAgICAgIH1cbiAgICAgIGxldCBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcgPSAnJ1xuICAgICAgb3JkZXJlZENvbnN0cmFpbnRzLmZpbHRlcih2ID0+IHYgIT09ICcnKS5mb3JFYWNoKHYgPT4gY29uc3RyYWludFN0cmluZyArPSB2KTtcbiAgICAgIHJldHVybiBjb25zdHJhaW50U3RyaW5nXG4gICAgfVxuXG4gIH1cblxufVxuIl19

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var s = fi.seco.sparql;
            var TextSearchConstraint = (function () {
                function TextSearchConstraint(constraintString, sparqlRegex, jsRegex, luceneQuery) {
                    this.constraintString = constraintString;
                    this.sparqlRegex = sparqlRegex;
                    this.jsRegex = jsRegex;
                    this.luceneQuery = luceneQuery;
                    this.order = 1;
                }
                return TextSearchConstraint;
            }());
            khepri.TextSearchConstraint = TextSearchConstraint;
            var TextSearchViewDirective = (function () {
                function TextSearchViewDirective($q, sparqlService, configService, stateService) {
                    var _this = this;
                    this.$q = $q;
                    this.sparqlService = sparqlService;
                    this.configService = configService;
                    this.stateService = stateService;
                    this.restrict = 'E';
                    this.templateUrl = 'partials/textsearchview.html';
                    this.scope = {
                        viewId: '@',
                        queryId: '='
                    };
                    this.link = function ($scope, element, attr) {
                        var viewConfiguration = _this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)];
                        $scope.constraints = {};
                        $scope.keywords = [];
                        $scope.setConstraint = function (value, replace) {
                            if (replace === void 0) { replace = false; }
                            if (!value) {
                                $scope.constraints = {};
                                if (Object.keys($scope.constraints).length !== $scope.keywords.length)
                                    $scope.keywords.forEach(function (k) { return $scope.constraints[k.keyword] = true; });
                            }
                            else {
                                if (replace) {
                                    $scope.constraints = {};
                                    $scope.constraints[value] = true;
                                }
                                else if ($scope.constraints[value])
                                    delete $scope.constraints[value];
                                else
                                    $scope.constraints[value] = true;
                            }
                            var sparqlRegex = '';
                            var jsRegex = '';
                            var luceneQuery = '';
                            var constraintString = '';
                            if (Object.keys($scope.constraints).length > 0) {
                                for (var constraint in $scope.constraints) {
                                    luceneQuery += "\\\"" + constraint + "\\\" ";
                                    sparqlRegex += constraint.replace(/ /g, '\\\\s+') + "|";
                                    jsRegex += constraint.replace(/ /g, '\\s+') + "|";
                                }
                                luceneQuery = luceneQuery.substr(0, luceneQuery.length - 1);
                                sparqlRegex = '(?:\\\\b' + sparqlRegex.substr(0, sparqlRegex.length - 1) + '\\\\b)';
                                jsRegex = '(?:\\b' + jsRegex.substr(0, jsRegex.length - 1) + '\\b)';
                                constraintString = viewConfiguration.constraintString.replace(/<LUCENE_REGEX>/g, luceneQuery).replace(/<SPARQL_REGEX>/g, sparqlRegex);
                            }
                            _this.stateService.setConstraint($scope.queryId, $scope.viewId, new TextSearchConstraint(constraintString, sparqlRegex, jsRegex, luceneQuery));
                        };
                        var query = function () {
                            _this.canceler.resolve();
                            _this.canceler = _this.$q.defer();
                            var luceneQuery = '+/' + $scope.query.replace(/ /g, '/ +/').replace(/\*/g, '[^ ]*').replace(/\?/g, '[^ ]?') + '/';
                            var sparqlRegex = '\\\\b' + $scope.query.replace(/ /g, '\\\\s+').replace(/\*/g, '\\\\w*').replace(/\?/g, '\\\\w?') + '\\\\b';
                            var filter = {};
                            filter[$scope.viewId] = true;
                            var constraintString = _this.stateService.getConstraintString($scope.queryId, filter);
                            _this.sparqlService.query(_this.configService.config.sparqlEndpoint, _this.configService.config.prefixes + viewConfiguration.textSearchQuery.replace(/# CONSTRAINTS/g, constraintString).replace(/<LUCENE_REGEX>/g, luceneQuery).replace(/<SPARQL_REGEX>/g, sparqlRegex), { timeout: _this.canceler.promise }).then(function (response) {
                                var oldKeywords = $scope.keywords;
                                var keywords = {};
                                $scope.keywords = response.data.results.bindings.map(function (r) {
                                    var ret = s.SparqlService.bindingsToObject(r);
                                    keywords[ret.keyword] = true;
                                    return ret;
                                });
                                oldKeywords.filter(function (k) { return !keywords[k.keyword] && $scope.constraints[k.keyword]; }).forEach(function (k) { return $scope.keywords.push(k); });
                            }, function (response) { return console.log(response); });
                        };
                        $scope.$on('updateConstraint', function (e, queryId, viewId) {
                            if (queryId === $scope.queryId && viewId !== $scope.viewId && $scope.query)
                                query();
                        });
                        $scope.$watch('query', function (nv) {
                            if (nv) {
                                query();
                            }
                        });
                    };
                    this.canceler = $q.defer();
                }
                return TextSearchViewDirective;
            }());/*<auto_generate>*/angular.module('app').directive('textSearchView',['$q','sparqlService','configService','stateService',function(){return new (Function.prototype.bind.apply(TextSearchViewDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.TextSearchViewDirective = TextSearchViewDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL3RleHRzZWFyY2h2aWV3LWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEVBQUUsQ0F1R1g7QUF2R0QsV0FBVSxFQUFFO0lBQUMsSUFBQSxJQUFJLENBdUdoQjtJQXZHWSxXQUFBLElBQUk7UUFBQyxJQUFBLE1BQU0sQ0F1R3ZCO1FBdkdpQixXQUFBLE1BQU0sRUFBQyxDQUFDO1lBQ3hCLFlBQVksQ0FBQTtZQUVaLElBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBc0J6QjtnQkFFRSw4QkFBbUIsZ0JBQXdCLEVBQVMsV0FBbUIsRUFBUyxPQUFlLEVBQVMsV0FBbUI7b0JBQXhHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO29CQURwSCxVQUFLLEdBQVcsQ0FBQyxDQUFBO2dCQUN1RyxDQUFDO2dCQUNsSSwyQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSFksMkJBQW9CLHVCQUdoQyxDQUFBO1lBRUQ7Z0JBT0UsaUNBQW9CLEVBQXFCLEVBQVUsYUFBOEIsRUFBVSxhQUE0QixFQUFVLFlBQTBCO29CQVA3SixpQkF3RUM7b0JBakVxQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBTnBKLGFBQVEsR0FBVyxHQUFHLENBQUE7b0JBQ3RCLGdCQUFXLEdBQVcsOEJBQThCLENBQUE7b0JBQ3BELFVBQUssR0FBMkI7d0JBQ3JDLE1BQU0sRUFBRSxHQUFHO3dCQUNYLE9BQU8sRUFBRSxHQUFHO3FCQUNiLENBQUE7b0JBSU0sU0FBSSxHQUFxQixVQUFDLE1BQTRCLEVBQUUsT0FBZSxF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QyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FDN0UsQ0FBQTt3QkFDSCxDQUFDLENBQUE7d0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLENBQXdCLEVBQUUsT0FBZSxFQUFFLE1BQWM7NEJBQ3ZGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0NBQUMsS0FBSyxFQUFFLENBQUE7d0JBQ3JGLENBQUMsQ0FBQyxDQUFBO3dCQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsRUFBVTs0QkFBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNoRCxLQUFLLEVBQUUsQ0FBQTs0QkFDVCxDQUFDO3dCQUFBLENBQUMsQ0FBQyxDQUFBO29CQUNMLENBQUMsQ0FBQTtvQkE5REMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzdCLENBQUM7Z0JBK0RILDhCQUFDO1lBQUQsQ0F4RUEsQUF3RUMsSUFBQTtZQXhFWSw4QkFBdUIsMEJBd0VuQyxDQUFBO1FBQ0gsQ0FBQyxFQXZHaUIsTUFBTSxHQUFOLFdBQU0sS0FBTixXQUFNLFFBdUd2QjtJQUFELENBQUMsRUF2R1ksSUFBSSxHQUFKLE9BQUksS0FBSixPQUFJLFFBdUdoQjtBQUFELENBQUMsRUF2R1MsRUFBRSxLQUFGLEVBQUUsUUF1R1giLCJmaWxlIjoic2NyaXB0cy90ZXh0c2VhcmNodmlldy1kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgZmkuc2Vjby5raGVwcmkge1xuICAndXNlIHN0cmljdCdcblxuICBpbXBvcnQgcyA9IGZpLnNlY28uc3BhcnFsXG5cbiAgZXhwb3J0IGludGVyZmFjZSBJVGV4dFNlYXJjaFZpZXdDb25maWd1cmF0aW9uIHtcbiAgICB0ZXh0U2VhcmNoUXVlcnk6IHN0cmluZ1xuICAgIGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZ1xuICB9XG5cbiAgaW50ZXJmYWNlIElUZXh0U2VhcmNoVmlld1Njb3BlIGV4dGVuZHMgYW5ndWxhci5JU2NvcGUge1xuICAgIGtleXdvcmRzOiBJVGV4dFNlYXJjaFJlc3VsdFtdXG4gICAgY29uc3RyYWludHM6IHtba2V5d29yZDogc3RyaW5nXTogYm9vbGVhbn1cbiAgICBxdWVyeUlkOiBzdHJpbmdcbiAgICB2aWV3SWQ6IHN0cmluZ1xuICAgIHNldENvbnN0cmFpbnQ6IChyZWdleDogc3RyaW5nLCBhZGQ/OiBib29sZWFuKSA9PiB2b2lkXG4gICAgcXVlcnk6IHN0cmluZ1xuICB9XG5cbiAgaW50ZXJmYWNlIElUZXh0U2VhcmNoUmVzdWx0IHtcbiAgICBrZXl3b3JkOiBzdHJpbmdcbiAgICBtYXRjaGluZ0luc3RhbmNlczogbnVtYmVyXG4gICAgdG90YWxJbnN0YW5jZXM6IG51bWJlclxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRleHRTZWFyY2hDb25zdHJhaW50IGltcGxlbWVudHMgSUNvbnN0cmFpbnQge1xuICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyID0gMVxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcsIHB1YmxpYyBzcGFycWxSZWdleDogc3RyaW5nLCBwdWJsaWMganNSZWdleDogc3RyaW5nLCBwdWJsaWMgbHVjZW5lUXVlcnk6IHN0cmluZykgeyB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgVGV4dFNlYXJjaFZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBhbmd1bGFyLklEaXJlY3RpdmUge1xuICAgIHB1YmxpYyByZXN0cmljdDogc3RyaW5nID0gJ0UnXG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSAncGFydGlhbHMvdGV4dHNlYXJjaHZpZXcuaHRtbCdcbiAgICBwdWJsaWMgc2NvcGU6IHtbaWQ6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgICB2aWV3SWQ6ICdAJyxcbiAgICAgIHF1ZXJ5SWQ6ICc9J1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBhbmd1bGFyLklRU2VydmljZSwgcHJpdmF0ZSBzcGFycWxTZXJ2aWNlOiBzLlNwYXJxbFNlcnZpY2UsIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZSkge1xuICAgICAgdGhpcy5jYW5jZWxlciA9ICRxLmRlZmVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBsaW5rOiAoLi4uYW55KSA9PiB2b2lkID0gKCRzY29wZTogSVRleHRTZWFyY2hWaWV3U2NvcGUsIGVsZW1lbnQ6IEpRdWVyeSwgYXR0cjogYW5ndWxhci5JQXR0cmlidXRlcykgPT4ge1xuICAgICAgbGV0IHZpZXdDb25maWd1cmF0aW9uOiBJVGV4dFNlYXJjaFZpZXdDb25maWd1cmF0aW9uID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy52aWV3Q29uZmlndXJhdGlvblthdHRyLiRub3JtYWxpemUoJHNjb3BlLnZpZXdJZCldXG4gICAgICAkc2NvcGUuY29uc3RyYWludHMgPSB7fVxuICAgICAgJHNjb3BlLmtleXdvcmRzID0gW11cbiAgICAgICRzY29wZS5zZXRDb25zdHJhaW50ID0gKHZhbHVlOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgJHNjb3BlLmNvbnN0cmFpbnRzID0ge31cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoJHNjb3BlLmNvbnN0cmFpbnRzKS5sZW5ndGggIT09ICRzY29wZS5rZXl3b3Jkcy5sZW5ndGgpICRzY29wZS5rZXl3b3Jkcy5mb3JFYWNoKGsgPT4gJHNjb3BlLmNvbnN0cmFpbnRzW2sua2V5d29yZF0gPSB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgICAkc2NvcGUuY29uc3RyYWludHMgPSB7fVxuICAgICAgICAgICAgJHNjb3BlLmNvbnN0cmFpbnRzW3ZhbHVlXSA9IHRydWVcbiAgICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5jb25zdHJhaW50c1t2YWx1ZV0pIGRlbGV0ZSAkc2NvcGUuY29uc3RyYWludHNbdmFsdWVdXG4gICAgICAgICAgZWxzZSAkc2NvcGUuY29uc3RyYWludHNbdmFsdWVdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzcGFycWxSZWdleDogc3RyaW5nID0gJydcbiAgICAgICAgbGV0IGpzUmVnZXg6IHN0cmluZyA9ICcnXG4gICAgICAgIGxldCBsdWNlbmVRdWVyeTogc3RyaW5nID0gJydcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZyA9ICcnXG4gICAgICAgIGlmIChPYmplY3Qua2V5cygkc2NvcGUuY29uc3RyYWludHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBjb25zdHJhaW50IGluICRzY29wZS5jb25zdHJhaW50cykge1xuICAgICAgICAgICAgbHVjZW5lUXVlcnkgKz0gYFxcXFxcIiR7Y29uc3RyYWludH1cXFxcXCIgYFxuICAgICAgICAgICAgc3BhcnFsUmVnZXggKz0gYCR7Y29uc3RyYWludC5yZXBsYWNlKC8gL2csICdcXFxcXFxcXHMrJyl9fGBcbiAgICAgICAgICAgIGpzUmVnZXggKz0gYCR7Y29uc3RyYWludC5yZXBsYWNlKC8gL2csICdcXFxccysnKX18YFxuICAgICAgICAgIH1cbiAgICAgICAgICBsdWNlbmVRdWVyeSA9IGx1Y2VuZVF1ZXJ5LnN1YnN0cigwLCBsdWNlbmVRdWVyeS5sZW5ndGggLSAxKVxuICAgICAgICAgIHNwYXJxbFJlZ2V4ID0gJyg/OlxcXFxcXFxcYicgKyBzcGFycWxSZWdleC5zdWJzdHIoMCwgc3BhcnFsUmVnZXgubGVuZ3RoIC0gMSkgKyAnXFxcXFxcXFxiKSdcbiAgICAgICAgICBqc1JlZ2V4ID0gJyg/OlxcXFxiJyArIGpzUmVnZXguc3Vic3RyKDAsIGpzUmVnZXgubGVuZ3RoIC0gMSkgKyAnXFxcXGIpJ1xuICAgICAgICAgIGNvbnN0cmFpbnRTdHJpbmcgPSB2aWV3Q29uZmlndXJhdGlvbi5jb25zdHJhaW50U3RyaW5nLnJlcGxhY2UoLzxMVUNFTkVfUkVHRVg+L2csIGx1Y2VuZVF1ZXJ5KS5yZXBsYWNlKC88U1BBUlFMX1JFR0VYPi9nLCBzcGFycWxSZWdleClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRDb25zdHJhaW50KCRzY29wZS5xdWVyeUlkLCAkc2NvcGUudmlld0lkLCBuZXcgVGV4dFNlYXJjaENvbnN0cmFpbnQoY29uc3RyYWludFN0cmluZywgc3BhcnFsUmVnZXgsIGpzUmVnZXgsIGx1Y2VuZVF1ZXJ5KSk7XG4gICAgICB9XG4gICAgICBsZXQgcXVlcnk6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FuY2VsZXIucmVzb2x2ZSgpXG4gICAgICAgIHRoaXMuY2FuY2VsZXIgPSB0aGlzLiRxLmRlZmVyKClcbiAgICAgICAgbGV0IGx1Y2VuZVF1ZXJ5OiBzdHJpbmcgPSAnKy8nICsgJHNjb3BlLnF1ZXJ5LnJlcGxhY2UoLyAvZywgJy8gKy8nKS5yZXBsYWNlKC9cXCovZywgJ1teIF0qJykucmVwbGFjZSgvXFw/L2csICdbXiBdPycpICsgJy8nXG4gICAgICAgIGxldCBzcGFycWxSZWdleDogc3RyaW5nID0gJ1xcXFxcXFxcYicgKyAkc2NvcGUucXVlcnkucmVwbGFjZSgvIC9nLCAnXFxcXFxcXFxzKycpLnJlcGxhY2UoL1xcKi9nLCAnXFxcXFxcXFx3KicpLnJlcGxhY2UoL1xcPy9nLCAnXFxcXFxcXFx3PycpICsgJ1xcXFxcXFxcYidcbiAgICAgICAgbGV0IGZpbHRlcjoge1tpZDogc3RyaW5nXTogYm9vbGVhbn0gPSB7fVxuICAgICAgICBmaWx0ZXJbJHNjb3BlLnZpZXdJZF0gPSB0cnVlXG4gICAgICAgIGxldCBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcgPSB0aGlzLnN0YXRlU2VydmljZS5nZXRDb25zdHJhaW50U3RyaW5nKCRzY29wZS5xdWVyeUlkLCBmaWx0ZXIpXG4gICAgICAgIHRoaXMuc3BhcnFsU2VydmljZS5xdWVyeSh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLnNwYXJxbEVuZHBvaW50LCB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLnByZWZpeGVzICsgdmlld0NvbmZpZ3VyYXRpb24udGV4dFNlYXJjaFF1ZXJ5LnJlcGxhY2UoLyMgQ09OU1RSQUlOVFMvZywgY29uc3RyYWludFN0cmluZykucmVwbGFjZSgvPExVQ0VORV9SRUdFWD4vZywgbHVjZW5lUXVlcnkpLnJlcGxhY2UoLzxTUEFSUUxfUkVHRVg+L2csIHNwYXJxbFJlZ2V4KSwge3RpbWVvdXQ6IHRoaXMuY2FuY2VsZXIucHJvbWlzZX0pLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHMuSVNwYXJxbEJpbmRpbmdSZXN1bHQ8e1tpZDogc3RyaW5nXTogcy5JU3BhcnFsQmluZGluZ30+PikgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZEtleXdvcmRzOiBJVGV4dFNlYXJjaFJlc3VsdFtdID0gJHNjb3BlLmtleXdvcmRzXG4gICAgICAgICAgICBsZXQga2V5d29yZHM6IHsgW2tleXdvcmQ6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG4gICAgICAgICAgICAkc2NvcGUua2V5d29yZHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHMuYmluZGluZ3MubWFwKHIgPT4ge1xuICAgICAgICAgICAgICBsZXQgcmV0OiBJVGV4dFNlYXJjaFJlc3VsdCA9IHMuU3BhcnFsU2VydmljZS5iaW5kaW5nc1RvT2JqZWN0PElUZXh0U2VhcmNoUmVzdWx0PihyKVxuICAgICAgICAgICAgICBrZXl3b3Jkc1tyZXQua2V5d29yZF0gPSB0cnVlXG4gICAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvbGRLZXl3b3Jkcy5maWx0ZXIoayA9PiAha2V5d29yZHNbay5rZXl3b3JkXSAmJiAkc2NvcGUuY29uc3RyYWludHNbay5rZXl3b3JkXSkuZm9yRWFjaChrID0+ICRzY29wZS5rZXl3b3Jkcy5wdXNoKGspKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHN0cmluZz4pID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICAkc2NvcGUuJG9uKCd1cGRhdGVDb25zdHJhaW50JywgKGU6IGFuZ3VsYXIuSUFuZ3VsYXJFdmVudCwgcXVlcnlJZDogc3RyaW5nLCB2aWV3SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocXVlcnlJZCA9PT0gJHNjb3BlLnF1ZXJ5SWQgJiYgdmlld0lkICE9PSAkc2NvcGUudmlld0lkICYmICRzY29wZS5xdWVyeSkgcXVlcnkoKVxuICAgICAgfSlcbiAgICAgICRzY29wZS4kd2F0Y2goJ3F1ZXJ5JywgKG52OiBzdHJpbmcpID0+IHsgaWYgKG52KSB7XG4gICAgICAgIHF1ZXJ5KClcbiAgICAgIH19KVxuICAgIH1cbiAgICBwcml2YXRlIGNhbmNlbGVyOiBhbmd1bGFyLklEZWZlcnJlZDx7fT5cbiAgfVxufVxuIl19

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var Snippet = (function () {
                function Snippet(before, match, after) {
                    this.before = before;
                    this.match = match;
                    this.after = after;
                }
                return Snippet;
            }());
            var Result = (function () {
                function Result(id, label, fulltext, snippet, metadata, filtered) {
                    this.id = id;
                    this.label = label;
                    this.fulltext = fulltext;
                    this.snippet = snippet;
                    this.metadata = metadata;
                    this.filtered = filtered;
                }
                return Result;
            }());
            var ResultListViewDirective = (function () {
                function ResultListViewDirective($timeout, $q, $sce, sparqlService, configService, stateService) {
                    var _this = this;
                    this.$timeout = $timeout;
                    this.$q = $q;
                    this.$sce = $sce;
                    this.sparqlService = sparqlService;
                    this.configService = configService;
                    this.stateService = stateService;
                    this.restrict = 'E';
                    this.templateUrl = 'partials/resultlistview.html';
                    this.scope = {
                        width: '=',
                        viewId: '@',
                        showMetadata: '=',
                        queryId: '='
                    };
                    this.link = function ($scope, element, attr) {
                        $scope.orderBy = 'match';
                        $scope.orderByDescending = false;
                        var viewConfiguration = _this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)];
                        var query = function () {
                            var sparqlRegex = '(?:';
                            var constraints = _this.stateService.getQueryState($scope.queryId).constraints;
                            for (var viewId in constraints) {
                                if (constraints[viewId] instanceof khepri.TextSearchConstraint) {
                                    sparqlRegex += constraints[viewId].sparqlRegex + '|';
                                }
                            }
                            if (sparqlRegex.charAt(sparqlRegex.length - 1) === '|') {
                                sparqlRegex = sparqlRegex.substring(0, sparqlRegex.length - 1);
                            }
                            sparqlRegex += ')';
                            var filter = {};
                            filter[$scope.viewId] = true;
                            var constraintString = _this.stateService.getConstraintString($scope.queryId, filter);
                            _this.canceler.resolve();
                            _this.canceler = _this.$q.defer();
                            _this.sparqlService.query(_this.configService.config.sparqlEndpoint, _this.configService.config.prefixes + viewConfiguration.resultQuery.replace(/# CONSTRAINTS/g, constraintString).replace(/<SPARQL_REGEX>/g, sparqlRegex).replace(/<ORDER_BY>/g, $scope.orderByDescending ? 'DESC(?' + $scope.orderBy + ')' : '?' + $scope.orderBy)).then(function (response) {
                                $scope.metadataKeys = [];
                                if ($scope.showMetadata)
                                    response.data.head.vars.forEach(function (v) { if (v.substring(0, 8) === 'metadata')
                                        $scope.metadataKeys.push(v.substring(8)); });
                                $scope.results = response.data.results.bindings.map(function (r) {
                                    var ft = undefined;
                                    var metadata = [];
                                    $scope.metadataKeys.forEach(function (key) { return metadata.push(r['metadata' + key].value); });
                                    var tmp = document.createElement('div');
                                    tmp.textContent = r['fulltext'].value;
                                    ft = tmp.innerHTML;
                                    var s;
                                    if (r['match']) {
                                        var before = void 0;
                                        var lastBefore = void 0;
                                        var after = void 0;
                                        var regexp = new RegExp('(' + r['match'].value + ')');
                                        var parts = ft.split(regexp);
                                        ft = '';
                                        for (var i = 0; i < parts.length; i += 2) {
                                            before = lastBefore;
                                            if (parts[i].length > $scope.width) {
                                                after = parts[i].substring(0, $scope.width);
                                                lastBefore = parts[i].substring(parts[i].length - $scope.width);
                                            }
                                            else {
                                                after = parts[i];
                                                lastBefore = parts[i];
                                            }
                                            if (parts[i].length > 1000)
                                                ft += parts[i].substring(0, 500) + '<span class="red">...</span>' + parts[i].substring(parts[i].length - 500);
                                            else
                                                ft += parts[i];
                                            ft += '<span class="blue">';
                                            if (parts.length > i + 1)
                                                ft += parts[i + 1];
                                            ft += '</span>';
                                        }
                                        s = new Snippet(_this.$sce.trustAsHtml(before), r['match'].value, _this.$sce.trustAsHtml(after));
                                    }
                                    ft = _this.$sce.trustAsHtml(ft);
                                    return new Result(r['id'].value, r['label'].value, ft, s, metadata, _this.filtered[r['id'].value]);
                                });
                            }, function (response) { return console.log(response); });
                        };
                        $scope.setOrderBy = function (orderBy) {
                            if ($scope.orderBy === orderBy)
                                $scope.orderByDescending = !$scope.orderByDescending;
                            else {
                                $scope.orderBy = orderBy;
                                $scope.orderByDescending = false;
                            }
                            query();
                        };
                        $scope.filter = function (r, openResult) {
                            if (openResult)
                                window.open(r.id, '_blank');
                            else {
                                r.filtered = !r.filtered;
                                _this.filtered[r.id] = r.filtered;
                                var constraintString = 'FILTER (';
                                for (var id in _this.filtered)
                                    if (_this.filtered[id])
                                        constraintString += "?id!=<" + id + "> && ";
                                constraintString = constraintString.substr(0, constraintString.length - 4) + ')';
                                if (constraintString === 'FILT)')
                                    constraintString = '';
                                _this.stateService.setConstraint($scope.queryId, $scope.viewId, new khepri.SimpleConstraint(constraintString, 2));
                            }
                        };
                        $scope.$watch('width', function (nv, ov) { if (nv)
                            query(); });
                        $scope.$on('updateConstraint', function (e, queryId, viewId) {
                            if (queryId === $scope.queryId && viewId !== $scope.viewId)
                                query();
                        });
                    };
                    this.filtered = {};
                    this.canceler = $q.defer();
                }
                return ResultListViewDirective;
            }());/*<auto_generate>*/angular.module('app').directive('resultListView',['$timeout','$q','$sce','sparqlService','configService','stateService',function(){return new (Function.prototype.bind.apply(ResultListViewDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.ResultListViewDirective = ResultListViewDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL3Jlc3VsdGxpc3R2aWV3LWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEVBQUUsQ0F5SVg7QUF6SUQsV0FBVSxFQUFFO0lBQUMsSUFBQSxJQUFJLENBeUloQjtJQXpJWSxXQUFBLElBQUk7UUFBQyxJQUFBLE1BQU0sQ0F5SXZCO1FBeklpQixXQUFBLE1BQU0sRUFBQyxDQUFDO1lBQ3hCLFlBQVksQ0FBQTtZQXNCWjtnQkFDRSxpQkFBbUIsTUFBVyxFQUFTLEtBQWEsRUFBUyxLQUFVO29CQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFLO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFBRyxDQUFDO2dCQUM3RSxjQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFFRDtnQkFDRSxnQkFBbUIsRUFBVSxFQUFTLEtBQWEsRUFBUyxRQUFhLEVBQVMsT0FBZ0IsRUFBUyxRQUFrQixFQUFTLFFBQWlCO29CQUFwSSxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBSztvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztnQkFBRyxDQUFDO2dCQUM3SixhQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFFRDtnQkFHRSxpQ0FBb0IsUUFBaUMsRUFBVSxFQUFxQixFQUFVLElBQXlCLEVBQVUsYUFBOEIsRUFBVSxhQUE0QixFQUFVLFlBQTBCO29CQUgzTyxpQkF5R0M7b0JBdEdxQixhQUFRLEdBQVIsUUFBUSxDQUF5QjtvQkFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtvQkFBVSxTQUFJLEdBQUosSUFBSSxDQUFxQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7b0JBQVUsa0JBQWEsR0FBYixhQUFh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LENBQUM7d0JBQ0gsQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsRUFBRSxFQUFFLEVBQUUsSUFBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQUMsS0FBSyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLENBQXdCLEVBQUUsT0FBZSxFQUFFLE1BQWM7NEJBQ3ZGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDO2dDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUNyRSxDQUFDLENBQUMsQ0FBQTtvQkFDSixDQUFDLENBQUE7b0JBRU8sYUFBUSxHQUE0QixFQUFFLENBQUE7b0JBcEc1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFvR0gsOEJBQUM7WUFBRCxDQXpHQSxBQXlHQyxJQUFBO1lBekdZLDhCQUF1QiwwQkF5R25DLENBQUE7UUFDSCxDQUFDLEVBeklpQixNQUFNLEdBQU4sV0FBTSxLQUFOLFdBQU0sUUF5SXZCO0lBQUQsQ0FBQyxFQXpJWSxJQUFJLEdBQUosT0FBSSxLQUFKLE9BQUksUUF5SWhCO0FBQUQsQ0FBQyxFQXpJUyxFQUFFLEtBQUYsRUFBRSxRQXlJWCIsImZpbGUiOiJzY3JpcHRzL3Jlc3VsdGxpc3R2aWV3LWRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBmaS5zZWNvLmtoZXByaSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGltcG9ydCBzID0gZmkuc2Vjby5zcGFycWxcblxuICBleHBvcnQgaW50ZXJmYWNlIElSZXN1bHRMaXN0Vmlld0NvbmZpZ3VyYXRpb24ge1xuICAgIHJlc3VsdFF1ZXJ5OiBzdHJpbmdcbiAgICBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmdcbiAgfVxuXG4gIGludGVyZmFjZSBJUmVzdWx0TGlzdFZpZXdTY29wZSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcbiAgICBtZXRhZGF0YUtleXM6IHN0cmluZ1tdXG4gICAgcmVzdWx0czogUmVzdWx0W11cbiAgICBmaWx0ZXI6IChyOiBSZXN1bHQsIG9wZW5SZXN1bHQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgc2hvd01ldGFkYXRhOiBib29sZWFuXG4gICAgdmlld0lkOiBzdHJpbmdcbiAgICBxdWVyeUlkOiBzdHJpbmdcbiAgICBzZXRPcmRlckJ5OiAob3JkZXJCeTogc3RyaW5nKSA9PiB2b2lkXG4gICAgb3JkZXJCeTogc3RyaW5nXG4gICAgb3JkZXJCeURlc2NlbmRpbmc6IGJvb2xlYW5cbiAgfVxuXG4gIGNsYXNzIFNuaXBwZXQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBiZWZvcmU6IGFueSwgcHVibGljIG1hdGNoOiBzdHJpbmcsIHB1YmxpYyBhZnRlcjogYW55KSB7fVxuICB9XG5cbiAgY2xhc3MgUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZywgcHVibGljIGxhYmVsOiBzdHJpbmcsIHB1YmxpYyBmdWxsdGV4dDogYW55LCBwdWJsaWMgc25pcHBldDogU25pcHBldCwgcHVibGljIG1ldGFkYXRhOiBzdHJpbmdbXSwgcHVibGljIGZpbHRlcmVkOiBib29sZWFuKSB7fVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlc3VsdExpc3RWaWV3RGlyZWN0aXZlIGltcGxlbWVudHMgYW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgcmVzdHJpY3Q6IHN0cmluZyA9ICdFJ1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ3BhcnRpYWxzL3Jlc3VsdGxpc3R2aWV3Lmh0bWwnXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkdGltZW91dDogYW5ndWxhci5JVGltZW91dFNlcnZpY2UsIHByaXZhdGUgJHE6IGFuZ3VsYXIuSVFTZXJ2aWNlLCBwcml2YXRlICRzY2U6IGFuZ3VsYXIuSVNDRVNlcnZpY2UsIHByaXZhdGUgc3BhcnFsU2VydmljZTogcy5TcGFycWxTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuY2FuY2VsZXIgPSAkcS5kZWZlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NvcGU6IHtbaWQ6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgICB3aWR0aDogJz0nLFxuICAgICAgdmlld0lkOiAnQCcsXG4gICAgICBzaG93TWV0YWRhdGE6ICc9JyxcbiAgICAgIHF1ZXJ5SWQ6ICc9J1xuICAgIH1cbiAgICBwdWJsaWMgbGluazogKC4uLmFueSkgPT4gdm9pZCA9ICgkc2NvcGU6IElSZXN1bHRMaXN0Vmlld1Njb3BlLCBlbGVtZW50OiBKUXVlcnksIGF0dHI6IGFuZ3VsYXIuSUF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICRzY29wZS5vcmRlckJ5ID0gJ21hdGNoJ1xuICAgICAgJHNjb3BlLm9yZGVyQnlEZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIGxldCB2aWV3Q29uZmlndXJhdGlvbjogSVJlc3VsdExpc3RWaWV3Q29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWcudmlld0NvbmZpZ3VyYXRpb25bYXR0ci4kbm9ybWFsaXplKCRzY29wZS52aWV3SWQpXVxuICAgICAgbGV0IHF1ZXJ5OiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3BhcnFsUmVnZXg6IHN0cmluZyA9ICcoPzonXG4gICAgICAgIGxldCBjb25zdHJhaW50czoge1tpZDogc3RyaW5nXTogSUNvbnN0cmFpbnR9ID0gdGhpcy5zdGF0ZVNlcnZpY2UuZ2V0UXVlcnlTdGF0ZSgkc2NvcGUucXVlcnlJZCkuY29uc3RyYWludHNcbiAgICAgICAgZm9yIChsZXQgdmlld0lkIGluIGNvbnN0cmFpbnRzKSB7XG4gICAgICAgICAgaWYgKGNvbnN0cmFpbnRzW3ZpZXdJZF0gaW5zdGFuY2VvZiBUZXh0U2VhcmNoQ29uc3RyYWludCkge1xuICAgICAgICAgICAgc3BhcnFsUmVnZXggKz0gKDxUZXh0U2VhcmNoQ29uc3RyYWludD5jb25zdHJhaW50c1t2aWV3SWRdKS5zcGFycWxSZWdleCArICd8J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BhcnFsUmVnZXguY2hhckF0KHNwYXJxbFJlZ2V4Lmxlbmd0aCAtIDEpID09PSAnfCcpIHtcbiAgICAgICAgICBzcGFycWxSZWdleCA9IHNwYXJxbFJlZ2V4LnN1YnN0cmluZygwLCBzcGFycWxSZWdleC5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIHNwYXJxbFJlZ2V4ICs9ICcpJ1xuICAgICAgICBsZXQgZmlsdGVyOiB7W2lkOiBzdHJpbmddOiBib29sZWFufSA9IHt9XG4gICAgICAgIGZpbHRlclskc2NvcGUudmlld0lkXSA9IHRydWVcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZyA9IHRoaXMuc3RhdGVTZXJ2aWNlLmdldENvbnN0cmFpbnRTdHJpbmcoJHNjb3BlLnF1ZXJ5SWQsIGZpbHRlcilcbiAgICAgICAgdGhpcy5jYW5jZWxlci5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuY2FuY2VsZXIgPSB0aGlzLiRxLmRlZmVyKCk7XG4gICAgICAgIHRoaXMuc3BhcnFsU2VydmljZS5xdWVyeSh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLnNwYXJxbEVuZHBvaW50LCB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLnByZWZpeGVzICsgdmlld0NvbmZpZ3VyYXRpb24ucmVzdWx0UXVlcnkucmVwbGFjZSgvIyBDT05TVFJBSU5UUy9nLCBjb25zdHJhaW50U3RyaW5nKS5yZXBsYWNlKC88U1BBUlFMX1JFR0VYPi9nLCBzcGFycWxSZWdleCkucmVwbGFjZSgvPE9SREVSX0JZPi9nLCAkc2NvcGUub3JkZXJCeURlc2NlbmRpbmcgPyAnREVTQyg/JyArICRzY29wZS5vcmRlckJ5ICsgJyknIDogJz8nICsgJHNjb3BlLm9yZGVyQnkpKS50aGVuKFxuICAgICAgICAgIChyZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZzxzLklTcGFycWxCaW5kaW5nUmVzdWx0PHtbaWQ6IHN0cmluZ106IHMuSVNwYXJxbEJpbmRpbmd9Pj4pID0+IHtcbiAgICAgICAgICAgICRzY29wZS5tZXRhZGF0YUtleXMgPSBbXVxuICAgICAgICAgICAgaWYgKCRzY29wZS5zaG93TWV0YWRhdGEpwqByZXNwb25zZS5kYXRhLmhlYWQudmFycy5mb3JFYWNoKHYgPT4geyBpZiAodi5zdWJzdHJpbmcoMCwgOCkgPT09ICdtZXRhZGF0YScpICRzY29wZS5tZXRhZGF0YUtleXMucHVzaCh2LnN1YnN0cmluZyg4KSl9KVxuICAgICAgICAgICAgJHNjb3BlLnJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHMuYmluZGluZ3MubWFwKHIgPT4ge1xuICAgICAgICAgICAgICBsZXQgZnQ6IHN0cmluZyA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICBsZXQgbWV0YWRhdGE6IHN0cmluZ1tdID0gW11cbiAgICAgICAgICAgICAgJHNjb3BlLm1ldGFkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiBtZXRhZGF0YS5wdXNoKHJbJ21ldGFkYXRhJyArIGtleV0udmFsdWUpKVxuICAgICAgICAgICAgICBsZXQgdG1wOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgIHRtcC50ZXh0Q29udGVudCA9IHJbJ2Z1bGx0ZXh0J10udmFsdWVcbiAgICAgICAgICAgICAgZnQgPSB0bXAuaW5uZXJIVE1MXG4gICAgICAgICAgICAgIGxldCBzOiBTbmlwcGV0XG4gICAgICAgICAgICAgIGlmIChyWydtYXRjaCddKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJlZm9yZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RCZWZvcmU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIGxldCBhZnRlcjogc3RyaW5nXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cCgnKCcgKyByWydtYXRjaCddLnZhbHVlICsgJyknKVxuICAgICAgICAgICAgICAgIGxldCBwYXJ0czogc3RyaW5nW10gPSBmdC5zcGxpdChyZWdleHApXG4gICAgICAgICAgICAgICAgZnQgPSAnJ1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgYmVmb3JlID0gbGFzdEJlZm9yZVxuICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmxlbmd0aCA+ICRzY29wZS53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBhZnRlciA9IHBhcnRzW2ldLnN1YnN0cmluZygwLCAkc2NvcGUud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCZWZvcmUgPSBwYXJ0c1tpXS5zdWJzdHJpbmcocGFydHNbaV0ubGVuZ3RoIC0gJHNjb3BlLndpZHRoKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgPSBwYXJ0c1tpXVxuICAgICAgICAgICAgICAgICAgICBsYXN0QmVmb3JlID0gcGFydHNbaV1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5sZW5ndGggPiAxMDAwKVxuICAgICAgICAgICAgICAgICAgICBmdCArPSBwYXJ0c1tpXS5zdWJzdHJpbmcoMCwgNTAwKSArICc8c3BhbiBjbGFzcz1cInJlZFwiPi4uLjwvc3Bhbj4nICsgcGFydHNbaV0uc3Vic3RyaW5nKHBhcnRzW2ldLmxlbmd0aCAtIDUwMClcbiAgICAgICAgICAgICAgICAgIGVsc2UgZnQgKz0gcGFydHNbaV1cbiAgICAgICAgICAgICAgICAgIGZ0ICs9ICc8c3BhbiBjbGFzcz1cImJsdWVcIj4nXG4gICAgICAgICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gaSArIDEpXG4gICAgICAgICAgICAgICAgICAgIGZ0ICs9IHBhcnRzW2kgKyAxXVxuICAgICAgICAgICAgICAgICAgZnQgKz0gJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHMgPSBuZXcgU25pcHBldCh0aGlzLiRzY2UudHJ1c3RBc0h0bWwoYmVmb3JlKSwgclsnbWF0Y2gnXS52YWx1ZSwgdGhpcy4kc2NlLnRydXN0QXNIdG1sKGFmdGVyKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdCA9IHRoaXMuJHNjZS50cnVzdEFzSHRtbChmdClcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQoclsnaWQnXS52YWx1ZSwgclsnbGFiZWwnXS52YWx1ZSwgZnQsIHMsIG1ldGFkYXRhLCB0aGlzLmZpbHRlcmVkW3JbJ2lkJ10udmFsdWVdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICAocmVzcG9uc2U6IGFuZ3VsYXIuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8c3RyaW5nPikgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgICRzY29wZS5zZXRPcmRlckJ5ID0gKG9yZGVyQnk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoJHNjb3BlLm9yZGVyQnkgPT09IG9yZGVyQnkpICRzY29wZS5vcmRlckJ5RGVzY2VuZGluZyA9ICEkc2NvcGUub3JkZXJCeURlc2NlbmRpbmdcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLm9yZGVyQnkgPSBvcmRlckJ5XG4gICAgICAgICAgJHNjb3BlLm9yZGVyQnlEZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBxdWVyeSgpXG4gICAgICB9XG4gICAgICAkc2NvcGUuZmlsdGVyID0gKHI6IFJlc3VsdCwgb3BlblJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAob3BlblJlc3VsdCkgd2luZG93Lm9wZW4oci5pZCwgJ19ibGFuaycpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHIuZmlsdGVyZWQgPSAhci5maWx0ZXJlZFxuICAgICAgICAgIHRoaXMuZmlsdGVyZWRbci5pZF0gPSByLmZpbHRlcmVkXG4gICAgICAgICAgbGV0IGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZyA9ICdGSUxURVIgKCdcbiAgICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmZpbHRlcmVkKSBpZiAodGhpcy5maWx0ZXJlZFtpZF0pIGNvbnN0cmFpbnRTdHJpbmcgKz0gYD9pZCE9PCR7aWR9PiAmJiBgXG4gICAgICAgICAgY29uc3RyYWludFN0cmluZyA9IGNvbnN0cmFpbnRTdHJpbmcuc3Vic3RyKDAsIGNvbnN0cmFpbnRTdHJpbmcubGVuZ3RoIC0gNCkgKyAnKSc7XG4gICAgICAgICAgaWYgKGNvbnN0cmFpbnRTdHJpbmcgPT09ICdGSUxUKScpIGNvbnN0cmFpbnRTdHJpbmcgPSAnJ1xuICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnNldENvbnN0cmFpbnQoJHNjb3BlLnF1ZXJ5SWQsICRzY29wZS52aWV3SWQsIG5ldyBTaW1wbGVDb25zdHJhaW50KGNvbnN0cmFpbnRTdHJpbmcsIDIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLiR3YXRjaCgnd2lkdGgnLCAobnYsIG92KSA9PiB7IGlmIChudikgcXVlcnkoKSB9KVxuICAgICAgJHNjb3BlLiRvbigndXBkYXRlQ29uc3RyYWludCcsIChlOiBhbmd1bGFyLklBbmd1bGFyRXZlbnQsIHF1ZXJ5SWQ6IHN0cmluZywgdmlld0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHF1ZXJ5SWQgPT09ICRzY29wZS5xdWVyeUlkICYmIHZpZXdJZCAhPT0gJHNjb3BlLnZpZXdJZCkgcXVlcnkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5jZWxlcjogYW5ndWxhci5JRGVmZXJyZWQ8e30+XG4gICAgcHJpdmF0ZSBmaWx0ZXJlZDoge1tpZDogc3RyaW5nXTogYm9vbGVhbn0gPSB7fVxuICB9XG59XG4iXX0=

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var TreeNode = (function () {
                function TreeNode(id, label, instances) {
                    this.id = id;
                    this.label = label;
                    this.instances = instances;
                    this.children = [];
                    this.matchingInstances = instances;
                }
                return TreeNode;
            }());
            var TreeViewConstraints = (function () {
                function TreeViewConstraints(constraintString, values) {
                    this.constraintString = constraintString;
                    this.values = values;
                    this.order = 5;
                }
                TreeViewConstraints.prototype.clone = function () {
                    return new TreeViewConstraints(this.constraintString, this.values.slice());
                };
                return TreeViewConstraints;
            }());
            var TreeViewDirective = (function () {
                function TreeViewDirective($q, configService, stateService, sparqlService) {
                    var _this = this;
                    this.$q = $q;
                    this.configService = configService;
                    this.stateService = stateService;
                    this.sparqlService = sparqlService;
                    this.scope = {
                        viewId: '@',
                        queryId: '=',
                        viewConfiguration: '='
                    };
                    this.restrict = 'E';
                    this.templateUrl = 'partials/treeview.html';
                    this.link = function ($scope, element, attr) {
                        var viewConfiguration = $scope.viewConfiguration ? $scope.viewConfiguration : _this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)];
                        $scope.constraints = [];
                        $scope.selectElement = function (value, add) {
                            if (add === void 0) { add = false; }
                            if (!add)
                                $scope.constraints = [value];
                            else
                                $scope.constraints.push(value);
                            var constraintString = '';
                            $scope.constraints.forEach(function (constraint) {
                                constraintString += "{ " + viewConfiguration.constraintString.replace(/<CONSTRAINT_ID>/g, '<' + constraint.id + '>') + " } UNION";
                            });
                            constraintString = constraintString.substr(0, constraintString.length - 6);
                            _this.stateService.setConstraint($scope.queryId, $scope.viewId, new TreeViewConstraints(constraintString, $scope.constraints));
                        };
                        $scope.isSelected = function (id) { return $scope.constraints.indexOf(id) !== -1; };
                        _this.sparqlService.query(_this.configService.config.sparqlEndpoint, viewConfiguration.getTreeQuery).then(function (response) {
                            var parents = {};
                            var classes = {};
                            response.data.results.bindings.forEach(function (binding) {
                                if (binding['subClass']) {
                                    var subClass = binding['subClass'].value;
                                    if (!parents[subClass])
                                        parents[subClass] = {};
                                    parents[subClass][binding['superClass'].value] = true;
                                }
                                else {
                                    classes[binding['class'].value] = new TreeNode(binding['class'].value, binding['classLabel'].value, parseInt(binding['instances'].value, 10));
                                }
                            });
                            $scope.tree = [];
                            for (var id in classes) {
                                if (!parents[id])
                                    $scope.tree.push(classes[id]);
                                else
                                    for (var pid in parents[id])
                                        classes[pid].children.push(classes[id]);
                            }
                        }, function (response) { return console.log(response); });
                        $scope.$on('updateConstraint', function (e, queryId, viewId) {
                            _this.canceler.resolve();
                            var filter = {};
                            filter[$scope.viewId] = true;
                            var constraintString = _this.stateService.getConstraintString($scope.queryId, filter);
                            _this.sparqlService.query(_this.configService.config.sparqlEndpoint, _this.configService.config.prefixes + viewConfiguration.getCountsQuery.replace(/# CONSTRAINTS/g, constraintString)).then(function (response) {
                                var counts = {};
                                response.data.results.bindings.forEach(function (r) { return counts[r['class'].value] = parseInt(r['instances'].value, 10); });
                                $scope.tree.forEach(function (tn) { return _this.updateCounts(tn, counts); });
                            }, function (response) { return console.log(response); });
                        });
                    };
                    this.updateCounts = function (node, counts) {
                        node.matchingInstances = counts[node.id] ? counts[node.id] : 0;
                        node.children.forEach(function (cnode) { return _this.updateCounts(cnode, counts); });
                    };
                    console.log($q, configService);
                    this.canceler = $q.defer();
                }
                return TreeViewDirective;
            }());/*<auto_generate>*/angular.module('app').directive('treeView',['$q','configService','stateService','sparqlService',function(){return new (Function.prototype.bind.apply(TreeViewDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.TreeViewDirective = TreeViewDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL3RyZWV2aWV3LWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEVBQUUsQ0F5R1g7QUF6R0QsV0FBVSxFQUFFO0lBQUMsSUFBQSxJQUFJLENBeUdoQjtJQXpHWSxXQUFBLElBQUk7UUFBQyxJQUFBLE1BQU0sQ0F5R3ZCO1FBekdpQixXQUFBLE1BQU0sRUFBQyxDQUFDO1lBQ3hCLFlBQVksQ0FBQTtZQWNaO2dCQUVFLGtCQUFtQixFQUFVLEVBQVMsS0FBYSxFQUFTLFNBQWlCO29CQUExRCxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtvQkFHdEUsYUFBUSxHQUFlLEVBQUUsQ0FBQTtvQkFGOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQTtnQkFDcEMsQ0FBQztnQkFFSCxlQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFFRDtnQkFLRSw2QkFBbUIsZ0JBQXdCLEVBQVMsTUFBa0I7b0JBQW5ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFZO29CQUovRCxVQUFLLEdBQVcsQ0FBQyxDQUFBO2dCQUlrRCxDQUFDO2dCQUhwRSxtQ0FBSyxHQUFaO29CQUNFLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7Z0JBQzVFLENBQUM7Z0JBRUgsMEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQVFEO2dCQVFFLDJCQUFvQixFQUFxQixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBUyxhQUE4QjtvQkFSNUosaUJBbUVDO29CQTNEcUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVMsa0JBQWEsR0FBYixhQUFhLENBQWlCO29CQVBuSixVQUFLLEdBQTJCO3dCQUNyQyxNQUFNLEVBQUUsR0FBRzt3QkFDWCxPQUFPLEVBQUUsR0FBRzt3QkFDWixpQkFBaUIsRUFBRSxHQUFHO3FCQUN2QixDQUFBO29CQUNNLGFBQVEsR0FBVyxHQUFHLENBQUE7b0JBQ3RCLGdCQUFXLEdBQVcsd0JBQXdCLENBQUE7b0JBSzlDLFNBQUksR0FBcUIsVUFBQyxNQUFzQixFQUFFLE9BQWUsRUFBRSxJQUF5Qjt3QkFDakcsSUFBSSxpQkFBaUIsR0FBMkIsTUFBTSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO3dCQUNqTCxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTt3QkFDdkIsTUFBTSxDQUFDLGFBQWEsR0FBRyxVQUFDLEtBQUssRUFBRSxHQUFXOzRCQUFYLG1CQUFXLEdBQVgsV0FBVzs0QkFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0NBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUFDLElBQUk7Z0NBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7NEJBQzNFLElBQUksZ0JBQWdCLEdBQVcsRUFBRSxDQUFBOzRCQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7Z0NBQ25DLGdCQUFnQixJQUFJLE9BQUssaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFVLENBQUE7NEJBQzlILENBQUMsQ0FBQyxDQUFDOzRCQUNILGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUMzRSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDaEksQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBQyxFQUFFLElBQUssT0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQTt3QkFDakUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDckcsVUFBQyxRQUFtRzs0QkFDbEcsSUFBSSxPQUFPLEdBQTRDLEVBQUUsQ0FBQTs0QkFDekQsSUFBSSxPQUFPLEdBQTZCLEVBQUUsQ0FBQTs0QkFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0NBQzVDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ3hCLElBQUksUUFBUSxHQUFXLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUE7b0NBQ2hELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUE7b0NBQzlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO2dDQUN2RCxDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0NBQy9JLENBQUM7NEJBQ0gsQ0FBQyxDQUFDLENBQUE7NEJBQ0YsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUE7NEJBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29DQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUFDLElBQUk7b0NBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs0QkFDN0MsQ0FBQzt3QkFDSCxDQUFDLEVBQ0QsVUFBQyxRQUFpRCxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FDN0UsQ0FBQTt3QkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsQ0FBd0IsRUFBRSxPQUFlLEVBQUUsTUFBYzs0QkFDdkYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDeEIsSUFBSSxNQUFNLEdBQTRCLEVBQUUsQ0FBQTs0QkFDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUE7NEJBQzVCLElBQUksZ0JBQWdCLEdBQVcsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBOzRCQUM1RixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEwsVUFBQyxRQUFtRztnQ0FDbEcsSUFBSSxNQUFNLEdBQTRCLEVBQUUsQ0FBQTtnQ0FDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQTdELENBQTZELENBQUMsQ0FBQTtnQ0FDMUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFBOzRCQUMxRCxDQUFDLEVBRUQsVUFBQyxRQUFpRCxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FDN0UsQ0FBQTt3QkFDSCxDQUFDLENBQUMsQ0FBQTtvQkFDSixDQUFDLENBQUE7b0JBRU8saUJBQVksR0FBOEQsVUFBQyxJQUFjLEVBQUUsTUFBK0I7d0JBQ2hJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7b0JBQ25FLENBQUMsQ0FBQTtvQkF6REMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUE7b0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQXdESCx3QkFBQztZQUFELENBbkVBLEFBbUVDLElBQUE7WUFuRVksd0JBQWlCLG9CQW1FN0IsQ0FBQTtRQUNILENBQUMsRUF6R2lCLE1BQU0sR0FBTixXQUFNLEtBQU4sV0FBTSxRQXlHdkI7SUFBRCxDQUFDLEVBekdZLElBQUksR0FBSixPQUFJLEtBQUosT0FBSSxRQXlHaEI7QUFBRCxDQUFDLEVBekdTLEVBQUUsS0FBRixFQUFFLFFBeUdYIiwiZmlsZSI6InNjcmlwdHMvdHJlZXZpZXctZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGZpLnNlY28ua2hlcHJpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgaW1wb3J0IHMgPSBmaS5zZWNvLnNwYXJxbFxuXG4gIGludGVyZmFjZSBJVHJlZVZpZXdTY29wZSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcbiAgICBzZWxlY3RFbGVtZW50OiAoaWQ6IFRyZWVOb2RlLCBhZGQ/KSA9PiB2b2lkXG4gICAgaXNTZWxlY3RlZDogKGlkOiBUcmVlTm9kZSkgPT4gYm9vbGVhblxuICAgIHRyZWU6IFRyZWVOb2RlW11cbiAgICBxdWVyeUlkOiBzdHJpbmdcbiAgICB2aWV3SWQ6IHN0cmluZ1xuICAgIGNvbnN0cmFpbnRzOiBUcmVlTm9kZVtdXG4gICAgdmlld0NvbmZpZ3VyYXRpb246IElUcmVlVmlld0NvbmZpZ3VyYXRpb25cbiAgfVxuXG4gIGNsYXNzIFRyZWVOb2RlIHtcbiAgICBwdWJsaWMgbWF0Y2hpbmdJbnN0YW5jZXM6IG51bWJlclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgbGFiZWw6IHN0cmluZywgcHVibGljIGluc3RhbmNlczogbnVtYmVyKSB7XG4gICAgICB0aGlzLm1hdGNoaW5nSW5zdGFuY2VzID0gaW5zdGFuY2VzXG4gICAgfVxuICAgIHB1YmxpYyBjaGlsZHJlbjogVHJlZU5vZGVbXSA9IFtdXG4gIH1cblxuICBjbGFzcyBUcmVlVmlld0NvbnN0cmFpbnRzIGltcGxlbWVudHMgSUNvbnN0cmFpbnQge1xuICAgIHB1YmxpYyBvcmRlcjogbnVtYmVyID0gNVxuICAgIHB1YmxpYyBjbG9uZSgpOiBUcmVlVmlld0NvbnN0cmFpbnRzIHtcbiAgICAgIHJldHVybiBuZXcgVHJlZVZpZXdDb25zdHJhaW50cyh0aGlzLmNvbnN0cmFpbnRTdHJpbmcsIHRoaXMudmFsdWVzLnNsaWNlKCkpXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZXM6IFRyZWVOb2RlW10pIHsgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJVHJlZVZpZXdDb25maWd1cmF0aW9uIHtcbiAgICBnZXRUcmVlUXVlcnk6IHN0cmluZ1xuICAgIGdldENvdW50c1F1ZXJ5OiBzdHJpbmdcbiAgICBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmdcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBUcmVlVmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIGFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgcHVibGljIHNjb3BlOiB7W2lkOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgdmlld0lkOiAnQCcsXG4gICAgICBxdWVyeUlkOiAnPScsXG4gICAgICB2aWV3Q29uZmlndXJhdGlvbjogJz0nXG4gICAgfVxuICAgIHB1YmxpYyByZXN0cmljdDogc3RyaW5nID0gJ0UnXG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSAncGFydGlhbHMvdHJlZXZpZXcuaHRtbCdcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRxOiBhbmd1bGFyLklRU2VydmljZSwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLCBwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlLCBwdWJsaWMgc3BhcnFsU2VydmljZTogcy5TcGFycWxTZXJ2aWNlKSB7XG4gICAgICBjb25zb2xlLmxvZygkcSwgY29uZmlnU2VydmljZSlcbiAgICAgIHRoaXMuY2FuY2VsZXIgPSAkcS5kZWZlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgbGluazogKC4uLmFueSkgPT4gdm9pZCA9ICgkc2NvcGU6IElUcmVlVmlld1Njb3BlLCBlbGVtZW50OiBKUXVlcnksIGF0dHI6IGFuZ3VsYXIuSUF0dHJpYnV0ZXMpID0+IHtcbiAgICAgIGxldCB2aWV3Q29uZmlndXJhdGlvbjogSVRyZWVWaWV3Q29uZmlndXJhdGlvbiA9ICRzY29wZS52aWV3Q29uZmlndXJhdGlvbiA/ICRzY29wZS52aWV3Q29uZmlndXJhdGlvbiA6IHRoaXMuY29uZmlnU2VydmljZS5jb25maWcudmlld0NvbmZpZ3VyYXRpb25bYXR0ci4kbm9ybWFsaXplKCRzY29wZS52aWV3SWQpXVxuICAgICAgJHNjb3BlLmNvbnN0cmFpbnRzID0gW11cbiAgICAgICRzY29wZS5zZWxlY3RFbGVtZW50ID0gKHZhbHVlLCBhZGQgPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIWFkZCkgJHNjb3BlLmNvbnN0cmFpbnRzID0gW3ZhbHVlXTsgZWxzZSAkc2NvcGUuY29uc3RyYWludHMucHVzaCh2YWx1ZSlcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZyA9ICcnXG4gICAgICAgICRzY29wZS5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xuICAgICAgICAgIGNvbnN0cmFpbnRTdHJpbmcgKz0gYHsgJHt2aWV3Q29uZmlndXJhdGlvbi5jb25zdHJhaW50U3RyaW5nLnJlcGxhY2UoLzxDT05TVFJBSU5UX0lEPi9nLCAnPCcgKyBjb25zdHJhaW50LmlkICsgJz4nKX0gfSBVTklPTmBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0cmFpbnRTdHJpbmcgPSBjb25zdHJhaW50U3RyaW5nLnN1YnN0cigwLCBjb25zdHJhaW50U3RyaW5nLmxlbmd0aCAtIDYpO1xuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRDb25zdHJhaW50KCRzY29wZS5xdWVyeUlkLCAkc2NvcGUudmlld0lkLCBuZXcgVHJlZVZpZXdDb25zdHJhaW50cyhjb25zdHJhaW50U3RyaW5nLCAkc2NvcGUuY29uc3RyYWludHMpKTtcbiAgICAgIH1cbiAgICAgICRzY29wZS5pc1NlbGVjdGVkID0gKGlkKSA9PiAkc2NvcGUuY29uc3RyYWludHMuaW5kZXhPZihpZCkgIT09IC0xXG4gICAgICB0aGlzLnNwYXJxbFNlcnZpY2UucXVlcnkodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5zcGFycWxFbmRwb2ludCwgdmlld0NvbmZpZ3VyYXRpb24uZ2V0VHJlZVF1ZXJ5KS50aGVuKFxuICAgICAgICAocmVzcG9uc2U6IGFuZ3VsYXIuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8cy5JU3BhcnFsQmluZGluZ1Jlc3VsdDx7W2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nfT4+KSA9PiB7XG4gICAgICAgICAgbGV0IHBhcmVudHM6IHtbaWQ6IHN0cmluZ106IHtbaWQ6IHN0cmluZ106IGJvb2xlYW59fSA9IHt9XG4gICAgICAgICAgbGV0IGNsYXNzZXM6IHtbaWQ6IHN0cmluZ106IFRyZWVOb2RlfSA9IHt9XG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XG4gICAgICAgICAgICBpZiAoYmluZGluZ1snc3ViQ2xhc3MnXSkge1xuICAgICAgICAgICAgICBsZXQgc3ViQ2xhc3M6IHN0cmluZyA9IGJpbmRpbmdbJ3N1YkNsYXNzJ10udmFsdWVcbiAgICAgICAgICAgICAgaWYgKCFwYXJlbnRzW3N1YkNsYXNzXSkgcGFyZW50c1tzdWJDbGFzc10gPSB7fVxuICAgICAgICAgICAgICBwYXJlbnRzW3N1YkNsYXNzXVtiaW5kaW5nWydzdXBlckNsYXNzJ10udmFsdWVdID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xhc3Nlc1tiaW5kaW5nWydjbGFzcyddLnZhbHVlXSA9IG5ldyBUcmVlTm9kZShiaW5kaW5nWydjbGFzcyddLnZhbHVlLCBiaW5kaW5nWydjbGFzc0xhYmVsJ10udmFsdWUsIHBhcnNlSW50KGJpbmRpbmdbJ2luc3RhbmNlcyddLnZhbHVlLCAxMCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAkc2NvcGUudHJlZSA9IFtdXG4gICAgICAgICAgZm9yIChsZXQgaWQgaW4gY2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKCFwYXJlbnRzW2lkXSkgJHNjb3BlLnRyZWUucHVzaChjbGFzc2VzW2lkXSk7IGVsc2UgZm9yIChsZXQgcGlkIGluIHBhcmVudHNbaWRdKVxuICAgICAgICAgICAgICAgIGNsYXNzZXNbcGlkXS5jaGlsZHJlbi5wdXNoKGNsYXNzZXNbaWRdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHN0cmluZz4pID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgKVxuICAgICAgJHNjb3BlLiRvbigndXBkYXRlQ29uc3RyYWludCcsIChlOiBhbmd1bGFyLklBbmd1bGFyRXZlbnQsIHF1ZXJ5SWQ6IHN0cmluZywgdmlld0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5jYW5jZWxlci5yZXNvbHZlKCk7XG4gICAgICAgIGxldCBmaWx0ZXI6IHtbaWQ6IHN0cmluZ106IGJvb2xlYW59ID0ge31cbiAgICAgICAgZmlsdGVyWyRzY29wZS52aWV3SWRdID0gdHJ1ZVxuICAgICAgICBsZXQgY29uc3RyYWludFN0cmluZzogc3RyaW5nID0gdGhpcy5zdGF0ZVNlcnZpY2UuZ2V0Q29uc3RyYWludFN0cmluZygkc2NvcGUucXVlcnlJZCwgZmlsdGVyKVxuICAgICAgICB0aGlzLnNwYXJxbFNlcnZpY2UucXVlcnkodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5zcGFycWxFbmRwb2ludCwgdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5wcmVmaXhlcyArIHZpZXdDb25maWd1cmF0aW9uLmdldENvdW50c1F1ZXJ5LnJlcGxhY2UoLyMgQ09OU1RSQUlOVFMvZywgY29uc3RyYWludFN0cmluZykpLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHMuSVNwYXJxbEJpbmRpbmdSZXN1bHQ8e1tpZDogc3RyaW5nXTogcy5JU3BhcnFsQmluZGluZ30+PikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdW50czoge1tpZDogc3RyaW5nXSA6IG51bWJlcn0gPSB7fVxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLmZvckVhY2gociA9PiBjb3VudHNbclsnY2xhc3MnXS52YWx1ZV0gPSBwYXJzZUludChyWydpbnN0YW5jZXMnXS52YWx1ZSwgMTApKVxuICAgICAgICAgICAgJHNjb3BlLnRyZWUuZm9yRWFjaCh0biA9PiB0aGlzLnVwZGF0ZUNvdW50cyh0biwgY291bnRzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgLFxuICAgICAgICAgIChyZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZzxzdHJpbmc+KSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5jZWxlcjogYW5ndWxhci5JRGVmZXJyZWQ8e30+XG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudHM6IChub2RlOiBUcmVlTm9kZSwgY291bnRzOiB7W2lkOiBzdHJpbmddIDogbnVtYmVyfSkgPT4gdm9pZCA9IChub2RlOiBUcmVlTm9kZSwgY291bnRzOiB7W2lkOiBzdHJpbmddIDogbnVtYmVyfSkgPT4ge1xuICAgICAgbm9kZS5tYXRjaGluZ0luc3RhbmNlcyA9IGNvdW50c1tub2RlLmlkXSA/IGNvdW50c1tub2RlLmlkXSA6IDBcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjbm9kZSA9PiB0aGlzLnVwZGF0ZUNvdW50cyhjbm9kZSwgY291bnRzKSk7XG4gICAgfVxuICB9XG59XG4iXX0=

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var ChartDefinition = (function () {
                function ChartDefinition() {
                }
                return ChartDefinition;
            }());
            khepri.ChartDefinition = ChartDefinition;
            var GoogleChartViewDirective = (function () {
                function GoogleChartViewDirective(resize) {
                    this.resize = resize;
                    this.restrict = 'E';
                    this.template = '<div style="width:100%"></div>';
                    this.scope = {
                        'chartDefinition': '='
                    };
                    this.link = function ($scope, element, attr) {
                        var chart = new google.visualization.ChartWrapper({
                            chartType: $scope.chartDefinition.type,
                            options: $scope.chartDefinition.options,
                            dataTable: $scope.chartDefinition.dataTable
                        });
                        $scope.$watch('chartDefinition.dataTable', function (nv, ov) {
                            if (nv !== ov) {
                                chart.setChartType($scope.chartDefinition.type);
                                chart.setOptions($scope.chartDefinition.options);
                                chart.setDataTable($scope.chartDefinition.dataTable);
                                chart.draw(element[0].children[0]);
                            }
                        });
                        $scope.$on('resize', function () { if ($scope.chartDefinition.dataTable)
                            chart.draw(element[0].children[0]); });
                        google.visualization.events.addListener(chart, 'select', function () { return $scope.chartDefinition.select(chart.getChart().getSelection(), $scope.chartDefinition, chart); });
                        if ($scope.chartDefinition.dataTable)
                            chart.draw(element[0].children[0]);
                    };
                }
                return GoogleChartViewDirective;
            }());/*<auto_generate>*/angular.module('app').directive('googleChartView',['resize',function(){return new (Function.prototype.bind.apply(GoogleChartViewDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.GoogleChartViewDirective = GoogleChartViewDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL2dvb2dsZWNoYXJ0dmlldy1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxFQUFFLENBc0NYO0FBdENELFdBQVUsRUFBRTtJQUFDLElBQUEsSUFBSSxDQXNDaEI7SUF0Q1ksV0FBQSxJQUFJO1FBQUMsSUFBQSxNQUFNLENBc0N2QjtRQXRDaUIsV0FBQSxNQUFNLEVBQUMsQ0FBQztZQUN4QixZQUFZLENBQUE7WUFFWjtnQkFBQTtnQkFLQSxDQUFDO2dCQUFELHNCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMWSxzQkFBZSxrQkFLM0IsQ0FBQTtZQUtEO2dCQU1FLGtDQUFvQixNQUFXO29CQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7b0JBTHhCLGFBQVEsR0FBVyxHQUFHLENBQUE7b0JBQ3RCLGFBQVEsR0FBVyxnQ0FBZ0MsQ0FBQTtvQkFDbkQsVUFBSyxHQUEyQjt3QkFDckMsaUJBQWlCLEVBQUUsR0FBRztxQkFDdkIsQ0FBQTtvQkFHTSxTQUFJLEdBQXFCLFVBQUMsTUFBNkIsRUFBRSxPQUFlLEVBQUUsSUFBeUI7d0JBQ3hHLElBQUksS0FBSyxHQUFzQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOzRCQUNuRixTQUFTLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJOzRCQUN0QyxPQUFPLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPOzRCQUN2QyxTQUFTLEVBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTO3lCQUM1QyxDQUFDLENBQUE7d0JBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxVQUFDLEVBQWtDLEVBQUUsRUFBa0M7NEJBQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZJLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDL0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dDQUNoRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7Z0NBQ3BELEtBQUssQ0FBQyxJQUFJLENBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNqRCxDQUFDO3dCQUFBLENBQUMsQ0FBQyxDQUFBO3dCQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7NEJBQUMsS0FBSyxDQUFDLElBQUksQ0FBYyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTt3QkFDcEgsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsY0FBTSxPQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUE3RixDQUE2RixDQUFDLENBQUE7d0JBQzdKLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDOzRCQUFDLEtBQUssQ0FBQyxJQUFJLENBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN2RixDQUFDLENBQUE7Z0JBaEJELENBQUM7Z0JBaUJILCtCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCWSwrQkFBd0IsMkJBd0JwQyxDQUFBO1FBQ0gsQ0FBQyxFQXRDaUIsTUFBTSxHQUFOLFdBQU0sS0FBTixXQUFNLFFBc0N2QjtJQUFELENBQUMsRUF0Q1ksSUFBSSxHQUFKLE9BQUksS0FBSixPQUFJLFFBc0NoQjtBQUFELENBQUMsRUF0Q1MsRUFBRSxLQUFGLEVBQUUsUUFzQ1giLCJmaWxlIjoic2NyaXB0cy9nb29nbGVjaGFydHZpZXctZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGZpLnNlY28ua2hlcHJpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgZXhwb3J0IGNsYXNzIENoYXJ0RGVmaW5pdGlvbiB7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZ1xuICAgIHB1YmxpYyBkYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZVxuICAgIHB1YmxpYyBvcHRpb25zOiB7fVxuICAgIHB1YmxpYyBzZWxlY3Q6IChzZWxlY3Rpb246IGdvb2dsZS52aXN1YWxpemF0aW9uLlZpc3VhbGl6YXRpb25TZWxlY3Rpb25BcnJheSwgY2hhcnREZWZpbml0aW9uOiBDaGFydERlZmluaXRpb24sIGNoYXJ0OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIpID0+IHZvaWRcbiAgfVxuICBpbnRlcmZhY2UgSUdvb2dsZUNoYXJ0Vmlld1Njb3BlIGV4dGVuZHMgYW5ndWxhci5JU2NvcGUge1xuICAgIGNoYXJ0RGVmaW5pdGlvbjogQ2hhcnREZWZpbml0aW9uXG4gIH1cblxuICBleHBvcnQgY2xhc3MgR29vZ2xlQ2hhcnRWaWV3RGlyZWN0aXZlIGltcGxlbWVudHMgYW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgcmVzdHJpY3Q6IHN0cmluZyA9ICdFJ1xuICAgIHB1YmxpYyB0ZW1wbGF0ZTogc3RyaW5nID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+PC9kaXY+J1xuICAgIHB1YmxpYyBzY29wZToge1tpZDogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAgICdjaGFydERlZmluaXRpb24nOiAnPSdcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNpemU6IGFueSkge1xuICAgIH1cbiAgICBwdWJsaWMgbGluazogKC4uLmFueSkgPT4gdm9pZCA9ICgkc2NvcGU6IElHb29nbGVDaGFydFZpZXdTY29wZSwgZWxlbWVudDogSlF1ZXJ5LCBhdHRyOiBhbmd1bGFyLklBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICBsZXQgY2hhcnQ6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIoe1xuICAgICAgICBjaGFydFR5cGU6ICRzY29wZS5jaGFydERlZmluaXRpb24udHlwZSxcbiAgICAgICAgb3B0aW9uczogJHNjb3BlLmNoYXJ0RGVmaW5pdGlvbi5vcHRpb25zLFxuICAgICAgICBkYXRhVGFibGU6ICRzY29wZS5jaGFydERlZmluaXRpb24uZGF0YVRhYmxlXG4gICAgICB9KVxuICAgICAgJHNjb3BlLiR3YXRjaCgnY2hhcnREZWZpbml0aW9uLmRhdGFUYWJsZScsIChudjogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLCBvdjogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKSA9PiB7IGlmIChudiAhPT0gb3YpIHtcbiAgICAgICAgY2hhcnQuc2V0Q2hhcnRUeXBlKCRzY29wZS5jaGFydERlZmluaXRpb24udHlwZSlcbiAgICAgICAgY2hhcnQuc2V0T3B0aW9ucygkc2NvcGUuY2hhcnREZWZpbml0aW9uLm9wdGlvbnMpXG4gICAgICAgIGNoYXJ0LnNldERhdGFUYWJsZSgkc2NvcGUuY2hhcnREZWZpbml0aW9uLmRhdGFUYWJsZSlcbiAgICAgICAgY2hhcnQuZHJhdyg8SFRNTEVsZW1lbnQ+ZWxlbWVudFswXS5jaGlsZHJlblswXSlcbiAgICAgIH19KVxuICAgICAgJHNjb3BlLiRvbigncmVzaXplJywgKCkgPT4geyBpZiAoJHNjb3BlLmNoYXJ0RGVmaW5pdGlvbi5kYXRhVGFibGUpIGNoYXJ0LmRyYXcoPEhUTUxFbGVtZW50PmVsZW1lbnRbMF0uY2hpbGRyZW5bMF0pfSlcbiAgICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRMaXN0ZW5lcihjaGFydCwgJ3NlbGVjdCcsICgpID0+ICRzY29wZS5jaGFydERlZmluaXRpb24uc2VsZWN0KGNoYXJ0LmdldENoYXJ0KCkuZ2V0U2VsZWN0aW9uKCksICRzY29wZS5jaGFydERlZmluaXRpb24sIGNoYXJ0KSlcbiAgICAgIGlmICgkc2NvcGUuY2hhcnREZWZpbml0aW9uLmRhdGFUYWJsZSkgY2hhcnQuZHJhdyg8SFRNTEVsZW1lbnQ+ZWxlbWVudFswXS5jaGlsZHJlblswXSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==

var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var TreeView = (function () {
                function TreeView() {
                }
                return TreeView;
            }());
            var MultiTreeViewsDirective = (function () {
                function MultiTreeViewsDirective(sparqlService, configService, stateService) {
                    var _this = this;
                    this.sparqlService = sparqlService;
                    this.configService = configService;
                    this.stateService = stateService;
                    this.restrict = 'E';
                    this.templateUrl = 'partials/multitreeviews.html';
                    this.scope = {
                        'viewId': '@',
                        'queryId': '='
                    };
                    this.link = function ($scope, element, attr) {
                        $scope.views = [{ id: 'property-tree-view', label: 'Education', viewConfiguration: _this.configService.config.viewConfiguration[attr.$normalize('property-tree-view')] }];
                    };
                }
                return MultiTreeViewsDirective;
            }());/*<auto_generate>*/angular.module('app').directive('multiTreeViews',['sparqlService','configService','stateService',function(){return new (Function.prototype.bind.apply(MultiTreeViewsDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.MultiTreeViewsDirective = MultiTreeViewsDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL211bHRpdHJlZXZpZXdzLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEVBQUUsQ0E4Qlg7QUE5QkQsV0FBVSxFQUFFO0lBQUMsSUFBQSxJQUFJLENBOEJoQjtJQTlCWSxXQUFBLElBQUk7UUFBQyxJQUFBLE1BQU0sQ0E4QnZCO1FBOUJpQixXQUFBLE1BQU0sRUFBQyxDQUFDO1lBQ3hCLFlBQVksQ0FBQTtZQU9aO2dCQUFBO2dCQUlBLENBQUM7Z0JBQUQsZUFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBS0Q7Z0JBT0UsaUNBQW9CLGFBQThCLEVBQVUsYUFBNEIsRUFBVSxZQUEwQjtvQkFQOUgsaUJBWUM7b0JBTHFCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFOckgsYUFBUSxHQUFXLEdBQUcsQ0FBQTtvQkFDdEIsZ0JBQVcsR0FBVyw4QkFBOEIsQ0FBQTtvQkFDcEQsVUFBSyxHQUEyQjt3QkFDckMsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsU0FBUyxFQUFFLEdBQUc7cUJBQ2YsQ0FBQTtvQkFHTSxTQUFJLEdBQXFCLFVBQUMsTUFBNEIsRUFBRSxPQUFlLEVBQUUsSUFBeUI7d0JBQ3ZHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBRSxFQUFDLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQTtvQkFDM0ssQ0FBQyxDQUFBO2dCQUhELENBQUM7Z0JBSUgsOEJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpZLDhCQUF1QiwwQkFZbkMsQ0FBQTtRQUNILENBQUMsRUE5QmlCLE1BQU0sR0FBTixXQUFNLEtBQU4sV0FBTSxRQThCdkI7SUFBRCxDQUFDLEVBOUJZLElBQUksR0FBSixPQUFJLEtBQUosT0FBSSxRQThCaEI7QUFBRCxDQUFDLEVBOUJTLEVBQUUsS0FBRixFQUFFLFFBOEJYIiwiZmlsZSI6InNjcmlwdHMvbXVsdGl0cmVldmlld3MtZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGZpLnNlY28ua2hlcHJpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgaW1wb3J0IHMgPSBmaS5zZWNvLnNwYXJxbFxuICBpbnRlcmZhY2UgSU11bHRpVHJlZVZpZXdzU2NvcGUgZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XG4gICAgdmlld3M6IFRyZWVWaWV3W11cbiAgfVxuXG4gIGNsYXNzIFRyZWVWaWV3IHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZ1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nXG4gICAgcHVibGljIHZpZXdDb25maWd1cmF0aW9uOiBJVHJlZVZpZXdDb25maWd1cmF0aW9uXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElNdWx0aVRyZWVWaWV3c0NvbmZpZ3VyYXRpb24ge1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE11bHRpVHJlZVZpZXdzRGlyZWN0aXZlIGltcGxlbWVudHMgYW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgcmVzdHJpY3Q6IHN0cmluZyA9ICdFJ1xuICAgIHB1YmxpYyB0ZW1wbGF0ZVVybDogc3RyaW5nID0gJ3BhcnRpYWxzL211bHRpdHJlZXZpZXdzLmh0bWwnXG4gICAgcHVibGljIHNjb3BlOiB7W2lkOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgJ3ZpZXdJZCc6ICdAJyxcbiAgICAgICdxdWVyeUlkJzogJz0nXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BhcnFsU2VydmljZTogcy5TcGFycWxTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UpIHtcbiAgICB9XG4gICAgcHVibGljIGxpbms6ICguLi5hbnkpID0+IHZvaWQgPSAoJHNjb3BlOiBJTXVsdGlUcmVlVmlld3NTY29wZSwgZWxlbWVudDogSlF1ZXJ5LCBhdHRyOiBhbmd1bGFyLklBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAkc2NvcGUudmlld3MgPSBbIHtpZDogJ3Byb3BlcnR5LXRyZWUtdmlldycsIGxhYmVsOiAnRWR1Y2F0aW9uJywgdmlld0NvbmZpZ3VyYXRpb246IHRoaXMuY29uZmlnU2VydmljZS5jb25maWcudmlld0NvbmZpZ3VyYXRpb25bYXR0ci4kbm9ybWFsaXplKCdwcm9wZXJ0eS10cmVlLXZpZXcnKV0gfSBdXG4gICAgfVxuICB9XG59XG4iXX0=

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fi;
(function (fi) {
    var seco;
    (function (seco) {
        var khepri;
        (function (khepri) {
            'use strict';
            var s = fi.seco.sparql;
            var Data = (function () {
                function Data() {
                    this.matchesByYearAndQueryAndGroupAndAggregation = {};
                    this.totalsByYearAndGroupAndAggregation = {};
                    this.queries = {};
                    this.groups = {};
                    this.groupsByAggregation = {};
                    this.minYear = Number.MAX_VALUE;
                    this.maxYear = Number.MIN_VALUE;
                }
                return Data;
            }());
            var IdChart = (function (_super) {
                __extends(IdChart, _super);
                function IdChart(queryId, select) {
                    _super.call(this);
                    this.queryId = queryId;
                    this.select = select;
                }
                return IdChart;
            }(khepri.ChartDefinition));
            var Grouping = (function () {
                function Grouping(id, label) {
                    this.id = id;
                    this.label = label;
                }
                return Grouping;
            }());
            var MultiGoogleChartViewsDirective = (function () {
                function MultiGoogleChartViewsDirective(sparqlService, configService, stateService) {
                    var _this = this;
                    this.sparqlService = sparqlService;
                    this.configService = configService;
                    this.stateService = stateService;
                    this.restrict = 'E';
                    this.templateUrl = 'partials/multigooglechartviews.html';
                    this.scope = {
                        'viewId': '@',
                        'queries': '='
                    };
                    this.link = function ($scope, element, attr) {
                        var viewConfiguration = _this.configService.config.viewConfiguration[attr.$normalize($scope.viewId)];
                        $scope.avgType = 'total';
                        $scope.movingSpan = 20;
                        $scope.graphType = 'individual';
                        $scope.bootstraps = 1;
                        $scope.selectedGrouping = null;
                        _this.sparqlService.query(_this.configService.config.sparqlEndpoint, viewConfiguration.partitionsQuery).then(function (response) { return $scope.availableGroupings = response.data.results.bindings.map(function (b) { return new Grouping(b['property'].value, b['propertyLabel'].value); }); }, function (response) { return console.log(response); });
                        var selectListener = function (selection, chartDefinition, chart) {
                            var constraint;
                            if (selection.length !== 0) {
                                var year = chartDefinition.dataTable.getValue(selection[0].row, 0);
                                constraint = "?id cs:year ?year . FILTER (STRDT(?year,xsd:integer)>" + (year - $scope.movingSpan / 2) + " && STRDT(?year,xsd:integer)<" + (year + $scope.movingSpan / 2) + ") ";
                                var gtype = chartDefinition.dataTable.getColumnId(selection[0].column);
                                if (gtype)
                                    constraint += "?id crm:P28_custody_surrendered_by/<" + $scope.selectedGrouping.id + "> <" + gtype + "> .";
                            }
                            else
                                constraint = '';
                            _this.stateService.setConstraint(chartDefinition.queryId, $scope.viewId, new khepri.SimpleConstraint(constraint, 2));
                        };
                        var updateGraphs = function () {
                            var queryParts = viewConfiguration.graphQuery.split(/[\{\}] # \/?CONSTRAINTHOLDER/);
                            var sparqlQuery = queryParts[0];
                            $scope.queries.forEach(function (query) {
                                var regex = '(?:';
                                var constraints = _this.stateService.getQueryState(query.name).constraints;
                                for (var viewId in constraints) {
                                    if (constraints[viewId] instanceof khepri.TextSearchConstraint)
                                        regex += constraints[viewId].sparqlRegex + '|';
                                }
                                if (regex.charAt(regex.length - 1) === '|')
                                    regex = regex.substring(0, regex.length - 1);
                                regex += ')';
                                if (regex === '(?:)')
                                    regex = '^$';
                                var filter = {};
                                filter[$scope.viewId] = true;
                                var constraintString = _this.stateService.getConstraintString(query.name, filter);
                                sparqlQuery += '{' + queryParts[1].replace(/<QUERY_ID>/g, s.SparqlService.stringToSPARQLString(query.name)).replace(/# CONSTRAINTS/g, constraintString).replace(/<REGEX>/g, s.SparqlService.stringToSPARQLString(regex)) + '} UNION';
                            });
                            sparqlQuery = sparqlQuery.substring(0, sparqlQuery.length - 6) + queryParts[2];
                            var grouping = $scope.selectedGrouping ? "?id crm:P28_custody_surrendered_by/<" + $scope.selectedGrouping.id + "> ?group . ?group sf:preferredLanguageLiteral (skos:prefLabel rdfs:label 'en' '' ?l)" : '';
                            var aggregation;
                            switch ($scope.avgType) {
                                case 'total':
                                    aggregation = '';
                                    break;
                                case 'text':
                                    aggregation = 'BIND(?id AS ?aggrId)';
                                    break;
                                case 'author':
                                    aggregation = '?id crm:P28_custody_surrendered_by ?aggrId .';
                                    break;
                                default: throw 'Unknown avgType ' + $scope.avgType;
                            }
                            sparqlQuery = _this.configService.config.prefixes + sparqlQuery.replace(/# AGGREGATION/g, aggregation).replace(/# GROUPING/g, grouping);
                            _this.sparqlService.query(_this.configService.config.sparqlEndpoint, sparqlQuery).then(function (response) {
                                var d = MultiGoogleChartViewsDirective.processData(response.data.results.bindings);
                                var ocharts = {};
                                $scope.charts.forEach(function (c) { return ocharts[c.queryId] = c; });
                                if ($scope.graphType === 'scattercomparison') {
                                    if (!ocharts['scatterComparison'])
                                        $scope.charts = [new IdChart('scatterComparison', selectListener)];
                                }
                                else if (!$scope.separateGroups && $scope.graphType !== 'areacomparison')
                                    $scope.charts = $scope.queries.map(function (q) { return ocharts[q.name] ? ocharts[q.name] : new IdChart(q.name, selectListener); });
                                else
                                    $scope.charts = Object.keys(d.groups).map(function (g) { return ocharts[g] ? ocharts[g] : new IdChart(g, selectListener); });
                                var accumulatingMatchesByChart = [];
                                var accumulatingTotalByChart = [];
                                var chartIds;
                                var groupIds;
                                var chartTitles;
                                var groupTitles;
                                if ($scope.graphType === 'scattercomparison') {
                                    chartTitles = ['Scatterplot'];
                                }
                                else if ($scope.separateGroups || $scope.graphType === 'areacomparison') {
                                    chartIds = d.groups;
                                    chartTitles = [];
                                    for (var g in d.groups)
                                        chartTitles.push(d.groups[g]);
                                    groupIds = d.queries;
                                    groupTitles = Object.keys(d.queries);
                                }
                                else {
                                    chartIds = d.queries;
                                    chartTitles = Object.keys(d.queries);
                                    groupIds = d.groups;
                                    groupTitles = [];
                                    for (var g in d.groups)
                                        groupTitles.push(d.groups[g]);
                                }
                                $scope.charts.forEach(function (chart, index) {
                                    chart.dataTable = new google.visualization.DataTable();
                                    switch ($scope.graphType) {
                                        case 'areacomparison':
                                            chart.type = 'AreaChart';
                                            break;
                                        case 'individual':
                                            chart.type = 'LineChart';
                                            break;
                                        case 'scattercomparison':
                                            chart.type = 'MotionChart';
                                            break;
                                        default: throw 'Unknown graphType ' + $scope.graphType;
                                    }
                                    var series = {};
                                    if ($scope.graphType === 'scattercomparison')
                                        chart.dataTable.addColumn('string', 'id');
                                    chart.dataTable.addColumn('number', 'year');
                                    var k = 0;
                                    if ($scope.graphType !== 'scattercomparison')
                                        groupTitles.forEach(function (title, j) {
                                            chart.dataTable.addColumn({ id: groupIds[j], label: title, type: 'number' });
                                            if (!$scope.accumulation) {
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title, role: 'interval', type: 'number' });
                                            }
                                            series[k++] = { targetAxisIndex: 0 };
                                            if ($scope.graphType === 'individual' && ($scope.accumulation || !$scope.hideTotals)) {
                                                chart.dataTable.addColumn({ id: groupIds[j], label: title + ' total', type: 'number' });
                                                series[k++] = { targetAxisIndex: $scope.accumulation ? 0 : 1, lineWidth: 1, lineDashStyle: [5, 5], visibleInLegend: false };
                                            }
                                        });
                                    else {
                                        chart.dataTable.addColumn('number', 'percentage of ' + $scope.queries[1].name);
                                        chart.dataTable.addColumn('number', 'total number of matches');
                                        chart.dataTable.addColumn('string', $scope.selectedGrouping ? $scope.selectedGrouping.label : 'matching');
                                    }
                                    chart.options = {
                                        title: chartTitles[index],
                                        explorer: { keepInBounds: true, maxZoomOut: 1 },
                                        theme: 'material',
                                        isStacked: 'percent',
                                        hAxis: {
                                            title: 'year',
                                            format: '#'
                                        },
                                        intervals: { style: 'line' },
                                        series: series,
                                        vAxes: {
                                            0: { title: $scope.accumulation ? 'Percent' : 'Matches/million', minValue: 0, maxValue: $scope.graphType === 'areacomparison' ? 1 : 10 },
                                            1: { title: 'Count', gridlines: { color: 'none' }, minValue: 0, logScale: true }
                                        }
                                    };
                                    accumulatingMatchesByChart[index] = {};
                                    accumulatingTotalByChart[index] = {};
                                });
                                var rowsByChart = [];
                                rowsByChart.length = chartTitles.length;
                                for (var i = 0; i < rowsByChart.length; i++)
                                    rowsByChart[i] = [];
                                var mm = ($scope.accumulation && $scope.graphType === 'individual') ? 0 : Math.floor($scope.movingSpan / 2);
                                for (var year = d.minYear; year <= d.maxYear; year++) {
                                    var chartIndex = 0;
                                    if ($scope.graphType === 'scattercomparison') {
                                        var sumOfMatchesInSpanByAggregationAndQuery = {};
                                        var aggrIds = {};
                                        for (var queryId in d.queries)
                                            for (var group in d.groups)
                                                for (var i = year - mm; i <= year + mm; i++)
                                                    if (d.totalsByYearAndGroupAndAggregation[i]) {
                                                        if (d.matchesByYearAndQueryAndGroupAndAggregation[i] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group])
                                                            for (var aggrId in d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group]) {
                                                                aggrIds[aggrId] = true;
                                                                if (!sumOfMatchesInSpanByAggregationAndQuery[aggrId])
                                                                    sumOfMatchesInSpanByAggregationAndQuery[aggrId] = {};
                                                                if (!sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId])
                                                                    sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId] = d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId];
                                                                else
                                                                    sumOfMatchesInSpanByAggregationAndQuery[aggrId][queryId] += d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId];
                                                            }
                                                    }
                                        var queryNames = Object.keys(d.queries);
                                        for (var id in aggrIds) {
                                            var row = [id, year, 100 * sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]] / (sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]] + sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[0]]), sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[0]] + sumOfMatchesInSpanByAggregationAndQuery[id][queryNames[1]]];
                                            for (var g in d.groupsByAggregation[id]) {
                                                var nrow = row.slice();
                                                nrow.push(g);
                                                rowsByChart[0].push(nrow);
                                            }
                                        }
                                    }
                                    else
                                        for (var chartId in chartIds) {
                                            var row = [];
                                            row.push(year);
                                            for (var groupId in groupIds) {
                                                var queryId = void 0;
                                                var group = void 0;
                                                if ($scope.separateGroups || $scope.graphType === 'areacomparison') {
                                                    queryId = groupId;
                                                    group = chartId;
                                                }
                                                else {
                                                    queryId = chartId;
                                                    group = groupId;
                                                }
                                                var sumOfMatchesInSpanByAggregation = [];
                                                var sumOfTotalsInSpanByAggregation = [];
                                                var sumOfTotalsInSpan = [];
                                                for (var k = 0; k < $scope.bootstraps; k++) {
                                                    sumOfTotalsInSpan[k] = 0;
                                                    sumOfTotalsInSpanByAggregation[k] = {};
                                                    sumOfMatchesInSpanByAggregation[k] = {};
                                                }
                                                for (var i = year - mm; i <= year + mm; i++)
                                                    if (d.totalsByYearAndGroupAndAggregation[i] && d.totalsByYearAndGroupAndAggregation[i][group]) {
                                                        for (var k = 0; k < $scope.bootstraps; k++) {
                                                            var allAggrIds = Object.keys(d.totalsByYearAndGroupAndAggregation[i][group]);
                                                            var aggrIds = [];
                                                            if ($scope.bootstraps === 1)
                                                                aggrIds = allAggrIds;
                                                            else
                                                                for (var l = 0; l < allAggrIds.length; l++)
                                                                    aggrIds[l] = allAggrIds[Math.floor(Math.random() * allAggrIds.length)];
                                                            if (d.matchesByYearAndQueryAndGroupAndAggregation[i] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId] && d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group])
                                                                for (var j = 0; j < aggrIds.length; j++) {
                                                                    var aggrId = aggrIds[j];
                                                                    if (d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId]) {
                                                                        if (!sumOfMatchesInSpanByAggregation[k][aggrId])
                                                                            sumOfMatchesInSpanByAggregation[k][aggrId] = d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId];
                                                                        else
                                                                            sumOfMatchesInSpanByAggregation[k][aggrId] += d.matchesByYearAndQueryAndGroupAndAggregation[i][queryId][group][aggrId];
                                                                    }
                                                                }
                                                            if (d.totalsByYearAndGroupAndAggregation[i][group])
                                                                for (var j = 0; j < aggrIds.length; j++) {
                                                                    var aggrId = aggrIds[j];
                                                                    if (!sumOfTotalsInSpanByAggregation[k][aggrId])
                                                                        sumOfTotalsInSpanByAggregation[k][aggrId] = d.totalsByYearAndGroupAndAggregation[i][group][aggrId];
                                                                    else
                                                                        sumOfTotalsInSpanByAggregation[k][aggrId] += d.totalsByYearAndGroupAndAggregation[i][group][aggrId];
                                                                    sumOfTotalsInSpan[k] += d.totalsByYearAndGroupAndAggregation[i][group][aggrId];
                                                                }
                                                        }
                                                    }
                                                var sumOfAverages = [];
                                                for (var k = 0; k < $scope.bootstraps; k++) {
                                                    sumOfAverages[k] = 0;
                                                    for (var aggrId in sumOfTotalsInSpanByAggregation[k])
                                                        if (sumOfTotalsInSpanByAggregation[k][aggrId])
                                                            sumOfAverages[k] += 1000000 * (sumOfMatchesInSpanByAggregation[k][aggrId] ? sumOfMatchesInSpanByAggregation[k][aggrId] : 0) / sumOfTotalsInSpanByAggregation[k][aggrId];
                                                }
                                                sumOfAverages.sort(function (a, b) { return a - b; });
                                                if ($scope.accumulation && $scope.graphType === 'individual') {
                                                    if (!accumulatingTotalByChart[chartIndex][group]) {
                                                        accumulatingTotalByChart[chartIndex][group] = 0;
                                                        accumulatingMatchesByChart[chartIndex][group] = 0;
                                                    }
                                                    var point = Math.floor($scope.bootstraps / 2);
                                                    accumulatingMatchesByChart[chartIndex][group] += Object.keys(sumOfTotalsInSpanByAggregation[point]).length !== 0 ? sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length : 0;
                                                    accumulatingTotalByChart[chartIndex][group] += sumOfTotalsInSpan[Math.floor($scope.bootstraps / 2)];
                                                    row.push(accumulatingMatchesByChart[chartIndex][group]);
                                                    row.push(accumulatingTotalByChart[chartIndex][group]);
                                                }
                                                else {
                                                    if (Object.keys(sumOfTotalsInSpanByAggregation).length !== 0) {
                                                        var point = Math.floor($scope.bootstraps / 2);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = Math.floor($scope.bootstraps / 100);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = Math.floor($scope.bootstraps / 20);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = Math.floor($scope.bootstraps / 10);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 10);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 20);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                        point = $scope.bootstraps - 1 - Math.floor($scope.bootstraps / 100);
                                                        row.push(sumOfAverages[point] / Object.keys(sumOfTotalsInSpanByAggregation[point]).length);
                                                    }
                                                    else {
                                                        row.push(0);
                                                        row.push(0);
                                                        row.push(0);
                                                        row.push(0);
                                                        row.push(0);
                                                        row.push(0);
                                                        row.push(0);
                                                    }
                                                    if (!$scope.hideTotals && $scope.graphType === 'individual')
                                                        row.push(sumOfTotalsInSpan[Math.floor($scope.bootstraps / 2)]);
                                                }
                                            }
                                            rowsByChart[chartIndex++].push(row);
                                        }
                                }
                                if ($scope.accumulation && $scope.graphType === 'individual')
                                    rowsByChart.forEach(function (rows, index) {
                                        return rows.forEach(function (r) {
                                            var i = 1;
                                            Object.keys(d.groups).forEach(function (g) {
                                                r[i] = 100 * r[i++] / accumulatingMatchesByChart[index][g];
                                                r[i] = 100 * r[i++] / accumulatingTotalByChart[index][g];
                                            });
                                        });
                                    });
                                rowsByChart.forEach(function (rows, index) { return $scope.charts[index].dataTable.addRows(rows); });
                            }, function (response) { return console.log(response); });
                        };
                        $scope.$watchCollection('[selectedGrouping, graphType, movingSpan, hideTotals, avgType, separateGroups, accumulation, bootstraps]', function (nv, ov) {
                            if (nv !== ov)
                                updateGraphs();
                        });
                        $scope.$on('updateConstraint', function (e, queryId, viewId) {
                            if (viewId !== $scope.viewId)
                                updateGraphs();
                        });
                        $scope.charts = [];
                        $scope.$watch(function () { return $scope.queries.map(function (q) { return q.name; }); }, function (nv, ov) {
                            updateGraphs();
                        }, true);
                        $scope.$watchCollection('queries', function (nv, ov) {
                            if (nv !== ov) {
                                updateGraphs();
                            }
                        });
                        updateGraphs();
                    };
                }
                MultiGoogleChartViewsDirective.processData = function (bindings) {
                    var d = new Data();
                    var i = 0;
                    while (!bindings[i]['queryId']) {
                        var b = bindings[i++];
                        var year = parseInt(b['year'].value, 10);
                        if (year > d.maxYear)
                            d.maxYear = year;
                        if (year < d.minYear)
                            d.minYear = year;
                        if (!d.totalsByYearAndGroupAndAggregation[year])
                            d.totalsByYearAndGroupAndAggregation[year] = {};
                        var g = b['group'] ? b['group'].value : 'matching';
                        if (!d.totalsByYearAndGroupAndAggregation[year][g])
                            d.totalsByYearAndGroupAndAggregation[year][g] = {};
                        var a = b['aggrId'] ? b['aggrId'].value : '';
                        if (!d.groupsByAggregation[a])
                            d.groupsByAggregation[a] = {};
                        d.groupsByAggregation[a][g] = true;
                        d.totalsByYearAndGroupAndAggregation[year][g][a] = parseInt(b['total'].value, 10);
                        d.groups[g] = b['groupLabel'] ? b['groupLabel'].value : g;
                    }
                    while (i < bindings.length) {
                        var b = bindings[i++];
                        var year = parseInt(b['year'].value, 10);
                        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year])
                            d.matchesByYearAndQueryAndGroupAndAggregation[year] = {};
                        var q = b['queryId'].value;
                        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year][q])
                            d.matchesByYearAndQueryAndGroupAndAggregation[year][q] = {};
                        var g = b['group'] ? b['group'].value : 'matching';
                        if (!d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g])
                            d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g] = {};
                        d.queries[q] = true;
                        var a = b['aggrId'] ? b['aggrId'].value : '';
                        d.matchesByYearAndQueryAndGroupAndAggregation[year][q][g][a] = parseInt(b['matching'].value, 10);
                    }
                    return d;
                };
                return MultiGoogleChartViewsDirective;
            }());/*<auto_generate>*/angular.module('app').directive('multiGoogleChartViews',['sparqlService','configService','stateService',function(){return new (Function.prototype.bind.apply(MultiGoogleChartViewsDirective,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
            khepri.MultiGoogleChartViewsDirective = MultiGoogleChartViewsDirective;
        })(khepri = seco.khepri || (seco.khepri = {}));
    })(seco = fi.seco || (fi.seco = {}));
})(fi || (fi = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL211bHRpZ29vZ2xlY2hhcnR2aWV3cy1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFVLEVBQUUsQ0EyWFg7QUEzWEQsV0FBVSxFQUFFO0lBQUMsSUFBQSxJQUFJLENBMlhoQjtJQTNYWSxXQUFBLElBQUk7UUFBQyxJQUFBLE1BQU0sQ0EyWHZCO1FBM1hpQixXQUFBLE1BQU0sRUFBQyxDQUFDO1lBQ3hCLFlBQVksQ0FBQTtZQUVaLElBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBd0J6QjtnQkFBQTtvQkFDUyxnREFBMkMsR0FBMkUsRUFBRSxDQUFBO29CQUN4SCx1Q0FBa0MsR0FBMkQsRUFBRSxDQUFBO29CQUMvRixZQUFPLEdBQTRCLEVBQUUsQ0FBQTtvQkFDckMsV0FBTSxHQUEyQixFQUFFLENBQUE7b0JBQ25DLHdCQUFtQixHQUE0QyxFQUFFLENBQUE7b0JBQ2pFLFlBQU8sR0FBVyxNQUFNLENBQUMsU0FBUyxDQUFBO29CQUNsQyxZQUFPLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQTtnQkFDM0MsQ0FBQztnQkFBRCxXQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDtnQkFBc0IsMkJBQWU7Z0JBQ25DLGlCQUNTLE9BQWUsRUFDZixNQUFpSjtvQkFDdEosaUJBQU8sQ0FBQTtvQkFGRixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLFdBQU0sR0FBTixNQUFNLENBQTJJO2dCQUM5SSxDQUFDO2dCQUNmLGNBQUM7WUFBRCxDQUxBLEFBS0MsQ0FMcUIsc0JBQWUsR0FLcEM7WUFFRDtnQkFDRSxrQkFBbUIsRUFBVSxFQUFTLEtBQWE7b0JBQWhDLE9BQUUsR0FBRixFQUFFLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFBRyxDQUFDO2dCQUN6RCxlQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFFRDtnQkFPRSx3Q0FBb0IsYUFBOEIsRUFB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SyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO29DQUMzQyxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUE7b0NBQ2pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssbUJBQW1CLENBQUM7d0NBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWEsRUFBRSxDQUFTOzRDQUN6RixLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTs0Q0FDMUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnREFDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtnREFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtnREFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtnREFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtnREFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtnREFDNUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTs0Q0FDOUYsQ0FBQzs0Q0FDRCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQTs0Q0FDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQztnREFDdEYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO2dEQUNyRixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFBOzRDQUMzSCxDQUFDO3dDQUNILENBQUMsQ0FBQyxDQUFDO29DQUFDLElB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LENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQTt3REFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dEQUMxRixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFBO3dEQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7d0RBQzFGLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUE7d0RBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTt3REFDMUYsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQTt3REFDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dEQUMxRixLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBO3dEQUNsRSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsSUFB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d3MtZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGZpLnNlY28ua2hlcHJpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgaW1wb3J0IHMgPSBmaS5zZWNvLnNwYXJxbFxuXG4gIGludGVyZmFjZSBJTXVsdGlHb29nbGVDaGFydFZpZXdzU2NvcGUgZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XG4gICAgc2VsZWN0ZWRHcm91cGluZzogR3JvdXBpbmdcbiAgICBhdmFpbGFibGVHcm91cGluZ3M6IEdyb3VwaW5nW11cbiAgICBncmFwaFR5cGU6IHN0cmluZ1xuICAgIG1vdmluZ1NwYW46IG51bWJlclxuICAgIGF2Z1R5cGU6IHN0cmluZ1xuICAgIHF1ZXJpZXM6IFF1ZXJ5W11cbiAgICBjaGFydHM6IElkQ2hhcnRbXVxuICAgIHZpZXdJZDogc3RyaW5nXG4gICAgaGlkZVRvdGFsczogYm9vbGVhblxuICAgIHNlcGFyYXRlR3JvdXBzOiBib29sZWFuXG4gICAgYWNjdW11bGF0aW9uOiBib29sZWFuXG4gICAgYm9vdHN0cmFwczogbnVtYmVyXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIElNdWx0aUdvb2dsZUNoYXJ0Vmlld3NDb25maWd1cmF0aW9uIHtcbiAgICBwYXJ0aXRpb25zUXVlcnk6IHN0cmluZ1xuICAgIGdyYXBoUXVlcnk6IHN0cmluZ1xuICAgIGNvbnN0cmFpbnRTdHJpbmc6IHN0cmluZ1xuICAgIGdyb3VwaW5nU3RyaW5nOiBzdHJpbmdcbiAgfVxuXG4gIGNsYXNzIERhdGEge1xuICAgIHB1YmxpYyBtYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uOiB7W2lkOiBudW1iZXJdOiB7W2lkOiBzdHJpbmddOiB7W2lkOiBzdHJpbmddOiB7W2lkOiBzdHJpbmddOiBudW1iZXJ9fX19ID0ge31cbiAgICBwdWJsaWMgdG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvbjoge1tpZDogbnVtYmVyXToge1tpZDogc3RyaW5nXToge1tpZDogc3RyaW5nXTogbnVtYmVyfX19ID0ge31cbiAgICBwdWJsaWMgcXVlcmllczoge1tpZDogc3RyaW5nXTogYm9vbGVhbn0gPSB7fVxuICAgIHB1YmxpYyBncm91cHM6IHtbaWQ6IHN0cmluZ106IHN0cmluZ30gPSB7fVxuICAgIHB1YmxpYyBncm91cHNCeUFnZ3JlZ2F0aW9uOiB7W2lkOiBzdHJpbmddOiB7W2lkOiBzdHJpbmddOiBib29sZWFufX0gPSB7fVxuICAgIHB1YmxpYyBtaW5ZZWFyOiBudW1iZXIgPSBOdW1iZXIuTUFYX1ZBTFVFXG4gICAgcHVibGljIG1heFllYXI6IG51bWJlciA9IE51bWJlci5NSU5fVkFMVUVcbiAgfVxuXG4gIGNsYXNzIElkQ2hhcnQgZXh0ZW5kcyBDaGFydERlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHF1ZXJ5SWQ6IHN0cmluZyxcbiAgICAgIHB1YmxpYyBzZWxlY3Q6IChzZWxlY3Rpb246IGdvb2dsZS52aXN1YWxpemF0aW9uLlZpc3VhbGl6YXRpb25TZWxlY3Rpb25BcnJheSwgY2hhcnREZWZpbml0aW9uOiBJZENoYXJ0LCBjaGFydDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKSA9PiB2b2lkXG4gICAgKSB7IHN1cGVyKCkgfVxuICB9XG5cbiAgY2xhc3MgR3JvdXBpbmcge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgbGFiZWw6IHN0cmluZykge31cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBNdWx0aUdvb2dsZUNoYXJ0Vmlld3NEaXJlY3RpdmUgaW1wbGVtZW50cyBhbmd1bGFyLklEaXJlY3RpdmUge1xuICAgIHB1YmxpYyByZXN0cmljdDogc3RyaW5nID0gJ0UnXG4gICAgcHVibGljIHRlbXBsYXRlVXJsOiBzdHJpbmcgPSAncGFydGlhbHMvbXVsdGlnb29nbGVjaGFydHZpZXdzLmh0bWwnXG4gICAgcHVibGljIHNjb3BlOiB7W2lkOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgJ3ZpZXdJZCc6ICdAJyxcbiAgICAgICdxdWVyaWVzJzogJz0nXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BhcnFsU2VydmljZTogcy5TcGFycWxTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2UpIHtcbiAgICB9XG4gICAgcHVibGljIGxpbms6ICguLi5hbnkpID0+IHZvaWQgPSAoJHNjb3BlOiBJTXVsdGlHb29nbGVDaGFydFZpZXdzU2NvcGUsIGVsZW1lbnQ6IEpRdWVyeSwgYXR0cjogYW5ndWxhci5JQXR0cmlidXRlcykgPT4ge1xuICAgICAgbGV0IHZpZXdDb25maWd1cmF0aW9uOiBJTXVsdGlHb29nbGVDaGFydFZpZXdzQ29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWcudmlld0NvbmZpZ3VyYXRpb25bYXR0ci4kbm9ybWFsaXplKCRzY29wZS52aWV3SWQpXVxuICAgICAgJHNjb3BlLmF2Z1R5cGUgPSAndG90YWwnXG4gICAgICAkc2NvcGUubW92aW5nU3BhbiA9IDIwXG4gICAgICAkc2NvcGUuZ3JhcGhUeXBlID0gJ2luZGl2aWR1YWwnXG4gICAgICAkc2NvcGUuYm9vdHN0cmFwcyA9IDFcbiAgICAgICRzY29wZS5zZWxlY3RlZEdyb3VwaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuc3BhcnFsU2VydmljZS5xdWVyeSh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnLnNwYXJxbEVuZHBvaW50LCB2aWV3Q29uZmlndXJhdGlvbi5wYXJ0aXRpb25zUXVlcnkpLnRoZW4oXG4gICAgICAgIChyZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZyA8cy5JU3BhcnFsQmluZGluZ1Jlc3VsdDx7W2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nfT4+KSA9PiAkc2NvcGUuYXZhaWxhYmxlR3JvdXBpbmdzID0gcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzLm1hcChiID0+IG5ldyBHcm91cGluZyhiWydwcm9wZXJ0eSddLnZhbHVlLCBiWydwcm9wZXJ0eUxhYmVsJ10udmFsdWUpKVxuICAgICAgICAsXG4gICAgICAgIChyZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZyA8c3RyaW5nPikgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICApXG4gICAgICBsZXQgc2VsZWN0TGlzdGVuZXI6IChzZWxlY3Rpb246IGdvb2dsZS52aXN1YWxpemF0aW9uLlZpc3VhbGl6YXRpb25TZWxlY3Rpb25BcnJheVtdLCBjaGFydERlZmluaXRpb246IElkQ2hhcnQsIGNoYXJ0OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIpID0+IHZvaWQgPSAoc2VsZWN0aW9uOiBnb29nbGUudmlzdWFsaXphdGlvbi5WaXN1YWxpemF0aW9uU2VsZWN0aW9uQXJyYXlbXSwgY2hhcnREZWZpbml0aW9uOiBJZENoYXJ0LCBjaGFydDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKSA9PiB7XG4gICAgICAgIGxldCBjb25zdHJhaW50OiBzdHJpbmdcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBsZXQgeWVhcjogbnVtYmVyID0gY2hhcnREZWZpbml0aW9uLmRhdGFUYWJsZS5nZXRWYWx1ZShzZWxlY3Rpb25bMF0ucm93LCAwKVxuICAgICAgICAgIGNvbnN0cmFpbnQgPSBgP2lkIGNzOnllYXIgP3llYXIgLiBGSUxURVIgKFNUUkRUKD95ZWFyLHhzZDppbnRlZ2VyKT4ke3llYXIgLSAkc2NvcGUubW92aW5nU3BhbiAvIDJ9ICYmIFNUUkRUKD95ZWFyLHhzZDppbnRlZ2VyKTwke3llYXIgKyAkc2NvcGUubW92aW5nU3BhbiAvIDJ9KSBgXG4gICAgICAgICAgbGV0IGd0eXBlOiBzdHJpbmcgPSBjaGFydERlZmluaXRpb24uZGF0YVRhYmxlLmdldENvbHVtbklkKHNlbGVjdGlvblswXS5jb2x1bW4pXG4gICAgICAgICAgaWYgKGd0eXBlKSBjb25zdHJhaW50ICs9IGA/aWQgY3JtOlAyOF9jdXN0b2R5X3N1cnJlbmRlcmVkX2J5LzwkeyRzY29wZS5zZWxlY3RlZEdyb3VwaW5nLmlkfT4gPCR7Z3R5cGV9PiAuYFxuICAgICAgICB9IGVsc2UgY29uc3RyYWludCA9ICcnXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnNldENvbnN0cmFpbnQoY2hhcnREZWZpbml0aW9uLnF1ZXJ5SWQsICRzY29wZS52aWV3SWQsIG5ldyBTaW1wbGVDb25zdHJhaW50KGNvbnN0cmFpbnQsIDIpKVxuICAgICAgfVxuICAgICAgbGV0IHVwZGF0ZUdyYXBoczogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJ0czogc3RyaW5nW10gPSB2aWV3Q29uZmlndXJhdGlvbi5ncmFwaFF1ZXJ5LnNwbGl0KC9bXFx7XFx9XSAjIFxcLz9DT05TVFJBSU5USE9MREVSLylcbiAgICAgICAgbGV0IHNwYXJxbFF1ZXJ5OiBzdHJpbmcgPSBxdWVyeVBhcnRzWzBdXG4gICAgICAgICRzY29wZS5xdWVyaWVzLmZvckVhY2gocXVlcnkgPT4ge1xuICAgICAgICAgIGxldCByZWdleDogc3RyaW5nID0gJyg/OidcbiAgICAgICAgICBsZXQgY29uc3RyYWludHM6IHtbaWQ6IHN0cmluZ106IElDb25zdHJhaW50fSA9IHRoaXMuc3RhdGVTZXJ2aWNlLmdldFF1ZXJ5U3RhdGUocXVlcnkubmFtZSkuY29uc3RyYWludHNcbiAgICAgICAgICBmb3IgKGxldCB2aWV3SWQgaW4gY29uc3RyYWludHMpIHtcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50c1t2aWV3SWRdIGluc3RhbmNlb2YgVGV4dFNlYXJjaENvbnN0cmFpbnQpIHJlZ2V4ICs9ICg8VGV4dFNlYXJjaENvbnN0cmFpbnQ+Y29uc3RyYWludHNbdmlld0lkXSkuc3BhcnFsUmVnZXggKyAnfCdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlZ2V4LmNoYXJBdChyZWdleC5sZW5ndGggLSAxKSA9PT0gJ3wnKSByZWdleCA9IHJlZ2V4LnN1YnN0cmluZygwLCByZWdleC5sZW5ndGggLSAxKVxuICAgICAgICAgIHJlZ2V4ICs9ICcpJ1xuICAgICAgICAgIGlmIChyZWdleCA9PT0gJyg/OiknKSByZWdleCA9ICdeJCdcbiAgICAgICAgICBsZXQgZmlsdGVyOiB7W2lkOiBzdHJpbmddOiBib29sZWFufSA9IHt9XG4gICAgICAgICAgZmlsdGVyWyRzY29wZS52aWV3SWRdID0gdHJ1ZVxuICAgICAgICAgIGxldCBjb25zdHJhaW50U3RyaW5nOiBzdHJpbmcgPSB0aGlzLnN0YXRlU2VydmljZS5nZXRDb25zdHJhaW50U3RyaW5nKHF1ZXJ5Lm5hbWUsIGZpbHRlcilcbiAgICAgICAgICBzcGFycWxRdWVyeSArPSAneycgKyBxdWVyeVBhcnRzWzFdLnJlcGxhY2UoLzxRVUVSWV9JRD4vZywgcy5TcGFycWxTZXJ2aWNlLnN0cmluZ1RvU1BBUlFMU3RyaW5nKHF1ZXJ5Lm5hbWUpKS5yZXBsYWNlKC8jIENPTlNUUkFJTlRTL2csIGNvbnN0cmFpbnRTdHJpbmcpLnJlcGxhY2UoLzxSRUdFWD4vZywgcy5TcGFycWxTZXJ2aWNlLnN0cmluZ1RvU1BBUlFMU3RyaW5nKHJlZ2V4KSkgKyAnfSBVTklPTidcbiAgICAgICAgfSlcbiAgICAgICAgc3BhcnFsUXVlcnkgPSBzcGFycWxRdWVyeS5zdWJzdHJpbmcoMCwgc3BhcnFsUXVlcnkubGVuZ3RoIC0gNikgKyBxdWVyeVBhcnRzWzJdXG4gICAgICAgIGxldCBncm91cGluZzogc3RyaW5nID0gJHNjb3BlLnNlbGVjdGVkR3JvdXBpbmcgPyBgP2lkIGNybTpQMjhfY3VzdG9keV9zdXJyZW5kZXJlZF9ieS88JHskc2NvcGUuc2VsZWN0ZWRHcm91cGluZy5pZH0+ID9ncm91cCAuID9ncm91cCBzZjpwcmVmZXJyZWRMYW5ndWFnZUxpdGVyYWwgKHNrb3M6cHJlZkxhYmVsIHJkZnM6bGFiZWwgJ2VuJyAnJyA/bClgIDogJyc7XG4gICAgICAgIGxldCBhZ2dyZWdhdGlvbjogc3RyaW5nXG4gICAgICAgIHN3aXRjaCAoJHNjb3BlLmF2Z1R5cGUpIHtcbiAgICAgICAgICBjYXNlICd0b3RhbCc6IGFnZ3JlZ2F0aW9uID0gJyc7IGJyZWFrXG4gICAgICAgICAgY2FzZSAndGV4dCc6IGFnZ3JlZ2F0aW9uID0gJ0JJTkQoP2lkIEFTID9hZ2dySWQpJzsgYnJlYWtcbiAgICAgICAgICBjYXNlICdhdXRob3InOiBhZ2dyZWdhdGlvbiA9ICc/aWQgY3JtOlAyOF9jdXN0b2R5X3N1cnJlbmRlcmVkX2J5ID9hZ2dySWQgLic7IGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDogdGhyb3cgJ1Vua25vd24gYXZnVHlwZSAnICsgJHNjb3BlLmF2Z1R5cGVcbiAgICAgICAgfVxuICAgICAgICBzcGFycWxRdWVyeSA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWcucHJlZml4ZXMgKyBzcGFycWxRdWVyeS5yZXBsYWNlKC8jIEFHR1JFR0FUSU9OL2csIGFnZ3JlZ2F0aW9uKS5yZXBsYWNlKC8jIEdST1VQSU5HL2csIGdyb3VwaW5nKVxuICAgICAgICB0aGlzLnNwYXJxbFNlcnZpY2UucXVlcnkodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZy5zcGFycWxFbmRwb2ludCwgc3BhcnFsUXVlcnkpLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPHMuSVNwYXJxbEJpbmRpbmdSZXN1bHQ8e1tpZDogc3RyaW5nXTogcy5JU3BhcnFsQmluZGluZ30+PikgPT4ge1xuICAgICAgICAgICAgbGV0IGQ6IERhdGEgPSBNdWx0aUdvb2dsZUNoYXJ0Vmlld3NEaXJlY3RpdmUucHJvY2Vzc0RhdGEocmVzcG9uc2UuZGF0YS5yZXN1bHRzLmJpbmRpbmdzKVxuICAgICAgICAgICAgbGV0IG9jaGFydHM6IHtbbmFtZTogc3RyaW5nXTogSWRDaGFydH0gPSB7fVxuICAgICAgICAgICAgJHNjb3BlLmNoYXJ0cy5mb3JFYWNoKGMgPT4gb2NoYXJ0c1tjLnF1ZXJ5SWRdID0gYylcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JhcGhUeXBlID09PSAnc2NhdHRlcmNvbXBhcmlzb24nKSB7IGlmICghb2NoYXJ0c1snc2NhdHRlckNvbXBhcmlzb24nXSkgJHNjb3BlLmNoYXJ0cyA9IFsgbmV3IElkQ2hhcnQoJ3NjYXR0ZXJDb21wYXJpc29uJywgc2VsZWN0TGlzdGVuZXIpIF0gfVxuICAgICAgICAgICAgZWxzZSBpZiAoISRzY29wZS5zZXBhcmF0ZUdyb3VwcyAmJiAkc2NvcGUuZ3JhcGhUeXBlICE9PSAnYXJlYWNvbXBhcmlzb24nKSAkc2NvcGUuY2hhcnRzID0gJHNjb3BlLnF1ZXJpZXMubWFwKHEgPT4gb2NoYXJ0c1txLm5hbWVdID8gb2NoYXJ0c1txLm5hbWVdIDogbmV3IElkQ2hhcnQocS5uYW1lLCBzZWxlY3RMaXN0ZW5lcikpXG4gICAgICAgICAgICBlbHNlICRzY29wZS5jaGFydHMgPSBPYmplY3Qua2V5cyhkLmdyb3VwcykubWFwKGcgPT4gb2NoYXJ0c1tnXSA/IG9jaGFydHNbZ10gOiBuZXcgSWRDaGFydChnLCBzZWxlY3RMaXN0ZW5lcikpXG4gICAgICAgICAgICBsZXQgYWNjdW11bGF0aW5nTWF0Y2hlc0J5Q2hhcnQ6IHtbaWQ6IHN0cmluZ106IG51bWJlcn1bXSA9IFtdXG4gICAgICAgICAgICBsZXQgYWNjdW11bGF0aW5nVG90YWxCeUNoYXJ0OiB7W2lkOiBzdHJpbmddOiBudW1iZXJ9W10gPSBbXVxuICAgICAgICAgICAgbGV0IGNoYXJ0SWRzOiB7W2lkOiBzdHJpbmddOiBhbnl9XG4gICAgICAgICAgICBsZXQgZ3JvdXBJZHM6IHtbaWQ6IHN0cmluZ106IGFueX1cbiAgICAgICAgICAgIGxldCBjaGFydFRpdGxlczogc3RyaW5nW11cbiAgICAgICAgICAgIGxldCBncm91cFRpdGxlczogc3RyaW5nW11cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JhcGhUeXBlID09PSAnc2NhdHRlcmNvbXBhcmlzb24nKSB7XG4gICAgICAgICAgICAgIGNoYXJ0VGl0bGVzID0gWyAnU2NhdHRlcnBsb3QnIF1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNlcGFyYXRlR3JvdXBzIHx8ICRzY29wZS5ncmFwaFR5cGUgPT09ICdhcmVhY29tcGFyaXNvbicpIHtcbiAgICAgICAgICAgICAgY2hhcnRJZHMgPSBkLmdyb3Vwc1xuICAgICAgICAgICAgICBjaGFydFRpdGxlcyA9IFtdXG4gICAgICAgICAgICAgIGZvciAobGV0IGcgaW4gZC5ncm91cHMpIGNoYXJ0VGl0bGVzLnB1c2goZC5ncm91cHNbZ10pXG4gICAgICAgICAgICAgIGdyb3VwSWRzID0gZC5xdWVyaWVzXG4gICAgICAgICAgICAgIGdyb3VwVGl0bGVzID0gT2JqZWN0LmtleXMoZC5xdWVyaWVzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hhcnRJZHMgPSBkLnF1ZXJpZXNcbiAgICAgICAgICAgICAgY2hhcnRUaXRsZXMgPSBPYmplY3Qua2V5cyhkLnF1ZXJpZXMpXG4gICAgICAgICAgICAgIGdyb3VwSWRzID0gZC5ncm91cHNcbiAgICAgICAgICAgICAgZ3JvdXBUaXRsZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKGxldCBnIGluIGQuZ3JvdXBzKSBncm91cFRpdGxlcy5wdXNoKGQuZ3JvdXBzW2ddKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHNjb3BlLmNoYXJ0cy5mb3JFYWNoKChjaGFydDogQ2hhcnREZWZpbml0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNoYXJ0LmRhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKVxuICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5ncmFwaFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhcmVhY29tcGFyaXNvbicgOiBjaGFydC50eXBlID0gJ0FyZWFDaGFydCc7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnaW5kaXZpZHVhbCcgOiBjaGFydC50eXBlID0gJ0xpbmVDaGFydCc7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAnc2NhdHRlcmNvbXBhcmlzb24nIDogY2hhcnQudHlwZSA9ICdNb3Rpb25DaGFydCc7IGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgJ1Vua25vd24gZ3JhcGhUeXBlICcgKyAkc2NvcGUuZ3JhcGhUeXBlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IHNlcmllczoge30gPSB7fVxuICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyYXBoVHlwZSA9PT0gJ3NjYXR0ZXJjb21wYXJpc29uJykgY2hhcnQuZGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ2lkJylcbiAgICAgICAgICAgICAgY2hhcnQuZGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3llYXInKVxuICAgICAgICAgICAgICBsZXQgazogbnVtYmVyID0gMFxuICAgICAgICAgICAgICBpZiAoJHNjb3BlLmdyYXBoVHlwZSAhPT0gJ3NjYXR0ZXJjb21wYXJpc29uJykgZ3JvdXBUaXRsZXMuZm9yRWFjaCgodGl0bGU6IHN0cmluZywgajogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhcnQuZGF0YVRhYmxlLmFkZENvbHVtbih7aWQ6IGdyb3VwSWRzW2pdLCBsYWJlbDogdGl0bGUsIHR5cGU6ICdudW1iZXInfSlcbiAgICAgICAgICAgICAgICBpZiAoISRzY29wZS5hY2N1bXVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIGNoYXJ0LmRhdGFUYWJsZS5hZGRDb2x1bW4oe2lkOiBncm91cElkc1tqXSwgbGFiZWw6IHRpdGxlLCByb2xlOiAnaW50ZXJ2YWwnLCB0eXBlOiAnbnVtYmVyJ30pXG4gICAgICAgICAgICAgICAgICBjaGFydC5kYXRhVGFibGUuYWRkQ29sdW1uKHtpZDogZ3JvdXBJZHNbal0sIGxhYmVsOiB0aXRsZSwgcm9sZTogJ2ludGVydmFsJywgdHlwZTogJ251bWJlcid9KVxuICAgICAgICAgICAgICAgICAgY2hhcnQuZGF0YVRhYmxlLmFkZENvbHVtbih7aWQ6IGdyb3VwSWRzW2pdLCBsYWJlbDogdGl0bGUsIHJvbGU6ICdpbnRlcnZhbCcsIHR5cGU6ICdudW1iZXInfSlcbiAgICAgICAgICAgICAgICAgIGNoYXJ0LmRhdGFUYWJsZS5hZGRDb2x1bW4oe2lkOiBncm91cElkc1tqXSwgbGFiZWw6IHRpdGxlLCByb2xlOiAnaW50ZXJ2YWwnLCB0eXBlOiAnbnVtYmVyJ30pXG4gICAgICAgICAgICAgICAgICBjaGFydC5kYXRhVGFibGUuYWRkQ29sdW1uKHtpZDogZ3JvdXBJZHNbal0sIGxhYmVsOiB0aXRsZSwgcm9sZTogJ2ludGVydmFsJywgdHlwZTogJ251bWJlcid9KVxuICAgICAgICAgICAgICAgICAgY2hhcnQuZGF0YVRhYmxlLmFkZENvbHVtbih7aWQ6IGdyb3VwSWRzW2pdLCBsYWJlbDogdGl0bGUsIHJvbGU6ICdpbnRlcnZhbCcsIHR5cGU6ICdudW1iZXInfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VyaWVzW2srK10gPSB7dGFyZ2V0QXhpc0luZGV4OiAwfVxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZ3JhcGhUeXBlID09PSAnaW5kaXZpZHVhbCcgJiYgKCRzY29wZS5hY2N1bXVsYXRpb24gfHwgISRzY29wZS5oaWRlVG90YWxzICkpIHtcbiAgICAgICAgICAgICAgICAgIGNoYXJ0LmRhdGFUYWJsZS5hZGRDb2x1bW4oe2lkOiBncm91cElkc1tqXSwgbGFiZWw6IHRpdGxlICsgJyB0b3RhbCcsIHR5cGU6ICdudW1iZXInfSlcbiAgICAgICAgICAgICAgICAgIHNlcmllc1trKytdID0ge3RhcmdldEF4aXNJbmRleDogJHNjb3BlLmFjY3VtdWxhdGlvbiA/IDAgOiAxLCBsaW5lV2lkdGg6IDEsIGxpbmVEYXNoU3R5bGU6IFs1LCA1XSwgdmlzaWJsZUluTGVnZW5kOiBmYWxzZX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pOyBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFydC5kYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAncGVyY2VudGFnZSBvZiAnICsgJHNjb3BlLnF1ZXJpZXNbMV0ubmFtZSlcbiAgICAgICAgICAgICAgICBjaGFydC5kYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAndG90YWwgbnVtYmVyIG9mIG1hdGNoZXMnKVxuICAgICAgICAgICAgICAgIGNoYXJ0LmRhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICRzY29wZS5zZWxlY3RlZEdyb3VwaW5nID8gJHNjb3BlLnNlbGVjdGVkR3JvdXBpbmcubGFiZWwgOiAnbWF0Y2hpbmcnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNoYXJ0Lm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGNoYXJ0VGl0bGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICBleHBsb3JlcjogeyBrZWVwSW5Cb3VuZHM6IHRydWUsIG1heFpvb21PdXQ6IDEgfSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ21hdGVyaWFsJyxcbiAgICAgICAgICAgICAgICBpc1N0YWNrZWQ6ICdwZXJjZW50JyxcbiAgICAgICAgICAgICAgICBoQXhpczoge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICd5ZWFyJyxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogJyMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbHM6IHsgc3R5bGU6ICdsaW5lJyB9LFxuICAgICAgICAgICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICAgICAgICAgIHZBeGVzOiB7XG4gICAgICAgICAgICAgICAgICAwOiB7dGl0bGU6ICRzY29wZS5hY2N1bXVsYXRpb24gPyAnUGVyY2VudCcgOiAnTWF0Y2hlcy9taWxsaW9uJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAkc2NvcGUuZ3JhcGhUeXBlID09PSAnYXJlYWNvbXBhcmlzb24nID8gMSA6IDEwfSxcbiAgICAgICAgICAgICAgICAgIDE6IHt0aXRsZTogJ0NvdW50JywgZ3JpZGxpbmVzOiB7Y29sb3I6ICdub25lJ30sIG1pblZhbHVlOiAwLCBsb2dTY2FsZTogdHJ1ZX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWNjdW11bGF0aW5nTWF0Y2hlc0J5Q2hhcnRbaW5kZXhdID0ge31cbiAgICAgICAgICAgICAgYWNjdW11bGF0aW5nVG90YWxCeUNoYXJ0W2luZGV4XSA9IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3Qgcm93c0J5Q2hhcnQ6IG51bWJlcltdW11bXSA9IFtdXG4gICAgICAgICAgICByb3dzQnlDaGFydC5sZW5ndGggPSBjaGFydFRpdGxlcy5sZW5ndGhcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByb3dzQnlDaGFydC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgcm93c0J5Q2hhcnRbaV0gPSBbXVxuICAgICAgICAgICAgY29uc3QgbW06IG51bWJlciA9ICgkc2NvcGUuYWNjdW11bGF0aW9uICYmICRzY29wZS5ncmFwaFR5cGUgPT09ICdpbmRpdmlkdWFsJykgPyAwIDogTWF0aC5mbG9vcigkc2NvcGUubW92aW5nU3BhbiAvIDIpXG4gICAgICAgICAgICBmb3IgKGxldCB5ZWFyOiBudW1iZXIgPSBkLm1pblllYXI7IHllYXIgPD0gZC5tYXhZZWFyOyB5ZWFyKyspIHtcbiAgICAgICAgICAgICAgbGV0IGNoYXJ0SW5kZXg6IG51bWJlciA9IDBcbiAgICAgICAgICAgICAgaWYgKCRzY29wZS5ncmFwaFR5cGUgPT09ICdzY2F0dGVyY29tcGFyaXNvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uQW5kUXVlcnk6IHtbaWQ6IHN0cmluZ106IHtbaWQ6IHN0cmluZ106IG51bWJlciB9fSA9IHt9XG4gICAgICAgICAgICAgICAgY29uc3QgYWdncklkczoge1tpZDogc3RyaW5nXTogYm9vbGVhbn0gPSB7fVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHF1ZXJ5SWQgaW4gZC5xdWVyaWVzKVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXAgaW4gZC5ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IHllYXIgLSBtbTsgaSA8PSB5ZWFyICsgbW07IGkrKylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZC50b3RhbHNCeVllYXJBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldICYmIGQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtxdWVyeUlkXSAmJiBkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25baV1bcXVlcnlJZF1bZ3JvdXBdKSBmb3IgKGxldCBhZ2dySWQgaW4gZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldW3F1ZXJ5SWRdW2dyb3VwXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhZ2dySWRzW2FnZ3JJZF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VtT2ZNYXRjaGVzSW5TcGFuQnlBZ2dyZWdhdGlvbkFuZFF1ZXJ5W2FnZ3JJZF0pIHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25BbmRRdWVyeVthZ2dySWRdID0ge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uQW5kUXVlcnlbYWdncklkXVtxdWVyeUlkXSkgc3VtT2ZNYXRjaGVzSW5TcGFuQnlBZ2dyZWdhdGlvbkFuZFF1ZXJ5W2FnZ3JJZF1bcXVlcnlJZF0gPSBkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25baV1bcXVlcnlJZF1bZ3JvdXBdW2FnZ3JJZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uQW5kUXVlcnlbYWdncklkXVtxdWVyeUlkXSArPSBkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25baV1bcXVlcnlJZF1bZ3JvdXBdW2FnZ3JJZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlOYW1lczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhkLnF1ZXJpZXMpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gYWdncklkcykge1xuICAgICAgICAgICAgICAgICAgbGV0IHJvdzogYW55W10gPSBbIGlkLCB5ZWFyLCAxMDAgKiBzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uQW5kUXVlcnlbaWRdW3F1ZXJ5TmFtZXNbMV1dIC8gKHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25BbmRRdWVyeVtpZF1bcXVlcnlOYW1lc1sxXV0gKyBzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uQW5kUXVlcnlbaWRdW3F1ZXJ5TmFtZXNbMF1dKSwgc3VtT2ZNYXRjaGVzSW5TcGFuQnlBZ2dyZWdhdGlvbkFuZFF1ZXJ5W2lkXVtxdWVyeU5hbWVzWzBdXSArIHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25BbmRRdWVyeVtpZF1bcXVlcnlOYW1lc1sxXV0gXVxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZyBpbiBkLmdyb3Vwc0J5QWdncmVnYXRpb25baWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5yb3c6IGFueVtdID0gcm93LnNsaWNlKClcbiAgICAgICAgICAgICAgICAgICAgbnJvdy5wdXNoKGcpXG4gICAgICAgICAgICAgICAgICAgIHJvd3NCeUNoYXJ0WzBdLnB1c2gobnJvdylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBmb3IgKGxldCBjaGFydElkIGluIGNoYXJ0SWRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdzogYW55W10gPSBbXVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHllYXIpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZ3JvdXBJZCBpbiBncm91cElkcykge1xuICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SWQ6IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwOiBzdHJpbmdcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuc2VwYXJhdGVHcm91cHMgfHwgJHNjb3BlLmdyYXBoVHlwZSA9PT0gJ2FyZWFjb21wYXJpc29uJykge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeUlkID0gZ3JvdXBJZFxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGNoYXJ0SWRcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5SWQgPSBjaGFydElkXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gZ3JvdXBJZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VtT2ZNYXRjaGVzSW5TcGFuQnlBZ2dyZWdhdGlvbjoge1tpZDogc3RyaW5nXTogbnVtYmVyIH1bXSA9IFtdXG4gICAgICAgICAgICAgICAgICBjb25zdCBzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb246IHtbaWQ6IHN0cmluZ106IG51bWJlciB9W10gPSBbXVxuICAgICAgICAgICAgICAgICAgbGV0IHN1bU9mVG90YWxzSW5TcGFuOiBudW1iZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgJHNjb3BlLmJvb3RzdHJhcHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW1PZlRvdGFsc0luU3BhbltrXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdID0ge31cbiAgICAgICAgICAgICAgICAgICAgc3VtT2ZNYXRjaGVzSW5TcGFuQnlBZ2dyZWdhdGlvbltrXSA9IHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSB5ZWFyIC0gbW07IGkgPD0geWVhciArIG1tOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLnRvdGFsc0J5WWVhckFuZEdyb3VwQW5kQWdncmVnYXRpb25baV0gJiYgZC50b3RhbHNCeVllYXJBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldW2dyb3VwXSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGs6IG51bWJlciA9IDA7IGsgPCAkc2NvcGUuYm9vdHN0cmFwczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxBZ2dySWRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGQudG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtncm91cF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWdncklkczogc3RyaW5nW10gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5ib290c3RyYXBzID09PSAxKSBhZ2dySWRzID0gYWxsQWdncklkc1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmb3IgKGxldCBsOiBudW1iZXIgPSAwOyBsIDwgYWxsQWdncklkcy5sZW5ndGg7IGwrKykgYWdncklkc1tsXSA9IGFsbEFnZ3JJZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsQWdncklkcy5sZW5ndGgpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXSAmJiBkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25baV1bcXVlcnlJZF0gJiYgZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldW3F1ZXJ5SWRdW2dyb3VwXSkgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFnZ3JJZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWdncklkOiBzdHJpbmcgPSBhZ2dySWRzW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtxdWVyeUlkXVtncm91cF1bYWdncklkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdW2FnZ3JJZF0pIHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25ba11bYWdncklkXSA9IGQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtxdWVyeUlkXVtncm91cF1bYWdncklkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzdW1PZk1hdGNoZXNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdW2FnZ3JJZF0gKz0gZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldW3F1ZXJ5SWRdW2dyb3VwXVthZ2dySWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC50b3RhbHNCeVllYXJBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW2ldW2dyb3VwXSkgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGFnZ3JJZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFnZ3JJZDogc3RyaW5nID0gYWdncklkc1tqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1bU9mVG90YWxzSW5TcGFuQnlBZ2dyZWdhdGlvbltrXVthZ2dySWRdKSBzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25ba11bYWdncklkXSA9IGQudG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtncm91cF1bYWdncklkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHN1bU9mVG90YWxzSW5TcGFuQnlBZ2dyZWdhdGlvbltrXVthZ2dySWRdICs9IGQudG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvbltpXVtncm91cF1bYWdncklkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1PZlRvdGFsc0luU3BhbltrXSArPSBkLnRvdGFsc0J5WWVhckFuZEdyb3VwQW5kQWdncmVnYXRpb25baV1bZ3JvdXBdW2FnZ3JJZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxldCBzdW1PZkF2ZXJhZ2VzOiBudW1iZXJbXSA9IFtdXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBrOiBudW1iZXIgPSAwOyBrIDwgJHNjb3BlLmJvb3RzdHJhcHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW1PZkF2ZXJhZ2VzW2tdID0gMFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhZ2dySWQgaW4gc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdKSBpZiAoc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdW2FnZ3JJZF0pXG4gICAgICAgICAgICAgICAgICAgICAgc3VtT2ZBdmVyYWdlc1trXSArPSAxMDAwMDAwICogKHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25ba11bYWdncklkXSA/IHN1bU9mTWF0Y2hlc0luU3BhbkJ5QWdncmVnYXRpb25ba11bYWdncklkXSA6IDApIC8gc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW2tdW2FnZ3JJZF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHN1bU9mQXZlcmFnZXMuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLSBiKVxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5hY2N1bXVsYXRpb24gJiYgJHNjb3BlLmdyYXBoVHlwZSA9PT0gJ2luZGl2aWR1YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjdW11bGF0aW5nVG90YWxCeUNoYXJ0W2NoYXJ0SW5kZXhdW2dyb3VwXSkge1xuICAgICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdGluZ1RvdGFsQnlDaGFydFtjaGFydEluZGV4XVtncm91cF0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgYWNjdW11bGF0aW5nTWF0Y2hlc0J5Q2hhcnRbY2hhcnRJbmRleF1bZ3JvdXBdID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2ludDogbnVtYmVyID0gIE1hdGguZmxvb3IoJHNjb3BlLmJvb3RzdHJhcHMgLyAyKVxuICAgICAgICAgICAgICAgICAgICBhY2N1bXVsYXRpbmdNYXRjaGVzQnlDaGFydFtjaGFydEluZGV4XVtncm91cF0gKz0gT2JqZWN0LmtleXMoc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW3BvaW50XSkubGVuZ3RoICE9PSAwID8gc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGggOiAwXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtdWxhdGluZ1RvdGFsQnlDaGFydFtjaGFydEluZGV4XVtncm91cF0gKz0gc3VtT2ZUb3RhbHNJblNwYW5bTWF0aC5mbG9vcigkc2NvcGUuYm9vdHN0cmFwcyAvIDIpXVxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaChhY2N1bXVsYXRpbmdNYXRjaGVzQnlDaGFydFtjaGFydEluZGV4XVtncm91cF0pXG4gICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGFjY3VtdWxhdGluZ1RvdGFsQnlDaGFydFtjaGFydEluZGV4XVtncm91cF0pXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQ6IG51bWJlciA9ICBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMilcbiAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaChzdW1PZkF2ZXJhZ2VzW3BvaW50XSAvIE9iamVjdC5rZXlzKHN1bU9mVG90YWxzSW5TcGFuQnlBZ2dyZWdhdGlvbltwb2ludF0pLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludCA9IE1hdGguZmxvb3IoJHNjb3BlLmJvb3RzdHJhcHMgLyAxMDApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMjApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMTApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSAkc2NvcGUuYm9vdHN0cmFwcyAtIDEgLSBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMTApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSAkc2NvcGUuYm9vdHN0cmFwcyAtIDEgLSBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMjApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goc3VtT2ZBdmVyYWdlc1twb2ludF0gLyBPYmplY3Qua2V5cyhzdW1PZlRvdGFsc0luU3BhbkJ5QWdncmVnYXRpb25bcG9pbnRdKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSAkc2NvcGUuYm9vdHN0cmFwcyAtIDEgLSBNYXRoLmZsb29yKCRzY29wZS5ib290c3RyYXBzIC8gMTAwKVxuICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKHN1bU9mQXZlcmFnZXNbcG9pbnRdIC8gT2JqZWN0LmtleXMoc3VtT2ZUb3RhbHNJblNwYW5CeUFnZ3JlZ2F0aW9uW3BvaW50XSkubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goMClcbiAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaCgwKVxuICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApXG4gICAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goMClcbiAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaCgwKVxuICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuaGlkZVRvdGFscyAmJiAkc2NvcGUuZ3JhcGhUeXBlID09PSAnaW5kaXZpZHVhbCcpIHJvdy5wdXNoKHN1bU9mVG90YWxzSW5TcGFuW01hdGguZmxvb3IoJHNjb3BlLmJvb3RzdHJhcHMgLyAyKV0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvd3NCeUNoYXJ0W2NoYXJ0SW5kZXgrK10ucHVzaChyb3cpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkc2NvcGUuYWNjdW11bGF0aW9uICYmICRzY29wZS5ncmFwaFR5cGUgPT09ICdpbmRpdmlkdWFsJylcbiAgICAgICAgICAgICAgcm93c0J5Q2hhcnQuZm9yRWFjaCgocm93czogbnVtYmVyW11bXSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgICByb3dzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gMVxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZC5ncm91cHMpLmZvckVhY2goZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJbaV0gPSAxMDAgKiByW2krK10gLyBhY2N1bXVsYXRpbmdNYXRjaGVzQnlDaGFydFtpbmRleF1bZ11cbiAgICAgICAgICAgICAgICAgICAgcltpXSA9IDEwMCAqIHJbaSsrXSAvIGFjY3VtdWxhdGluZ1RvdGFsQnlDaGFydFtpbmRleF1bZ11cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgcm93c0J5Q2hhcnQuZm9yRWFjaCgocm93czogbnVtYmVyW11bXSwgaW5kZXg6IG51bWJlcikgPT4gJHNjb3BlLmNoYXJ0c1tpbmRleF0uZGF0YVRhYmxlLmFkZFJvd3Mocm93cykpXG4gICAgICAgICAgfVxuICAgICAgICAgICxcbiAgICAgICAgICAocmVzcG9uc2U6IGFuZ3VsYXIuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmcgPHN0cmluZz4pID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICAkc2NvcGUuJHdhdGNoQ29sbGVjdGlvbignW3NlbGVjdGVkR3JvdXBpbmcsIGdyYXBoVHlwZSwgbW92aW5nU3BhbiwgaGlkZVRvdGFscywgYXZnVHlwZSwgc2VwYXJhdGVHcm91cHMsIGFjY3VtdWxhdGlvbiwgYm9vdHN0cmFwc10nLCAobnY6IGFueSwgb3Y6IGFueSkgPT4ge1xuICAgICAgICBpZiAobnYgIT09IG92KVxuICAgICAgICAgIHVwZGF0ZUdyYXBocygpXG4gICAgICB9KVxuICAgICAgJHNjb3BlLiRvbigndXBkYXRlQ29uc3RyYWludCcsIChlOiBhbmd1bGFyLklBbmd1bGFyRXZlbnQsIHF1ZXJ5SWQ6IHN0cmluZywgdmlld0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHZpZXdJZCAhPT0gJHNjb3BlLnZpZXdJZCkgdXBkYXRlR3JhcGhzKClcbiAgICAgIH0pXG4gICAgICAkc2NvcGUuY2hhcnRzID0gW11cbiAgICAgICRzY29wZS4kd2F0Y2goXG4gICAgICAgICgpID0+ICRzY29wZS5xdWVyaWVzLm1hcChxID0+IHEubmFtZSksXG4gICAgICAgIChudjogYW55LCBvdjogYW55KSA9PiB7XG4gICAgICAgICAgdXBkYXRlR3JhcGhzKClcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSlcbiAgICAgICRzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKCdxdWVyaWVzJywgKG52OiBRdWVyeVtdLCBvdjogUXVlcnlbXSkgPT4geyBpZiAobnYgIT09IG92KSB7XG4gICAgICAgIHVwZGF0ZUdyYXBocygpXG4gICAgICB9fSlcbiAgICAgIHVwZGF0ZUdyYXBocygpXG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIHByb2Nlc3NEYXRhKGJpbmRpbmdzOiB7W2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nfVtdKTogRGF0YSB7XG4gICAgICBsZXQgZDogRGF0YSA9IG5ldyBEYXRhKClcbiAgICAgIGxldCBpOiBudW1iZXIgPSAwXG4gICAgICB3aGlsZSAoIWJpbmRpbmdzW2ldWydxdWVyeUlkJ10pIHtcbiAgICAgICAgbGV0IGI6IHtbaWQ6IHN0cmluZ106IHMuSVNwYXJxbEJpbmRpbmd9ID0gYmluZGluZ3NbaSsrXVxuICAgICAgICBsZXQgeWVhcjogbnVtYmVyID0gcGFyc2VJbnQoYlsneWVhciddLnZhbHVlLCAxMClcbiAgICAgICAgaWYgKHllYXIgPiBkLm1heFllYXIpIGQubWF4WWVhciA9IHllYXJcbiAgICAgICAgaWYgKHllYXIgPCBkLm1pblllYXIpIGQubWluWWVhciA9IHllYXJcbiAgICAgICAgaWYgKCFkLnRvdGFsc0J5WWVhckFuZEdyb3VwQW5kQWdncmVnYXRpb25beWVhcl0pXG4gICAgICAgICAgZC50b3RhbHNCeVllYXJBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW3llYXJdID0ge31cbiAgICAgICAgbGV0IGc6IHN0cmluZyA9IGJbJ2dyb3VwJ10gPyBiWydncm91cCddLnZhbHVlIDogJ21hdGNoaW5nJ1xuICAgICAgICBpZiAoIWQudG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvblt5ZWFyXVtnXSlcbiAgICAgICAgICBkLnRvdGFsc0J5WWVhckFuZEdyb3VwQW5kQWdncmVnYXRpb25beWVhcl1bZ10gPSB7fVxuICAgICAgICBsZXQgYTogc3RyaW5nID0gYlsnYWdncklkJ10gPyBiWydhZ2dySWQnXS52YWx1ZSA6ICcnXG4gICAgICAgIGlmICghZC5ncm91cHNCeUFnZ3JlZ2F0aW9uW2FdKSBkLmdyb3Vwc0J5QWdncmVnYXRpb25bYV0gPSB7fVxuICAgICAgICBkLmdyb3Vwc0J5QWdncmVnYXRpb25bYV1bZ10gPSB0cnVlXG4gICAgICAgIGQudG90YWxzQnlZZWFyQW5kR3JvdXBBbmRBZ2dyZWdhdGlvblt5ZWFyXVtnXVthXSA9IHBhcnNlSW50KGJbJ3RvdGFsJ10udmFsdWUsIDEwKVxuICAgICAgICBkLmdyb3Vwc1tnXSA9IGJbJ2dyb3VwTGFiZWwnXSA/IGJbJ2dyb3VwTGFiZWwnXS52YWx1ZSA6IGdcbiAgICAgIH1cbiAgICAgIHdoaWxlIChpIDwgYmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCBiOiB7W2lkOiBzdHJpbmddOiBzLklTcGFycWxCaW5kaW5nfSA9IGJpbmRpbmdzW2krK11cbiAgICAgICAgbGV0IHllYXI6IG51bWJlciA9IHBhcnNlSW50KGJbJ3llYXInXS52YWx1ZSwgMTApXG4gICAgICAgIGlmICghZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW3llYXJdKVxuICAgICAgICAgIGQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvblt5ZWFyXSA9IHt9XG4gICAgICAgIGxldCBxOiBzdHJpbmcgPSBiWydxdWVyeUlkJ10udmFsdWVcbiAgICAgICAgaWYgKCFkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25beWVhcl1bcV0pXG4gICAgICAgICAgZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW3llYXJdW3FdID0ge31cbiAgICAgICAgbGV0IGc6IHN0cmluZyA9IGJbJ2dyb3VwJ10gPyBiWydncm91cCddLnZhbHVlIDogJ21hdGNoaW5nJ1xuICAgICAgICBpZiAoIWQubWF0Y2hlc0J5WWVhckFuZFF1ZXJ5QW5kR3JvdXBBbmRBZ2dyZWdhdGlvblt5ZWFyXVtxXVtnXSlcbiAgICAgICAgICBkLm1hdGNoZXNCeVllYXJBbmRRdWVyeUFuZEdyb3VwQW5kQWdncmVnYXRpb25beWVhcl1bcV1bZ10gPSB7fVxuICAgICAgICBkLnF1ZXJpZXNbcV0gPSB0cnVlXG4gICAgICAgIGxldCBhOiBzdHJpbmcgPSBiWydhZ2dySWQnXSA/IGJbJ2FnZ3JJZCddLnZhbHVlIDogJydcbiAgICAgICAgZC5tYXRjaGVzQnlZZWFyQW5kUXVlcnlBbmRHcm91cEFuZEFnZ3JlZ2F0aW9uW3llYXJdW3FdW2ddW2FdID0gcGFyc2VJbnQoYlsnbWF0Y2hpbmcnXS52YWx1ZSwgMTApXG4gICAgICB9XG4gICAgICByZXR1cm4gZFxuICAgIH1cbiAgfVxufVxuIl19

var app;
(function (app) {
    'use strict';
    var textSearchViewConfiguration = {
        textSearchQuery: "PREFIX text: <http://jena.apache.org/text#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT ?keyword (COUNT(?tid) AS ?totalInstances) (COUNT(?id) AS ?matchingInstances) {\n{\n?tid text:query \"<LUCENE_REGEX>\" .\n?tid a cs:Letter .\n?tid cs:fulltext ?fulltext .\nFILTER(REGEX(?fulltext, \"<SPARQL_REGEX>\", \"i\"))\nBIND(LCASE(REPLACE(REPLACE(?fulltext, \".*?(<SPARQL_REGEX>).*\", \"$1\", \"si\"),\"\\\\s+\",\" \")) AS ?keyword)\n} UNION {\n?id text:query \"<LUCENE_REGEX>\" .\n?id a cs:Letter .\n?id cs:fulltext ?fulltext .\nFILTER(REGEX(?fulltext, \"<SPARQL_REGEX>\", \"i\"))\n# CONSTRAINTS\nBIND(LCASE(REPLACE(REPLACE(?fulltext, \".*?(<SPARQL_REGEX>).*\", \"$1\", \"si\"),\"\\\\s+\",\" \")) AS ?keyword)\n}\n}\nGROUP BY ?keyword\nORDER BY DESC(?matchingInstances)",
        constraintString: "?id text:query \"<LUCENE_REGEX>\" .\n?id cs:fulltext ?fulltext .\nFILTER(REGEX(?fulltext,\"<SPARQL_REGEX>\",\"i\"))"
    };
    var resultListViewConfiguration = {
        resultQuery: "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT ?id ?label ?fulltext ?match ?metadataAuthor ?metadataYear {\n{\nSELECT DISTINCT ?id {\n# CONSTRAINTS\n}\n}\n?id skos:prefLabel ?label .\n?id cs:fulltext ?fulltext .\n?id crm:P28_custody_surrendered_by/skos:prefLabel ?metadataAuthor .\n?id cs:year ?metadataYear .\nOPTIONAL {\nFILTER(\"<SPARQL_REGEX>\"!=\"(?:)\")\n?id cs:fulltext ?fulltext .\nFILTER REGEX(?fulltext,\"<SPARQL_REGEX>\",\"si\")\nBIND(REPLACE(?fulltext,\".*?(<SPARQL_REGEX>).*\",\"$1\",\"si\") AS ?match)\n}\n}\nORDER BY <ORDER_BY>\nLIMIT 50\n",
        constraintString: ''
    };
    var propertyTreeViewConfiguration = {
        getTreeQuery: "PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT ?subClass ?superClass ?class ?classLabel ?instances {\n{\n?subClass rdfs:subClassOf ?superClass .\nFILTER EXISTS {\n?p cs:education/rdfs:subClassOf* ?subClass .\n}\n} UNION {\n{\nSELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {\n  ?p cs:education/rdfs:subClassOf* ?class .\n}\nGROUP BY ?class\n}\n?class rdfs:label|skos:prefLabel ?classLabel .\n}\n}\n",
        getCountsQuery: "PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX cs: <http://ldf.fi/ceec-schema#>\nSELECT ?class (COUNT(DISTINCT ?p) AS ?instances) {\n# CONSTRAINTS\n?id crm:P28_custody_surrendered_by ?p .\n?p cs:education/rdfs:subClassOf* ?class .\n}\nGROUP BY ?class",
        constraintString: '?id crm:P28_custody_surrendered_by/cs:education/rdfs:subClassOf* <CONSTRAINT_ID>'
    };
    var googleChartViewConfiguration = {
        partitionsQuery: "PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nSELECT ?property (SAMPLE(?l) AS ?propertyLabel) {\n  {\n    SELECT DISTINCT ?property {\n      ?id crm:P28_custody_surrendered_by ?person .\n      ?person ?property ?object .\n      FILTER isIRI(?object)\n    }\n  }\n  ?property skos:prefLabel|rdfs:label ?l .\n  FILTER (LANG(?l) = 'en' || LANG(?l) = '')\n}\nGROUP BY ?property\n",
        graphQuery: "PREFIX cs: <http://ldf.fi/ceec-schema#>\nPREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\nPREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\nPREFIX pf: <http://jena.hpl.hp.com/ARQ/property#>\nPREFIX sf: <http://ldf.fi/functions#>\nSELECT ?queryId ?group (SAMPLE(?l2) AS ?groupLabel) ?aggrId ?year (MAX(?mwords) AS ?matching) (MAX(?twords) as ?total) {\n  {\n    {\n      SELECT ?queryId ?group ?aggrId ?year ((COUNT(?foo)-COUNT(DISTINCT ?id)) AS ?mwords) {\n        { # CONSTRAINTHOLDER\n          # CONSTRAINTS\n          BIND(<REGEX> AS ?regex)\n          BIND(<QUERY_ID> AS ?queryId)\n        } # /CONSTRAINTHOLDER\n        ?id cs:year ?year .\n        ?id cs:fulltext ?fulltext .\n        ?foo pf:strSplit (?fulltext ?regex) .\n        # AGGREGATION\n        # GROUPING\n      }\n      GROUP BY ?queryId ?group ?aggrId ?year\n    }\n  } UNION {\n    {\n      SELECT ?group (SAMPLE(?l) AS ?l2) ?aggrId ?year (SUM(STRDT(?wc, xsd:integer)) AS ?twords) {\n        ?id a cs:Letter .\n        ?id cs:year ?year .\n        ?id cs:wordcount ?wc .\n        # AGGREGATION\n        # GROUPING\n      }\n      GROUP BY ?group ?aggrId ?year\n    }\n  }\n}\nGROUP BY ?queryId ?group ?year ?aggrId\nORDER BY ?queryId ?group ?year\n",
        constraintString: '',
        groupingString: ''
    };
    angular.module('app').constant('configuration', {
        mainView: 'partials/ceecs-main.html',
        sparqlEndpoint: 'http://ldf.fi/ceec/sparql',
        prefixes: "PREFIX text: <http://jena.apache.org/text#>\n  PREFIX cs: <http://ldf.fi/ceec-schema#>\n  PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>\n  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n  ",
        viewConfiguration: {
            textSearchView: textSearchViewConfiguration,
            resultListView: resultListViewConfiguration,
            propertyTreeView: propertyTreeViewConfiguration,
            googleChartView: googleChartViewConfiguration
        }
    });
    var k = fi.seco.khepri;
    var MainController = (function () {
        function MainController($scope, stateService, $timeout) {
            this.$scope = $scope;
            this.stateService = stateService;
            this.$timeout = $timeout;
            $scope.queries = [];
            $scope.state = 'normal';
            stateService.getQueryState('unnamed 1');
            $scope.queries.push(new k.Query('unnamed 1'));
            $scope.queries[0].active = true;
            var count = 2;
            $scope.addQuery = function () {
                var name = 'unnamed ' + count++;
                stateService.getQueryState(name);
                var nq = new k.Query(name);
                nq.active = true;
                $scope.queries.push(nq);
            };
            $scope.renameQuery = function (oldQuery, newName) {
                stateService.getQueries()[newName] = stateService.getQueries()[oldQuery.name];
                delete stateService.getQueries[oldQuery.name];
                oldQuery.name = newName;
            };
            $scope.removeQuery = function (query) {
                delete stateService.getQueries[query.name];
                $scope.queries.splice($scope.queries.indexOf(query), 1);
            };
            $scope.resize = function () { return $timeout(function () { return $scope.$broadcast('resize'); }); };
        }
        return MainController;
    }());/*<auto_generate>*/angular.module('app').controller('MainController',['$scope','stateService','$timeout',function(){return new (Function.prototype.bind.apply(MainController,[null].concat(Array.prototype.slice.apply(arguments))));}]);/*</auto_generate>*/
    app.MainController = MainController;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zY3JpcHRzL2NlZWMtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXFOWjtBQXJORCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsWUFBWSxDQUFBO0lBRVosSUFBSSwyQkFBMkIsR0FBZ0Q7UUFDN0UsZUFBZSxFQUNuQixpd0JBbUJrQztRQUM5QixnQkFBZ0IsRUFDcEIscUhBRThDO0tBQzNDLENBQUE7SUFFRCxJQUFJLDJCQUEyQixHQUFnRDtRQUM3RSxXQUFXLEVBQ2YscXBCQXNCQztRQUNHLGdCQUFnQixFQUFFLEVBQUU7S0FDckIsQ0FBQTtJQUVELElBQUksNkJBQTZCLEdBQTBDO1FBQ3pFLFlBQVksRUFDaEIsOGZBbUJDO1FBQ0csY0FBYyxFQUNsQiw2VEFRZ0I7UUFDWixnQkFBZ0IsRUFBRSxrRkFBa0Y7S0FDckcsQ0FBQTtJQUVELElBQUksNEJBQTRCLEdBQXVEO1FBQ25GLGVBQWUsRUFDckIseWVBZUM7UUFDSyxVQUFVLEVBQ2hCLDJ2Q0FzQ0M7UUFDRyxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO0tBQ25CLENBQUE7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFDNUMsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxjQUFjLEVBQUUsMkJBQTJCO1FBQzNDLFFBQVEsRUFDWiw0UEFLQztRQUNHLGlCQUFpQixFQUFFO1lBQ2pCLGNBQWMsRUFBRSwyQkFBMkI7WUFDM0MsY0FBYyxFQUFFLDJCQUEyQjtZQUMzQyxnQkFBZ0IsRUFBRSw2QkFBNkI7WUFDL0MsZUFBZSxFQUFFLDRCQUE0QjtTQUM5QztLQUNGLENBQ0YsQ0FBQTtJQUVELElBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBV3pCO1FBQ0Usd0JBQW9CLE1BQWtCLEVBQVUsWUFBNEIsRUFBVSxRQUFpQztZQUFuRyxXQUFNLEdBQU4sTUFBTSxDQUFZO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQWdCO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7WUFDckgsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDbkIsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7WUFDdkIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtZQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDL0IsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFBO1lBQ3JCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7Z0JBQ2hCLElBQUksSUFBSSxHQUFXLFVBQVUsR0FBRyxLQUFLLEVBQUUsQ0FBQTtnQkFDdkMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDaEMsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtnQkFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDekIsQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFDLFFBQWlCLEVBQUUsT0FBZTtnQkFDdEQsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzdFLE9BQU8sWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzdDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFBO1lBQ3pCLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFjO2dCQUNsQyxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUN6RCxDQUFDLENBQUE7WUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQU0sT0FBQSxRQUFRLENBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQTtRQUNuRSxDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQTFCQSxBQTBCQyxJQUFBO0lBMUJZLGtCQUFjLGlCQTBCMUIsQ0FBQTtBQUNILENBQUMsRUFyTlMsR0FBRyxLQUFILEdBQUcsUUFxTloiLCJmaWxlIjoic2NyaXB0cy9jZWVjLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBhcHAge1xuICAndXNlIHN0cmljdCdcblxuICBsZXQgdGV4dFNlYXJjaFZpZXdDb25maWd1cmF0aW9uOiBmaS5zZWNvLmtoZXByaS5JVGV4dFNlYXJjaFZpZXdDb25maWd1cmF0aW9uID0ge1xuICAgIHRleHRTZWFyY2hRdWVyeTpcbmBQUkVGSVggdGV4dDogPGh0dHA6Ly9qZW5hLmFwYWNoZS5vcmcvdGV4dCM+XG5QUkVGSVggY3M6IDxodHRwOi8vbGRmLmZpL2NlZWMtc2NoZW1hIz5cblNFTEVDVCA/a2V5d29yZCAoQ09VTlQoP3RpZCkgQVMgP3RvdGFsSW5zdGFuY2VzKSAoQ09VTlQoP2lkKSBBUyA/bWF0Y2hpbmdJbnN0YW5jZXMpIHtcbntcbj90aWQgdGV4dDpxdWVyeSBcIjxMVUNFTkVfUkVHRVg+XCIgLlxuP3RpZCBhIGNzOkxldHRlciAuXG4/dGlkIGNzOmZ1bGx0ZXh0ID9mdWxsdGV4dCAuXG5GSUxURVIoUkVHRVgoP2Z1bGx0ZXh0LCBcIjxTUEFSUUxfUkVHRVg+XCIsIFwiaVwiKSlcbkJJTkQoTENBU0UoUkVQTEFDRShSRVBMQUNFKD9mdWxsdGV4dCwgXCIuKj8oPFNQQVJRTF9SRUdFWD4pLipcIiwgXCIkMVwiLCBcInNpXCIpLFwiXFxcXFxcXFxzK1wiLFwiIFwiKSkgQVMgP2tleXdvcmQpXG59IFVOSU9OIHtcbj9pZCB0ZXh0OnF1ZXJ5IFwiPExVQ0VORV9SRUdFWD5cIiAuXG4/aWQgYSBjczpMZXR0ZXIgLlxuP2lkIGNzOmZ1bGx0ZXh0ID9mdWxsdGV4dCAuXG5GSUxURVIoUkVHRVgoP2Z1bGx0ZXh0LCBcIjxTUEFSUUxfUkVHRVg+XCIsIFwiaVwiKSlcbiMgQ09OU1RSQUlOVFNcbkJJTkQoTENBU0UoUkVQTEFDRShSRVBMQUNFKD9mdWxsdGV4dCwgXCIuKj8oPFNQQVJRTF9SRUdFWD4pLipcIiwgXCIkMVwiLCBcInNpXCIpLFwiXFxcXFxcXFxzK1wiLFwiIFwiKSkgQVMgP2tleXdvcmQpXG59XG59XG5HUk9VUCBCWSA/a2V5d29yZFxuT1JERVIgQlkgREVTQyg/bWF0Y2hpbmdJbnN0YW5jZXMpYCxcbiAgICBjb25zdHJhaW50U3RyaW5nOlxuYD9pZCB0ZXh0OnF1ZXJ5IFwiPExVQ0VORV9SRUdFWD5cIiAuXG4/aWQgY3M6ZnVsbHRleHQgP2Z1bGx0ZXh0IC5cbkZJTFRFUihSRUdFWCg/ZnVsbHRleHQsXCI8U1BBUlFMX1JFR0VYPlwiLFwiaVwiKSlgXG4gIH1cblxuICBsZXQgcmVzdWx0TGlzdFZpZXdDb25maWd1cmF0aW9uOiBmaS5zZWNvLmtoZXByaS5JUmVzdWx0TGlzdFZpZXdDb25maWd1cmF0aW9uID0ge1xuICAgIHJlc3VsdFF1ZXJ5OlxuYFBSRUZJWCBza29zOiA8aHR0cDovL3d3dy53My5vcmcvMjAwNC8wMi9za29zL2NvcmUjPlxuUFJFRklYIGNybTogPGh0dHA6Ly93d3cuY2lkb2MtY3JtLm9yZy9jaWRvYy1jcm0vPlxuUFJFRklYIGNzOiA8aHR0cDovL2xkZi5maS9jZWVjLXNjaGVtYSM+XG5TRUxFQ1QgP2lkID9sYWJlbCA/ZnVsbHRleHQgP21hdGNoID9tZXRhZGF0YUF1dGhvciA/bWV0YWRhdGFZZWFyIHtcbntcblNFTEVDVCBESVNUSU5DVCA/aWQge1xuIyBDT05TVFJBSU5UU1xufVxufVxuP2lkIHNrb3M6cHJlZkxhYmVsID9sYWJlbCAuXG4/aWQgY3M6ZnVsbHRleHQgP2Z1bGx0ZXh0IC5cbj9pZCBjcm06UDI4X2N1c3RvZHlfc3VycmVuZGVyZWRfYnkvc2tvczpwcmVmTGFiZWwgP21ldGFkYXRhQXV0aG9yIC5cbj9pZCBjczp5ZWFyID9tZXRhZGF0YVllYXIgLlxuT1BUSU9OQUwge1xuRklMVEVSKFwiPFNQQVJRTF9SRUdFWD5cIiE9XCIoPzopXCIpXG4/aWQgY3M6ZnVsbHRleHQgP2Z1bGx0ZXh0IC5cbkZJTFRFUiBSRUdFWCg/ZnVsbHRleHQsXCI8U1BBUlFMX1JFR0VYPlwiLFwic2lcIilcbkJJTkQoUkVQTEFDRSg/ZnVsbHRleHQsXCIuKj8oPFNQQVJRTF9SRUdFWD4pLipcIixcIiQxXCIsXCJzaVwiKSBBUyA/bWF0Y2gpXG59XG59XG5PUkRFUiBCWSA8T1JERVJfQlk+XG5MSU1JVCA1MFxuYCxcbiAgICBjb25zdHJhaW50U3RyaW5nOiAnJ1xuICB9XG5cbiAgbGV0IHByb3BlcnR5VHJlZVZpZXdDb25maWd1cmF0aW9uOiBmaS5zZWNvLmtoZXByaS5JVHJlZVZpZXdDb25maWd1cmF0aW9uID0ge1xuICAgIGdldFRyZWVRdWVyeTpcbmBQUkVGSVggc2tvczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDQvMDIvc2tvcy9jb3JlIz5cblBSRUZJWCByZGZzOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIz5cblBSRUZJWCBjczogPGh0dHA6Ly9sZGYuZmkvY2VlYy1zY2hlbWEjPlxuU0VMRUNUID9zdWJDbGFzcyA/c3VwZXJDbGFzcyA/Y2xhc3MgP2NsYXNzTGFiZWwgP2luc3RhbmNlcyB7XG57XG4/c3ViQ2xhc3MgcmRmczpzdWJDbGFzc09mID9zdXBlckNsYXNzIC5cbkZJTFRFUiBFWElTVFMge1xuP3AgY3M6ZWR1Y2F0aW9uL3JkZnM6c3ViQ2xhc3NPZiogP3N1YkNsYXNzIC5cbn1cbn0gVU5JT04ge1xue1xuU0VMRUNUID9jbGFzcyAoQ09VTlQoRElTVElOQ1QgP3ApIEFTID9pbnN0YW5jZXMpIHtcbiAgP3AgY3M6ZWR1Y2F0aW9uL3JkZnM6c3ViQ2xhc3NPZiogP2NsYXNzIC5cbn1cbkdST1VQIEJZID9jbGFzc1xufVxuP2NsYXNzIHJkZnM6bGFiZWx8c2tvczpwcmVmTGFiZWwgP2NsYXNzTGFiZWwgLlxufVxufVxuYCxcbiAgICBnZXRDb3VudHNRdWVyeTpcbmBQUkVGSVggY3JtOiA8aHR0cDovL3d3dy5jaWRvYy1jcm0ub3JnL2NpZG9jLWNybS8+XG5QUkVGSVggcmRmczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSM+XG5QUkVGSVggY3M6IDxodHRwOi8vbGRmLmZpL2NlZWMtc2NoZW1hIz5cblNFTEVDVCA/Y2xhc3MgKENPVU5UKERJU1RJTkNUID9wKSBBUyA/aW5zdGFuY2VzKSB7XG4jIENPTlNUUkFJTlRTXG4/aWQgY3JtOlAyOF9jdXN0b2R5X3N1cnJlbmRlcmVkX2J5ID9wIC5cbj9wIGNzOmVkdWNhdGlvbi9yZGZzOnN1YkNsYXNzT2YqID9jbGFzcyAuXG59XG5HUk9VUCBCWSA/Y2xhc3NgLFxuICAgIGNvbnN0cmFpbnRTdHJpbmc6ICc/aWQgY3JtOlAyOF9jdXN0b2R5X3N1cnJlbmRlcmVkX2J5L2NzOmVkdWNhdGlvbi9yZGZzOnN1YkNsYXNzT2YqIDxDT05TVFJBSU5UX0lEPidcbiAgfVxuXG4gIGxldCBnb29nbGVDaGFydFZpZXdDb25maWd1cmF0aW9uOiBmaS5zZWNvLmtoZXByaS5JTXVsdGlHb29nbGVDaGFydFZpZXdzQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgIHBhcnRpdGlvbnNRdWVyeTpcbmBQUkVGSVggY3JtOiA8aHR0cDovL3d3dy5jaWRvYy1jcm0ub3JnL2NpZG9jLWNybS8+XG5QUkVGSVggcmRmczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSM+XG5QUkVGSVggc2tvczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDQvMDIvc2tvcy9jb3JlIz5cblNFTEVDVCA/cHJvcGVydHkgKFNBTVBMRSg/bCkgQVMgP3Byb3BlcnR5TGFiZWwpIHtcbiAge1xuICAgIFNFTEVDVCBESVNUSU5DVCA/cHJvcGVydHkge1xuICAgICAgP2lkIGNybTpQMjhfY3VzdG9keV9zdXJyZW5kZXJlZF9ieSA/cGVyc29uIC5cbiAgICAgID9wZXJzb24gP3Byb3BlcnR5ID9vYmplY3QgLlxuICAgICAgRklMVEVSIGlzSVJJKD9vYmplY3QpXG4gICAgfVxuICB9XG4gID9wcm9wZXJ0eSBza29zOnByZWZMYWJlbHxyZGZzOmxhYmVsID9sIC5cbiAgRklMVEVSIChMQU5HKD9sKSA9ICdlbicgfHwgTEFORyg/bCkgPSAnJylcbn1cbkdST1VQIEJZID9wcm9wZXJ0eVxuYCxcbiAgICAgIGdyYXBoUXVlcnk6XG5gUFJFRklYIGNzOiA8aHR0cDovL2xkZi5maS9jZWVjLXNjaGVtYSM+XG5QUkVGSVggY3JtOiA8aHR0cDovL3d3dy5jaWRvYy1jcm0ub3JnL2NpZG9jLWNybS8+XG5QUkVGSVggc2tvczogPGh0dHA6Ly93d3cudzMub3JnLzIwMDQvMDIvc2tvcy9jb3JlIz5cblBSRUZJWCB4c2Q6IDxodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSM+XG5QUkVGSVggcGY6IDxodHRwOi8vamVuYS5ocGwuaHAuY29tL0FSUS9wcm9wZXJ0eSM+XG5QUkVGSVggc2Y6IDxodHRwOi8vbGRmLmZpL2Z1bmN0aW9ucyM+XG5TRUxFQ1QgP3F1ZXJ5SWQgP2dyb3VwIChTQU1QTEUoP2wyKSBBUyA/Z3JvdXBMYWJlbCkgP2FnZ3JJZCA/eWVhciAoTUFYKD9td29yZHMpIEFTID9tYXRjaGluZykgKE1BWCg/dHdvcmRzKSBhcyA/dG90YWwpIHtcbiAge1xuICAgIHtcbiAgICAgIFNFTEVDVCA/cXVlcnlJZCA/Z3JvdXAgP2FnZ3JJZCA/eWVhciAoKENPVU5UKD9mb28pLUNPVU5UKERJU1RJTkNUID9pZCkpIEFTID9td29yZHMpIHtcbiAgICAgICAgeyAjIENPTlNUUkFJTlRIT0xERVJcbiAgICAgICAgICAjIENPTlNUUkFJTlRTXG4gICAgICAgICAgQklORCg8UkVHRVg+IEFTID9yZWdleClcbiAgICAgICAgICBCSU5EKDxRVUVSWV9JRD4gQVMgP3F1ZXJ5SWQpXG4gICAgICAgIH0gIyAvQ09OU1RSQUlOVEhPTERFUlxuICAgICAgICA/aWQgY3M6eWVhciA/eWVhciAuXG4gICAgICAgID9pZCBjczpmdWxsdGV4dCA/ZnVsbHRleHQgLlxuICAgICAgICA/Zm9vIHBmOnN0clNwbGl0ICg/ZnVsbHRleHQgP3JlZ2V4KSAuXG4gICAgICAgICMgQUdHUkVHQVRJT05cbiAgICAgICAgIyBHUk9VUElOR1xuICAgICAgfVxuICAgICAgR1JPVVAgQlkgP3F1ZXJ5SWQgP2dyb3VwID9hZ2dySWQgP3llYXJcbiAgICB9XG4gIH0gVU5JT04ge1xuICAgIHtcbiAgICAgIFNFTEVDVCA/Z3JvdXAgKFNBTVBMRSg/bCkgQVMgP2wyKSA/YWdncklkID95ZWFyIChTVU0oU1RSRFQoP3djLCB4c2Q6aW50ZWdlcikpIEFTID90d29yZHMpIHtcbiAgICAgICAgP2lkIGEgY3M6TGV0dGVyIC5cbiAgICAgICAgP2lkIGNzOnllYXIgP3llYXIgLlxuICAgICAgICA/aWQgY3M6d29yZGNvdW50ID93YyAuXG4gICAgICAgICMgQUdHUkVHQVRJT05cbiAgICAgICAgIyBHUk9VUElOR1xuICAgICAgfVxuICAgICAgR1JPVVAgQlkgP2dyb3VwID9hZ2dySWQgP3llYXJcbiAgICB9XG4gIH1cbn1cbkdST1VQIEJZID9xdWVyeUlkID9ncm91cCA/eWVhciA/YWdncklkXG5PUkRFUiBCWSA/cXVlcnlJZCA/Z3JvdXAgP3llYXJcbmAsXG4gICAgY29uc3RyYWludFN0cmluZzogJycsXG4gICAgZ3JvdXBpbmdTdHJpbmc6ICcnXG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29uc3RhbnQoJ2NvbmZpZ3VyYXRpb24nLCB7XG4gICAgICBtYWluVmlldzogJ3BhcnRpYWxzL2NlZWNzLW1haW4uaHRtbCcsXG4gICAgICBzcGFycWxFbmRwb2ludDogJ2h0dHA6Ly9sZGYuZmkvY2VlYy9zcGFycWwnLFxuICAgICAgcHJlZml4ZXM6XG4gIGBQUkVGSVggdGV4dDogPGh0dHA6Ly9qZW5hLmFwYWNoZS5vcmcvdGV4dCM+XG4gIFBSRUZJWCBjczogPGh0dHA6Ly9sZGYuZmkvY2VlYy1zY2hlbWEjPlxuICBQUkVGSVggY3JtOiA8aHR0cDovL3d3dy5jaWRvYy1jcm0ub3JnL2NpZG9jLWNybS8+XG4gIFBSRUZJWCByZGZzOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIz5cbiAgUFJFRklYIHhzZDogPGh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIz5cbiAgYCxcbiAgICAgIHZpZXdDb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHRleHRTZWFyY2hWaWV3OiB0ZXh0U2VhcmNoVmlld0NvbmZpZ3VyYXRpb24sXG4gICAgICAgIHJlc3VsdExpc3RWaWV3OiByZXN1bHRMaXN0Vmlld0NvbmZpZ3VyYXRpb24sXG4gICAgICAgIHByb3BlcnR5VHJlZVZpZXc6IHByb3BlcnR5VHJlZVZpZXdDb25maWd1cmF0aW9uLFxuICAgICAgICBnb29nbGVDaGFydFZpZXc6IGdvb2dsZUNoYXJ0Vmlld0NvbmZpZ3VyYXRpb25cbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBpbXBvcnQgayA9IGZpLnNlY28ua2hlcHJpXG5cbiAgaW50ZXJmYWNlIElNYWluU2NvcGUgZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XG4gICAgcXVlcmllczogay5RdWVyeVtdXG4gICAgc3RhdGU6IHN0cmluZ1xuICAgIGFkZFF1ZXJ5OiAoKSA9PiB2b2lkXG4gICAgcmVuYW1lUXVlcnk6IChvbGRRdWVyeTogay5RdWVyeSwgbmV3TmFtZTogc3RyaW5nKSA9PiB2b2lkXG4gICAgcmVtb3ZlUXVlcnk6IChxdWVyeTogay5RdWVyeSkgPT4gdm9pZFxuICAgIHJlc2l6ZTogKCkgPT4gdm9pZFxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlICRzY29wZTogSU1haW5TY29wZSwgcHJpdmF0ZSBzdGF0ZVNlcnZpY2U6IGsuU3RhdGVTZXJ2aWNlLCBwcml2YXRlICR0aW1lb3V0OiBhbmd1bGFyLklUaW1lb3V0U2VydmljZSkge1xuICAgICAgJHNjb3BlLnF1ZXJpZXMgPSBbXVxuICAgICAgJHNjb3BlLnN0YXRlID0gJ25vcm1hbCdcbiAgICAgIHN0YXRlU2VydmljZS5nZXRRdWVyeVN0YXRlKCd1bm5hbWVkIDEnKVxuICAgICAgJHNjb3BlLnF1ZXJpZXMucHVzaChuZXcgay5RdWVyeSgndW5uYW1lZCAxJykpXG4gICAgICAkc2NvcGUucXVlcmllc1swXS5hY3RpdmUgPSB0cnVlXG4gICAgICBsZXQgY291bnQ6IG51bWJlciA9IDJcbiAgICAgICRzY29wZS5hZGRRdWVyeSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5hbWU6IHN0cmluZyA9ICd1bm5hbWVkICcgKyBjb3VudCsrXG4gICAgICAgIHN0YXRlU2VydmljZS5nZXRRdWVyeVN0YXRlKG5hbWUpXG4gICAgICAgIGxldCBucTogay5RdWVyeSA9IG5ldyBrLlF1ZXJ5KG5hbWUpXG4gICAgICAgIG5xLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgJHNjb3BlLnF1ZXJpZXMucHVzaChucSlcbiAgICAgIH1cbiAgICAgICRzY29wZS5yZW5hbWVRdWVyeSA9IChvbGRRdWVyeTogay5RdWVyeSwgbmV3TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHN0YXRlU2VydmljZS5nZXRRdWVyaWVzKClbbmV3TmFtZV0gPSBzdGF0ZVNlcnZpY2UuZ2V0UXVlcmllcygpW29sZFF1ZXJ5Lm5hbWVdXG4gICAgICAgIGRlbGV0ZSBzdGF0ZVNlcnZpY2UuZ2V0UXVlcmllc1tvbGRRdWVyeS5uYW1lXVxuICAgICAgICBvbGRRdWVyeS5uYW1lID0gbmV3TmFtZVxuICAgICAgfVxuICAgICAgJHNjb3BlLnJlbW92ZVF1ZXJ5ID0gKHF1ZXJ5OiBrLlF1ZXJ5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBzdGF0ZVNlcnZpY2UuZ2V0UXVlcmllc1txdWVyeS5uYW1lXVxuICAgICAgICAkc2NvcGUucXVlcmllcy5zcGxpY2UoJHNjb3BlLnF1ZXJpZXMuaW5kZXhPZihxdWVyeSksIDEpXG4gICAgICB9XG4gICAgICAkc2NvcGUucmVzaXplID0gKCkgPT4gJHRpbWVvdXQoKCkgPT4gJHNjb3BlLiRicm9hZGNhc3QoJ3Jlc2l6ZScpKVxuICAgIH1cbiAgfVxufVxuIl19

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/ceecs-main.html',
    '\n' +
    '<div class="container-fluid">\n' +
    '  <div class="row">\n' +
    '    <uib-tabset ng-class="state==\'filter\' ? \'col-xs-12\' : (state==\'visualization\' ? \'col-xs-4\': \'col-xs-8\')">\n' +
    '      <uib-tab ng-repeat="query in queries" active="query.active">\n' +
    '        <uib-tab-heading><span ng-show="!editingName" ng-click="query.active &amp;&amp; (editingName=true)">{{query.name}}</span>\n' +
    '          <input ng-show="editingName" ng-model="newName" ng-init="newName=query.name" ng-blur="renameQuery(query,newName)" ng-keyup="($event.keyCode == 13 &amp;&amp; (renameQuery(query,newName) || true) &amp;&amp; (editingName=false)) || ($event.keyCode == 27 &amp;&amp; (editingName=false))"/><span class="glyphicon glyphicon-remove" ng-show="query.active" ng-click="removeQuery(query)"></span>\n' +
    '        </uib-tab-heading>\n' +
    '        <div class="container-fluid">\n' +
    '          <div class="row">\n' +
    '            <div ng-class="state==\'filter\' ? \'col-xs-2\' : (state==\'visualization\' ? \'col-xs-12\' : \'col-xs-3\')">\n' +
    '              <h4>Constrain</h4>\n' +
    '              <text-search-view view-id="text-search-view" query-id="query.name"></text-search-view>\n' +
    '              <multi-tree-views view-id="property-tree-views" query-id="query.name"></multi-tree-views>\n' +
    '            </div>\n' +
    '            <div ng-class="state==\'filter\' ? \'col-xs-10\' : \'col-xs-9\'" ng-show="state!=\'visualization\'">\n' +
    '              <h4>Filter\n' +
    '                <button class="btn btn-sm btn-default" ng-click="$parent.$parent.$parent.state= $parent.$parent.$parent.state==\'filter\' ? \'normal\' : \'filter\'"><span class="glyphicon glyphicon-resize-horizontal"></span></button>\n' +
    '              </h4>\n' +
    '              <result-list-view width="state==\'filter\' ? 60 : 40" show-metadata="state==\'filter\'" view-id="result-list-view" query-id="query.name"></result-list-view>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </uib-tab>\n' +
    '      <uib-tab select="addQuery()">\n' +
    '        <uib-tab-heading><span class="glyphicon glyphicon-plus"></span></uib-tab-heading>\n' +
    '      </uib-tab>\n' +
    '    </uib-tabset>\n' +
    '    <div ng-class="state==\'visualization\' ? \'col-xs-8\' : \'col-xs-4\'" ng-show="state!=\'filter\'">\n' +
    '      <h4>View\n' +
    '        <button class="btn btn-sm btn-default" ng-click="state= state==\'visualization\' ? \'normal\' : \'visualization\';resize()"><span class="glyphicon glyphicon-resize-horizontal"></span></button>\n' +
    '      </h4>\n' +
    '      <multi-google-chart-views view-id="google-chart-view" queries="queries"></multi-google-chart-views>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/multigooglechartviews.html',
    '\n' +
    '<google-chart-view ng-repeat="chart in charts" chart-definition="chart"></google-chart-view>\n' +
    '<div class="form-horizontal">\n' +
    '  <div class="form-group"> \n' +
    '    <label>Partition:</label>\n' +
    '    <select class="form-control" ng-model="selectedGrouping" ng-options="availableGrouping.label for availableGrouping in availableGroupings">\n' +
    '      <option value="">total</option>\n' +
    '    </select>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Sample length (years):</label>\n' +
    '    <input class="form-control" type="text" ng-model="movingSpan"/>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Graph type:</label>\n' +
    '    <div class="btn-group">\n' +
    '      <label class="btn btn-sm btn-success" ng-model="graphType" uib-btn-radio="\'individual\'">individual</label>\n' +
    '      <label class="btn btn-sm btn-success" ng-model="graphType" uib-btn-radio="\'areacomparison\'" ng-disabled="queries.length &lt; 2">compare as area</label>\n' +
    '      <label class="btn btn-sm btn-success" ng-model="graphType" uib-btn-radio="\'scattercomparison\'" ng-disabled="queries.length !== 2">compare as scatterplot</label>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-inline" ng-show="graphType == \'individual\'">\n' +
    '  <div class="checkbox">\n' +
    '    <label> \n' +
    '      <input type="checkbox" ng-model="hideTotals" ng-disabled="accumulation"/>\n' +
    '    </label>&nbsp;Hide totals\n' +
    '  </div>\n' +
    '  <div class="checkbox">\n' +
    '    <label> \n' +
    '      <input type="checkbox" ng-model="accumulation"/>\n' +
    '    </label>&nbsp;Show as accumulation chart\n' +
    '  </div>\n' +
    '  <div class="checkbox" ng-show="selectedGrouping!=\'\'">\n' +
    '    <label> \n' +
    '      <input type="checkbox" ng-model="separateGroups"/>\n' +
    '    </label>&nbsp;Partitions as charts\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-horizontal"> \n' +
    '  <div class="form-group">\n' +
    '    <label>Calculate values as:</label>\n' +
    '    <div class="btn-group">\n' +
    '      <label class="btn btn-sm btn-primary" ng-model="avgType" uib-btn-radio="\'total\'">total</label>\n' +
    '      <label class="btn btn-sm btn-primary" ng-model="avgType" uib-btn-radio="\'text\'">text average</label>\n' +
    '      <label class="btn btn-sm btn-primary" ng-model="avgType" uib-btn-radio="\'author\'">author average</label>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Number of bootstraps:</label>\n' +
    '    <input class="form-control" type="text" ng-model="bootstraps" ng-model-options="{updateOn : \'change blur\'}" ng-disabled="avgType === \'total\'"/>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/multitreeviews.html',
    '\n' +
    '<div ng-repeat="view in views">\n' +
    '  <label>{{view.label}}</label>\n' +
    '  <tree-view view-id="viewId" query-id="queryId" view-configuration="view.viewConfiguration"></tree-view>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <select ng-model="newView" ng-options="availableView.label for availableView in availableViews">\n' +
    '    <option></option>\n' +
    '  </select>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/resultlistview.html',
    '\n' +
    '<script type="text/ng-template" id="popover.html">\n' +
    '  <div class="small black" ng-bind-html="result.fulltext"></div>\n' +
    '</script>\n' +
    '<table infinite-scroll="scrollInstances()" infinite-scroll-parent="infinite-scroll-parent" infinite-scroll-distance="5">\n' +
    '  <tr class="item selected">\n' +
    '    <th colspan="3" ng-click="setOrderBy(\'match\')">Context <span class="glyphicon glyphicon-triangle-top" ng-show="orderBy==\'match\' &amp;&amp; !orderByDescending"></span><span class="glyphicon glyphicon-triangle-bottom" ng-show="orderBy==\'match\' &amp;&amp; orderByDescending"></span></th>\n' +
    '    <th ng-repeat="key in metadataKeys" ng-click="setOrderBy(\'metadata\'+key)">{{::key}} <span class="glyphicon glyphicon-triangle-top" ng-show="orderBy==\'metadata\'+key &amp;&amp; !orderByDescending"></span><span class="glyphicon glyphicon-triangle-bottom" ng-show="orderBy==\'metadata\'+key &amp;&amp; orderByDescending"></span></th>\n' +
    '  </tr>\n' +
    '  <tr class="item selected" ng-repeat="result in results" ng-click="filter(result,$event.ctrlKey||$event.metaKey)" ng-style="result.filtered ? {\'text-decoration\': \'line-through\'} : {}" uib-popover-template="\'popover.html\'" popover-trigger="mouseenter" popover-title="{{result.label}}" popover-placement="bottom">\n' +
    '    <td class="text-right" ng-if="result.snippet" ng-bind-html="result.snippet.before"> </td>\n' +
    '    <th class="text-center" ng-if="result.snippet">&nbsp;{{::result.snippet.match}}&nbsp;</th>\n' +
    '    <td class="text-left" ng-if="result.snippet" ng-bind-html="result.snippet.after"></td>\n' +
    '    <td ng-if="!result.snippet" colspan="3">{{::result.label}}</td>\n' +
    '    <td ng-repeat="metadata in result.metadata">&nbsp;{{::metadata}}</td>\n' +
    '  </tr>\n' +
    '</table>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/textsearchview.html',
    '\n' +
    '<div class="form-group">\n' +
    '  <label>Search</label>\n' +
    '  <input class="form-control" ng-model="query" ng-model-options="{ debounce: 300 }" ng-keyup="$event.keyCode == 13 &amp;&amp; setConstraint()"/>\n' +
    '</div>\n' +
    '<ul class="list-unstyled" infinite-scroll="scrollInstances()" infinite-scroll-parent="infinite-scroll-parent" infinite-scroll-distance="5">\n' +
    '  <li class="item" ng-repeat="keyword in keywords" ng-click="setConstraint(keyword.keyword,$event.ctrlKey||$event.metaKey)" ng-class="{selected:constraints[keyword.keyword]}"> <span>{{::keyword.keyword}}</span><span class="item-count pull-right">{{keyword.matchingInstances}}<span ng-show="keyword.totalInstances!=keyword.matchingInstances">/{{::keyword.totalInstances}}</span></span></li>\n' +
    '</ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/treeview.html',
    '\n' +
    '<script type="text/ng-template" id="treenode.html"><span>{{node.label}}</span><span class="pull-right">{{node.matchingInstances}}/{{node.instances}}</span>\n' +
    '  <ul class="list-unstyled">\n' +
    '    <li class="item" ng-repeat="node in node.children" ng-include="\'treenode.html\'" ng-click="selectElement(node,$event.ctrlKey);$event.stopPropagation()" ng-class="{selected:isSelected(node)}"></li>\n' +
    '  </ul>\n' +
    '</script>\n' +
    '<ul class="list-unstyled">\n' +
    '  <li class="item" ng-repeat="node in tree" ng-include="\'treenode.html\'" ng-click="selectElement(node,$event.ctrlKey);$event.stopPropagation()" ng-class="{selected:isSelected(node)}"></li>\n' +
    '</ul>');
}]);
})();
