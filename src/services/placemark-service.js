import axios from "axios";
import {user} from "../stores";
import sanitizeHtml from "sanitize-html";

// hapi hosted https://render.com
export class PlacemarkService {
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        console.log(baseUrl);
        const placemarkCredentials = localStorage.placemark;
        console.log(placemarkCredentials);
        if (placemarkCredentials) {
            const savedUser = JSON.parse(placemarkCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            console.log(response);
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.donation = JSON.stringify({email: email, token: response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("placemark");
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    }
    // Placemarks API
    async getAllPlacemarks() {
        try {
            const response = await axios.get(this.baseUrl + "/api/placemarks");
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async getUserPlacemarks() {
        const response = await axios.get(this.baseUrl + "/api/placemarks/userplacemarks");
        return response.data;
    }

    async addPlacemark(placemark) {
        try {
            const response = await axios.post(this.baseUrl + "/api/placemarks", placemark);
            return response.data;
        } catch (error) {
            return false;
        }
    }
    // Users API
    async getAllUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        } catch (error) {
            return [];
        }
    }

    async deleteUser(userid) {
        try {
            const response = await axios.delete(
                this.baseUrl + "/api/users/" + userid
            );
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getLoggedInUser() {
        try {
            const loggedInUser = await axios.get(
                this.baseUrl + "/api/users/loggedInUser"
            );
            return loggedInUser;
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    // Station API

    async getStationByPlacemarkId() {
        try {
            const response = await axios.get(this.baseUrl + "/api/stations/" );
            return response.data;
        } catch (error) {
            return {};
        }
    }

    async getAllStations() {
        try {
            const res = await axios.get(`${this.baseUrl}/api/stations/`);
            return res.data;
        } catch (error) {
            console.log("no such id");
            return null;
        }
    }

    async getStationById(stationid) {
        try {
            const response = await axios.get(this.baseUrl + "/api/stations/" + stationid);
            return response.data;
        } catch (error) {
            return {};
        }
    }

    async addStation(stationid, station) {
        try {
            const response = await axios.post(
                this.baseUrl + "/api/placemarks/" + placemarkid + "/stations",
                station
            );
            return response.data;
        } catch (error) {
            return false;
        }
    }

    async deleteStation(stationid) {
        try {
            const response = await axios.delete(
                this.baseUrl + "/api/stations/" + stationid
            );
            return true;
        } catch (error) {
            return false;
        }
    }

}
