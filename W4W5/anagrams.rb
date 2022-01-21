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