function Substring(str) {
    let sub = [];
    while (str != '') {
        for (let i = 1; i <= str.length; i++) {
            sub.push(str.substring(0, i));
        }
        str = str.slice(1);
    }
    
    console.log(sub);
    return sub
}

Substring('empty');
Substring('cat');