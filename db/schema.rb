# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_01_224221) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.text "comment"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.bigint "vinyl_id", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
    t.index ["vinyl_id"], name: "index_reviews_on_vinyl_id"
  end

  create_table "reviews_vinyls", id: false, force: :cascade do |t|
    t.bigint "review_id", null: false
    t.bigint "vinyl_id", null: false
    t.index ["review_id", "vinyl_id"], name: "index_reviews_vinyls_on_review_id_and_vinyl_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vinyls", force: :cascade do |t|
    t.string "title"
    t.integer "price"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
    t.string "artist"
    t.text "genre", default: [], array: true
    t.bigint "user_id"
    t.index ["user_id"], name: "index_vinyls_on_user_id"
  end

  add_foreign_key "reviews", "users"
  add_foreign_key "reviews", "vinyls"
  add_foreign_key "vinyls", "users"
end
