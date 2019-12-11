function Time(date) {
    let data = new Date(date);
    methods = ["years", "months", "days", "hours", "minutes"];

    Object.defineProperties(data, {
        'add': {
            value: function (num, param) {
                if (num > 0 && (methods.includes(param))) {
                    if (param === 'years')
                        data.setUTCFullYear(data.getUTCFullYear() + num);
                    if (param === 'months')
                        data.setUTCMonth(data.getUTCMonth() + num);
                    if (param === 'days')
                        data.setUTCDate(data.getUTCDate() + num);
                    if (param === 'hours')
                        data.setUTCHours(data.getUTCHours() + num);
                    if (param === 'minutes')
                        data.setUTCMinutes(data.getUTCMinutes() + num);
                    return this;
                }
                else
                    throw new TypeError();
            }
        },
        'subtract': {
            value: function (num, param) {
                if (num > 0 && (methods.includes(param))){
                    if (param === 'years')
                        data.setUTCFullYear(data.getFullYear() - num);
                    if (param === 'months')
                        data.setUTCMonth(data.getUTCMonth() - num);
                    if (param === 'days')
                        data.setUTCDate(data.getUTCDate() - num);
                    if (param === 'hours')
                        data.setUTCHours(data.getUTCHours() - num);
                    if (param === 'minutes')
                        data.setUTCMinutes(data.getUTCMinutes() - num);
                    return this;
                }
                else
                    throw new TypeError();
            }
        }
    });

    Object.defineProperty(data, "value", {
        get: function () {
            function check(str){
                if (parseInt(str) < 10)
                    return '0' + str;
                else
                    return str;
            }
            let result = data.getUTCFullYear() + '-' + check(data.getUTCMonth()) + '-' + check(data.getUTCDate()) +
                ' ' + check((data + 3).getUTCHours()) + ':' + check(data.getUTCMinutes());
            return result;

            // return data.toLocaleDateString("ru").split(".").reverse().join("-") +
            //     " " + data.toTimeString().split(" ")[0].slice(0, 5)
        }
    });

    return data;
}

let time = Time('2017-05-16 00:50');
console.log(time.add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes'));

console.log(time.value);
// console.log(time.getUTCMinutes());
// console.log(time.add(15, 'minutes'));

// var today = new Date();
// var day = today.getUTCMonth();
// console.log((day));

// console.log(time.value);