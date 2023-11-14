// 1

function printK_NTimes(k, n) {
  for (let i = 0; i < n; i++) {
    console.log(k);
  }
}

printK_NTimes(3, 5);
printK_NTimes(5, 10);
printK_NTimes(6, 20);

// 2
function printIntegers(a, b) {
  if (a > b) {
    console.log("Invalid input: a b dan kichik yoki teng bo'lishi kerak!");
    return;
  }

  let count = 0;

  for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
  }

  console.log(`Chiqarilgan raqamlarning soni: ${count}`);
}

printIntegers(3, 8);
printIntegers(1, 11);

// 3
function printDescending(a, b) {
  if (a >= b) {
    console.log("Invalid input: a b dan kichik bo'lishi kerak");
    return;
  }

  let count = 0;

  for (let i = b - 1; i > a; i--) {
    console.log(i);
    count++;
  }

  console.log(`Chiqarilgan raqamlar soni: ${count}`);
}

printDescending(6, 12);
printDescending(11, 22);

// 4

function calculate(price) {
  for (let kg = 1; kg <= 10; kg++) {
    let total = price * kg;
    console.log(` ${kg} kg konfet narxi: $${total}`);
  }
}
calculate(5);

// 5

function calculate2(price) {
  for (let kg = 0.1; kg <= 1; kg += 0.1) {
    let total = price * kg;
    console.log(` ${kg} kg konfet narxi: ${total} sum`);
  }
}
calculate2(35000);

// 6

function sum(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  console.log(sum);
}

sum(1, 10);

// while  1, 2
function kesma(a, b) {
let count = 0;

  while (a >= b) {
    a -= b;
    count++;
  }

  console.log(`Kesmaning bo'sh qismi: ${a}`);
  console.log(`b kesma a kesmada ${count} martta joylashgan`);
}

kesma(10, 3);
kesma(11, 4);


// while 3
function qoldiq(n, k) {
    

    let butun = 0;

    while (n >= k) {
        n -= k;
        butun++;
    }

    console.log(`Butun qismi: ${butun}, Qoldiq: ${n}`);
}

qoldiq(17, 5);
qoldiq(19, 4);


// while 5

function daraja(n){
    let k = 0;

    while(n > 1){
        n /= 2;
        k++
    }
    console.log(`2 ning ${k}chi darajasi`);
}
daraja(8);
daraja(32);


