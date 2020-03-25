// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    // var copy_col = collection.slice();
    var copy_col = JSON.parse(JSON.stringify(collection));
    var args = [].slice.call(arguments).slice(1);
    args.sort();

    if (arguments.length == 1)
        return copy_col;

    for (var i = 0; i < args.length; i++){

        if (args[i][0] === 'filterIn'){
            var key = args[i][1];
            var mas_fil = args[i][2].slice();

            copy_col = copy_col.filter(filter);
            function filter(obj, ind) {
                return mas_fil.indexOf(obj[key]) !== -1;
            }
        }

        if (args[i][0] == 'select'){
            var mas_sel = args[i][1].slice();

            copy_col.forEach(selecting);
            function selecting(obj, ind) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++){
                    if (mas_sel.indexOf(keys[i]) === -1)
                        delete obj[keys[i]];
                }
            }
        }
    }
    return copy_col;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function filterIn(property, values) {
    return ['filterIn', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
