class CreateEasterEgg < ActiveRecord::Migration[5.0]
  def change
    create_table :easter_eggs do |t|
      t.string :title, null: false
      t.string :description
    end
  end
end
