
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


def max_sub_sum(nums)
  subs = []
  (0...nums.length).each do |start_i|
    (start_i...nums.length).each do |end_i|
      subs << nums[start_i..end_i]
    end 
  end 
  subs.inject{|acc, sub| acc.sum > sub.sum ? acc : acc = sub}.sum
end

# list = [-5, -1, -3]
# p max_sub_sum(list)

def max_sub_sum_faster(nums)
  max = nil
  (0...nums.length).each do |i|
end


# if num[i..-i -1].sum <= nums[i..-1].sum ? current_sum = num[i..-i -1].sum
# if 
# nums[i..-i -1] 
# nums[i..-1] 
# nums[0..-i - 1] 