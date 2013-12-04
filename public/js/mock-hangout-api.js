// Shim gadget/gapi if we are mocking the hangout.
// Make global -- no 'var'.
gadgets = {
    util: {
        registerOnLoadHandler: function(cb) {
            cb();
        }
    },
    views: {
        getParams: function() {
            return {"appData": MOCK_DATA.appData};
        }
    }
};
// Make global -- no 'var'.
gapi = {
    hangout: {
        onApiReady: {
            add: function(cb) {
                cb({isApiReady: true});
            }
        },
        getHangoutUrl: function() {
            return MOCK_DATA.hangoutUrl;
        },
        getParticipants: function() {
            return MOCK_DATA.users;
        },
        hideApp: function() {
            alert("Hangout got 'hideApp' call");
        },
        data: {
            setValue: function(){},
            getValue: function(key) {
                if (key == "sessionId") {
                    return MOCK_DATA.appData.split(":")[1];
                }
            }
        }
    }
};