const { URL } = require('url');

const date = "202202";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/reserv");

url.searchParams.append("date", date);
url.searchParams.append("json", "");

console.log(url.toString());