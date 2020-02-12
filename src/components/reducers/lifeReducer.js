import {
  DRINK_COFFEE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY
} from '../actions/lifeActions';

export default function reducer(state, action) {
  switch (action.type) {
    case DRINK_COFFEE: {
      return { ...state, count: state.coffees + 1 };
    }
    case EAT_SNACK: {
      return { ...state, count: state.snacks + 1 };
    }
    case TAKE_NAP: {
      return { ...state, count: state.naps + 1 };
    }
    case STUDY: {
      return { ...state, count: state.study + 1 };
    }
    default:
      return state;
  }
}
