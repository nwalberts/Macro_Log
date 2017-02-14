class LogSerializer < ActiveModel::Serializer
  attributes :id,
  :title,
  :body,
  :average_rating
  # ,:reviews

  # the below uses the review serializer unlike line 7 which gives all the info
  has_many :reviews
end
