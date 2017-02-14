class Log < ApplicationRecord
  has_many :reviews, dependent: :destroy

  def average_rating
    ratings = reviews.pluck(:rating)
    ratings.reduce(:+) / ratings.size.to_f
  end
end
