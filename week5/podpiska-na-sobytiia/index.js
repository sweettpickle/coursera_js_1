module.exports = {

    subs: [],
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subs.push({
            event: event,
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        this.subs = this.subs.filter(fun);
        function fun(item, index) {
            return item.event !== event || item.subscriber !== subscriber;
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.subs.forEach(fun);
        function fun(item, index) {
            if (item.event === event)
                item.handler.call(item.subscriber);
        }
        console.log(this.subs);
        console.log("\n");

        return this;
    }
};
