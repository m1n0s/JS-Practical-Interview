/**
 * Created by Shlomi on 04/09/2015.
 */

(function(){
    items = [];

    items.push('a');
    items.push('b');
    items.push('c');
    items.push('d');

    // What's the leak in this code, why?, and how to fix it?
})();

(function(){

    function init() {
        $('#elem').click(() => {});
    }

    init();
    init();
    init();
    init();

    // What's the logical problem in this code and how to fix it?
})();

(function(){
    const a = {
        a: 5,
        foo(){
            console.log(`a = ${this.a}`);
        }
    };

    const elem = $('body');
    elem.on('event', a.foo.bind(a));
    elem.off('event', a.foo);

    elem.trigger('event');

    // What's the possible leak in this code and how to fix it?
})();


