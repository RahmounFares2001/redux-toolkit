import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEESED = 'FETCH_USERS_SUCCEESED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,

    }
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCEESED,
        payload: users
    }
}

const fetchUsersFailed = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error, 
    }
}



