// Import the required modules
const request = require('request');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Define the base URL for the API
const BASE_URL = 'https://cat-fact.herokuapp.com/facts';

// Define a variable to store the response
let apiResponse = null;

// Define a step to make a GET request to the API
Given('I make a GET request to the API', function (callback) {
  // Make the request and store the response
  request.get(BASE_URL, function (error, response, body) {
    if (error) {
      callback(error);
    } else {
      apiResponse = response;
      callback();
    }
  });
});

// Define a step to verify the status code of the response
Then('the response status code should be {int}', function (statusCode, callback) {
  // Assert that the status code is equal to the expected value
  assert.equal(apiResponse.statusCode, statusCode);
  callback();
});

// Define a step to verify the content type of the response
Then('the response content type should be {string}', function (contentType, callback) {
  // Assert that the content type header is equal to the expected value
  assert.equal(apiResponse.headers['content-type'], contentType);
  callback();
});

// Define a step to verify the type of the facts in the response
Then('the type of the facts should be {string}', function (factType, callback) {
  // Parse the response body as JSON
  let facts = JSON.parse(apiResponse.body);
  // Loop through each fact and assert that the type is equal to the expected value
  for (let fact of facts) {
    assert.equal(fact.type, factType);
  }
  callback();
});

// Define a step to verify the size of the facts array in the response
Then('the size of the facts array should be {int}', function (arraySize, callback) {
  // Parse the response body as JSON
  let facts = JSON.parse(apiResponse.body);
  // Assert that the length of the facts array is equal to the expected value
  assert.equal(facts.length, arraySize);
  callback();
});
