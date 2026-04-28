const { URL } = require('url');

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

url.searchParams.append("json", "");

console.log(url.toString());
