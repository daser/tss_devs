'use strict';
//=============================================================================
/**
 * Import sub-modules
 */
//=============================================================================
const
    createJob = require('./createJob'),
    getJob = require('./getJob'),
    deleteJob = require('./deleteJob'),
    updateJob = require('./updateJob');
//=============================================================================
/**
 * Export module
 */
//=============================================================================
module.exports = {
    createJob,
    getJob,
    deleteJob,
    updateJob
};
//=============================================================================
