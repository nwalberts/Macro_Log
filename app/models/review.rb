class Review < ApplicationRecord
  belongs_to :log

  validates :log, presence: true
  validates :rating, presence: true
end
