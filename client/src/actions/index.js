import axios from "axios";
import convert from "xml-js";

import { FETCH_CURRENT_USER_DATA, FETCH_PROPERTY_DATA } from "./types";

const ROOT_URL = "https://www.zillow.com/webservice/GetDeepSearchResults.htm";
const API_KEY = "X1-ZWz18sa4dxcwln_8jmj2";

export const fetchCurrentUserData = () => async dispatch => {
  const request = await axios.get("/api/current_user");
  const { data } = request;
  dispatch({ type: FETCH_CURRENT_USER_DATA, payload: data });
}

export const fetchPropertyData = () => async dispatch => {
  const request = await axios.get(`${ROOT_URL}?zws-id=${API_KEY}&address=2114 Bigelow ave&citystatezip=Seattle, WA`);
  const { data } = request;
  const result = JSON.parse(convert.xml2json(data, { compact: true }));
  dispatch({ type: FETCH_PROPERTY_DATA, payload: result });
}