// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

exportconstVERSION = process.env.VERSION;
exportconstDEBUG_INFO_ENABLED:boolean = !!process.env.DEBUG_INFO_ENABLED;
exportconstSERVER_API_URL = process.env.SERVER_API_URL;
exportconstBUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
