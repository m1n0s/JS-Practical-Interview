/**
 * Created by Shlomi on 05/09/2015.
 */

import helper from './utils/helper';

(()=>{
    // Assume:

    function load(val, cb){
        setTimeout(()=>{
            if(val === this.val) return cb(null, val);
            cb(new Error('Not equal'));
        }, 1000);
    }

    load(5, (err, data) => {});

    // Implement `loadP` that promisified `load`
    loadP().then(data => {}).catch(err => {});
})();

(()=>{
    // Assume:

    function load1(){
        // `fakeAjax` is a promisified function
        return helper.fakeAjax('/a');
    }

    function load2(){
        // `fakeAjax` is a promisified function
        return helper.fakeAjax('/b');
    }

    function load3(){
        // `fakeAjax` is a promisified function
        return helper.fakeAjax('/c');
    }

    // Use the 3 promisified functions in series and in parallel, make sure you're catching errors as well
})();

