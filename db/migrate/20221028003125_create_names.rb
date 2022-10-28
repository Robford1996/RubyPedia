class CreateNames < ActiveRecord::Migration[7.0]
  def change
    create_table :names do |t|
      t.string :birthday
      t.string :age
      t.string :work

      t.timestamps
    end
  end
end
