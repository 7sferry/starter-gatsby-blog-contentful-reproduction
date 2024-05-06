/************************
 * Made by [MR Ferry™]  *
 * on July 2022         *
 ************************/
// var fs = require("fs");
// const { join } = require("path");
// fs.mkdirSync("A:\\proyek\\code\\private\\gatsbyan\\public\\blog\\acid-pada-database-atomicity");
//
// fs.writeFile(
//   "A:\\proyek\\code\\private\\gatsbyan\\public\\blog\\acid-pada-database-atomicity\\index.html",
//   "Hello content!",
//   function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   }
// );
// let { writeFile } = require("fs");
//
// writeFile(
//   "A:\\proyek\\code\\private\\gatsbyan\\public\\blog\\acid-pada-database-atomicity\\index.html",
//   `<meta http-equiv="refresh" content="0; URL='${123}'" />`,
//   (err) => {
//     console.log(err);
//   }
// );
//
// let r = "";
// // for(let i = 1; i <= 406; i++){
// for(let i = 1; i <= 1000; i++){
//   r += "" + i;
// }
// // console.log(r);
// // console.log(r);
// console.log(r.charAt(1111-1));
//
// let counter = 1;
// let str = "";
// const limit = 1111;
// while(str.length <= limit){
//   str += counter++;
// }
// console.log(str)
// console.log(str.charAt(1111-1))
//
// //9>1 99>
// // let x = 9;
// // let multiply = 1;
// // let multiply2 = 1;
// // let base = 1;
// // while(base * 9 <= 1111){
// //   multiply++;
// //   multiply2 *= 10;
// //   base = multiply2 * multiply + base;
// //   console.log(base)
// // }

function constructSubContents(rawMarkdownBody) {
  const contents = rawMarkdownBody.match(/[\s\S]{1,10}/g) || []
  // let lastWord = "";
  // const resultContents = [];
  // for (let i = 0; i < contents.length; i++) {
  //   let content = contents[i];
  //   content = lastWord + content;
  //   const number = content.lastIndexOf(" ");
  //   lastWord = content.substring(number + 1, content.length);
  //   resultContents[i] = content.substring(0, number);
  // }
  return contents
}

function constructSubContents2(rawMarkdownBody) {
  const contents = rawMarkdownBody.match(/[\s\S]{1,10}/g) || []
  let lastWord = ''
  const resultContents = []
  contents.forEach((content) => {
    content = lastWord + content
    const number = content.lastIndexOf(' ')
    lastWord = content.slice(number + 1)
    if (number < 0) {
      return
    }
    resultContents.push(content.substring(0, number))
  })
  resultContents.push(lastWord)
  return resultContents
}

// console.log(constructSubContents("Gw paling males kalau ada acara ngumpul-ngumpul, seperti acara keluarga, bukber, reunian, acara" +
// " kampus, apalagi kalau ga ada orang yang gw kenal akrab di sana. Kalau acara keluarga biasanya karena ga enak aja" +
//   " makanya kadang gw ikut, tapi kalau bisa gw tolak yang mending gw tolak. Kalau acara bukber, acara kampus, gw emang jarang banget datang. Kalau acara reunian gw emang ga pernah datang sih, awkward aja rasanya. Biasanya di sana gw diam aja sepanjang hari, karena gw sering merasa ga nyaman. Waktu kecil ketika lagi ngumpul-ngumpul di rumah saudara biasanya gw bakal nangis minta pulang setelah 1 atau 2 jam. Gw merasa stress sendiri aja berada di lingkungan yang menurut gw terlalu ramai dalam jangka waktu yang lama. Sampai sekarang gw masih merasa seperti itu, bedanya sekarang hanya gw pendam dalam hati dan berharap bisa keluar secepatnya. Makanya gw sering ga mau diajak acara-acara begituan, palingan terpaksa. Gw lebih menikmati waktu gw sendiri atau hanya bersama orang yang nyambung dengan gw."))
//
// console.log(constructSubContents2("Gw paling males kalau ada acara ngumpul-ngumpul, seperti acara keluarga, bukber," +
//   " reunian, acara" +
// " kampus, apalagi kalau ga ada orang yang gw kenal akrab di sana. Kalau acara keluarga biasanya karena ga enak aja" +
//   " makanya kadang gw ikut, tapi kalau bisa gw tolak yang mending gw tolak. Kalau acara bukber, acara kampus, gw" +
//   " emang jarang banget datang. Kalau acara reunian gw emang ga pernah datang sih, awkward aja rasanya. Biasanya di" +
//   " sana gw diam aja sepanjang hari, karena gw sering merasa ga nyaman. Waktu kecil ketika lagi ngumpul-ngumpul di" +
//   " rumah saudara biasanya gw bakal nangis minta pulang setelah 1 atau 2 jam. Gw merasa stress sendiri aja berada di" +
//   " lingkungan yang menurut gw terlalu ramai dalam jangka waktu yang lama. Sampai sekarang gw masih merasa seperti" +
//   " itu, bedanya sekarang hanya gw pendam dalam hati dan berharap bisa keluar secepatnya. Makanya gw sering ga mau" +
//   " diajak acara-acara begituan, palingan terpaksa. Gw lebih menikmati waktu gw sendiri atau hanya bersama orang" +
//   " yang nyambung dengan gw.")[99])

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ya29.a0AVvZVsrOE0UDXRk8NDeAuuWv6M3ZncipXXMNWz7ehADwCY9ogcS4ZIFS_cVH-0t8po6DtddmrSzJjxXJIkqjYW_wEPyKTgn8JnXfn9PEV_h_ckhissSD1pVAQJy0teXbIlYhMb__LKPZXcVrWQNDWLXVKzS0J9GCqyA4URAaCgYKAdgSARESFQGbdwaIjty8C_oAxfZK70i8Rpktpw0174',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  return response.json() // parses JSON response into native JavaScript objects
}

// postData("https://content-analyticsdata.googleapis.com/v1beta/properties/270209098:runReport?alt=json", {
//   "dimensions": [{ "name": "pagePath" }],
//   "metrics": [{ "name": "screenPageViews" }],
//   "dateRanges": [{ "startDate": "30daysAgo", "endDate": "yesterday" }],
//   "limit": "20",
//   "orderBys": [{ "metric": { "metricName": "screenPageViews" }, "desc": true }]
// }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

require('dotenv').config()
const { google } = require('googleapis')

const scopes = [
  // View and manage your Google Analytics data
  'https://www.googleapis.com/auth/analytics',

  // See and download your Google Analytics data
  'https://www.googleapis.com/auth/analytics.readonly',
]
const jwt = new google.auth.JWT(
  process.env.ANALYTICS_EMAIL,
  null,
  // fix netlify \n in env vars
  // https://github.com/auth0/node-jsonwebtoken/issues/642#issuecomment-585173594
  process.env.ANALYTICS_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
  scopes,
)
let authorize = jwt.authorize()

const analyticsReporting = google.analyticsdata({
  version: 'v1beta',
  auth: jwt,
})

const prope = analyticsReporting.properties
console.log(prope)
const response = prope.runReport({
  property: `properties/${process.env.ANALYTICS_GA4}`,
  requestBody: {
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }],
    dateRanges: [{ startDate: '30daysAgo', endDate: 'yesterday' }],
    limit: '20',
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
  },
})

console.log('Report result:')
response.then((data) => {
  const rows = data.data.rows
  for (const row of rows) {
    console.log(row.dimensionValues[0].value + ' = ' + row.metricValues[0].value)
  }
})

const x =
  '-----BEGIN PRIVATE' +
  ' KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDaWzEx1lgM2+vM\\nawnpeWsRXx5Hu35VtZ/wFVym4LFwfAp//LmpK1JpgLo6MRdpW/Kh6TlrkydiD8r4\\nBDivUpeXUMqPwFOde9WXUAnf4JMxcIoHVUm4vERE3DsGwenxbQEiDICyKH+LSlkm\\n4zRJVSwtCm57VkKwzj2qtVyBDgLRTbUe4i0JplEM0AfSlSDAAlL+25H0AJZsEd1U\\nLCGj015EBK1hADbW3M+ooF5GnRGFnpf+velnbXExSsM3mQTYpq9NN+VmH25ywzMi\\nU7i0JC++mkBZ5vDRvztlnxruffbi3It+L0y/bTgTDj3jOvw6eJk0eVwBv/XMQMjJ\\nkyisALfpAgMBAAECggEAGBuq6A16DbtnQpvLzZ0D+vhFQ9a52VUy+iMlpmAW/ywW\\nzbA1wG2BzRezF/MtGksWVBWHqy6lUcCcIHt41bSY+5ImNy5dHP1b5Peni3IEVlhO\\nSQZ72/tfTzoAg1u8DFWEY0G9oM3zXQnho3dA4drXRIbLEW+B7/rpWJRrCO2m1nxZ\\nbJQZLxp5PKx+CIqSyDI46ocSGxc3FNN/XDuU8+23GkNIPZlOU7wUc6bq5nRuOH/v\\n+ug8UBbQzbtIHctsJ0KrLsCqmxw4wJWI+WcRJyIkD+JwulTsrLAz6vVDvR0oSqoz\\nFqY+t2p/p2E0crY3OSzGwqscyyIzNlxfftv/vxuGAQKBgQDwdPla4dtHHjWQBuAu\\nb9Gq3HWbSPkCkDtbwLLM6UmVCOo9w9csBQfRBxZPrXzqlMdQa0/fcGP7SyNWlRc+\\nOxlsqRI6xr22u+dHGeChJQZpzmLOGjn9biSBr2TWYLpBn3isem4mwsoYXlluYOMD\\nYR2tG/h5s3Mm2aJiO81lLJdxAQKBgQDoeIAqsf/Crjr87dX2VALM66zHz4D1uhUs\\nznsVpV3DdvhY7AL3n+fK3vIZO/w1cvHiz4YW5wyvFIHp7hFyUP77bJ1qKxgY0j3l\\nS5uk7hMJjqgOdYAtYa43S77SBkfoiPTE9DF3cX+JvmM/k/B4c1HQcH9qxmo7cmPj\\nKZFqVize6QKBgBM29boadEBRnKwesIllbBbAOTGoeiWHSwcA9gjD15puNPGslaQx\\n3rcIXvMNBP9l1iuJ977+Jy8siO1hSpMxe82gERHbUcupZkjbO4UFBWctE94uYFXt\\nGEO4tVEgN6II0UbPHcBBLo8V8wWL/ngFqa5snsVy3o/LMluxNa+RCaUBAoGALUMI\\n8Ucm3Oi/Y2+LMSK6SNu6EE0+dpl8dfTd0iEYWG5ZfDa3fS8NGlq+GFuth1qR7e8p\\n1Fu4BH6hrMJFc1SB0MIdBAbP8kU899/4tewEmN/FqMsH4c4a9Xkx9gJzDbtcrNw+\\npVrb0h3XhRFwyILrcwH0TP3EwT5MZHY7cdDFe8ECgYBm6H8WxTbHHsnrLZIqf3og\\niVbgeHzaNmaM2oldC4Mp9YtkvnsYeCUgD/OrdM6b0YorM8z2sz6swqJ7qjdHKa0p\\nCQPG2eWU8A8KQcyvFAkJW/DtevQKwZSPLoY8K46Js4LxtwlKLnT+Ufdsv4hf7IGt\\nMxOHQqGN+/5gHVk3PdDHxA==\\n-----END PRIVATE KEY-----\\n'
// console.log(x.replace(/\\n/gm, "\n"));

// const analyticsReporting2 = google.analyticsreporting({
//   version: "v4",
//   auth: jwt,
// });
//
// const result = analyticsReporting2.reports.batchGet({
//   requestBody: {
//     reportRequests: [
//       {
//         viewId: process.env.ANALYTICS_VIEW_ID,
//         dateRanges: [
//           {
//             startDate: "2008-01-01",
//             endDate: "today",
//           },
//         ],
//         metrics: [
//           {
//             expression: "ga:pageviews",
//           },
//         ],
//         dimensions: [
//           {
//             name: "ga:pagePath",
//           },
//         ],
//         orderBys: [
//           {
//             sortOrder: "DESCENDING",
//             fieldName: "ga:pageviews",
//           },
//         ],
//         pageSize: 100,
//       },
//     ],
//   },
// });
// console.log(result.data);
