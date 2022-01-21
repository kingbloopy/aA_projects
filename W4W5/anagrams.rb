def first_anagram?(str1, str2) 
  num = factorial(str1.length)
  possible_anagrams = []

  until possible_anagrams.length == num
    array_chars = str1.chars.shuffle
    possible_anagrams << array_chars.join("") if !possible_anagrams.include?(array_chars.join(""))
  end 

  possible_anagrams.include?(str2)
end

def factorial(num)
  return 1 if num <= 1
  num * factorial(num - 1)
end

p first_anagram?("gizmo", "sally")    #=> false
p first_anagram?("elvis", "lives")    #=> true


def second_anagram(str1, str2)
  chars = str2.chars
  str1.each_char do |char|
    d_idx = chars.index(char)
    if !d_idx.nil?
      chars.delete_at(d_idx)
    end
  end
  chars.empty?
end


p second_anagram("gizmo", "sally")    #=> false
p second_anagram("elvis", "lives")    #=> true
