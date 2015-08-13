'use strict';
angular.module('app.ui.formControllers', [])
  .controller('formCtrl', function ($scope) {

    /*Select*/
    $scope.disabled = undefined;
    $scope.enable = function () {
      $scope.disabled = false;
    };
    $scope.disable = function () {
      $scope.disabled = true;
    };
    $scope.clear = function () {
      $scope.person.selected = undefined;
    };
    $scope.person = {};
    $scope.people = [
      {name: 'Adam', email: 'adam@email.com', age: 10},
      {name: 'Amalie', email: 'amalie@email.com', age: 12},
      {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
      {name: 'Samantha', email: 'samantha@email.com', age: 31},
      {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
      {name: 'Natasha', email: 'natasha@email.com', age: 54},
      {name: 'Nicole', email: 'nicole@email.com', age: 43},
      {name: 'Adrian', email: 'adrian@email.com', age: 21}
    ];

    $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];
    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue', 'Red'];

    /*Inputmask*/
    $scope.dateFormatOption = {
      mask: function () {
        return ["99/99/9999"];
      }
    };
    $scope.mask = {regex: ["999.999", "aa-aa-aa"]};
    $scope.telephoneOption = {
      "mask": "99-9999999"
    };
    $scope.numberOption = {
      mask: function () {
        return ["[1-]AAA-999-999", "[1-]999-AAA-999"];
      }
    };

  })
  .controller('uploadCtrl', ['$scope', 'FileUploader', function ($scope, FileUploader) {
    var uploader = $scope.uploader = new FileUploader({
      url: 'upload.js'
    });

    // FILTERS

    uploader.filters.push({
      name: 'customFilter',
      fn: function (item /*{File|FileLikeObject}*/, options) {
        return this.queue.length < 10;
      }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function (addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function (item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function (fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function (progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function (fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function () {
      console.info('onCompleteAll');
    };

    // console.info('uploader', uploader);
  }])
  .config(['$validationProvider', function ($validationProvider) {

    var defaultMsg,
      expression;

    defaultMsg = {
      url: {
        error: 'This is a error url given by user',
        success: 'It\'s Url'
      }
    };

    $validationProvider.setDefaultMsg(defaultMsg);


    expression = {
      ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    };

    defaultMsg = {
      ip: {
        error: 'This isn\'t ip address',
        success: 'It\'s ip'
      }
    };

    $validationProvider.setExpression(expression)
      .setDefaultMsg(defaultMsg);

    $validationProvider.setDefaultMsg({ip: {error: 'This no ip', success: 'this ip'}})
      .setExpression({ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/});

    $validationProvider
      .setExpression({
        range: function (value, scope, element, attrs) {
          if (value >= parseInt(attrs.min) && value <= parseInt(attrs.max)) {
            return value;
          }
        }
      })
      .setDefaultMsg({
        range: {
          error: 'Number should between 5 ~ 10',
          success: 'good'
        }
      });
  }])
  .controller('formValidationCtrl', ['$scope', '$injector', function ($scope, $injector) {

    var $validationProvider = $injector.get('$validation');

    $scope.form = {
      requiredCallback: 'required',
      checkValid: $validationProvider.checkValid,
      submit: function () {
      },
      reset: function () {
      }
    };

    // Callback method
    $scope.success = function (message) {
      alert('Success ' + message);
    };

    $scope.error = function (message) {
      alert('Error ' + message);
    };
  }]).
  controller('formWizardCtrl', ['$scope', function ($scope) {

    $scope.enterValidation = function () {
      return true;
    };

    $scope.exitValidation = function () {
      return true;
    };
  }]);
