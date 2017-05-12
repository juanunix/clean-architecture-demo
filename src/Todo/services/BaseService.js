import { bindActionCreators } from "redux";

export default class BaseService {
  constructor(dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;
  }
}
