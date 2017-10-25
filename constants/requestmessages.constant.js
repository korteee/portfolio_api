const requestMessages = Object.freeze({
    badReq: {
        noArgs: "NO ARGUEMENTS PASSED",
        missingArgs: "NOT ALL ARGUEMENTS PASSED"
    },
    badData: {
        invalid: {
            email: "EMAIL IS INVALID",
            description: "DESCRIPTION MUST BE AN ARRAY OF STRINGS"
        }
    }
});

module.exports = requestMessages;