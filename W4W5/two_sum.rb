
def brute_force(arr, target) # O(n^2)
  arr.each_with_index do |ele1, idx1|
    arr.each_with_index do |ele2, idx2|
      return true if ele1 + ele2 == target && idx2 > idx1
    end
  end
  false
end

def okay_two_sum?(arr, target)
  sorted_arr = arr.sort

  sorted_arr.each do |ele| # [0, 1, 5, 7] 6?
    guess = target - ele # 5 = 10 - 5
    next if guess == ele
    return true if bsearch(sorted_arr, guess)
  end
  false
end

def bsearch(arr, target)
  return nil if arr.length < 1
  mid = arr.length/2
  return mid if target == arr[mid]

  if arr[mid] > target
    bsearch(arr.take(mid), target)
  else
    search_val = bsearch(arr.drop(mid+1), target)
    return nil if search_val.nil?
    return search_val + mid + 1
  end
end

# arr = [0, 1, 5, 7]
# p okay_two_sum?(arr, 6)
# p okay_two_sum?(arr, 10)

def elegant_two_sum?(arr, target)
  check_pairs_hash = {}
  arr.each do |ele| 
    guess = target - ele
    return true if check_pairs_hash.has_key?(guess)
    check_pairs_hash[ele] = guess
  end 
  false
end

arr = [0, 1, 5, 7]
p elegant_two_sum?(arr, 6)
p elegant_two_sum?(arr, 10)
