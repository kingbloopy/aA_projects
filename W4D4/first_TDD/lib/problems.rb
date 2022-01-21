def remove_dups(arr)
    arr.uniq
end

class Array
    def two_sum
        sum = []
        (0...self.length-1).each do |i|
            (i+1...self.length).each do |j|
                if self[i] + self[j] == 0
                    sum << [i, j]
                end
            end
        end
        sum
    end
end

def my_transpose(arr)
    arr.transpose
end

def stock_picker(arr)
    sorted = arr.sort
    pair = [sorted[0], sorted[-1]]
end