func maxDifference(s string) int {
	c := make(map[rune]int)
	for _, ch := range s {
		c[ch]++
	}
	maxOdd, minEven := 1, len(s)
	for _, value := range c {
		if value%2 == 1 {
			maxOdd = max(maxOdd, value)
		} else {
			minEven = min(minEven, value)
		}
	}
	return maxOdd - minEven
}