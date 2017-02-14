class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :log, null: false
      t.integer :rating, null: false
      t.text :body

      t.timestamps
    end
  end
end
