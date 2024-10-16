require_relative 'food'

class Lemon < Food
  def initialize
    super('Lemon')
  end

  def likes?(_animal)
    false
  end
end
