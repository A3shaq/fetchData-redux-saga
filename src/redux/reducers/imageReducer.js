import { IMAGES_LOAD, IMAGES_LOAD_SUCCESS, IMAGES_LOAD_FAIL } from '../actions';

const initial_state = {
    images: [],
    page: 1,
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case IMAGES_LOAD: {
            //let newImages = [...state.images];
            return {
                ...state,
            };
        }

        case IMAGES_LOAD_SUCCESS: {
            let newImages = [...state.images, ...action.payload];
            return {
                ...state,
                images: newImages,
                page: state.page + 1,
            };
        }

        case IMAGES_LOAD_FAIL: {
            return {};
        }
        default: {
            return state;
        }
    }
};

export default reducer;
