/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 if(헤드가 없면)
 *     this.val = val;
 *     this.next = this.next.next;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};