// 1

let one = [1, 2, 3];
one[1] = 5;

// 2

let two = ['wow', 'SUPERWOW', 'SUPERMEGAWOW'];
two.push('wow1');

// 3

let three = [2, 2];
let all = 0;
for (let i = 0; i < three.length; i++) {
	all += three[i];
}

// 4

let four = ['wow', 'wow1', 'wow2', 'wow3', 'wow4'];

for (let i = 0; i < four.length; i++) {
	alert(four[i]);
}

// 5

let five = ['apple', 'wow', 'golden', 'monitor', 'I love apple'];

let i = 0;
while (i < five.length) {
	i++;
	if (five[i].length > 5) {
		alert(five[i]);
	}
}

// 6

let six = [1, 2, 3, 4, 7, 6, 11, 26, 93, 89];

let count = six[0];

for (let i = 0; i < six.length; i++) {
	if (six[i] > count) {
		count = six[i];
	}
}

// 7

let seven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < seven.length; i++) {
	if (seven[i] % 2 == 0) {
		alert(seven[i]);
	}
}
