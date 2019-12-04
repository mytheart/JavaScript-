const arr = [1, 2, 3, 4, 5, 6];

function ArrTraverse(arr) {
  if (arr == null) return; // 算法对严谨性要求非常高，算法绝对不能出现报错行为；
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// ArrTraverse(arr)

function Node(value, next = null) {
  this.value = value;
  this.next = next;
};

const d = new Node(4);
const c = new Node(3, d);
const b = new Node(2, c);
const a = new Node(1, b);

// 循环的方式遍历
function linkTraverse(root) {
  let temp = root;
  while (true) {

    if (temp !== null) {
      console.log(temp.value);
    } else {
      break;
    };

    temp = temp.next;
  }
}

// 递归方式的遍历
function linkTraverse1(root) {
  if (root == null) return;
  console.log(root.value);
  linkTraverse1(root.next);
}

// linkTraverse1(a)

// 数组的递归遍历
function ArrTraverse1(arr, i) { // 数组 开始遍历位置的索引
  if (arr[i] == null) return;
  console.log(arr[i]);
  ArrTraverse1(arr, i + 1);
}
// ArrTraverse1(arr, 0)

// 链表的逆置
function reversal (root) {
  
}