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
  return db.createTable('products', {
    product_id: {
      type: 'int',
      primarykey: true,
    },
    product_name: {
      type: 'string',
      length: 30,
    },
    description: {
      type: 'string',
      length: 1000,
    },
    price: {
      type: 'float',
    },
  });
};

exports.down = function (db) {
  return db.dropTable('products');
};

exports._meta = {
  version: 1,
};
