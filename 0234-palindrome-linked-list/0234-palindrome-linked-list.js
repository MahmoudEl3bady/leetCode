const isPalindrome = function(head) {
    // Function to reverse the linked list from the given node
    const reverseList = function(node) {
        let prev = null;
        let curr = node;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    };

    // Find the middle of the linked list using slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list starting from slow
    let reversed = reverseList(slow);

    // Compare the first half of the original list with the reversed second half
    let firstHalf = head;
    while (reversed) {
        if (firstHalf.val !== reversed.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        reversed = reversed.next;
    }
    return true;
};
