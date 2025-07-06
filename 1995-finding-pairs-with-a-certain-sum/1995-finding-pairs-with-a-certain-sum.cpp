class FindSumPairs {
private:
    vector<int> nums1;
    vector<int> nums2;
    unordered_map<int, int> num2_count;

public:
    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        this->nums1 = nums1;
        this->nums2 = nums2;
        for (int num : nums2) {
            num2_count[num]++;
        }
    }

    void add(int index, int val) {
        num2_count[nums2[index]]--;
        nums2[index] += val;
        num2_count[nums2[index]]++;
    }

    int count(int tot) {
        int res = 0;
        for (int num : nums1) {
            if (num2_count.count(tot - num)) {
                res += num2_count[tot - num];
            }
        }
        return res;
    }
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs* obj = new FindSumPairs(nums1, nums2);
 * obj->add(index, val);
 * int param_2 = obj->count(tot);
 */