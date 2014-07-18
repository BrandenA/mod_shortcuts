/*
 * Breach: [mod_shortcuts] index.js
 *
 * Copyright (c) 2014, Branden Morin. All rights reserved.
 *
 * @author: MorinB
 *
 * @log:
 * - 2014-07-18 MorinB  Creation
 */

'use strict';

var breach = require('breach_module');

breach.init(function() {
    breach.expose('init', function(src, args, cb){
        console.log('Initialization');
        cb();
    });
    
    breach.expose('kill', function(src, args, cb){
        common.exit(0);
    });
    
});

process.on('uncaughtException', function (err) {
  common.fatal(err);
});