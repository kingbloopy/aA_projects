
def my_min(integers) # O(n^2)
  min = integers.first
  (0...integers.length).each do |idx1|
    (idx1+1...integers.length).each do |idx2|
      if integers[idx1] < integers[idx2] && integers[idx1] < min
        min = integers[idx1]
      end
      if integers[idx1] > integers[idx2] && integers[idx2] < min
        min = integers[idx2]
      end
    end
  end
  min
end

def my_min_faster(integers) # O(n)
  integers.inject {|acc, ele| ele < acc ? acc = ele : acc}
end

