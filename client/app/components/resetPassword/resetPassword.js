import angular from 'angular';
import StepOne from './stepOne/stepOne';
import StepTwo from './stepTwo/stepTwo';
import StepModal from './stepModal/stepModal';
import ModalStep from './modalStep/modalStep'

let resetPasswordModule = angular.module('app.components.reset.password', [
    StepOne.name,
    StepTwo.name,
    StepModal.name,
    ModalStep.name,
]);

export default resetPasswordModule;