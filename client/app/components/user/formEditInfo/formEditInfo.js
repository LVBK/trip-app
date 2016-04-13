import angular from 'angular';
import formEditInfoComponent from './formEditInfo.component';

let formEditInfoModule = angular.module('app.components.user.form.edit.info', [])
    .directive('userFormEditInfo', formEditInfoComponent)
    .directive("ngFileSelect", function () {
        return {
            link: function ($scope, el) {
                el.bind("change", function (e) {
                    $scope.vm.file = (e.srcElement || e.target).files[0];
                    $scope.vm.getFile();
                });
            }
        }
    });
export default formEditInfoModule;