require_relative "employee"

class Manager < Employee
  attr_accessor :employees

  def initialize(name, title, salary, boss)
    super(name, title, salary, boss) # manager might have a higher level manager
    @employees = []
  end

  def bonus(multiplier)
    self.total * multiplier
  end

  # employees are instances
# [(Ned, 1,000,000, Founder, nil, employees= Darren), 
# (Darren	$78,000	TA Manager	Ned, employess= Shawna, David), 
# (Shawna	$12,000	TA	Darren, employees=nil),
# (David	$10,000	TA	Darren, employees=nil)]

  def total
    sum = 0
    
    employees.each do |employee| # (Ned, 1,000,000, Founder, nil)
      # if employee.employees.nil? || employee.employees.empty?
      if employee.is_a?(Employee)
        sum += employee.salary
      else
        sum += employee.salary
        sum += employee.total
      end
    end
    
    sum 
  end
end

# queue = employees.dup

# until queue.empty?
#   current_employee = queue.pop