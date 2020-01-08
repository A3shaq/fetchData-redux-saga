export const IMAGES_LOAD = 'IMAGES_LOAD';
export const IMAGES_LOAD_SUCCESS = 'IMAGES_LOAD_SUCCESS';
export const IMAGES_LOAD_FAIL = 'IMAGES_LOAD_FAIL';

const imagesLoad = (key, page) => {
    console.log('imagesLoad Action running');
    return {
        type: IMAGES_LOAD,
        payload: key,
        page,
    };
};

const imagesLoadSuccess = images => {
    return {
        type: IMAGES_LOAD_SUCCESS,
        payload: images,
    };
};

const imagesLoadFail = error => {
    return {
        type: IMAGES_LOAD_FAIL,
        payload: error,
    };
};

export { imagesLoad, imagesLoadSuccess, imagesLoadFail };
