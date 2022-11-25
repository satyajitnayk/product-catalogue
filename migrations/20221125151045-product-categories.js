'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('product_categories', {
    category_id: {
      type: 'int',
      primarykey: true,
    },
    category_name: {
      type: 'string',
      length: 50,
    },
    description: {
      type: 'string',
      length: 500,
    },
  });
};

exports.down = function (db) {
  return db.dropTable('product_categories');
};

exports._meta = {
  version: 1,
};
