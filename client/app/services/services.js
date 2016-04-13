import angular from 'angular';
import GymService from './gym/gym';
import GeneralService from './general/general';
import LoginService from './login/login';
import UserOrderService from './user_order/user_order';
import WorkoutHistoryService from './workout_history/workout_history';
import ImageService from './imgInput/imgInput'
import ReviewService from './review/review';
import UserChargeService from './user_charge/user_charge';
import SearchService from './search/search';
import PromoteCodeService from './promote_code/promote_code';

let serviceModule = angular.module('app.services', [
    GymService.name,
    GeneralService.name,
    LoginService.name,
    UserOrderService.name,
    WorkoutHistoryService.name,
    ImageService.name,
    ReviewService.name,
    UserChargeService.name,
    SearchService.name,
    PromoteCodeService.name,
]);

export default serviceModule;