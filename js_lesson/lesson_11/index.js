import {name} from "./module.js";
import isEmail from "validator/lib/isEmail";
import isUrl from "validator/lib/isURL";
import toDate from "validator/lib/toDate";
import moment from "moment";
import "./style.css";

console.log(`Your name: ${name}`);

console.log(isEmail("vldStr@gmail.com"));
console.log(isUrl("https://www.npmjs.com/package/lodash"));
console.log(toDate("2024-05-23"));

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));