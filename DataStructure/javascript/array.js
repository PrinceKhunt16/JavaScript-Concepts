const nums = [1, 2, 3];
nums.push(4);
nums.unshift(3);
nums.pop();

console.log(nums);

/*

Time Complexity

push() - O(1)
pop() - O(1)
sort() - O(N Log N)
shift() - O(N)
unshift() - O(N)
splice() - O(N)
concat() - O(N)
slice() - O(N)
indexOf() - O(N)
forEach() - O(N)
map() - O(N)
filter() - O(N)
reduce() - O(N)
some() - O(N)
every() - O(N)

*/