// Custom datepicker template to work with the theme

(function(window, document, undefined) {
'use strict';
    /*jshint multistr:true */
    angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache', function($templateCache) {
        $templateCache.put('datepicker/datepicker.tpl.html',
            "<div class=\"datepicker datepicker-dropdown dropdown-menu\" style=\"display: block; z-index:10\"> \
                <div ng-class=\"{'datepicker-days': $mode === 0, 'datepicker-months': $mode === 1, 'datepicker-years': $mode === 2}\" style=\"display: block;\"> \
                    <table class=\"table-condensed\"> \
                        <thead> \
                            <tr> \
                                <th class=\"prev\" style=\"visibility: visible;\" ng-click=\"$selectPane(-1)\"> \
                                    <i class=\"icon-arrow-left\"/> \
                                </th> \
                                <th class=\"datepicker-switch\" colspan=\"{{ rows[0].length - 2 }}\" ng-bind=\"title\" ng-click=\"$toggleMode()\"> \
                                </th> \
                                <th  class=\"next\" style=\"visibility: visible;\" ng-click=\"$selectPane(+1)\"> \
                                    <i class=\"icon-arrow-right\"/> \
                                </th> \
                            </tr> \
                            <tr ng-show=\"$mode == 0\" ng-bind-html=\"labels\"> \
                            </tr> \
                        </thead> \
                        <tbody> \
                            <tr ng-repeat=\"(i, row) in rows\" height=\"{{ 100 / rows.length }}%\"> \
                                <td ng-if=\"$mode === 0\" class=\"text-center day\" ng-repeat=\"(j, el) in row\" ng-class=\"{'old': el.muted, 'active': el.selected}\" ng-bind=\"el.label\" ng-click=\"$select(el.date)\" ng-disabled=\"el.disabled\"> \
                                </td> \
                                <td ng-if=\"$mode > 0\" colspan=\"{{rows[0].length}}\"> \
                                    <span ng-repeat=\"(j, el) in row\" ng-class=\"{'old': el.muted, 'active': el.selected, 'month': $mode === 1, 'year': $mode === 2}\" ng-bind=\"el.label\" ng-click=\"$select(el.date)\" ng-disabled=\"el.disabled\"> \
                                    </span> \
                                </td> \
                            </tr> \
                        </tbody> \
                    </table> \
                </div> \
            </div>"
        );
    }]);

})(window, document);