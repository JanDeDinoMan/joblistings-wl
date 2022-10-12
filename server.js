// Copyright 2022 janwillem
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//expose public files
app.use(express.static('public'));

//load lisings data
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());

// Init the server
var server = app.listen(process.env.PORT || 8000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// Add headers before the routes are defined
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/*
*   Returns if a string contains all the keywords.
*/
function containsAllKeyWords(listing, keywords) {
    for (var x = 0; x < keywords.length; x++) {
        if (listing.includes(keywords[x]) === false) {
            return false;
        }
    }
    return true;
}

/*
*   Return lisings that contain all the keywords.
*/
function filter(data, keywords) {
    let filtered = [];
    for (var listing in data) {
        listing = data[listing];
        if (containsAllKeyWords(JSON.stringify(listing), keywords)) {
            filtered.push(listing);
        }
    }
    return filtered;
}
/*  "/lisings?filters"
 *   GET: Get (filtered) lisings
 */
app.get("/listings", function (req, res) {
    let filterParams = req.query.filters;
    if (typeof filterParams !== 'undefined' && filterParams.length > 0) {
        let keywords = filterParams.split(",");
        res.status(200).json(filter(data, keywords));
    } else {
        res.status(200).json(data);
    }
});