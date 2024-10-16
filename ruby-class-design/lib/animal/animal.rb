class Animal
  def initialize(name, sound, satisfaction_repeats, dissatisfaction_repeats)
    @name = name
    @sound = sound
    @satisfaction_repeats = satisfaction_repeats
    @dissatisfaction_repeats = dissatisfaction_repeats
  end

  def eat(food)
    if food.likes?(self)
      make_noise(@satisfaction_repeats)
    else
      make_noise(@dissatisfaction_repeats)
    end
  end

  private

  def make_noise(times)
    times.times { puts @sound }
  end
end
