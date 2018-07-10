import axios from "axios";

export default {

  getZip: function(zipcode) {
    return axios.get("/api/zipconvert/latlong", {params: zipcode})
  },

  getDogPark: function(latlongObj) {
    return axios.get("/api/google/dogparks", {params: latlongObj})
  },

  getPetStore: function(latlongObj) {
    return axios.get("/api/google/petstores", {params: latlongObj})
  },

  getVetOffice: function(latlongObj) {
    return axios.get("/api/google/vetoffices", {params: latlongObj})
  }
}