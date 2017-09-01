'use strict';

exports.addPet = function(args, res, next) {
  /**
   * Add a new pet to the store
   * 
   *
   * body Pet Pet object that needs to be added to the store (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.deletePet = function(args, res, next) {
  /**
   * Deletes a pet
   * 
   *
   * petId Long Pet id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.findPetsByStatus = function(args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * status List Status values that need to be considered for filter (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findPetsByTags = function(args, res, next) {
  /**
   * Finds Pets by tags
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * tags List Tags to filter by (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getPetById = function(args, res, next) {
  /**
   * Find pet by ID
   * Returns a pet when ID < 10.  ID > 10 or nonintegers will simulate API error conditions
   *
   * petId Long ID of pet that needs to be fetched
   * returns Pet
   **/
  var examples = {};
  examples['application/json'] = {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 0,
  "category" : {
    "name" : "aeiou",
    "id" : 6
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 1
  } ],
  "status" : "available"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updatePet = function(args, res, next) {
  /**
   * Update an existing pet
   * 
   *
   * body Pet Pet object that needs to be added to the store (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.updatePetWithForm = function(args, res, next) {
  /**
   * Updates a pet in the store with form data
   * 
   *
   * petId String ID of pet that needs to be updated
   * name String Updated name of the pet (optional)
   * status String Updated status of the pet (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.uploadFile = function(args, res, next) {
  /**
   * uploads an image
   * 
   *
   * petId Long ID of pet to update
   * additionalMetadata String Additional data to pass to server (optional)
   * file File file to upload (optional)
   * no response value expected for this operation
   **/
  res.end();
}

