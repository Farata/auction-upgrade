import * as moment from 'moment';

'use strict';

angular.module('store').filter('fromNow', function () {
  return function (input) {
    return moment(input).fromNow();
  };
});
