
def naive(arr, w) # [1, 2, 3, 5] 3
  current_max_range = nil

  (0...arr.length).each do |i|
    window = arr[i...i+w]
    next if window.length != w
    if current_max_range.nil? || window.max - window.min > current_max_range
      current_max_range = window.max - window.min
    end
  end
  current_max_range
end

# p naive([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# p naive([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# p naive([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# p naive([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8


class MyQueue

  def initialize
    @underlying_array = []
  end

  def enqueue(ele)
    @underlying_array << ele
    ele
  end

  def dequeue
    @underlying_array.shift
  end

  def peek
    @underlying_array.first
  end

  def size
    @underlying_array.length
  end

  def empty?
    size == 0
  end

end

class MyStack

  

end