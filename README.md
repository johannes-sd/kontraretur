# kontraretur
kontraretur SD

Just an inhouse app for easing and securing some processes at work.
Using node with express


Database credentials and sql-statements are only kept in local folders ignored by Git for security.

credentials for DB resides in a folder at rootlevel called "setting" and the file name is "databaseCreds.js"
content looks like this:

var config = {
    userName: "user",
    password: "password",
    server: "ip-address or Active directory-name"
}

module.exports = config;


Quieries i chose to keep in a folder at root level called "queries"

The files are called by descriptive names and content would typically look like this:

module.exports = function sqltext(custno) {
    return `
    select * from table
    where custno = '${custno}'
    `
    ;    
}
