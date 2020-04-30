import axios from "axios";

export default axios.create({
    baseURL :'https://raw.githubusercontent.com/n4bz/COVID-19/master/data_by_regions.json',
});
