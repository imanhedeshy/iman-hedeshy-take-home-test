require_relative 'food'

class DogFood < Food
  def initialize
    super('DogFood')
  end

  def likes?(animal)
    animal.is_a?(Dog)
  end
end
