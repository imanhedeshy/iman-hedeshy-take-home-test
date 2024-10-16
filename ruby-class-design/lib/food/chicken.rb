require_relative 'food'

class Chicken < Food
  def initialize
    super('Chicken')
  end

  def likes?(animal)
    animal.is_a?(Cat) || animal.is_a?(Dog)
  end
end
