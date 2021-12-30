let phonenum = "12485245656";

phoneArr = phonenum.split('');

console.log(phoneArr);

phoneArr.unshift('+'); // ilk elemanı + yaptı.

console.log(phoneArr);

phoneArr.splice(2,0,' '); // 2. elemandan sonra 0 tane eleman silip boşluk ekledi.

console.log(phoneArr);

phoneArr.splice(3,0,'('); // 3. elemandan sonra 0 tane eleman silip '(' ekledi.

console.log(phoneArr);

phoneArr.splice(7,0,')'); // 7. elemandan sonra 0 tane eleman silip '(' ekledi.

console.log(phoneArr);

phoneArr.splice(8,0,' '); // 8. elemandan sonra 0 tane eleman silip '(' ekledi.

console.log(phoneArr);

phoneArr.splice(12,0,' '); // 12. elemandan sonra 0 tane eleman silip '(' ekledi.

console.log(phoneArr.join(' '));
