
class Manager < Employee
  def initialize(name, title, salary, boss)
    super(name, title, salary, boss) # manager might have a higher level manager
    @employees = []
  end

  def bonus(multiplier)
    sum = 0
    employees.each {|employee| sum += employee.salary}
    sum * multiplier
  end
end
