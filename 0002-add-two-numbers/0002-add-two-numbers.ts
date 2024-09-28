function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let s1 = '', s2 = '';
    let tmp1 = l1;
    while (tmp1) {
        s1 = tmp1.val + s1; // Prepend to avoid reversal later
        tmp1 = tmp1.next;
    }
    let tmp2 = l2;
    while (tmp2) {
        s2 = tmp2.val + s2; // Prepend to avoid reversal later
        tmp2 = tmp2.next;
    }

    let sum: bigint = BigInt(s1) + BigInt(s2);
    let sumStr = sum.toString();

    let dummyHead = new ListNode(0);
    let current = dummyHead;

    for (let i = sumStr.length - 1; i >= 0; i--) {
        current.next = new ListNode(parseInt(sumStr[i]));
        current = current.next;
    }

    return dummyHead.next;
}