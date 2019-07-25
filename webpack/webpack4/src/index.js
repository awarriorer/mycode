var a = {};

a.a = async function(){
    function abc(){
        return new Promise((resolve, reject) => {
            resolve(234);
            reject(789);
        });
    }

    let a = await abc();

    console.log(a);
};

module.exports = a;